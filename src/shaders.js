const vertex = `#version 300 es
layout (location = 0) in vec4 aPosition;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in mat4 aMvpMatrix;
layout (location = 6) in mat4 aNormalMatrix;
layout (location = 10) in vec4 aColor;

out vec4 vColor;
out vec3 vLighting;

void main() {
	gl_Position = aMvpMatrix * aPosition;
	vColor = aColor;

	// Apply lighting effect
	highp vec3 ambientLight = vec3(0.7, 0.7, 0.7);
	highp vec3 directionalLightColor = vec3(0.3, 0.3, 0.3);

	highp vec3 directionalVector = normalize(-vec3(-0.7, +0.1, -0.6));
	// highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));
	
	highp vec4 transformedNormal = aNormalMatrix * vec4(aNormal, 1.0);

	highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
	vLighting = ambientLight + (directionalLightColor * directional);

}
`;


const fragment = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec3 vLighting;

out vec4 oColor;

void main() {
	oColor = vec4(vColor.rgb * vLighting, vColor.a);
}
`;

export default {
	cuboid: { vertex, fragment }
};
