import {compileShaders} from './compile-shaders.js';
import shaders from './shaders.js';
import {mat4} from 'gl-matrix';


let canvas, gl, programs, vao, viewMatrix, projectionMatrix;


export function setViewMatrix(m) {
	viewMatrix = m;
}
export function setProjectionMatrix(m) {
    projectionMatrix = m;
}


export function initCuboidRenderer() {

	canvas = document.querySelector('.game-canvas');

	gl = canvas.getContext('webgl2', {
		preserveDrawingBuffer: true,
	});

	// programs <- {cuboid: (cuboid shader) }
	programs = compileShaders(gl, shaders);

	// cuboid
	let vertices = [
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
	];
	let indices = [
		0,  1,  2,      0,  2,  3,    // front
		4,  5,  6,      4,  6,  7,    // back
		8,  9,  10,     8,  10, 11,   // top
		12, 13, 14,     12, 14, 15,   // bottom
		16, 17, 18,     16, 18, 19,   // right
		20, 21, 22,     20, 22, 23,   // left
	];

	gl.clearColor(15/255, 16/255, 22/255, 1.0);  // Clear to dark gray  // background
	gl.clearDepth(1.0);                          // Clear everything
	gl.enable(gl.DEPTH_TEST);                    // Enable depth testing
	gl.depthFunc(gl.LEQUAL);                     // Near things obscure far things
	gl.enable(gl.CULL_FACE);                     // Don't draw back faces (effeciency)

    gl.enable(gl.BLEND);                         // enable alpha
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	// TODO no idea what this does
	vao = gl.createVertexArray();
	gl.bindVertexArray(vao);

	// push vertices to GPU
	let vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	// push indices to GPU
	let indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

	// aPosition: enable and layout
	gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);              // aPosition

	// aNormal: enable and layout
	gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);             // aNormal

    // aCubPos, aCubSize, aCubPivot, aCubRot, aColor: enable and make instanced
	for (var i = 2; i <= 6; i++) {
		gl.enableVertexAttribArray(i);
		gl.vertexAttribDivisor(i, 1);
	}
}

// cuboids: {
//     x, y, z,    // position
//     sx, sy, sz, // size
//     r, g, b, a, // color
//     rot,        // rotation around z axis
//     px, py, pz  // pivot
// }[]
export function renderCuboids(cuboids) {

    let vpMatrix = mat4.create();
    mat4.mul(vpMatrix, projectionMatrix, viewMatrix);
    
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// TODO no idea what this does
	gl.bindVertexArray(vao);

	gl.useProgram(programs.cuboid.program);

    // set viewProjection matrix
    gl.uniformMatrix4fv(programs.cuboid.uniforms.uVpMatrix, false, vpMatrix);

    // generate cuboids data buffer and push it
	let cuboidsData = [];
 
	for (let cub of cuboids) {
        cuboidsData.push(cub.x, cub.y, cub.z,
                         cub.sx, cub.sy, cub.sz,
                         cub.px, cub.py, cub.pz,
                         cub.rot,
                         cub.r, cub.g, cub.b, cub.a);
	}

	let cuboidsDataBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cuboidsDataBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cuboidsData), gl.DYNAMIC_DRAW);

    // aCubPos, aCubSize, aCubPivot, aCubRot, aColor: layout
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 56, 0);              // aCubPos
    gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 56, 4 * 3);          // aCubSize
    gl.vertexAttribPointer(4, 3, gl.FLOAT, false, 56, 4 * (3+3));      // aCubPivot
    gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 56, 4 * (3+3+3));    // aCubRot
	gl.vertexAttribPointer(6, 4, gl.FLOAT, false, 56, 4 * (3+3+3+1));  // aColor

	gl.drawElementsInstanced(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0, cuboids.length);
}

// Resize canvas and set viewport if client size changed
export function adjustCanvasSize() {
    let width = Math.round(canvas.clientWidth  * window.devicePixelRatio);
    let height = Math.round(canvas.clientHeight * window.devicePixelRatio);
	if (canvas.width !== width || canvas.height !== height)
	{
		canvas.width  = width;
		canvas.height = height;
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	}
}
