import {compileShaders} from './compile-shaders.js';
import {canvas} from './html-references.js';
import shaders from './shaders.js';
import {mat4} from 'gl-matrix';

// cuboid
const vertexBuffer = new Float32Array([
     // aPosition                 // aNormal
     // Front face
    -1.0, -1.0,  1.0, /**/  0.0,  0.0,  1.0,
     1.0, -1.0,  1.0, /**/  0.0,  0.0,  1.0,
     1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
    -1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,

     // Back face
    -1.0, -1.0, -1.0, /**/  0.0,  0.0, -1.0,
    -1.0,  1.0, -1.0, /**/  0.0,  0.0, -1.0,
     1.0,  1.0, -1.0, /**/  0.0,  0.0, -1.0,
     1.0, -1.0, -1.0, /**/  0.0,  0.0, -1.0,

     // Top face
    -1.0,  1.0, -1.0, /**/  0.0,  1.0,  0.0,
    -1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
     1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
     1.0,  1.0, -1.0, /**/  0.0,  1.0,  0.0,

     // Bottom face
    -1.0, -1.0, -1.0, /**/  0.0, -1.0,  0.0,
     1.0, -1.0, -1.0, /**/  0.0, -1.0,  0.0,
     1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,
    -1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,

     // Right face
     1.0, -1.0, -1.0, /**/  1.0,  0.0,  0.0,
     1.0,  1.0, -1.0, /**/  1.0,  0.0,  0.0,
     1.0,  1.0,  1.0, /**/  1.0,  0.0,  0.0,
     1.0, -1.0,  1.0, /**/  1.0,  0.0,  0.0,

     // Left face
    -1.0, -1.0, -1.0, /**/ -1.0,  0.0,  0.0,
    -1.0, -1.0,  1.0, /**/ -1.0,  0.0,  0.0,
    -1.0,  1.0,  1.0, /**/ -1.0,  0.0,  0.0,
    -1.0,  1.0, -1.0, /**/ -1.0,  0.0,  0.0,
]);

const indexBuffer = new Uint16Array([
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
]);

let gl, cuboidShaders, viewMatrix, projectionMatrix;

const MAX_CUBOID_COUNT = 6000;
const CUBOID_DATA_LENGTH = 13;

const cuboidBuffer = new Float32Array(MAX_CUBOID_COUNT * CUBOID_DATA_LENGTH);
let cuboidCount = 0;

export function pushCuboid2(cub) {
    pushCuboid(cub.x, cub.y, cub.z, cub.sx, cub.sy, cub.sz, cub.px, cub.py, cub.rot, cub.r, cub.g, cub.b, cub.a);
}

export function pushCuboid(x, y, z, sx, sy, sz, px, py, rot, r, g, b, a) {
    if (cuboidCount == MAX_CUBOID_COUNT) return;

    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 0]  = x;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 1]  = y;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 2]  = z;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 3]  = sx;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 4]  = sy;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 5]  = sz;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 6]  = px;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 7]  = py;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 8]  = rot;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 9]  = r;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 10] = g;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 11] = b;
    cuboidBuffer[cuboidCount * CUBOID_DATA_LENGTH + 12] = a;
    cuboidCount++;
}

export function setViewMatrix(m) {
	viewMatrix = m;
}
export function setProjectionMatrix(m) {
    projectionMatrix = m;
}


export function initCuboidRenderer() {
	gl = canvas.getContext('webgl2', {  // TODO research
		preserveDrawingBuffer: false,
        desynchronized: true,
        // antialias: false,
	});

	// cuboidShaders <- { program, attributes, uniforms }
	cuboidShaders = compileShaders(gl, shaders).cuboid;

	gl.clearColor(15/255, 16/255, 22/255, 1.0);  // Clear to dark gray  // background
	gl.clearDepth(1.0);                          // Clear everything
	gl.enable(gl.DEPTH_TEST);                    // Enable depth testing
	gl.depthFunc(gl.LEQUAL);                     // Near things obscure far things
	gl.enable(gl.CULL_FACE);                     // Don't draw back faces (effeciency)
    gl.enable(gl.BLEND);                         // enable alpha
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	gl.bindVertexArray(gl.createVertexArray());

	// push vertices to GPU
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ARRAY_BUFFER, vertexBuffer, gl.STATIC_DRAW);

	// push indices to GPU
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexBuffer, gl.STATIC_DRAW);

    gl.vertexAttribPointer(
        cuboidShaders.attributes['aPosition'],  // vertex attribute index
        3,                                      // number of components in vertex attribute
        gl.FLOAT,                               // (4 bytes per value)
        false,                                  // normalize
        (3+3)*4,                                // offset in bytes between the beginning of consecutive vertex attributes
        0,                                      // offset in bytes of the first component in the vertex attribute array
    );

    gl.vertexAttribPointer(
        cuboidShaders.attributes['aNormal'],    // vertex attribute index
        3,                                      // number of components in vertex attribute
        gl.FLOAT,                               // (4 bytes per value)
        false,                                  // normalize
        (3+3)*4,                                // offset in bytes between the beginning of consecutive vertex attributes
        3*4,                                    // offset in bytes of the first component in the vertex attribute array
    );

	gl.enableVertexAttribArray(cuboidShaders.attributes['aNormal']);
	gl.enableVertexAttribArray(cuboidShaders.attributes['aPosition']);
    gl.enableVertexAttribArray(cuboidShaders.attributes['aCubPos']);
    gl.enableVertexAttribArray(cuboidShaders.attributes['aCubSize']);
    gl.enableVertexAttribArray(cuboidShaders.attributes['aCubPivot']);
    gl.enableVertexAttribArray(cuboidShaders.attributes['aCubRot']);
    gl.enableVertexAttribArray(cuboidShaders.attributes['aColor']);

    // make attributes instanced
    // 1 <- divisor: number of instances that will pass between updates of the generic attribute
    gl.vertexAttribDivisor(cuboidShaders.attributes['aCubPos'], 1);
    gl.vertexAttribDivisor(cuboidShaders.attributes['aCubSize'], 1);
    gl.vertexAttribDivisor(cuboidShaders.attributes['aCubPivot'], 1);
    gl.vertexAttribDivisor(cuboidShaders.attributes['aCubRot'], 1);
    gl.vertexAttribDivisor(cuboidShaders.attributes['aColor'], 1);
}

export function renderCuboids() {

    let vpMatrix = mat4.create();
    mat4.mul(vpMatrix, projectionMatrix, viewMatrix);
    
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.useProgram(cuboidShaders.program);

    // set viewProjection matrix
    gl.uniformMatrix4fv(cuboidShaders.uniforms.uVpMatrix, false, vpMatrix);

	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ARRAY_BUFFER, cuboidBuffer, gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(
        cuboidShaders.attributes['aCubPos'],
        3,                       // number of components per vertex attribute
        gl.FLOAT,                // (4 bytes per value)
        false,                   // normalize
        CUBOID_DATA_LENGTH * 4,  // offset in bytes between the beginning of consecutive vertex attributes
        0,                       // offset in bytes of the first component in the vertex attribute array
    );
    gl.vertexAttribPointer(
        cuboidShaders.attributes['aCubSize'],
        3,                       // number of components per vertex attribute
        gl.FLOAT,                // (4 bytes per value)
        false,                   // normalize
        CUBOID_DATA_LENGTH * 4,  // offset in bytes between the beginning of consecutive vertex attributes
        3 * 4,                   // offset in bytes of the first component in the vertex attribute array
    );
    gl.vertexAttribPointer(
        cuboidShaders.attributes['aCubPivot'],
        2,                       // number of components per vertex attribute
        gl.FLOAT,                // (4 bytes per value)
        false,                   // normalize
        CUBOID_DATA_LENGTH * 4,  // offset in bytes between the beginning of consecutive vertex attributes
        (3+3) * 4,               // offset in bytes of the first component in the vertex attribute array
    );
    gl.vertexAttribPointer(
        cuboidShaders.attributes['aCubRot'],
        1,                       // number of components per vertex attribute
        gl.FLOAT,                // (4 bytes per value)
        false,                   // normalize
        CUBOID_DATA_LENGTH * 4,  // offset in bytes between the beginning of consecutive vertex attributes
        (3+3+2) * 4,             // offset in bytes of the first component in the vertex attribute array
    );
	gl.vertexAttribPointer(
        cuboidShaders.attributes['aColor'],
        4,                       // number of components per vertex attribute
        gl.FLOAT,                // (4 bytes per value)
        false,                   // normalize
        CUBOID_DATA_LENGTH * 4,  // offset in bytes between the beginning of consecutive vertex attributes
        (3+3+2+1) * 4,           // offset in bytes of the first component in the vertex attribute array
    );

	gl.drawElementsInstanced(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0, cuboidCount);

    cuboidCount = 0;
}

// Resize canvas and set viewport if client size changed
export function adjustCanvasSize() {
    let width  = Math.round(canvas.clientWidth  * window.devicePixelRatio);
    let height = Math.round(canvas.clientHeight * window.devicePixelRatio);
	if (canvas.width !== width || canvas.height !== height)
	{
		canvas.width  = width;
		canvas.height = height;
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	}
}
