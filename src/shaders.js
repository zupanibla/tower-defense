const vertex = `#version 300 es
layout (location = 0) in vec3 aPosition;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec3 aCubPos;
layout (location = 3) in vec3 aCubSize;
layout (location = 4) in vec3 aCubPivot;
layout (location = 5) in float aCubRot;
layout (location = 6) in vec4 aColor;

uniform mat4 uVpMatrix;

out vec4 vColor;

void main() {  // TODO inspect why you need /2 at aCubSize and why pivots are negative
    highp mat4 modelMatrix = mat4(
        aCubSize.x/2.0 *  cos(aCubRot), aCubSize.x/2.0 * sin(aCubRot), 0.0, 0.0,
        aCubSize.y/2.0 * -sin(aCubRot), aCubSize.y/2.0 * cos(aCubRot), 0.0, 0.0,
        0.0, 0.0, aCubSize.z/2.0, 0.0,
        aCubPos.x - aCubPivot.x * cos(aCubRot) + aCubPivot.y * sin(aCubRot),
        aCubPos.y - aCubPivot.x * sin(aCubRot) - aCubPivot.y * cos(aCubRot),
        aCubPos.z,
        1.0
    );
    
    gl_Position = uVpMatrix * modelMatrix * vec4(aPosition, 1.0);


    highp mat4 normalMatrix = mat4(
        cos(aCubRot), -sin(aCubRot), 0.0, 0.0,
        sin(aCubRot),  cos(aCubRot), 0.0, 0.0,
        0.0,           0.0,          1.0, 0.0,
        0.0,           0.0,          0.0, 1.0
    );
    highp vec4  normal                    = normalMatrix * vec4(aNormal, 1.0);

    highp vec3 ambientLight               = vec3(0.7, 0.7, 0.7);
    highp vec3 directionalLight           = vec3(0.3, 0.3, 0.3);

    highp vec3  lightDirection            = normalize(-vec3(-0.7, +0.1, -0.6));
    highp float directionalLightIntensity = max(dot(normal.xyz, lightDirection), 0.0);

    vColor = vec4(aColor.rgb * (ambientLight + (directionalLight * directionalLightIntensity)), aColor.a);
}
`;


const fragment = `#version 300 es
precision mediump float;

in  vec4 vColor;
out vec4 oColor;

void main() {
    oColor = vColor;
}
`;

export default {
    cuboid: { vertex, fragment }
};
