/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! namespace exports */
/*! export ARRAY_TYPE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export EPSILON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RANDOM [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setMatrixArrayType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRadian [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => /* binding */ EPSILON,
/* harmony export */   "ARRAY_TYPE": () => /* binding */ ARRAY_TYPE,
/* harmony export */   "RANDOM": () => /* binding */ RANDOM,
/* harmony export */   "setMatrixArrayType": () => /* binding */ setMatrixArrayType,
/* harmony export */   "toRadian": () => /* binding */ toRadian,
/* harmony export */   "equals": () => /* binding */ equals
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export adjoint [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clone [provided] [no usage info] [missing usage info prevents renaming] */
/*! export copy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! export determinant [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export exactEquals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export frob [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromQuat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromQuat2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslationScale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslationScaleOrigin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromScaling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromXRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromYRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromZRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export frustum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getScaling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export identity [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invert [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lookAt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mul [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiplyScalar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiplyScalarAndAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ortho [provided] [no usage info] [missing usage info prevents renaming] */
/*! export perspective [provided] [no usage info] [missing usage info prevents renaming] */
/*! export perspectiveFromFieldOfView [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateZ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export str [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! export targetTo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export translate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transpose [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "transpose": () => /* binding */ transpose,
/* harmony export */   "invert": () => /* binding */ invert,
/* harmony export */   "adjoint": () => /* binding */ adjoint,
/* harmony export */   "determinant": () => /* binding */ determinant,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "fromTranslation": () => /* binding */ fromTranslation,
/* harmony export */   "fromScaling": () => /* binding */ fromScaling,
/* harmony export */   "fromRotation": () => /* binding */ fromRotation,
/* harmony export */   "fromXRotation": () => /* binding */ fromXRotation,
/* harmony export */   "fromYRotation": () => /* binding */ fromYRotation,
/* harmony export */   "fromZRotation": () => /* binding */ fromZRotation,
/* harmony export */   "fromRotationTranslation": () => /* binding */ fromRotationTranslation,
/* harmony export */   "fromQuat2": () => /* binding */ fromQuat2,
/* harmony export */   "getTranslation": () => /* binding */ getTranslation,
/* harmony export */   "getScaling": () => /* binding */ getScaling,
/* harmony export */   "getRotation": () => /* binding */ getRotation,
/* harmony export */   "fromRotationTranslationScale": () => /* binding */ fromRotationTranslationScale,
/* harmony export */   "fromRotationTranslationScaleOrigin": () => /* binding */ fromRotationTranslationScaleOrigin,
/* harmony export */   "fromQuat": () => /* binding */ fromQuat,
/* harmony export */   "frustum": () => /* binding */ frustum,
/* harmony export */   "perspective": () => /* binding */ perspective,
/* harmony export */   "perspectiveFromFieldOfView": () => /* binding */ perspectiveFromFieldOfView,
/* harmony export */   "ortho": () => /* binding */ ortho,
/* harmony export */   "lookAt": () => /* binding */ lookAt,
/* harmony export */   "targetTo": () => /* binding */ targetTo,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "frob": () => /* binding */ frob,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiplyScalar": () => /* binding */ multiplyScalar,
/* harmony export */   "multiplyScalarAndAdd": () => /* binding */ multiplyScalarAndAdd,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "sub": () => /* binding */ sub
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/assets/balistic-turret.json":
/*!*****************************************!*\
  !*** ./src/assets/balistic-turret.json ***!
  \*****************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"stand\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":0,\"sx\":256,\"sy\":256,\"sz\":50,\"r\":222,\"g\":222,\"b\":222},{\"name\":\"barrel\",\"mirror\":false,\"x\":0,\"y\":-64,\"z\":148,\"sx\":35,\"sy\":64,\"sz\":12,\"r\":38,\"g\":38,\"b\":38},{\"name\":\"barrel\",\"mirror\":false,\"x\":0,\"y\":-64,\"z\":108,\"sx\":35,\"sy\":64,\"sz\":12,\"r\":38,\"g\":38,\"b\":38},{\"name\":\"barrel\",\"mirror\":true,\"x\":-20,\"y\":-64,\"z\":128,\"sx\":12,\"sy\":64,\"sz\":35,\"r\":38,\"g\":38,\"b\":38},{\"name\":\"body\",\"mirror\":false,\"x\":0,\"y\":20,\"z\":128,\"sx\":80,\"sy\":148,\"sz\":80,\"r\":223,\"g\":73,\"b\":73}]");

/***/ }),

/***/ "./src/assets/blue-portal.json":
/*!*************************************!*\
  !*** ./src/assets/blue-portal.json ***!
  \*************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 32 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 33 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 34 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 35 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 36 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 37 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 38 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 39 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 40 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 41 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 42 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 43 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 44 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 45 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 46 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 47 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 48 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 49 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 50 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 51 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 52 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 53 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 54 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 55 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 56 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 57 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 58 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 59 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 60 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 61 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 62 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 63 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 64 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 65 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 66 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 67 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 68 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 69 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 70 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 71 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 72 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 73 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 74 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 75 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 76 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 77 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"faking kvader\",\"mirror\":true,\"x\":116,\"y\":0,\"z\":40,\"sx\":40,\"sy\":40,\"sz\":40,\"r\":0,\"g\":35,\"b\":92},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":116,\"y\":0,\"z\":350,\"sx\":40,\"sy\":40,\"sz\":40,\"r\":0,\"g\":35,\"b\":92},{\"name\":\"left_right_base\",\"mirror\":true,\"x\":-126,\"y\":0,\"z\":195.5,\"sx\":60,\"sy\":60,\"sz\":271,\"r\":1,\"g\":59,\"b\":152},{\"name\":\"down_base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":30,\"sx\":192,\"sy\":60,\"sz\":60,\"r\":1,\"g\":59,\"b\":152},{\"name\":\"up_base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":361,\"sx\":192,\"sy\":60,\"sz\":60,\"r\":1,\"g\":59,\"b\":152},{\"name\":\"plasma\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":194.9375,\"sx\":192,\"sy\":4,\"sz\":269.875,\"r\":77,\"g\":145,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-8,\"y\":2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-52,\"y\":2,\"z\":300,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-64,\"y\":2,\"z\":176,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":24,\"y\":2,\"z\":248,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-4,\"y\":2,\"z\":168,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":264,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":312,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-44,\"y\":2,\"z\":152,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":20,\"y\":2,\"z\":132,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":12,\"y\":2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":48,\"y\":2,\"z\":96,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":80,\"y\":2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-40,\"y\":2,\"z\":228,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":268,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":320,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":36,\"y\":2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":120,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-68,\"y\":2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":80,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-52,\"y\":2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":296,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-76,\"y\":2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-16,\"y\":2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":156,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-4,\"y\":2,\"z\":260,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":36,\"y\":2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-64,\"y\":2,\"z\":144,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":0,\"y\":2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":-32,\"y\":2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle\",\"mirror\":false,\"x\":24,\"y\":2,\"z\":72,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-8,\"y\":-2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-52,\"y\":-2,\"z\":300,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-64,\"y\":-2,\"z\":176,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":24,\"y\":-2,\"z\":248,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-4,\"y\":-2,\"z\":168,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":264,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":312,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-44,\"y\":-2,\"z\":152,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":20,\"y\":-2,\"z\":132,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":12,\"y\":-2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":48,\"y\":-2,\"z\":96,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":80,\"y\":-2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-40,\"y\":-2,\"z\":228,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":268,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":320,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":36,\"g\":120,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":36,\"y\":-2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":120,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-68,\"y\":-2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":80,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-52,\"y\":-2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":296,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-76,\"y\":-2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-16,\"y\":-2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":156,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-4,\"y\":-2,\"z\":260,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":36,\"y\":-2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-64,\"y\":-2,\"z\":144,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":0,\"y\":-2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-32,\"y\":-2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":24,\"y\":-2,\"z\":72,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":122,\"g\":173,\"b\":255}]");

/***/ }),

/***/ "./src/assets/butcher.json":
/*!*********************************!*\
  !*** ./src/assets/butcher.json ***!
  \*********************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-237.1428571428571,\"z\":342.8571428571428,\"sx\":2.857142857142857,\"sy\":5.714285714285714,\"sz\":74.28571428571428,\"r\":224,\"g\":224,\"b\":224},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-208.57142857142856,\"z\":377.1428571428571,\"sx\":2.857142857142857,\"sy\":74.28571428571428,\"sz\":5.714285714285714,\"r\":224,\"g\":224,\"b\":224},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-171.4285714285714,\"z\":342.8571428571428,\"sx\":2.857142857142857,\"sy\":5.714285714285714,\"sz\":74.28571428571428,\"r\":224,\"g\":224,\"b\":224},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-199.99999999999994,\"y\":-188.57142857142856,\"z\":271.4285714285714,\"sx\":2.857142857142857,\"sy\":171.4285714285714,\"sz\":8.571428571428571,\"r\":224,\"g\":224,\"b\":224},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":34.285714285714285,\"y\":-48.57142857142857,\"z\":482.8571428571428,\"sx\":2.857142857142857,\"sy\":28.571428571428573,\"sz\":22.857142857142858,\"r\":0,\"g\":0,\"b\":0},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":-48.57142857142857,\"z\":471.4285714285714,\"sx\":71.42857142857142,\"sy\":28.571428571428573,\"sz\":2.857142857142857,\"r\":0,\"g\":0,\"b\":0},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":85.7142857142857,\"y\":-128.57142857142856,\"z\":385.71428571428567,\"sx\":5.714285714285714,\"sy\":28.571428571428573,\"sz\":5.714285714285714,\"r\":180,\"g\":23,\"b\":25},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":-128.57142857142856,\"z\":257.1428571428571,\"sx\":5.714285714285714,\"sy\":28.571428571428573,\"sz\":28.571428571428573,\"r\":180,\"g\":23,\"b\":25},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":-128.57142857142856,\"z\":257.1428571428571,\"sx\":28.571428571428573,\"sy\":28.571428571428573,\"sz\":5.714285714285714,\"r\":180,\"g\":23,\"b\":25},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-199.99999999999994,\"y\":-188.57142857142856,\"z\":297.1428571428571,\"sx\":2.857142857142857,\"sy\":171.4285714285714,\"sz\":42.85714285714285,\"r\":166,\"g\":166,\"b\":166},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-245.7142857142857,\"z\":348.57142857142856,\"sx\":5.714285714285714,\"sy\":14.285714285714286,\"sz\":85.7142857142857,\"r\":166,\"g\":166,\"b\":166},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-208.57142857142856,\"z\":385.71428571428567,\"sx\":5.714285714285714,\"sy\":85.7142857142857,\"sz\":14.285714285714286,\"r\":166,\"g\":166,\"b\":166},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":199.99999999999994,\"y\":-162.85714285714286,\"z\":348.57142857142856,\"sx\":5.714285714285714,\"sy\":14.285714285714286,\"sz\":85.7142857142857,\"r\":166,\"g\":166,\"b\":166},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":199.99999999999994,\"y\":-94.28571428571428,\"z\":314.2857142857143,\"sx\":14.285714285714286,\"sy\":142.85714285714283,\"sz\":14.285714285714286,\"r\":140,\"g\":84,\"b\":38},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":211.42857142857142,\"y\":0,\"z\":314.2857142857143,\"sx\":57.142857142857146,\"sy\":57.142857142857146,\"sz\":57.142857142857146,\"r\":226,\"g\":195,\"b\":141},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":199.99999999999994,\"y\":0,\"z\":399.9999999999999,\"sx\":85.7142857142857,\"sy\":114.28571428571429,\"sz\":142.85714285714283,\"r\":226,\"g\":195,\"b\":141},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":28.571428571428573,\"y\":-57.142857142857146,\"z\":514.2857142857142,\"sx\":28.571428571428573,\"sy\":14.285714285714286,\"sz\":28.571428571428573,\"r\":247,\"g\":247,\"b\":247},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":28.571428571428573,\"y\":-60,\"z\":514.2857142857142,\"sx\":8.571428571428571,\"sy\":14.285714285714286,\"sz\":8.571428571428571,\"r\":69,\"g\":69,\"b\":69},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":485.71428571428567,\"sx\":114.28571428571429,\"sy\":114.28571428571429,\"sz\":114.28571428571429,\"r\":247,\"g\":215,\"b\":161},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":314.2857142857143,\"sx\":342.8571428571428,\"sy\":271.4285714285714,\"sz\":285.71428571428567,\"r\":247,\"g\":215,\"b\":161},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":71.42857142857142,\"y\":0,\"z\":142.85714285714283,\"sx\":114.28571428571429,\"sy\":114.28571428571429,\"sz\":171.4285714285714,\"r\":77,\"g\":48,\"b\":0},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":71.42857142857142,\"y\":0,\"z\":28.571428571428573,\"sx\":57.142857142857146,\"sy\":57.142857142857146,\"sz\":57.142857142857146,\"r\":247,\"g\":215,\"b\":161}]");

/***/ }),

/***/ "./src/assets/duck.json":
/*!******************************!*\
  !*** ./src/assets/duck.json ***!
  \******************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"feet\",\"mirror\":true,\"x\":-21.137614678899084,\"y\":-10.568807339449542,\"z\":1.761467889908257,\"sx\":28.18348623853211,\"sy\":52.8440366972477,\"sz\":7.045871559633028,\"r\":255,\"g\":130,\"b\":46},{\"name\":\"legs\",\"mirror\":true,\"x\":-21.137614678899084,\"y\":10.568807339449542,\"z\":36.99082568807339,\"sx\":10.568807339449542,\"sy\":10.568807339449542,\"sz\":66.93577981651376,\"r\":255,\"g\":130,\"b\":46},{\"name\":\"pupils\",\"mirror\":true,\"x\":-17.61467889908257,\"y\":-46.04477064220183,\"z\":139.1559633027523,\"sx\":8.807339449541285,\"sy\":17.61467889908257,\"sz\":8.807339449541285,\"r\":0,\"g\":0,\"b\":0},{\"name\":\"eyes\",\"mirror\":true,\"x\":-17.61467889908257,\"y\":-45.1640366972477,\"z\":139.1559633027523,\"sx\":17.61467889908257,\"sy\":17.61467889908257,\"sz\":17.61467889908257,\"r\":255,\"g\":255,\"b\":255},{\"name\":\"beak\",\"mirror\":false,\"x\":0,\"y\":-55.73284403669725,\"z\":107.44954128440367,\"sx\":80.39339449541283,\"sy\":72.71339449541284,\"sz\":17.61467889908257,\"r\":255,\"g\":130,\"b\":46},{\"name\":\"head\",\"mirror\":false,\"x\":0,\"y\":-20.256880733944957,\"z\":128.58715596330276,\"sx\":70.45871559633028,\"sy\":58.12844036697248,\"sz\":63.41284403669725,\"r\":232,\"g\":220,\"b\":59},{\"name\":\"body\",\"mirror\":false,\"x\":0,\"y\":12.25981651376147,\"z\":65.17431192660551,\"sx\":70.45871559633028,\"sy\":123.16183486238533,\"sz\":70.45871559633028,\"r\":232,\"g\":220,\"b\":59},{\"name\":\"wings\",\"mirror\":false,\"x\":0,\"y\":9.617614678899086,\"z\":65.17431192660551,\"sx\":116.25688073394495,\"sy\":62.77871559633027,\"sz\":45.79816513761468,\"r\":232,\"g\":220,\"b\":59}]");

/***/ }),

/***/ "./src/assets/flame-turret.json":
/*!**************************************!*\
  !*** ./src/assets/flame-turret.json ***!
  \**************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"igniter 3\",\"mirror\":false,\"x\":0,\"y\":-122.85714285714286,\"z\":131.42857142857142,\"sx\":5.714285714285714,\"sy\":5.714285714285714,\"sz\":5.714285714285714,\"r\":255,\"g\":0,\"b\":0},{\"name\":\"igniter 2\",\"mirror\":false,\"x\":0,\"y\":-122.85714285714286,\"z\":122.85714285714286,\"sx\":5.714285714285714,\"sy\":5.714285714285714,\"sz\":11.428571428571429,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"igniter 1\",\"mirror\":false,\"x\":0,\"y\":-97.14285714285714,\"z\":114.28571428571428,\"sx\":5.714285714285714,\"sy\":57.142857142857146,\"sz\":5.714285714285714,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"fuel pipe 2\",\"mirror\":false,\"x\":0,\"y\":97.14285714285714,\"z\":142.85714285714286,\"sx\":17.142857142857142,\"sy\":57.142857142857146,\"sz\":17.142857142857142,\"r\":255,\"g\":255,\"b\":0},{\"name\":\"fuel pipe 1\",\"mirror\":false,\"x\":0,\"y\":131.42857142857142,\"z\":129.64285714285714,\"sx\":17.142857142857142,\"sy\":17.142857142857142,\"sz\":43.57142857142857,\"r\":255,\"g\":255,\"b\":0},{\"name\":\"tank connector\",\"mirror\":false,\"x\":0,\"y\":131.42857142857142,\"z\":114.28571428571428,\"sx\":74.28571428571429,\"sy\":5.714285714285714,\"sz\":5.714285714285714,\"r\":255,\"g\":255,\"b\":0},{\"name\":\"tank pipe 2\",\"mirror\":false,\"x\":-34.285714285714285,\"y\":114.28571428571429,\"z\":114.28571428571428,\"sx\":5.714285714285714,\"sy\":28.571428571428573,\"sz\":5.714285714285714,\"r\":255,\"g\":255,\"b\":0},{\"name\":\"tank pipe 1\",\"mirror\":false,\"x\":34.285714285714285,\"y\":114.28571428571429,\"z\":114.28571428571428,\"sx\":5.714285714285714,\"sy\":28.571428571428573,\"sz\":5.714285714285714,\"r\":255,\"g\":255,\"b\":0},{\"name\":\"tank valve 2\",\"mirror\":false,\"x\":-34.285714285714285,\"y\":102.85714285714286,\"z\":114.28571428571428,\"sx\":17.142857142857142,\"sy\":5.714285714285714,\"sz\":17.142857142857142,\"r\":255,\"g\":0,\"b\":0},{\"name\":\"tank valve 1\",\"mirror\":false,\"x\":34.285714285714285,\"y\":102.85714285714286,\"z\":114.28571428571428,\"sx\":17.142857142857142,\"sy\":5.714285714285714,\"sz\":17.142857142857142,\"r\":255,\"g\":0,\"b\":0},{\"name\":\"tank nozzle 2\",\"mirror\":false,\"x\":-34.285714285714285,\"y\":97.14285714285714,\"z\":114.28571428571428,\"sx\":11.428571428571429,\"sy\":22.857142857142858,\"sz\":11.428571428571429,\"r\":128,\"g\":128,\"b\":128},{\"name\":\"tank nozzle 1\",\"mirror\":false,\"x\":34.285714285714285,\"y\":97.14285714285714,\"z\":114.28571428571428,\"sx\":11.428571428571429,\"sy\":22.857142857142858,\"sz\":11.428571428571429,\"r\":128,\"g\":128,\"b\":128},{\"name\":\"fuel tank 1\",\"mirror\":false,\"x\":34.285714285714285,\"y\":22.857142857142858,\"z\":114.28571428571428,\"sx\":40,\"sy\":148.57142857142858,\"sz\":34.285714285714285,\"r\":255,\"g\":103,\"b\":0},{\"name\":\"fuel tank 2\",\"mirror\":false,\"x\":-34.285714285714285,\"y\":22.857142857142858,\"z\":114.28571428571428,\"sx\":40,\"sy\":148.57142857142858,\"sz\":34.285714285714285,\"r\":255,\"g\":103,\"b\":0},{\"name\":\"nozzle 1\",\"mirror\":false,\"x\":-22.857142857142858,\"y\":-91.42857142857143,\"z\":142.85714285714286,\"sx\":5.714285714285714,\"sy\":45.714285714285715,\"sz\":40,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"nozzle 2\",\"mirror\":false,\"x\":22.857142857142858,\"y\":-91.42857142857143,\"z\":142.85714285714286,\"sx\":5.714285714285714,\"sy\":45.714285714285715,\"sz\":40,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"nozzle 3\",\"mirror\":false,\"x\":0,\"y\":-91.42857142857143,\"z\":160,\"sx\":45.714285714285715,\"sy\":45.714285714285715,\"sz\":5.714285714285714,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"nozzle 4\",\"mirror\":false,\"x\":0,\"y\":-91.42857142857143,\"z\":125.71428571428572,\"sx\":45.714285714285715,\"sy\":45.714285714285715,\"sz\":5.714285714285714,\"r\":40,\"g\":40,\"b\":40},{\"name\":\"body\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":142.85714285714286,\"sx\":62.857142857142854,\"sy\":142.85714285714286,\"sz\":57.142857142857146,\"r\":219,\"g\":219,\"b\":219},{\"name\":\"stand\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":0,\"sx\":256,\"sy\":256,\"sz\":50,\"r\":222,\"g\":222,\"b\":222}]");

/***/ }),

/***/ "./src/assets/floor.json":
/*!*******************************!*\
  !*** ./src/assets/floor.json ***!
  \*******************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-2,\"sx\":1000,\"sy\":1000,\"sz\":4,\"r\":217,\"g\":203,\"b\":150},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-28,\"y\":408,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":432,\"y\":-416,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-320,\"y\":-404,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-176,\"y\":-212,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-376,\"y\":-128,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":48,\"y\":-172,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":100,\"y\":-348,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":352,\"y\":-196,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":428,\"y\":108,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":356,\"y\":360,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":224,\"y\":-8,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":60,\"y\":160,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-192,\"y\":64,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":-332,\"y\":284,\"z\":-2,\"sx\":100,\"sy\":100,\"sz\":8,\"r\":180,\"g\":170,\"b\":131}]");

/***/ }),

/***/ "./src/assets/green-highlight.json":
/*!*****************************************!*\
  !*** ./src/assets/green-highlight.json ***!
  \*****************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"highlight\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-128,\"sx\":258,\"sy\":258,\"sz\":258,\"r\":45,\"g\":216,\"b\":88}]");

/***/ }),

/***/ "./src/assets/green-tile.json":
/*!************************************!*\
  !*** ./src/assets/green-tile.json ***!
  \************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"tile\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-4,\"sx\":256,\"sy\":256,\"sz\":8,\"r\":150,\"g\":228,\"b\":169}]");

/***/ }),

/***/ "./src/assets/laser-turret.json":
/*!**************************************!*\
  !*** ./src/assets/laser-turret.json ***!
  \**************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"base\",\"mirror\":false,\"x\":0,\"y\":45,\"z\":100,\"sx\":100,\"sy\":10,\"sz\":20,\"r\":199,\"g\":199,\"b\":199},{\"name\":\"base\",\"mirror\":false,\"x\":0,\"y\":-45,\"z\":100,\"sx\":100,\"sy\":10,\"sz\":20,\"r\":199,\"g\":199,\"b\":199},{\"name\":\"base\",\"mirror\":true,\"x\":45,\"y\":0,\"z\":100,\"sx\":10,\"sy\":100,\"sz\":20,\"r\":199,\"g\":199,\"b\":199},{\"name\":\"base\",\"mirror\":true,\"x\":45,\"y\":45,\"z\":80,\"sx\":10,\"sy\":10,\"sz\":100,\"r\":251,\"g\":255,\"b\":0},{\"name\":\"base\",\"mirror\":true,\"x\":45,\"y\":-45,\"z\":80,\"sx\":10,\"sy\":10,\"sz\":100,\"r\":251,\"g\":255,\"b\":0},{\"name\":\"base\",\"mirror\":true,\"x\":45,\"y\":45,\"z\":70,\"sx\":20,\"sy\":20,\"sz\":100,\"r\":38,\"g\":38,\"b\":38},{\"name\":\"base\",\"mirror\":true,\"x\":45,\"y\":-45,\"z\":70,\"sx\":20,\"sy\":20,\"sz\":100,\"r\":38,\"g\":38,\"b\":38},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":-75,\"z\":204,\"sx\":7,\"sy\":10,\"sz\":7,\"r\":153,\"g\":0,\"b\":0},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":60,\"y\":-70,\"z\":204,\"sx\":5,\"sy\":10,\"sz\":5,\"r\":87,\"g\":87,\"b\":87},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":80,\"y\":-70,\"z\":204,\"sx\":5,\"sy\":10,\"sz\":5,\"r\":87,\"g\":87,\"b\":87},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":-70,\"z\":194,\"sx\":5,\"sy\":10,\"sz\":5,\"r\":87,\"g\":87,\"b\":87},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":-70,\"z\":214,\"sx\":5,\"sy\":10,\"sz\":5,\"r\":87,\"g\":87,\"b\":87},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":50,\"z\":204,\"sx\":40,\"sy\":50,\"sz\":40,\"r\":163,\"g\":163,\"b\":163},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":-70,\"z\":204,\"sx\":15,\"sy\":10,\"sz\":15,\"r\":181,\"g\":181,\"b\":181},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":70,\"y\":0,\"z\":204,\"sx\":30,\"sy\":130,\"sz\":30,\"r\":31,\"g\":31,\"b\":31},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":204,\"sx\":110,\"sy\":40,\"sz\":10,\"r\":87,\"g\":87,\"b\":87},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":118,\"sx\":30,\"sy\":30,\"sz\":180,\"r\":176,\"g\":176,\"b\":176},{\"name\":\"base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":20,\"sx\":200,\"sy\":200,\"sz\":50,\"r\":199,\"g\":199,\"b\":199},{\"name\":\"base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":50,\"sx\":150,\"sy\":150,\"sz\":30,\"r\":135,\"g\":135,\"b\":135}]");

/***/ }),

/***/ "./src/assets/missile.json":
/*!*********************************!*\
  !*** ./src/assets/missile.json ***!
  \*********************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"body\",\"mirror\":false,\"x\":0,\"y\":-3.5,\"z\":0,\"sx\":20,\"sy\":73,\"sz\":20,\"r\":237,\"g\":237,\"b\":237},{\"name\":\"horizontal wings\",\"mirror\":false,\"x\":0,\"y\":16,\"z\":0,\"sx\":40,\"sy\":32,\"sz\":4,\"r\":207,\"g\":38,\"b\":59},{\"name\":\"vertical wings\",\"mirror\":false,\"x\":0,\"y\":16,\"z\":0,\"sx\":4,\"sy\":32,\"sz\":44,\"r\":207,\"g\":38,\"b\":59}]");

/***/ }),

/***/ "./src/assets/path-tile.json":
/*!***********************************!*\
  !*** ./src/assets/path-tile.json ***!
  \***********************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"tile\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-128,\"sx\":256,\"sy\":256,\"sz\":256,\"r\":180,\"g\":170,\"b\":131}]");

/***/ }),

/***/ "./src/assets/red-portal.json":
/*!************************************!*\
  !*** ./src/assets/red-portal.json ***!
  \************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 32 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 33 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 34 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 35 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 36 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 37 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 38 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 39 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 40 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 41 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 42 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 43 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 44 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 45 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 46 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 47 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 48 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 49 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 50 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 51 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 52 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 53 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 54 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 55 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 56 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 57 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 58 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 59 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 60 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 61 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 62 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 63 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 64 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 65 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 66 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 67 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 68 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 69 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 70 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 71 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 72 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 73 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 74 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 75 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 76 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 77 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"faking kvader\",\"mirror\":true,\"x\":116,\"y\":0,\"z\":40,\"sx\":40,\"sy\":40,\"sz\":40,\"r\":92,\"g\":0,\"b\":0},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":116,\"y\":0,\"z\":350,\"sx\":40,\"sy\":40,\"sz\":40,\"r\":92,\"g\":0,\"b\":0},{\"name\":\"left_right_base\",\"mirror\":true,\"x\":-126,\"y\":0,\"z\":195.5,\"sx\":60,\"sy\":60,\"sz\":271,\"r\":152,\"g\":1,\"b\":1},{\"name\":\"down_base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":30,\"sx\":192,\"sy\":60,\"sz\":60,\"r\":152,\"g\":1,\"b\":1},{\"name\":\"up_base\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":361,\"sx\":192,\"sy\":60,\"sz\":60,\"r\":152,\"g\":1,\"b\":1},{\"name\":\"plasma\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":194.9375,\"sx\":192,\"sy\":4,\"sz\":269.875,\"r\":255,\"g\":77,\"b\":77},{\"name\":\"particle\",\"mirror\":false,\"x\":-8,\"y\":2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-52,\"y\":2,\"z\":300,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-64,\"y\":2,\"z\":176,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":24,\"y\":2,\"z\":248,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-4,\"y\":2,\"z\":168,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":264,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":312,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-44,\"y\":2,\"z\":152,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":20,\"y\":2,\"z\":132,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":12,\"y\":2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":48,\"y\":2,\"z\":96,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":80,\"y\":2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-40,\"y\":2,\"z\":228,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":268,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-60,\"y\":2,\"z\":320,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":36,\"y\":2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-12,\"y\":2,\"z\":120,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-68,\"y\":2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":80,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-52,\"y\":2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":68,\"y\":2,\"z\":296,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-76,\"y\":2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-16,\"y\":2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":60,\"y\":2,\"z\":156,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-4,\"y\":2,\"z\":260,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":36,\"y\":2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-64,\"y\":2,\"z\":144,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":0,\"y\":2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":-32,\"y\":2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle\",\"mirror\":false,\"x\":24,\"y\":2,\"z\":72,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-8,\"y\":-2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-52,\"y\":-2,\"z\":300,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-64,\"y\":-2,\"z\":176,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":24,\"y\":-2,\"z\":248,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-4,\"y\":-2,\"z\":168,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":264,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":112,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":312,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-44,\"y\":-2,\"z\":152,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":20,\"y\":-2,\"z\":132,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":12,\"y\":-2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":48,\"y\":-2,\"z\":96,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":80,\"y\":-2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-40,\"y\":-2,\"z\":228,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":268,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-60,\"y\":-2,\"z\":320,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":36,\"b\":36},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":280,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":36,\"y\":-2,\"z\":216,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-12,\"y\":-2,\"z\":120,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-68,\"y\":-2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":80,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-52,\"y\":-2,\"z\":84,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":68,\"y\":-2,\"z\":296,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-76,\"y\":-2,\"z\":304,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-16,\"y\":-2,\"z\":188,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":60,\"y\":-2,\"z\":156,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-4,\"y\":-2,\"z\":260,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":36,\"y\":-2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-64,\"y\":-2,\"z\":144,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":0,\"y\":-2,\"z\":224,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":-32,\"y\":-2,\"z\":308,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122},{\"name\":\"particle_mirror\",\"mirror\":false,\"x\":24,\"y\":-2,\"z\":72,\"sx\":10,\"sy\":1,\"sz\":10,\"r\":255,\"g\":122,\"b\":122}]");

/***/ }),

/***/ "./src/assets/rocky-tile.json":
/*!************************************!*\
  !*** ./src/assets/rocky-tile.json ***!
  \************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"tile\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-128,\"sx\":256,\"sy\":256,\"sz\":256,\"r\":217,\"g\":203,\"b\":150},{\"name\":\"rock\",\"mirror\":false,\"x\":80,\"y\":-72,\"z\":-2,\"sx\":32,\"sy\":32,\"sz\":28,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"rock\",\"mirror\":false,\"x\":36,\"y\":16,\"z\":-2,\"sx\":32,\"sy\":32,\"sz\":28,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"rock\",\"mirror\":false,\"x\":-28,\"y\":-36,\"z\":-2,\"sx\":32,\"sy\":32,\"sz\":28,\"r\":180,\"g\":170,\"b\":131},{\"name\":\"rock\",\"mirror\":false,\"x\":-76,\"y\":76,\"z\":-2,\"sx\":32,\"sy\":32,\"sz\":28,\"r\":180,\"g\":170,\"b\":131}]");

/***/ }),

/***/ "./src/assets/snezak.json":
/*!********************************!*\
  !*** ./src/assets/snezak.json ***!
  \********************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"faking kvader\",\"mirror\":true,\"x\":-18.181818181818183,\"y\":-18.181818181818183,\"z\":222.72727272727275,\"sx\":27.272727272727273,\"sy\":36.36363636363637,\"sz\":27.272727272727273,\"r\":168,\"g\":206,\"b\":255},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":-31.81818181818182,\"z\":177.27272727272728,\"sx\":4.545454545454546,\"sy\":4.545454545454546,\"sz\":72.72727272727273,\"r\":240,\"g\":71,\"b\":71},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":-36.36363636363637,\"y\":0,\"z\":22.72727272727273,\"sx\":27.272727272727273,\"sy\":63.63636363636364,\"sz\":54.54545454545455,\"r\":33,\"g\":33,\"b\":33},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":50.00000000000001,\"y\":0,\"z\":86.36363636363637,\"sx\":18.181818181818183,\"sy\":27.272727272727273,\"sz\":27.272727272727273,\"r\":33,\"g\":33,\"b\":33},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":50.00000000000001,\"y\":0,\"z\":22.72727272727273,\"sx\":4.545454545454546,\"sy\":36.36363636363637,\"sz\":27.272727272727273,\"r\":107,\"g\":107,\"b\":107},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":45.45454545454546,\"y\":0,\"z\":122.72727272727273,\"sx\":13.636363636363637,\"sy\":9.090909090909092,\"sz\":72.72727272727273,\"r\":107,\"g\":107,\"b\":107},{\"name\":\"faking kvader\",\"mirror\":true,\"x\":-18.181818181818183,\"y\":-36.36363636363637,\"z\":222.72727272727275,\"sx\":9.090909090909092,\"sy\":9.090909090909092,\"sz\":9.090909090909092,\"r\":33,\"g\":33,\"b\":33},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":-18.181818181818183,\"z\":154.54545454545456,\"sx\":18.181818181818183,\"sy\":27.272727272727273,\"sz\":145.45454545454547,\"r\":168,\"g\":206,\"b\":255},{\"name\":\"faking kvader\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":95.45454545454547,\"sx\":81.81818181818183,\"sy\":45.45454545454546,\"sz\":145.45454545454547,\"r\":217,\"g\":218,\"b\":242}]");

/***/ }),

/***/ "./src/assets/tile.json":
/*!******************************!*\
  !*** ./src/assets/tile.json ***!
  \******************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export b [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export g [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mirror [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export r [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sx [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sy [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sz [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export x [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export y [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export z [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"outer\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-8,\"sx\":256,\"sy\":256,\"sz\":8,\"r\":255,\"g\":255,\"b\":255},{\"name\":\"inner\",\"mirror\":false,\"x\":0,\"y\":0,\"z\":-4,\"sx\":240,\"sy\":240,\"sz\":8,\"r\":176,\"g\":176,\"b\":176}]");

/***/ }),

/***/ "./src/compile-shaders.js":
/*!********************************!*\
  !*** ./src/compile-shaders.js ***!
  \********************************/
/*! namespace exports */
/*! export compileShaders [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileShaders": () => /* binding */ compileShaders
/* harmony export */ });
function createShader(gl, source, type) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (!status) {
		const log = gl.getShaderInfoLog(shader);
		throw new Error('Cannot compile shader\nInfo log:\n' + log);
	}
	return shader;
}

function createProgram(gl, shaders) {
	const program = gl.createProgram();
	for (let shader of shaders) {
		gl.attachShader(program, shader);
	}
	gl.linkProgram(program);
	const status = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (!status) {
		const log = gl.getProgramInfoLog(program);
		throw new Error('Cannot link program\nInfo log:\n' + log);
	}

	let attributes = {};
	const activeAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < activeAttributes; i++) {
		const info = gl.getActiveAttrib(program, i);
		attributes[info.name] = gl.getAttribLocation(program, info.name);
	}

	let uniforms = {};
	const activeUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	for (let i = 0; i < activeUniforms; i++) {
		const info = gl.getActiveUniform(program, i);
		uniforms[info.name] = gl.getUniformLocation(program, info.name);
	}

	return { program, attributes, uniforms };
}

function compileShaders(gl, shaders) {
	var programs = {};
	for (let name in shaders) {
		try {
			var program = shaders[name];
			programs[name] = createProgram(gl, [
				createShader(gl, program.vertex, gl.VERTEX_SHADER),
				createShader(gl, program.fragment, gl.FRAGMENT_SHADER)
			]);
		} catch (err) {
			throw new Error('Error compiling ' + name + '\n' + err);
		}
	}
	return programs;
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-game.js */ "./src/update-game.js");
/* harmony import */ var _render_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-game.js */ "./src/render-game.js");



let canvas          = document.querySelector('.game-canvas');
let ui              = document.querySelector('.game-ui');
let gameHtml        = document.querySelector('.game');
let pausePlayButton = document.querySelector('.pause-play-button');
let shopButtons     = [
                      document.querySelector('.tower-0-0'), document.querySelector('.tower-0-1'), document.querySelector('.tower-0-2'),
                      document.querySelector('.tower-1-0'), document.querySelector('.tower-1-1'), document.querySelector('.tower-1-2'),
                      document.querySelector('.tower-2-0'), document.querySelector('.tower-2-1'), document.querySelector('.tower-2-2')
                    ];

let game = {
    width: ui.clientWidth,
    height: ui.clientHeight,
    tiles: [
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],  // 12x12
    ].reverse(),  // bottom left is (0, 0) PepePains
    towers: [],
    path: [[1,12.5], [1, 1], [5, 1], [5, 5], [3, 5], [3, 10], [10, 10], [10, 3], [8, 3], [8, -1.5], ],
    pathLen: 48,  // HARDCODED
	time: 0,
	enemies: [
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos:  0,  vz: 0, health: 200, maxHealth: 200, friedness: 0},
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos: -2,  vz: 0, health: 200, maxHealth: 200, friedness: 0},
        {type: 'duck',          x: 0, y: 0,  z: 4, rot: 0, pathPos: -8,  vz: 0, health: 120, maxHealth: 120, friedness: 0},
        {type: 'duck',          x: 0, y: 0,  z: 8, rot: 0, pathPos: -10, vz: 0, health: 120, maxHealth: 120, friedness: 0},
        {type: 'duck',          x: 0, y: 0,  z: 0, rot: 0, pathPos: -12, vz: 0, health: 120, maxHealth: 120, friedness: 0},
        {type: 'duck',          x: 0, y: 0,  z: 2, rot: 0, pathPos: -14, vz: 0, health: 120, maxHealth: 120, friedness: 0},
        {type: 'butcher',       x: 0, y: 0,  z: 0, rot: 0, pathPos: -20, vz: 0, health: 500, maxHealth: 500, friedness: 0}
    ],
    particles: [],
    environment: [
        {type: 'bluePortal',    x: 8, y: -1, z: -0.35, rot: 0},
        {type: 'redPortal',     x: 1, y: 12, z: -0.35, rot: 0},
    ],
    bullets: [],
    player: {
        health: 100,
        money: 100,
    },
    ui: {
        combatLog: 'Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />'
    },
    shop: [
        {type: 'balistic', cost: 100, button: shopButtons[0]},
        {type: 'flame',    cost: 200, button: shopButtons[1]},
        {type: 'laser',    cost: 100, button: shopButtons[2]},
    ],
    mouse: {
        x: -1,
        y: -1,
        tileX: -1,
        tileY: -1,
        clickX: -1,
        clickY: -1,
        clickedTileX: -1,
        clickedTileY: -1,
        isDown: false,
        clickTime: -1000,
        tower: null
    },
    isPaused: true,
}

// for debug purposes
window.game = game;

game.towers = game.tiles.map(row => row.map(_ => null));
game.towers[4][3]  = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[3][3]  = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[2][9]  = {type: 'flame',    rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[9][11] = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};

// centers the game and downscales it if the browser window is too small
// TODO: this can probably be done less hacky...
function scaleBody() {
    let h = window.innerHeight;
    let w = window.innerWidth;
    let scaleFactor = 1;

    // determine and set scaling factor
    if (h < game.height) scaleFactor = h / game.height;
    if (w < game.width && scaleFactor > w / game.width) scaleFactor = w / game.width;
    document.body.style.transform = 'scale(' + scaleFactor + ')';

    // set game in center
    gameHtml.style.top = (h - game.height * scaleFactor) / 2 / scaleFactor + 'px';
    gameHtml.style.left = (w - game.width * scaleFactor)  / 2 / scaleFactor + 'px';
}

scaleBody();
window.addEventListener('resize', scaleBody);

ui.addEventListener('mousemove', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = Math.round(e.clientX - rect.left);
    game.mouse.y = Math.round(e.clientY - rect.top);
});

ui.addEventListener('mousedown', e => {
    // left click
    if (e.button === 0) {
        var rect = ui.getBoundingClientRect();
        game.mouse.x = Math.round(e.clientX - rect.left);
        game.mouse.y = Math.round(e.clientY - rect.top);
        game.mouse.isDown = true;
        game.mouse.clickTime = game.time;
        game.mouse.clickX = game.mouse.x;
        game.mouse.clickY = game.mouse.y;

        // check if trying to place tower
        if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
            game.mouse.tower !== null && game.towers[game.mouse.tileY][game.mouse.tileX] === null
            && game.tiles[game.mouse.tileY][game.mouse.tileX] !== 2 &&
            game.mouse.isDown && game.player.money >= game.mouse.tower.cost) {

            // place tower
            game.towers[game.mouse.tileY][game.mouse.tileX] =
                {type: game.mouse.tower.type, rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
            // take player money
            game.player.money -= game.mouse.tower.cost;
            // on pressing shift don't remove tower from cursor to allow placing multiple towers
            if (!e.shiftKey) {
                // deselect tower from shop and remove it from cursor
                game.mouse.tower.button.classList.remove('tower-selected');
                game.mouse.tower = null;
            }
        }

        createCombatLogEntry('Clicked on x: ' + game.mouse.x + ', y: ' + game.mouse.y);
    }
});

ui.addEventListener('mouseup', e => {
    // left click
    if (e.button === 0) {
        var rect = ui.getBoundingClientRect();
        game.mouse.x = Math.round(e.clientX - rect.left);
        game.mouse.y = Math.round(e.clientY - rect.top);
        game.mouse.isDown = false;
    }
});

pausePlayButton.addEventListener('mouseup', e => {
    if (game.isPaused) {
        pausePlayButton.classList.remove('play-button');
        pausePlayButton.classList.add('pause-button');
        createCombatLogEntry('You unpaused the game.');
    }
    else {
        pausePlayButton.classList.remove('pause-button');
        pausePlayButton.classList.add('play-button');
        createCombatLogEntry('You paused the game.');
    }

    game.isPaused = !game.isPaused;
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // remove tower from cursor and shop selection
        game.mouse.tower = null;
        for (let sh2 of game.shop) {
            sh2.button.classList.remove('tower-selected');
        }
    }
});

for (let i = 0; i < game.shop.length; i++) {
    let sh = game.shop[i];
    sh.button.addEventListener('click', e => {
        if (game.player.money >= sh.cost) {
            // deselect all other towers
            for (let sh2 of game.shop) {
                sh2.button.classList.remove('tower-selected');
            }
            // select the clicked tower
            if (game.mouse.tower === sh) {
                game.mouse.tower = null;
            }
            else {
                sh.button.classList.add('tower-selected');
                game.mouse.tower = sh;
            }
        }
    });
}

function createCombatLogEntry(s) {
    game.ui.combatLog += s + '<br />';
}

function updateShop() {
    for (let sh of game.shop) {
        // update tower cost text
        sh.button.querySelector('.tower-cost').innerHTML = sh.cost;
        // update icons if player can or cannot afford tower
        if (game.player.money >= sh.cost) {
            sh.button.classList.remove('tower-disabled');
        }
        else {
            sh.button.classList.add('tower-disabled');
        }
    }
}

function ticker() {
    requestAnimationFrame(ticker);
    
    let timeNow = Date.now();
    let timeBetween = timeNow - timeBefore;

    if (timeBetween > frameDuration) {
        timeBefore = timeNow - (timeBetween % frameDuration);

        // TODO: call updateShop() somewhere else
        updateShop();
        (0,_update_game_js__WEBPACK_IMPORTED_MODULE_0__.updateGame)(game);
        (0,_render_game_js__WEBPACK_IMPORTED_MODULE_1__.renderGame)(game);
    }
}

(0,_render_game_js__WEBPACK_IMPORTED_MODULE_1__.initGameRenderer)();
let fps = 65;  // TODO
let frameDuration = 1000 / fps;
let timeBefore = Date.now();
ticker();


/***/ }),

/***/ "./src/render-cuboids.js":
/*!*******************************!*\
  !*** ./src/render-cuboids.js ***!
  \*******************************/
/*! namespace exports */
/*! export adjustCanvasSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCuboidRenderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderCuboids [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setViewMatrix [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setViewMatrix": () => /* binding */ setViewMatrix,
/* harmony export */   "initCuboidRenderer": () => /* binding */ initCuboidRenderer,
/* harmony export */   "renderCuboids": () => /* binding */ renderCuboids,
/* harmony export */   "adjustCanvasSize": () => /* binding */ adjustCanvasSize
/* harmony export */ });
/* harmony import */ var _compile_shaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compile-shaders.js */ "./src/compile-shaders.js");
/* harmony import */ var _shaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders.js */ "./src/shaders.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");





let canvas, gl, programs, vao, viewMatrix;

// NOTE a default value is set in initCuboidRenderer
function setViewMatrix(m) {
	viewMatrix = m;
}

function initCuboidRenderer() {

	canvas = document.querySelector('.game-canvas');

	gl = canvas.getContext('webgl2', {
		preserveDrawingBuffer: true,
	});

	// programs <- {cuboid: (cuboid shader) }
	programs = (0,_compile_shaders_js__WEBPACK_IMPORTED_MODULE_0__.compileShaders)(gl, _shaders_js__WEBPACK_IMPORTED_MODULE_1__.default);

	// set default viewMatrix
	let m = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
	gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(m, m, [0, 0, -5]);
	gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotateX(m, m, Math.PI * (-1/4));
	setViewMatrix(m);

	// cuboid
	let vertices = [
		 // aPosition                 // aNormal
		 // Front face
		-1.0, -1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		 1.0, -1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		 1.0,  1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		-1.0,  1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,

		 // Back face
		-1.0, -1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		-1.0,  1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		 1.0,  1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		 1.0, -1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,

		 // Top face
		-1.0,  1.0, -1.0,  1.0, /**/  0.0,  1.0,  0.0,
		-1.0,  1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
		 1.0,  1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
		 1.0,  1.0, -1.0,  1.0, /**/  0.0,  1.0,  0.0,

		 // Bottom face
		-1.0, -1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,
		 1.0, -1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,
		 1.0, -1.0,  1.0,  1.0, /**/  0.0, -1.0,  0.0,
		-1.0, -1.0,  1.0,  1.0, /**/  0.0, -1.0,  0.0,

		 // Right face
		 1.0, -1.0, -1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0,  1.0, -1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0,  1.0,  1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0, -1.0,  1.0,  1.0, /**/  1.0,  0.0,  0.0,

		 // Left face
		-1.0, -1.0, -1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0, -1.0,  1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0,  1.0,  1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0,  1.0, -1.0,  1.0, /**/ -1.0,  0.0,  0.0,
	];
	let indices = [
		0,  1,  2,      0,  2,  3,    // front
		4,  5,  6,      4,  6,  7,    // back
		8,  9,  10,     8,  10, 11,   // top
		12, 13, 14,     12, 14, 15,   // bottom
		16, 17, 18,     16, 18, 19,   // right
		20, 21, 22,     20, 22, 23,   // left
	];

	gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black
	gl.clearDepth(1.0);                 // Clear everything
	gl.enable(gl.DEPTH_TEST);           // Enable depth testing
	gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
	gl.enable(gl.CULL_FACE);            // Don't draw back faces (effeciency)

    gl.enable(gl.BLEND);                // enable alpha
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
	gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 28, 0);

	// aNormal: enable and layout
	gl.enableVertexAttribArray(1);
	gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 28, 16);

	// aMvpMatrix: enable and make instanced
	for (var i = 0; i < 4; i++) {
		gl.enableVertexAttribArray(2 + i);
		gl.vertexAttribDivisor(2 + i, 1);
	}

	// aNormalMatrix: enable and make instanced
	for (var i = 0; i < 4; i++) {
		gl.enableVertexAttribArray(6 + i);
		gl.vertexAttribDivisor(6 + i, 1);
	}

	// aColor: enable and make instanced
	gl.enableVertexAttribArray(10);
	gl.vertexAttribPointer(10, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + 64);
	gl.vertexAttribDivisor(10, 1);
}

// cuboids: {
//     x, y, z,    // position
//     sx, sy, sz, // size
//     r, g, b, a,    // color
//     rot,        // rotation around z axis
//     px, py, pz  // pivot
// }[]
function renderCuboids(cuboids) {

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// TODO no idea what this does
	gl.bindVertexArray(vao);

	let program = programs.cuboid;
	gl.useProgram(program.program);

	// mvpMatrixNormalMatrixColorData <-
	// <- [mvpR1, mvpR2, mvpR3, mvpR4, mvpR1, normalR1, normalR2, normalR3, normalR4, color, ...]
	let mvpMatrixNormalMatrixColorData = [];

	for (let cub of cuboids) {
		// model matrix
		let modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(modelMatrix, modelMatrix, [cub.x, cub.y, cub.z]);
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotateZ(  modelMatrix, modelMatrix, cub.rot);
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(modelMatrix, modelMatrix, [-cub.px, -cub.py, -cub.pz]);
		// divide sx,sy,sz by 2 because mesh size is 2
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.scale(    modelMatrix, modelMatrix, [cub.sx/2, cub.sy/2, cub.sz/2]);

		// calculate and push aMvpMatrix to array
		let mvpMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mul(mvpMatrix, viewMatrix, modelMatrix);
		mvpMatrixNormalMatrixColorData.push(...mvpMatrix);

		// calculate and push aNormalMatrix to array
		let normalMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotateZ(normalMatrix, normalMatrix, cub.rot);
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.invert(normalMatrix, normalMatrix);
		gl_matrix__WEBPACK_IMPORTED_MODULE_2__.transpose(normalMatrix, normalMatrix);
		mvpMatrixNormalMatrixColorData.push(...normalMatrix);

		// push aColor to array
		mvpMatrixNormalMatrixColorData.push(cub.r, cub.g, cub.b, cub.a);
	}

	// push mvp matrices, normal matrices, colors to GPU
	let mvpMatrixNormalMatrixColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, mvpMatrixNormalMatrixColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mvpMatrixNormalMatrixColorData), gl.DYNAMIC_DRAW);

	// aMvpMatrix: layout
	for (var i = 0; i < 4; i++) {
		gl.vertexAttribPointer(2 + i, 4, gl.FLOAT, false, 64 + 64 + 16, i * 16);
	}

	// aNormalMatrix: layout
	for (var i = 0; i < 4; i++) {
		gl.vertexAttribPointer(6 + i, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + i * 16);
	}

	// aColors: layout
	gl.vertexAttribPointer(10, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + 64);

	gl.drawElementsInstanced(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0, cuboids.length);
}

// Resize canvas and set viewport if client size changed
function adjustCanvasSize() {
	if (canvas.width !== canvas.clientWidth ||
		canvas.height !== canvas.clientHeight)
	{
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	}
}


/***/ }),

/***/ "./src/render-game.js":
/*!****************************!*\
  !*** ./src/render-game.js ***!
  \****************************/
/*! namespace exports */
/*! export initGameRenderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGame": () => /* binding */ renderGame,
/* harmony export */   "initGameRenderer": () => /* binding */ initGameRenderer
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var _render_cuboids_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-cuboids.js */ "./src/render-cuboids.js");
/* harmony import */ var _assets_duck_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/duck.json */ "./src/assets/duck.json");
/* harmony import */ var _assets_floor_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/floor.json */ "./src/assets/floor.json");
/* harmony import */ var _assets_tile_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/tile.json */ "./src/assets/tile.json");
/* harmony import */ var _assets_green_tile_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/green-tile.json */ "./src/assets/green-tile.json");
/* harmony import */ var _assets_rocky_tile_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/rocky-tile.json */ "./src/assets/rocky-tile.json");
/* harmony import */ var _assets_path_tile_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/path-tile.json */ "./src/assets/path-tile.json");
/* harmony import */ var _assets_balistic_turret_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/balistic-turret.json */ "./src/assets/balistic-turret.json");
/* harmony import */ var _assets_flame_turret_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/flame-turret.json */ "./src/assets/flame-turret.json");
/* harmony import */ var _assets_laser_turret_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/laser-turret.json */ "./src/assets/laser-turret.json");
/* harmony import */ var _assets_snezak_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/snezak.json */ "./src/assets/snezak.json");
/* harmony import */ var _assets_butcher_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/butcher.json */ "./src/assets/butcher.json");
/* harmony import */ var _assets_missile_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/missile.json */ "./src/assets/missile.json");
/* harmony import */ var _assets_blue_portal_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/blue-portal.json */ "./src/assets/blue-portal.json");
/* harmony import */ var _assets_red_portal_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/red-portal.json */ "./src/assets/red-portal.json");
/* harmony import */ var _assets_green_highlight_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/green-highlight.json */ "./src/assets/green-highlight.json");




















function renderGame(game) {
	(0,_render_cuboids_js__WEBPACK_IMPORTED_MODULE_0__.adjustCanvasSize)();

	let cuboids = [];

	// tiles
	for (let y = 0; y < game.tiles.length; y++) {
		for (let x = 0; x < game.tiles[y].length; x++) {
			let tile = game.tiles[y][x];
			let tileCuboids = null;

			if (tile == 1) tileCuboids = cuboidsFromJson(_assets_rocky_tile_json__WEBPACK_IMPORTED_MODULE_5__);
			if (tile == 2) tileCuboids = cuboidsFromJson(_assets_path_tile_json__WEBPACK_IMPORTED_MODULE_6__);

			for (let it of tileCuboids) {
				it.x = x;
				it.y = y;
			}

			cuboids.push(...tileCuboids);
		}
	}

	// handle tower on mouse
	if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
		game.mouse.tower !== null && game.towers[game.mouse.tileY][game.mouse.tileX] === null
		&& game.tiles[game.mouse.tileY][game.mouse.tileX] !== 2) {

		// show tower on mouse while placing
		let towerCuboids = null;

		if (game.mouse.tower.type == 'balistic')	towerCuboids = cuboidsFromJson(_assets_balistic_turret_json__WEBPACK_IMPORTED_MODULE_7__);
		if (game.mouse.tower.type == 'flame')	   towerCuboids = cuboidsFromJson(_assets_flame_turret_json__WEBPACK_IMPORTED_MODULE_8__);
		if (game.mouse.tower.type == 'laser')	   towerCuboids = cuboidsFromJson(_assets_laser_turret_json__WEBPACK_IMPORTED_MODULE_9__);

		for (let it of towerCuboids) {
			it.x = game.mouse.tileX;
			it.y = game.mouse.tileY;
			it.a = 0.6;
		}

		cuboids.push(...towerCuboids);
	}

	// towers
	for (let y = 0; y < game.towers.length; y++) {
		for (let x = 0; x < game.towers[y].length; x++) {
			let tw = game.towers[y][x];
			if (tw === null) continue;

			let towerCuboids = null;
			
			if (tw.type == 'balistic') towerCuboids = cuboidsFromJson(_assets_balistic_turret_json__WEBPACK_IMPORTED_MODULE_7__);
			if (tw.type == 'flame')	towerCuboids = cuboidsFromJson(_assets_flame_turret_json__WEBPACK_IMPORTED_MODULE_8__);
			if (tw.type == 'laser')	towerCuboids = cuboidsFromJson(_assets_laser_turret_json__WEBPACK_IMPORTED_MODULE_9__);
			
			for (let it of towerCuboids) {
				it.x   = x;
				it.y   = y;

				if (it.name != 'stand' && it.name != 'base') {
					it.rot = tw.rot;
				}
			}

			cuboids.push(...towerCuboids);
		}
	}

	// enemies
	for (let en of game.enemies) {

		// duck, snezak
		let enCuboids = [];

		if (en.type == 'duck')	  enCuboids = cuboidsFromJson(_assets_duck_json__WEBPACK_IMPORTED_MODULE_1__);
		if (en.type == 'snezak')  enCuboids = cuboidsFromJson(_assets_snezak_json__WEBPACK_IMPORTED_MODULE_10__);
		if (en.type == 'butcher') enCuboids = cuboidsFromJson(_assets_butcher_json__WEBPACK_IMPORTED_MODULE_11__);

		// fried ducks
		if (en.type == 'duck') {
			for (let it of enCuboids) {
				// don't fry them cute eyes
				if (it.name == 'eyes') continue;

				let k = 1 - Math.min(en.friedness, 100) / 100;
				it.r = k * it.r;
				it.g = k * it.g;
				it.b = k * it.b;
			}
		}


		let alpha = 1;
		// fade in enemies when they come out of portal (first 0.5 of the path)
		if (en.pathPos < 0.5) {
			alpha = Math.max(0, en.pathPos) * 2;
		}
		// fade out enemies when that go in portal (last 0.5 of the path)
		if (en.pathPos > game.pathLen - 0.5) {
			// TODO visual bug: health bars make blue portal transparent
			alpha = 1 - Math.min(en.pathPos - (game.pathLen-0.5), 0.5) * 2;
		}

		for (let it of enCuboids) {
			it.x   = en.x;
			it.y   = en.y;
			it.z   = en.z;
			it.rot = en.rot;
			it.a   = alpha;
		}
		cuboids.push(...enCuboids);

		// health bar
		let size = 0.6/100;
		let green = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: -1.5, py: 0,
			sz: 10/256,    sy: 10/256,
			sx: en.health * size, px: (en.maxHealth - en.health)/2 * size,
			r: 0, g: 1, b: 0, a: 1,
			rot: Math.PI / 4,
		};
		let red = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: -1.5, py: 0,
			sz: 10/256,  sy: 10/256,
			sx: (en.maxHealth - en.health) * size, px: -en.health/2 * size,
			r: 1, g: 0, b: 0, a: 1,
			rot: Math.PI / 4,
		};

		cuboids.push(green, red);
	}
	
	// environment
	for (let en of game.environment) {

		// bluePortal, redPortal
		let enCuboids = [];

		if (en.type == 'bluePortal') enCuboids = cuboidsFromJson(_assets_blue_portal_json__WEBPACK_IMPORTED_MODULE_13__);
		if (en.type == 'redPortal')  enCuboids = cuboidsFromJson(_assets_red_portal_json__WEBPACK_IMPORTED_MODULE_14__);

		for (let it of enCuboids) {
			it.x   = en.x;
			it.y   = en.y;
			it.z   = en.z;
			it.rot = en.rot;

			// make the opening part of the portal transparent
			if (en.type == 'bluePortal' || en.type == 'redPortal') {
				if (it.name == 'plasma' || it.name == 'particle' || it.name == 'particle_mirror') {
					it.a   = 0.6;
				}
			}   
		}

		cuboids.push(...enCuboids);
	}

	// bullets
	for (let bl of game.bullets) {
		// missile
		let blCuboids = [];

		if (bl.type == 'missile') blCuboids = cuboidsFromJson(_assets_missile_json__WEBPACK_IMPORTED_MODULE_12__);

		for (let it of blCuboids) {
			it.x   = bl.x;
			it.y   = bl.y;
			it.z   = bl.z;
			it.rot = bl.rot;
		}

		cuboids.push(...blCuboids);
	}

	// particles
	for (let pt of game.particles) {
		let cub = {
			name: 'particle',
			x: pt.x, y: pt.y, z: pt.z, rot: pt.rot,
			sx: pt.sx, sy: pt.sy, sz: pt.sz,
			px: 0, py: 0, pz: -pt.sz/2,
			r: pt.r, g: pt.g, b: pt.b, a: pt.a,
		}
		cuboids.push(cub);
	}


	(0,_render_cuboids_js__WEBPACK_IMPORTED_MODULE_0__.renderCuboids)(cuboids);
}


function initGameRenderer() {
	(0,_render_cuboids_js__WEBPACK_IMPORTED_MODULE_0__.initCuboidRenderer)();

	// set camera, isometric view
	// NOTE transformations are applied bottom up
	let canvas = document.querySelector('.game-canvas');

	let m = gl_matrix__WEBPACK_IMPORTED_MODULE_16__.create();
	gl_matrix__WEBPACK_IMPORTED_MODULE_16__.scale(m, m, [120 / canvas.clientWidth, 120 / canvas.clientHeight, -0.001]);  // tile size 120px
	gl_matrix__WEBPACK_IMPORTED_MODULE_16__.rotateX(m, m, Math.PI * (-1/4));   // tilt world
	gl_matrix__WEBPACK_IMPORTED_MODULE_16__.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
	gl_matrix__WEBPACK_IMPORTED_MODULE_16__.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
	(0,_render_cuboids_js__WEBPACK_IMPORTED_MODULE_0__.setViewMatrix)(m);
}

function cuboidsFromJson(modelJson) {
	let cuboids = [];

	for (let it of modelJson) {
		cuboids.push({
			name: it.name,
			x: 0, y: 0, z: 0,
			sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
			r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
			rot: 0,
			px: -it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
		});

		if (it.mirror) {
			cuboids.push({
				name: it.name,
				x: 0, y: 0, z: 0,
				sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
				r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
				rot: 0,
				px: +it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
			});
		}
	}

	return cuboids;
}



/***/ }),

/***/ "./src/shaders.js":
/*!************************!*\
  !*** ./src/shaders.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	cuboid: { vertex, fragment }
});


/***/ }),

/***/ "./src/update-game.js":
/*!****************************!*\
  !*** ./src/update-game.js ***!
  \****************************/
/*! namespace exports */
/*! export updateGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateGame": () => /* binding */ updateGame
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");


function updateGame(game) {
	game.time++;
	if (game.time % 5 === 0) game.player.money++;

    // mouse pos to tile pos
    // viewMatrix from render-game.js with a scale instead of rotateX and inverted
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(m, m, [120/game.width, 120/game.height, -0.001]);      // tile size 120
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(m, m, [1, Math.cos(Math.PI * (-1/4)), 1]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.invert(m, m);

    let normalMouseX =   2*(game.mouse.x / game.width)  - 1;   // between -1 and 1
    let normalMouseY = -(2*(game.mouse.y / game.height) - 1);  // between -1 and 1

    let normalMouseClickX =   2*(game.mouse.clickX / game.width)  - 1;   // between -1 and 1
    let normalMouseClickY = -(2*(game.mouse.clickY / game.height) - 1);  // between -1 and 1

    let a = [normalMouseX, normalMouseY, 0, 1,
             normalMouseClickX, normalMouseClickY, 0, 1,
             0, 0, 0, 0,
             0, 0, 0, 0,];

    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mul(a, m, a);

    game.mouse.tileX = Math.floor(a[0]+0.5);
    game.mouse.tileY = Math.floor(a[1]+0.5);
    game.mouse.clickedTileX = Math.floor(a[4]+0.5);
    game.mouse.clickedTileY = Math.floor(a[5]+0.5);

	// towers
	for (let y = 0; y < game.towers.length; y++) {
		for (let x = 0; x < game.towers[y].length; x++) {
			let tw = game.towers[y][x];
			if (tw === null) continue;

			// lock on
			tw.targetEn = null;
			// target highest pathPos enemy in range
			let RANGE = 3;
			for (let en of game.enemies) {
				if (dist({x,y,z:0}, en) > RANGE) continue;
				if (!tw.targetEn || en.pathPos > tw.targetEn.pathPos) {
					tw.targetEn = en;
				}
			}

			// calculate targetRot
			if (tw.targetEn) {
				tw.targetRot = Math.atan2(tw.targetEn.y - y, tw.targetEn.x - x) + Math.PI / 2;
			}

			// rotate towards targetRot at ROT_SPEED
			let ROT_SPEED = 3 / 60;

			let a = angleBetween(tw.targetRot, tw.rot);
			if (Math.abs(a) < ROT_SPEED) {
				tw.rot = tw.targetRot;
			} else {
				tw.rot += Math.sign(a) * ROT_SPEED;
			}

			// shooting
			if (tw.targetEn && tw.rot == tw.targetRot && tw.cooldown == 0) {
                if (tw.type == 'balistic' || tw.type == 'laser') {
    				game.bullets.push({
    					type: 'missile',
    					x, y, z: 0.5,
    					rot: 0,
    					targetEn: tw.targetEn,
    				});
                    tw.cooldown = 60;
                }

                if (tw.type == 'flame') {
                    // flame origin
                    let xo = x, yo = y, zo = 0.5;

                    xo += Math.cos(tw.rot - Math.PI / 2) * 0.40;
                    yo += Math.sin(tw.rot - Math.PI / 2) * 0.40;

                    let FLAME_VELOCITY = 0.1;

                    let flameRot = tw.rot - Math.PI / 2 + (Math.random() - 0.5)*(Math.random() - 0.5)*2;

                    let vx = Math.cos(flameRot) * FLAME_VELOCITY;
                    let vy = Math.sin(flameRot) * FLAME_VELOCITY;
                    let vz = 0;

                    let colors = [
                        [252, 165, 3],
                        [252, 69, 3],
                        [252, 202, 3],
                    ];

                    let color = colors[~~(Math.random() * colors.length)];

                    game.particles.push({
                        type: 'flame',
                        x: xo,
                        y: yo,
                        z: zo,
                        vx, vy, vz,
                        rot: 0,
                        rotv: (Math.random() - 0.5) * 3,
                        sx: 0.1,
                        sy: 0.1,
                        sz: 0.1,
                        r: color[0]/256, g: color[1]/256, b: color[2]/256, a: 2.5,
                    });

                    // damage
                    tw.targetEn.health    -= 0.5;
                    tw.targetEn.friedness += 1;
                }
			}

			// cooldown
			if (tw.cooldown > 0) tw.cooldown--;
		}
	}

	// bullets
	for (let bl of game.bullets) {
		// missile
		if (bl.targetEn) {
			// calculate direction
			let dx = bl.targetEn.x - bl.x;
			let dy = bl.targetEn.y - bl.y;
			let dz = bl.targetEn.z - bl.z;
			let d  = Math.sqrt(dx*dx + dy*dy + dz*dz);
			dx /= d;
			dy /= d;
			dz /= d;

			let BULLET_VELOCITY = 0.1;

			// update pos/rot
			bl.x += dx * BULLET_VELOCITY;
			bl.y += dy * BULLET_VELOCITY;
			bl.z += dz * BULLET_VELOCITY;
			bl.rot = Math.atan2(dy, dx) + Math.PI/2;

			// on collision
			if (d < 0.1) {
				game.bullets.splice(game.bullets.indexOf(bl), 1);
                bl.targetEn.health -= 20;
			}
		}
	}

	// enemies
	for (let en of game.enemies) {

		// duck
		if (en.type == 'duck') {
			en.pathPos += 2.0 / 60;

			// position on path
			let [x,  y]  = positionOnPath(en.pathPos, game.path);
			let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
			en.x   = x;
			en.y   = y;
			en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;

            if (y2 == y && x2 == x) {
                en.rot = 0;
            }

			// jumping
			if (en.z <= 0) {
				en.z  = 0;
				en.vz = 0.10;
			}

			// apply velocity
			en.z  += en.vz;

			// gravity
			en.vz -= 0.010;
		}

		// snezak
		if (en.type == 'snezak' || en.type == 'butcher') {
			en.pathPos += 2.0 / 60;

			// position on path
			let [x,  y]  = positionOnPath(en.pathPos, game.path);
			let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
			en.x   = x;
			en.y   = y;
			en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;
            if (y2 == y && x2 == x) {
                en.rot = 0;
            }
		}
	}

    // enemy death
    for (let i = 0; i < game.enemies.length; i++) {
        let en = game.enemies[i];

        if (en.health <= 0) {  // on death
            game.enemies.splice(i, 1);
            i--;

            // spawn debris
            let color = [0, 0, 0]
            let density = 3;
            if (en.type == 'snezak') {
                color = [217/256, 218/256, 242/256];
                density = 4;
            }
            if (en.type == 'duck') {
                let k = 1 - Math.min(en.friedness, 100) / 100;
                color = [k * 232/256, k * 220/256, k * 59/256];
            }
            if (en.type == 'butcher') {
                color = [153/256, 0/256, 0/256];
                density = 6;
            }
            game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, density));
        } else if (en.pathPos >= game.pathLen) {  // on portal pass
            game.enemies.splice(i, 1);
            i--;

            game.player.health -= 10;
        }
    }

    // particles
    for (let pt of game.particles) {

        if (pt.type == 'debris') {
            // bounce
            let BOUNCE_FACTOR = 0.5;
            if (pt.z <= 0.01 && pt.x >= -0.5 && pt.x <= 11.5 && pt.y >= -0.5 && pt.y <= 11.5) {  // HARDCODED   

                pt.z  = 0;
                pt.vz = -pt.vz * BOUNCE_FACTOR;

                pt.vx = pt.vx * BOUNCE_FACTOR;
                pt.vy = pt.vy * BOUNCE_FACTOR;

                let v = Math.sqrt(pt.vx*pt.vx + pt.vy*pt.vy + pt.vz*pt.vz);

                pt.rotv /= 2;
                pt.rotv += 2*(Math.random() - 0.5)*2*(Math.random() - 0.5) * v;
            }

            // gravity
            if (pt.z > 0) {
                pt.vz -= 0.01;
            }
        }

        // update pos
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        // update rot
        pt.rot += pt.rotv;

        // decay
        if (pt.type == 'debris') pt.a -= (1/6)/60;
        if (pt.type == 'flame')  pt.a -= 4/60

    }

    // particle death
    for (let i = 0; i < game.particles.length; i++) {
        let pt = game.particles[i];

        // remove when a <= 0
        if (pt.a <= 0) {
            game.particles.splice(i, 1);
            i--;
        }
    }

	// ui
	// TODO: maybe don't update these values every frame?
	document.querySelector('.money').innerHTML      = game.player.money;
	document.querySelector('.health').innerHTML     = game.player.health;
	document.querySelector('.combat-log').innerHTML = game.ui.combatLog;
}


function positionOnPath(p, path) {
	if (p < 0) return [-100, -100];

	let prevIt = path[0];

	for (let it of path) {
		// calculate segment length
		let d = Math.sqrt((it[0] - prevIt[0])*(it[0] - prevIt[0]) + (it[1] - prevIt[1])*(it[1] - prevIt[1]));

		// interpolate (x, y) between path vertices
		if (p - d < 0) {
			return [
				prevIt[0] * (1 - p/d) + it[0] * p/d,
				prevIt[1] * (1 - p/d) + it[1] * p/d,
			];
		}

		prevIt = it;
		p -= d;
	}

	return [
		path[path.length-1][0],
		path[path.length-1][1],
	];
}


// smallest rot needed to align a to b
function angleBetween(a, b) {
	return Math.atan2(Math.sin(a-b), Math.cos(a-b));
}

// distance between two points : {x,y,z}
function dist(a, b) {
	return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) + (a.z - b.z)*(a.z - b.z));
}


function debrisParticles(x, y, z, r, g, b, d) {
    let CUBE_DENSITY      = d;
    let CUBE_SIZE         = 0.2;
    let PARTICLE_SIZE     = 0.1;
    let PARTICLE_VELOCITY = 20/60;
    let ROTATION_SCALE    = 0.3;

    let particles = [];

    for (let i = -CUBE_DENSITY/2 + 0.5; i < CUBE_DENSITY/2 + 0.5; i++) {
        for (let j = -CUBE_DENSITY/2 + 0.5; j < CUBE_DENSITY/2 + 0.5; j++) {
            for (let k = -CUBE_DENSITY/2 + 0.5; k < CUBE_DENSITY/2 + 0.5; k++) {
                if (i*i + j*j + k*k > (CUBE_DENSITY/2)*(CUBE_DENSITY/2)) continue;
                let i2 = i + Math.random() - 0.5; 
                let j2 = j + Math.random() - 0.5; 
                let k2 = k + Math.random() - 0.5; 
                particles.push({
                    type: 'debris',
                    x: x + i2 * CUBE_SIZE / CUBE_DENSITY,
                    y: y + j2 * CUBE_SIZE / CUBE_DENSITY,
                    z: z + k2 * CUBE_SIZE / CUBE_DENSITY,
                    vx: i2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vy: j2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vz: k2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    rot: 0,
                    rotv: (Math.random() - 0.5) * ROTATION_SCALE,
                    sx: PARTICLE_SIZE*Math.floor(2.5*Math.random() + 1),
                    sy: PARTICLE_SIZE,
                    sz: PARTICLE_SIZE,
                    r, g, b, a: 2,
                });
            }
        }
    }

    return particles;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/game.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQtcmVwby8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9naXQtcmVwby8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDQuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlcG8vLi9zcmMvY29tcGlsZS1zaGFkZXJzLmpzIiwid2VicGFjazovL2dpdC1yZXBvLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlcG8vLi9zcmMvcmVuZGVyLWN1Ym9pZHMuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlcG8vLi9zcmMvcmVuZGVyLWdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2l0LXJlcG8vLi9zcmMvc2hhZGVycy5qcyIsIndlYnBhY2s6Ly9naXQtcmVwby8uL3NyYy91cGRhdGUtZ2FtZS5qcyIsIndlYnBhY2s6Ly9naXQtcmVwby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naXQtcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0LXJlcG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXQtcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdC1yZXBvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQTJDO0FBQ3REOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1COztBQUVuQyxNQUFNLGtEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE9BQU87QUFDcEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSwrQ0FBZ0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSwrQ0FBZ0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGNBQWM7QUFDekIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1Asd0JBQXdCLGtEQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVksYUFBYTtBQUN6QixZQUFZLEtBQUs7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVksYUFBYTtBQUN6QixZQUFZLEtBQUs7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsWUFBWSxLQUFLO0FBQ2pCOztBQUVPO0FBQ1Asb0JBQW9CLGtEQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QjtBQUNBLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQywrQ0FBZ0IsK0JBQStCLCtDQUFnQiwrQkFBK0IsK0NBQWdCO0FBQy9JO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsT0FBTztBQUNwQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHVFQUF1RSwrQ0FBZ0IseUVBQXlFLCtDQUFnQix5RUFBeUUsK0NBQWdCLHlFQUF5RSwrQ0FBZ0IseUVBQXlFLCtDQUFnQix5RUFBeUUsK0NBQWdCO0FBQy96QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyeERQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RDRDO0FBQ2tCOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBcUQ7QUFDOUQsU0FBUyxxREFBcUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyxvREFBb0Q7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQVU7QUFDbEIsUUFBUSwyREFBVTtBQUNsQjtBQUNBOztBQUVBLGlFQUFnQjtBQUNoQixhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL09vRDtBQUNqQjtBQUNKOzs7QUFHL0I7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUYsaUJBQWlCO0FBQ2pCLFlBQVksbUVBQWMsS0FBSyxnREFBTzs7QUFFdEM7QUFDQSxTQUFTLDZDQUFXO0FBQ3BCLENBQUMsZ0RBQWM7QUFDZixDQUFDLDhDQUFZO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLHlCQUF5Qjs7QUFFekIsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNHOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBVztBQUMvQixFQUFFLGdEQUFjO0FBQ2hCLEVBQUUsOENBQVk7QUFDZCxFQUFFLGdEQUFjO0FBQ2hCO0FBQ0EsRUFBRSw0Q0FBVTs7QUFFWjtBQUNBLGtCQUFrQiw2Q0FBVztBQUM3QixFQUFFLDBDQUFRO0FBQ1Y7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQVc7QUFDaEMsRUFBRSw4Q0FBWTtBQUNkLEVBQUUsNkNBQVc7QUFDYixFQUFFLGdEQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTStCO0FBQ3dFOztBQUVuRDtBQUNDO0FBQ0Q7QUFDTTtBQUNBO0FBQ0Q7QUFDTTtBQUNIO0FBQ0E7QUFDTjtBQUNDO0FBQ0E7QUFDSTtBQUNEO0FBQ0s7OztBQUd4RDtBQUNQLENBQUMsb0VBQWdCOztBQUVqQjs7QUFFQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkMsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBOztBQUVBLGdEQUFnRCxvREFBYTtBQUM3RCxnREFBZ0QsbURBQVk7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBFQUEwRSx5REFBa0I7QUFDNUYsMEVBQTBFLHNEQUFlO0FBQ3pGLDBFQUEwRSxzREFBZTs7QUFFekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QyxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUE7O0FBRUEsNkRBQTZELHlEQUFrQjtBQUMvRSwwREFBMEQsc0RBQWU7QUFDekUsMERBQTBELHNEQUFlOztBQUV6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1REFBdUQsOENBQVE7QUFDL0Qsd0RBQXdELGlEQUFVO0FBQ2xFLHdEQUF3RCxrREFBVzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyREFBMkQsc0RBQWM7QUFDekUsMkRBQTJELHFEQUFhOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Qsa0RBQVc7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsaUVBQWE7QUFDZDs7O0FBR087QUFDUCxDQUFDLHNFQUFrQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBLFNBQVMsOENBQVc7QUFDcEIsQ0FBQyw2Q0FBVSxzRUFBc0U7QUFDakYsQ0FBQywrQ0FBWSx5QkFBeUI7QUFDdEMsQ0FBQywrQ0FBWSx5QkFBeUI7QUFDdEMsQ0FBQyxpREFBYyx3QkFBd0I7QUFDdkMsQ0FBQyxpRUFBYTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmLFVBQVU7QUFDVixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0M2Qjs7QUFFeEI7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDZDQUFXO0FBQ3ZCLElBQUksNENBQVUsa0RBQWtEO0FBQ2hFLElBQUksNENBQVU7QUFDZCxJQUFJLDhDQUFZLHlCQUF5QjtBQUN6QyxJQUFJLGdEQUFjLHdCQUF3QjtBQUMxQyxJQUFJLDZDQUFXOztBQUVmLDREQUE0RDtBQUM1RCw2REFBNkQ7O0FBRTdELHNFQUFzRTtBQUN0RSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMENBQVE7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0Y7O0FBRS9GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFLDJDQUEyQywwQkFBMEI7QUFDckUsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBLGlEO0FBQ0EsaUQ7QUFDQSxpRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUMvV0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tbW9uIHV0aWxpdGllc1xyXG4gKiBAbW9kdWxlIGdsTWF0cml4XHJcbiAqL1xuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCB2YXIgUkFORE9NID0gTWF0aC5yYW5kb207XG4vKipcclxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBBcnJheUNvbnN0cnVjdG9yfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogNHg0IE1hdHJpeDxicj5Gb3JtYXQ6IGNvbHVtbi1tYWpvciwgd2hlbiB0eXBlZCBvdXQgaXQgbG9va3MgbGlrZSByb3ctbWFqb3I8YnI+VGhlIG1hdHJpY2VzIGFyZSBiZWluZyBwb3N0IG11bHRpcGxpZWQuXHJcbiAqIEBtb2R1bGUgbWF0NFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICBvdXRbOV0gPSBhWzldO1xuICBvdXRbMTBdID0gYVsxMF07XG4gIG91dFsxMV0gPSBhWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYXQ0IHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBBIG5ldyBtYXQ0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIHZhciBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIHZhciBhMjMgPSBhWzExXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYTAxO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYTAyO1xuICAgIG91dFs5XSA9IGExMjtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGEwMztcbiAgICBvdXRbMTNdID0gYTEzO1xuICAgIG91dFsxNF0gPSBhMjM7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYVsxXTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYVsyXTtcbiAgICBvdXRbOV0gPSBhWzZdO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGFbM107XG4gICAgb3V0WzEzXSA9IGFbN107XG4gICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICB2YXIgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIG91dFswXSA9IGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKTtcbiAgb3V0WzFdID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbMl0gPSBhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMik7XG4gIG91dFszXSA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzRdID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbNV0gPSBhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMik7XG4gIG91dFs2XSA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzddID0gYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpO1xuICBvdXRbOF0gPSBhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSk7XG4gIG91dFs5XSA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgb3V0WzEwXSA9IGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKTtcbiAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgb3V0WzEzXSA9IGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKTtcbiAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgb3V0WzE1XSA9IGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdOyAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcblxuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICBvdXRbMF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbM10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzRdO1xuICBiMSA9IGJbNV07XG4gIGIyID0gYls2XTtcbiAgYjMgPSBiWzddO1xuICBvdXRbNF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbN10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzhdO1xuICBiMSA9IGJbOV07XG4gIGIyID0gYlsxMF07XG4gIGIzID0gYlsxMV07XG4gIG91dFs4XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTFdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYlsxMl07XG4gIGIxID0gYlsxM107XG4gIGIyID0gYlsxNF07XG4gIGIzID0gYlsxNV07XG4gIG91dFsxMl0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxNV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gIGlmIChhID09PSBvdXQpIHtcbiAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgfSBlbHNlIHtcbiAgICBhMDAgPSBhWzBdO1xuICAgIGEwMSA9IGFbMV07XG4gICAgYTAyID0gYVsyXTtcbiAgICBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07XG4gICAgYTExID0gYVs1XTtcbiAgICBhMTIgPSBhWzZdO1xuICAgIGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTtcbiAgICBhMjEgPSBhWzldO1xuICAgIGEyMiA9IGFbMTBdO1xuICAgIGEyMyA9IGFbMTFdO1xuICAgIG91dFswXSA9IGEwMDtcbiAgICBvdXRbMV0gPSBhMDE7XG4gICAgb3V0WzJdID0gYTAyO1xuICAgIG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7XG4gICAgb3V0WzVdID0gYTExO1xuICAgIG91dFs2XSA9IGExMjtcbiAgICBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwO1xuICAgIG91dFs5XSA9IGEyMTtcbiAgICBvdXRbMTBdID0gYTIyO1xuICAgIG91dFsxMV0gPSBhMjM7XG4gICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzMgbm90IHVzaW5nIHZlY3Rvcml6YXRpb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdLFxuICAgICAgeiA9IHZbMl07XG4gIG91dFswXSA9IGFbMF0gKiB4O1xuICBvdXRbMV0gPSBhWzFdICogeDtcbiAgb3V0WzJdID0gYVsyXSAqIHg7XG4gIG91dFszXSA9IGFbM10gKiB4O1xuICBvdXRbNF0gPSBhWzRdICogeTtcbiAgb3V0WzVdID0gYVs1XSAqIHk7XG4gIG91dFs2XSA9IGFbNl0gKiB5O1xuICBvdXRbN10gPSBhWzddICogeTtcbiAgb3V0WzhdID0gYVs4XSAqIHo7XG4gIG91dFs5XSA9IGFbOV0gKiB6O1xuICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICB2YXIgYjAwLCBiMDEsIGIwMjtcbiAgdmFyIGIxMCwgYjExLCBiMTI7XG4gIHZhciBiMjAsIGIyMSwgYjIyO1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdOyAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcblxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjOyAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTEwID0gYVs0XTtcbiAgdmFyIGExMSA9IGFbNV07XG4gIHZhciBhMTIgPSBhWzZdO1xuICB2YXIgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSB2WzFdO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gdlsyXTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYzsgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21YUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAtcztcbiAgb3V0WzEwXSA9IGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlWShkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHM7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZVooZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVpSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgb3V0WzFdID0geHkgKyB3ejtcbiAgb3V0WzJdID0geHogLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geHkgLSB3ejtcbiAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgb3V0WzZdID0geXogKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geHogKyB3eTtcbiAgb3V0WzldID0geXogLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgZnJvbSBhIGR1YWwgcXVhdC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgTWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb25cclxuICogQHJldHVybnMge21hdDR9IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdDIob3V0LCBhKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidzsgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgYSwgdHJhbnNsYXRpb24pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxyXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICBvdXRbMF0gPSBtYXRbMTJdO1xuICBvdXRbMV0gPSBtYXRbMTNdO1xuICBvdXRbMl0gPSBtYXRbMTRdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXHJcbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZVxyXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXHJcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsaW5nKG91dCwgbWF0KSB7XG4gIHZhciBtMTEgPSBtYXRbMF07XG4gIHZhciBtMTIgPSBtYXRbMV07XG4gIHZhciBtMTMgPSBtYXRbMl07XG4gIHZhciBtMjEgPSBtYXRbNF07XG4gIHZhciBtMjIgPSBtYXRbNV07XG4gIHZhciBtMjMgPSBtYXRbNl07XG4gIHZhciBtMzEgPSBtYXRbOF07XG4gIHZhciBtMzIgPSBtYXRbOV07XG4gIHZhciBtMzMgPSBtYXRbMTBdO1xuICBvdXRbMF0gPSBNYXRoLmh5cG90KG0xMSwgbTEyLCBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLmh5cG90KG0yMSwgbTIyLCBtMjMpO1xuICBvdXRbMl0gPSBNYXRoLmh5cG90KG0zMSwgbTMyLCBtMzMpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWF0ZXJuaW9uIHJlcHJlc2VudGluZyB0aGUgcm90YXRpb25hbCBjb21wb25lbnRcclxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXHJcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcclxuICogIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gb3JpZ2luYWxseSBzdXBwbGllZC5cclxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXHJcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKG91dCwgbWF0KSB7XG4gIHZhciBzY2FsaW5nID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIGdldFNjYWxpbmcoc2NhbGluZywgbWF0KTtcbiAgdmFyIGlzMSA9IDEgLyBzY2FsaW5nWzBdO1xuICB2YXIgaXMyID0gMSAvIHNjYWxpbmdbMV07XG4gIHZhciBpczMgPSAxIC8gc2NhbGluZ1syXTtcbiAgdmFyIHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gIHZhciBzbTEyID0gbWF0WzFdICogaXMyO1xuICB2YXIgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgdmFyIHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gIHZhciBzbTIyID0gbWF0WzVdICogaXMyO1xuICB2YXIgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgdmFyIHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gIHZhciBzbTMyID0gbWF0WzldICogaXMyO1xuICB2YXIgc20zMyA9IG1hdFsxMF0gKiBpczM7XG4gIHZhciB0cmFjZSA9IHNtMTEgKyBzbTIyICsgc20zMztcbiAgdmFyIFMgPSAwO1xuXG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgb3V0WzBdID0gKHNtMjMgLSBzbTMyKSAvIFM7XG4gICAgb3V0WzFdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMTEgLSBzbTIyIC0gc20zMykgKiAyO1xuICAgIG91dFszXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dFsyXSA9IChzbTMxICsgc20xMykgLyBTO1xuICB9IGVsc2UgaWYgKHNtMjIgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTIyIC0gc20xMSAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20zMSAtIHNtMTMpIC8gUztcbiAgICBvdXRbMF0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICBvdXRbMl0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgfSBlbHNlIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMzMgLSBzbTExIC0gc20yMikgKiAyO1xuICAgIG91dFszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgIG91dFswXSA9IChzbTMxICsgc20xMykgLyBTO1xuICAgIG91dFsxXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICBvdXRbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gIG91dFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG9yaWdpbik7XHJcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XHJcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XHJcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG5lZ2F0aXZlT3JpZ2luKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBzIFNjYWxpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBvIFRoZSBvcmlnaW4gdmVjdG9yIGFyb3VuZCB3aGljaCB0byBzY2FsZSBhbmQgcm90YXRlXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlT3JpZ2luKG91dCwgcSwgdiwgcywgbykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICB2YXIgb3ggPSBvWzBdO1xuICB2YXIgb3kgPSBvWzFdO1xuICB2YXIgb3ogPSBvWzJdO1xuICB2YXIgb3V0MCA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICB2YXIgb3V0MSA9ICh4eSArIHd6KSAqIHN4O1xuICB2YXIgb3V0MiA9ICh4eiAtIHd5KSAqIHN4O1xuICB2YXIgb3V0NCA9ICh4eSAtIHd6KSAqIHN5O1xuICB2YXIgb3V0NSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICB2YXIgb3V0NiA9ICh5eiArIHd4KSAqIHN5O1xuICB2YXIgb3V0OCA9ICh4eiArIHd5KSAqIHN6O1xuICB2YXIgb3V0OSA9ICh5eiAtIHd4KSAqIHN6O1xuICB2YXIgb3V0MTAgPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzBdID0gb3V0MDtcbiAgb3V0WzFdID0gb3V0MTtcbiAgb3V0WzJdID0gb3V0MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gb3V0NDtcbiAgb3V0WzVdID0gb3V0NTtcbiAgb3V0WzZdID0gb3V0NjtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gb3V0ODtcbiAgb3V0WzldID0gb3V0OTtcbiAgb3V0WzEwXSA9IG91dDEwO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXQwICogb3ggKyBvdXQ0ICogb3kgKyBvdXQ4ICogb3opO1xuICBvdXRbMTNdID0gdlsxXSArIG95IC0gKG91dDEgKiBveCArIG91dDUgKiBveSArIG91dDkgKiBveik7XG4gIG91dFsxNF0gPSB2WzJdICsgb3ogLSAob3V0MiAqIG94ICsgb3V0NiAqIG95ICsgb3V0MTAgKiBveik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHl4IC0gd3o7XG4gIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbNl0gPSB6eSArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICB2YXIgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IG5lYXIgKiAyICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IG5lYXIgKiAyICogdGI7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyICogMiAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXHJcbiAqIFBhc3NpbmcgbnVsbC91bmRlZmluZWQvbm8gdmFsdWUgZm9yIGZhciB3aWxsIGdlbmVyYXRlIGluZmluaXRlIHByb2plY3Rpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtLCBjYW4gYmUgbnVsbCBvciBJbmZpbml0eVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgIG5mO1xuICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBmO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE1XSA9IDA7XG5cbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLTIgKiBuZWFyO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxyXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXHJcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbik7XG4gIHZhciB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNTtcbiAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzExXSA9IC0xLjA7XG4gIG91dFsxMl0gPSAwLjA7XG4gIG91dFsxM10gPSAwLjA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTVdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpcy5cclxuICogSWYgeW91IHdhbnQgYSBtYXRyaXggdGhhdCBhY3R1YWxseSBtYWtlcyBhbiBvYmplY3QgbG9vayBhdCBhbm90aGVyIG9iamVjdCwgeW91IHNob3VsZCB1c2UgdGFyZ2V0VG8gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICB9XG5cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguaHlwb3QoejAsIHoxLCB6Mik7XG4gIHowICo9IGxlbjtcbiAgejEgKj0gbGVuO1xuICB6MiAqPSBsZW47XG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguaHlwb3QoeDAsIHgxLCB4Mik7XG5cbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgbGVuID0gTWF0aC5oeXBvdCh5MCwgeTEsIHkyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgdmFyIGV5ZXggPSBleWVbMF0sXG4gICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICB1cHogPSB1cFsyXTtcbiAgdmFyIHowID0gZXlleCAtIHRhcmdldFswXSxcbiAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcbiAgdmFyIGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcbiAgfVxuXG4gIHZhciB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIiwgXCIgKyBhWzldICsgXCIsIFwiICsgYVsxMF0gKyBcIiwgXCIgKyBhWzExXSArIFwiLCBcIiArIGFbMTJdICsgXCIsIFwiICsgYVsxM10gKyBcIiwgXCIgKyBhWzE0XSArIFwiLCBcIiArIGFbMTVdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcclxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSwgYVs2XSwgYVs3XSwgYVs4XSwgYVs5XSwgYVsxMF0sIGFbMTFdLCBhWzEyXSwgYVsxM10sIGFbMTRdLCBhWzE1XSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICBvdXRbOV0gPSBhWzldICsgYls5XSAqIHNjYWxlO1xuICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXSAqIHNjYWxlO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXSAqIHNjYWxlO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXSAqIHNjYWxlO1xuICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXSAqIHNjYWxlO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XSAqIHNjYWxlO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiYgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddO1xuICB2YXIgYTggPSBhWzhdLFxuICAgICAgYTkgPSBhWzldLFxuICAgICAgYTEwID0gYVsxMF0sXG4gICAgICBhMTEgPSBhWzExXTtcbiAgdmFyIGExMiA9IGFbMTJdLFxuICAgICAgYTEzID0gYVsxM10sXG4gICAgICBhMTQgPSBhWzE0XSxcbiAgICAgIGExNSA9IGFbMTVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICB2YXIgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddO1xuICB2YXIgYjggPSBiWzhdLFxuICAgICAgYjkgPSBiWzldLFxuICAgICAgYjEwID0gYlsxMF0sXG4gICAgICBiMTEgPSBiWzExXTtcbiAgdmFyIGIxMiA9IGJbMTJdLFxuICAgICAgYjEzID0gYlsxM10sXG4gICAgICBiMTQgPSBiWzE0XSxcbiAgICAgIGIxNSA9IGJbMTVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiYgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiYgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJiBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiYgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJiBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihnbCwgc291cmNlLCB0eXBlKSB7XHJcblx0Y29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG5cdGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcblx0Z2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cdGNvbnN0IHN0YXR1cyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcclxuXHRpZiAoIXN0YXR1cykge1xyXG5cdFx0Y29uc3QgbG9nID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29tcGlsZSBzaGFkZXJcXG5JbmZvIGxvZzpcXG4nICsgbG9nKTtcclxuXHR9XHJcblx0cmV0dXJuIHNoYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShnbCwgc2hhZGVycykge1xyXG5cdGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcblx0Zm9yIChsZXQgc2hhZGVyIG9mIHNoYWRlcnMpIHtcclxuXHRcdGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXIpO1xyXG5cdH1cclxuXHRnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuXHRjb25zdCBzdGF0dXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcclxuXHRpZiAoIXN0YXR1cykge1xyXG5cdFx0Y29uc3QgbG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsaW5rIHByb2dyYW1cXG5JbmZvIGxvZzpcXG4nICsgbG9nKTtcclxuXHR9XHJcblxyXG5cdGxldCBhdHRyaWJ1dGVzID0ge307XHJcblx0Y29uc3QgYWN0aXZlQXR0cmlidXRlcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX0FUVFJJQlVURVMpO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlQXR0cmlidXRlczsgaSsrKSB7XHJcblx0XHRjb25zdCBpbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKHByb2dyYW0sIGkpO1xyXG5cdFx0YXR0cmlidXRlc1tpbmZvLm5hbWVdID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgaW5mby5uYW1lKTtcclxuXHR9XHJcblxyXG5cdGxldCB1bmlmb3JtcyA9IHt9O1xyXG5cdGNvbnN0IGFjdGl2ZVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlVW5pZm9ybXM7IGkrKykge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSk7XHJcblx0XHR1bmlmb3Jtc1tpbmZvLm5hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGluZm8ubmFtZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBwcm9ncmFtLCBhdHRyaWJ1dGVzLCB1bmlmb3JtcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNoYWRlcnMoZ2wsIHNoYWRlcnMpIHtcclxuXHR2YXIgcHJvZ3JhbXMgPSB7fTtcclxuXHRmb3IgKGxldCBuYW1lIGluIHNoYWRlcnMpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHZhciBwcm9ncmFtID0gc2hhZGVyc1tuYW1lXTtcclxuXHRcdFx0cHJvZ3JhbXNbbmFtZV0gPSBjcmVhdGVQcm9ncmFtKGdsLCBbXHJcblx0XHRcdFx0Y3JlYXRlU2hhZGVyKGdsLCBwcm9ncmFtLnZlcnRleCwgZ2wuVkVSVEVYX1NIQURFUiksXHJcblx0XHRcdFx0Y3JlYXRlU2hhZGVyKGdsLCBwcm9ncmFtLmZyYWdtZW50LCBnbC5GUkFHTUVOVF9TSEFERVIpXHJcblx0XHRcdF0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgY29tcGlsaW5nICcgKyBuYW1lICsgJ1xcbicgKyBlcnIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcHJvZ3JhbXM7XHJcbn1cclxuIiwiaW1wb3J0IHt1cGRhdGVHYW1lfSBmcm9tICcuL3VwZGF0ZS1nYW1lLmpzJztcclxuaW1wb3J0IHtpbml0R2FtZVJlbmRlcmVyLCByZW5kZXJHYW1lfSBmcm9tICcuL3JlbmRlci1nYW1lLmpzJztcclxuXHJcbmxldCBjYW52YXMgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKTtcclxubGV0IHVpICAgICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXVpJyk7XHJcbmxldCBnYW1lSHRtbCAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xyXG5sZXQgcGF1c2VQbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlLXBsYXktYnV0dG9uJyk7XHJcbmxldCBzaG9wQnV0dG9ucyAgICAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG93ZXItMC0wJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3dlci0wLTEnKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvd2VyLTAtMicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvd2VyLTEtMCcpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG93ZXItMS0xJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3dlci0xLTInKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3dlci0yLTAnKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvd2VyLTItMScpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG93ZXItMi0yJylcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxubGV0IGdhbWUgPSB7XHJcbiAgICB3aWR0aDogdWkuY2xpZW50V2lkdGgsXHJcbiAgICBoZWlnaHQ6IHVpLmNsaWVudEhlaWdodCxcclxuICAgIHRpbGVzOiBbXHJcbiAgICAgICAgWzEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgIFsxLCAyLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxXSxcclxuICAgICAgICBbMSwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMV0sXHJcbiAgICAgICAgWzEsIDIsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDFdLFxyXG4gICAgICAgIFsxLCAyLCAxLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAxXSxcclxuICAgICAgICBbMSwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMV0sXHJcbiAgICAgICAgWzEsIDIsIDEsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDIsIDFdLFxyXG4gICAgICAgIFsxLCAyLCAxLCAxLCAxLCAyLCAxLCAxLCAxLCAxLCAyLCAxXSxcclxuICAgICAgICBbMSwgMiwgMSwgMSwgMSwgMiwgMSwgMSwgMiwgMiwgMiwgMV0sXHJcbiAgICAgICAgWzEsIDIsIDEsIDEsIDEsIDIsIDEsIDEsIDIsIDEsIDEsIDFdLFxyXG4gICAgICAgIFsxLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAyLCAxLCAxLCAxXSxcclxuICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMV0sICAvLyAxMngxMlxyXG4gICAgXS5yZXZlcnNlKCksICAvLyBib3R0b20gbGVmdCBpcyAoMCwgMCkgUGVwZVBhaW5zXHJcbiAgICB0b3dlcnM6IFtdLFxyXG4gICAgcGF0aDogW1sxLDEyLjVdLCBbMSwgMV0sIFs1LCAxXSwgWzUsIDVdLCBbMywgNV0sIFszLCAxMF0sIFsxMCwgMTBdLCBbMTAsIDNdLCBbOCwgM10sIFs4LCAtMS41XSwgXSxcclxuICAgIHBhdGhMZW46IDQ4LCAgLy8gSEFSRENPREVEXHJcblx0dGltZTogMCxcclxuXHRlbmVtaWVzOiBbXHJcbiAgICAgICAge3R5cGU6ICdzbmV6YWsnLCAgICAgICAgeDogMCwgeTogMCwgIHo6IDAsIHJvdDogMCwgcGF0aFBvczogIDAsICB2ejogMCwgaGVhbHRoOiAyMDAsIG1heEhlYWx0aDogMjAwLCBmcmllZG5lc3M6IDB9LFxyXG4gICAgICAgIHt0eXBlOiAnc25lemFrJywgICAgICAgIHg6IDAsIHk6IDAsICB6OiAwLCByb3Q6IDAsIHBhdGhQb3M6IC0yLCAgdno6IDAsIGhlYWx0aDogMjAwLCBtYXhIZWFsdGg6IDIwMCwgZnJpZWRuZXNzOiAwfSxcclxuICAgICAgICB7dHlwZTogJ2R1Y2snLCAgICAgICAgICB4OiAwLCB5OiAwLCAgejogNCwgcm90OiAwLCBwYXRoUG9zOiAtOCwgIHZ6OiAwLCBoZWFsdGg6IDEyMCwgbWF4SGVhbHRoOiAxMjAsIGZyaWVkbmVzczogMH0sXHJcbiAgICAgICAge3R5cGU6ICdkdWNrJywgICAgICAgICAgeDogMCwgeTogMCwgIHo6IDgsIHJvdDogMCwgcGF0aFBvczogLTEwLCB2ejogMCwgaGVhbHRoOiAxMjAsIG1heEhlYWx0aDogMTIwLCBmcmllZG5lc3M6IDB9LFxyXG4gICAgICAgIHt0eXBlOiAnZHVjaycsICAgICAgICAgIHg6IDAsIHk6IDAsICB6OiAwLCByb3Q6IDAsIHBhdGhQb3M6IC0xMiwgdno6IDAsIGhlYWx0aDogMTIwLCBtYXhIZWFsdGg6IDEyMCwgZnJpZWRuZXNzOiAwfSxcclxuICAgICAgICB7dHlwZTogJ2R1Y2snLCAgICAgICAgICB4OiAwLCB5OiAwLCAgejogMiwgcm90OiAwLCBwYXRoUG9zOiAtMTQsIHZ6OiAwLCBoZWFsdGg6IDEyMCwgbWF4SGVhbHRoOiAxMjAsIGZyaWVkbmVzczogMH0sXHJcbiAgICAgICAge3R5cGU6ICdidXRjaGVyJywgICAgICAgeDogMCwgeTogMCwgIHo6IDAsIHJvdDogMCwgcGF0aFBvczogLTIwLCB2ejogMCwgaGVhbHRoOiA1MDAsIG1heEhlYWx0aDogNTAwLCBmcmllZG5lc3M6IDB9XHJcbiAgICBdLFxyXG4gICAgcGFydGljbGVzOiBbXSxcclxuICAgIGVudmlyb25tZW50OiBbXHJcbiAgICAgICAge3R5cGU6ICdibHVlUG9ydGFsJywgICAgeDogOCwgeTogLTEsIHo6IC0wLjM1LCByb3Q6IDB9LFxyXG4gICAgICAgIHt0eXBlOiAncmVkUG9ydGFsJywgICAgIHg6IDEsIHk6IDEyLCB6OiAtMC4zNSwgcm90OiAwfSxcclxuICAgIF0sXHJcbiAgICBidWxsZXRzOiBbXSxcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIGhlYWx0aDogMTAwLFxyXG4gICAgICAgIG1vbmV5OiAxMDAsXHJcbiAgICB9LFxyXG4gICAgdWk6IHtcclxuICAgICAgICBjb21iYXRMb2c6ICdXZWxjb21lIHRvIHRvd2VyIGRlZmVuc2UhPGJyIC8+RGVmZWF0IHRoZSBldmlsIGVuZW1pZXMgdGhhdCBhcmUgdHJ5aW5nIHRvIGJyZWFjaCBpbnRvIGh1bWFuIHdvcmxkIHRvIHRha2Ugb3Zlci48YnIgLz4nXHJcbiAgICB9LFxyXG4gICAgc2hvcDogW1xyXG4gICAgICAgIHt0eXBlOiAnYmFsaXN0aWMnLCBjb3N0OiAxMDAsIGJ1dHRvbjogc2hvcEJ1dHRvbnNbMF19LFxyXG4gICAgICAgIHt0eXBlOiAnZmxhbWUnLCAgICBjb3N0OiAyMDAsIGJ1dHRvbjogc2hvcEJ1dHRvbnNbMV19LFxyXG4gICAgICAgIHt0eXBlOiAnbGFzZXInLCAgICBjb3N0OiAxMDAsIGJ1dHRvbjogc2hvcEJ1dHRvbnNbMl19LFxyXG4gICAgXSxcclxuICAgIG1vdXNlOiB7XHJcbiAgICAgICAgeDogLTEsXHJcbiAgICAgICAgeTogLTEsXHJcbiAgICAgICAgdGlsZVg6IC0xLFxyXG4gICAgICAgIHRpbGVZOiAtMSxcclxuICAgICAgICBjbGlja1g6IC0xLFxyXG4gICAgICAgIGNsaWNrWTogLTEsXHJcbiAgICAgICAgY2xpY2tlZFRpbGVYOiAtMSxcclxuICAgICAgICBjbGlja2VkVGlsZVk6IC0xLFxyXG4gICAgICAgIGlzRG93bjogZmFsc2UsXHJcbiAgICAgICAgY2xpY2tUaW1lOiAtMTAwMCxcclxuICAgICAgICB0b3dlcjogbnVsbFxyXG4gICAgfSxcclxuICAgIGlzUGF1c2VkOiB0cnVlLFxyXG59XHJcblxyXG4vLyBmb3IgZGVidWcgcHVycG9zZXNcclxud2luZG93LmdhbWUgPSBnYW1lO1xyXG5cclxuZ2FtZS50b3dlcnMgPSBnYW1lLnRpbGVzLm1hcChyb3cgPT4gcm93Lm1hcChfID0+IG51bGwpKTtcclxuZ2FtZS50b3dlcnNbNF1bM10gID0ge3R5cGU6ICdiYWxpc3RpYycsIHJvdDogMCwgdGFyZ2V0Um90OiAwLCB0YXJnZXRFbjogbnVsbCwgY29vbGRvd246IDB9O1xyXG5nYW1lLnRvd2Vyc1szXVszXSAgPSB7dHlwZTogJ2JhbGlzdGljJywgcm90OiAwLCB0YXJnZXRSb3Q6IDAsIHRhcmdldEVuOiBudWxsLCBjb29sZG93bjogMH07XHJcbmdhbWUudG93ZXJzWzJdWzldICA9IHt0eXBlOiAnZmxhbWUnLCAgICByb3Q6IDAsIHRhcmdldFJvdDogMCwgdGFyZ2V0RW46IG51bGwsIGNvb2xkb3duOiAwfTtcclxuZ2FtZS50b3dlcnNbOV1bMTFdID0ge3R5cGU6ICdiYWxpc3RpYycsIHJvdDogMCwgdGFyZ2V0Um90OiAwLCB0YXJnZXRFbjogbnVsbCwgY29vbGRvd246IDB9O1xyXG5cclxuLy8gY2VudGVycyB0aGUgZ2FtZSBhbmQgZG93bnNjYWxlcyBpdCBpZiB0aGUgYnJvd3NlciB3aW5kb3cgaXMgdG9vIHNtYWxsXHJcbi8vIFRPRE86IHRoaXMgY2FuIHByb2JhYmx5IGJlIGRvbmUgbGVzcyBoYWNreS4uLlxyXG5mdW5jdGlvbiBzY2FsZUJvZHkoKSB7XHJcbiAgICBsZXQgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSAxO1xyXG5cclxuICAgIC8vIGRldGVybWluZSBhbmQgc2V0IHNjYWxpbmcgZmFjdG9yXHJcbiAgICBpZiAoaCA8IGdhbWUuaGVpZ2h0KSBzY2FsZUZhY3RvciA9IGggLyBnYW1lLmhlaWdodDtcclxuICAgIGlmICh3IDwgZ2FtZS53aWR0aCAmJiBzY2FsZUZhY3RvciA+IHcgLyBnYW1lLndpZHRoKSBzY2FsZUZhY3RvciA9IHcgLyBnYW1lLndpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlRmFjdG9yICsgJyknO1xyXG5cclxuICAgIC8vIHNldCBnYW1lIGluIGNlbnRlclxyXG4gICAgZ2FtZUh0bWwuc3R5bGUudG9wID0gKGggLSBnYW1lLmhlaWdodCAqIHNjYWxlRmFjdG9yKSAvIDIgLyBzY2FsZUZhY3RvciArICdweCc7XHJcbiAgICBnYW1lSHRtbC5zdHlsZS5sZWZ0ID0gKHcgLSBnYW1lLndpZHRoICogc2NhbGVGYWN0b3IpICAvIDIgLyBzY2FsZUZhY3RvciArICdweCc7XHJcbn1cclxuXHJcbnNjYWxlQm9keSgpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVCb2R5KTtcclxuXHJcbnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xyXG4gICAgdmFyIHJlY3QgPSB1aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGdhbWUubW91c2UueCA9IE1hdGgucm91bmQoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KTtcclxuICAgIGdhbWUubW91c2UueSA9IE1hdGgucm91bmQoZS5jbGllbnRZIC0gcmVjdC50b3ApO1xyXG59KTtcclxuXHJcbnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgLy8gbGVmdCBjbGlja1xyXG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB1aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBnYW1lLm1vdXNlLnggPSBNYXRoLnJvdW5kKGUuY2xpZW50WCAtIHJlY3QubGVmdCk7XHJcbiAgICAgICAgZ2FtZS5tb3VzZS55ID0gTWF0aC5yb3VuZChlLmNsaWVudFkgLSByZWN0LnRvcCk7XHJcbiAgICAgICAgZ2FtZS5tb3VzZS5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgIGdhbWUubW91c2UuY2xpY2tUaW1lID0gZ2FtZS50aW1lO1xyXG4gICAgICAgIGdhbWUubW91c2UuY2xpY2tYID0gZ2FtZS5tb3VzZS54O1xyXG4gICAgICAgIGdhbWUubW91c2UuY2xpY2tZID0gZ2FtZS5tb3VzZS55O1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0cnlpbmcgdG8gcGxhY2UgdG93ZXJcclxuICAgICAgICBpZiAoZ2FtZS5tb3VzZS50aWxlWCA+PSAwICYmIGdhbWUubW91c2UudGlsZVggPCAxMiAmIGdhbWUubW91c2UudGlsZVkgPj0gMCAmJiBnYW1lLm1vdXNlLnRpbGVZIDwgMTIgJiZcclxuICAgICAgICAgICAgZ2FtZS5tb3VzZS50b3dlciAhPT0gbnVsbCAmJiBnYW1lLnRvd2Vyc1tnYW1lLm1vdXNlLnRpbGVZXVtnYW1lLm1vdXNlLnRpbGVYXSA9PT0gbnVsbFxyXG4gICAgICAgICAgICAmJiBnYW1lLnRpbGVzW2dhbWUubW91c2UudGlsZVldW2dhbWUubW91c2UudGlsZVhdICE9PSAyICYmXHJcbiAgICAgICAgICAgIGdhbWUubW91c2UuaXNEb3duICYmIGdhbWUucGxheWVyLm1vbmV5ID49IGdhbWUubW91c2UudG93ZXIuY29zdCkge1xyXG5cclxuICAgICAgICAgICAgLy8gcGxhY2UgdG93ZXJcclxuICAgICAgICAgICAgZ2FtZS50b3dlcnNbZ2FtZS5tb3VzZS50aWxlWV1bZ2FtZS5tb3VzZS50aWxlWF0gPVxyXG4gICAgICAgICAgICAgICAge3R5cGU6IGdhbWUubW91c2UudG93ZXIudHlwZSwgcm90OiAwLCB0YXJnZXRSb3Q6IDAsIHRhcmdldEVuOiBudWxsLCBjb29sZG93bjogMH07XHJcbiAgICAgICAgICAgIC8vIHRha2UgcGxheWVyIG1vbmV5XHJcbiAgICAgICAgICAgIGdhbWUucGxheWVyLm1vbmV5IC09IGdhbWUubW91c2UudG93ZXIuY29zdDtcclxuICAgICAgICAgICAgLy8gb24gcHJlc3Npbmcgc2hpZnQgZG9uJ3QgcmVtb3ZlIHRvd2VyIGZyb20gY3Vyc29yIHRvIGFsbG93IHBsYWNpbmcgbXVsdGlwbGUgdG93ZXJzXHJcbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVzZWxlY3QgdG93ZXIgZnJvbSBzaG9wIGFuZCByZW1vdmUgaXQgZnJvbSBjdXJzb3JcclxuICAgICAgICAgICAgICAgIGdhbWUubW91c2UudG93ZXIuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvd2VyLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLm1vdXNlLnRvd2VyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQ29tYmF0TG9nRW50cnkoJ0NsaWNrZWQgb24geDogJyArIGdhbWUubW91c2UueCArICcsIHk6ICcgKyBnYW1lLm1vdXNlLnkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuICAgIC8vIGxlZnQgY2xpY2tcclxuICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgZ2FtZS5tb3VzZS54ID0gTWF0aC5yb3VuZChlLmNsaWVudFggLSByZWN0LmxlZnQpO1xyXG4gICAgICAgIGdhbWUubW91c2UueSA9IE1hdGgucm91bmQoZS5jbGllbnRZIC0gcmVjdC50b3ApO1xyXG4gICAgICAgIGdhbWUubW91c2UuaXNEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxucGF1c2VQbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuICAgIGlmIChnYW1lLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgcGF1c2VQbGF5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXktYnV0dG9uJyk7XHJcbiAgICAgICAgcGF1c2VQbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhdXNlLWJ1dHRvbicpO1xyXG4gICAgICAgIGNyZWF0ZUNvbWJhdExvZ0VudHJ5KCdZb3UgdW5wYXVzZWQgdGhlIGdhbWUuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXVzZVBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGF1c2UtYnV0dG9uJyk7XHJcbiAgICAgICAgcGF1c2VQbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnV0dG9uJyk7XHJcbiAgICAgICAgY3JlYXRlQ29tYmF0TG9nRW50cnkoJ1lvdSBwYXVzZWQgdGhlIGdhbWUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZS5pc1BhdXNlZCA9ICFnYW1lLmlzUGF1c2VkO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRvd2VyIGZyb20gY3Vyc29yIGFuZCBzaG9wIHNlbGVjdGlvblxyXG4gICAgICAgIGdhbWUubW91c2UudG93ZXIgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IHNoMiBvZiBnYW1lLnNob3ApIHtcclxuICAgICAgICAgICAgc2gyLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b3dlci1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdhbWUuc2hvcC5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHNoID0gZ2FtZS5zaG9wW2ldO1xyXG4gICAgc2guYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWUucGxheWVyLm1vbmV5ID49IHNoLmNvc3QpIHtcclxuICAgICAgICAgICAgLy8gZGVzZWxlY3QgYWxsIG90aGVyIHRvd2Vyc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzaDIgb2YgZ2FtZS5zaG9wKSB7XHJcbiAgICAgICAgICAgICAgICBzaDIuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvd2VyLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBjbGlja2VkIHRvd2VyXHJcbiAgICAgICAgICAgIGlmIChnYW1lLm1vdXNlLnRvd2VyID09PSBzaCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5tb3VzZS50b3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaC5idXR0b24uY2xhc3NMaXN0LmFkZCgndG93ZXItc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGdhbWUubW91c2UudG93ZXIgPSBzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21iYXRMb2dFbnRyeShzKSB7XHJcbiAgICBnYW1lLnVpLmNvbWJhdExvZyArPSBzICsgJzxiciAvPic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNob3AoKSB7XHJcbiAgICBmb3IgKGxldCBzaCBvZiBnYW1lLnNob3ApIHtcclxuICAgICAgICAvLyB1cGRhdGUgdG93ZXIgY29zdCB0ZXh0XHJcbiAgICAgICAgc2guYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy50b3dlci1jb3N0JykuaW5uZXJIVE1MID0gc2guY29zdDtcclxuICAgICAgICAvLyB1cGRhdGUgaWNvbnMgaWYgcGxheWVyIGNhbiBvciBjYW5ub3QgYWZmb3JkIHRvd2VyXHJcbiAgICAgICAgaWYgKGdhbWUucGxheWVyLm1vbmV5ID49IHNoLmNvc3QpIHtcclxuICAgICAgICAgICAgc2guYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvd2VyLWRpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzaC5idXR0b24uY2xhc3NMaXN0LmFkZCgndG93ZXItZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpY2tlcigpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrZXIpO1xyXG4gICAgXHJcbiAgICBsZXQgdGltZU5vdyA9IERhdGUubm93KCk7XHJcbiAgICBsZXQgdGltZUJldHdlZW4gPSB0aW1lTm93IC0gdGltZUJlZm9yZTtcclxuXHJcbiAgICBpZiAodGltZUJldHdlZW4gPiBmcmFtZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGltZUJlZm9yZSA9IHRpbWVOb3cgLSAodGltZUJldHdlZW4gJSBmcmFtZUR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogY2FsbCB1cGRhdGVTaG9wKCkgc29tZXdoZXJlIGVsc2VcclxuICAgICAgICB1cGRhdGVTaG9wKCk7XHJcbiAgICAgICAgdXBkYXRlR2FtZShnYW1lKTtcclxuICAgICAgICByZW5kZXJHYW1lKGdhbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbml0R2FtZVJlbmRlcmVyKCk7XHJcbmxldCBmcHMgPSA2NTsgIC8vIFRPRE9cclxubGV0IGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gZnBzO1xyXG5sZXQgdGltZUJlZm9yZSA9IERhdGUubm93KCk7XHJcbnRpY2tlcigpO1xyXG4iLCJpbXBvcnQge2NvbXBpbGVTaGFkZXJzfSBmcm9tICcuL2NvbXBpbGUtc2hhZGVycy5qcyc7XHJcbmltcG9ydCBzaGFkZXJzIGZyb20gJy4vc2hhZGVycy5qcyc7XHJcbmltcG9ydCB7bWF0NH0gZnJvbSAnZ2wtbWF0cml4JztcclxuXHJcblxyXG5sZXQgY2FudmFzLCBnbCwgcHJvZ3JhbXMsIHZhbywgdmlld01hdHJpeDtcclxuXHJcbi8vIE5PVEUgYSBkZWZhdWx0IHZhbHVlIGlzIHNldCBpbiBpbml0Q3Vib2lkUmVuZGVyZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpZXdNYXRyaXgobSkge1xyXG5cdHZpZXdNYXRyaXggPSBtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEN1Ym9pZFJlbmRlcmVyKCkge1xyXG5cclxuXHRjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKTtcclxuXHJcblx0Z2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywge1xyXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxyXG5cdH0pO1xyXG5cclxuXHQvLyBwcm9ncmFtcyA8LSB7Y3Vib2lkOiAoY3Vib2lkIHNoYWRlcikgfVxyXG5cdHByb2dyYW1zID0gY29tcGlsZVNoYWRlcnMoZ2wsIHNoYWRlcnMpO1xyXG5cclxuXHQvLyBzZXQgZGVmYXVsdCB2aWV3TWF0cml4XHJcblx0bGV0IG0gPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cdG1hdDQudHJhbnNsYXRlKG0sIG0sIFswLCAwLCAtNV0pO1xyXG5cdG1hdDQucm90YXRlWChtLCBtLCBNYXRoLlBJICogKC0xLzQpKTtcclxuXHRzZXRWaWV3TWF0cml4KG0pO1xyXG5cclxuXHQvLyBjdWJvaWRcclxuXHRsZXQgdmVydGljZXMgPSBbXHJcblx0XHQgLy8gYVBvc2l0aW9uICAgICAgICAgICAgICAgICAvLyBhTm9ybWFsXHJcblx0XHQgLy8gRnJvbnQgZmFjZVxyXG5cdFx0LTEuMCwgLTEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMC4wLCAgMC4wLCAgMS4wLFxyXG5cdFx0IDEuMCwgLTEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMC4wLCAgMC4wLCAgMS4wLFxyXG5cdFx0IDEuMCwgIDEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMC4wLCAgMC4wLCAgMS4wLFxyXG5cdFx0LTEuMCwgIDEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMC4wLCAgMC4wLCAgMS4wLFxyXG5cclxuXHRcdCAvLyBCYWNrIGZhY2VcclxuXHRcdC0xLjAsIC0xLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDAuMCwgLTEuMCxcclxuXHRcdC0xLjAsICAxLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDAuMCwgLTEuMCxcclxuXHRcdCAxLjAsICAxLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDAuMCwgLTEuMCxcclxuXHRcdCAxLjAsIC0xLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDAuMCwgLTEuMCxcclxuXHJcblx0XHQgLy8gVG9wIGZhY2VcclxuXHRcdC0xLjAsICAxLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDEuMCwgIDAuMCxcclxuXHRcdC0xLjAsICAxLjAsICAxLjAsICAxLjAsIC8qKi8gIDAuMCwgIDEuMCwgIDAuMCxcclxuXHRcdCAxLjAsICAxLjAsICAxLjAsICAxLjAsIC8qKi8gIDAuMCwgIDEuMCwgIDAuMCxcclxuXHRcdCAxLjAsICAxLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgIDEuMCwgIDAuMCxcclxuXHJcblx0XHQgLy8gQm90dG9tIGZhY2VcclxuXHRcdC0xLjAsIC0xLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgLTEuMCwgIDAuMCxcclxuXHRcdCAxLjAsIC0xLjAsIC0xLjAsICAxLjAsIC8qKi8gIDAuMCwgLTEuMCwgIDAuMCxcclxuXHRcdCAxLjAsIC0xLjAsICAxLjAsICAxLjAsIC8qKi8gIDAuMCwgLTEuMCwgIDAuMCxcclxuXHRcdC0xLjAsIC0xLjAsICAxLjAsICAxLjAsIC8qKi8gIDAuMCwgLTEuMCwgIDAuMCxcclxuXHJcblx0XHQgLy8gUmlnaHQgZmFjZVxyXG5cdFx0IDEuMCwgLTEuMCwgLTEuMCwgIDEuMCwgLyoqLyAgMS4wLCAgMC4wLCAgMC4wLFxyXG5cdFx0IDEuMCwgIDEuMCwgLTEuMCwgIDEuMCwgLyoqLyAgMS4wLCAgMC4wLCAgMC4wLFxyXG5cdFx0IDEuMCwgIDEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMS4wLCAgMC4wLCAgMC4wLFxyXG5cdFx0IDEuMCwgLTEuMCwgIDEuMCwgIDEuMCwgLyoqLyAgMS4wLCAgMC4wLCAgMC4wLFxyXG5cclxuXHRcdCAvLyBMZWZ0IGZhY2VcclxuXHRcdC0xLjAsIC0xLjAsIC0xLjAsICAxLjAsIC8qKi8gLTEuMCwgIDAuMCwgIDAuMCxcclxuXHRcdC0xLjAsIC0xLjAsICAxLjAsICAxLjAsIC8qKi8gLTEuMCwgIDAuMCwgIDAuMCxcclxuXHRcdC0xLjAsICAxLjAsICAxLjAsICAxLjAsIC8qKi8gLTEuMCwgIDAuMCwgIDAuMCxcclxuXHRcdC0xLjAsICAxLjAsIC0xLjAsICAxLjAsIC8qKi8gLTEuMCwgIDAuMCwgIDAuMCxcclxuXHRdO1xyXG5cdGxldCBpbmRpY2VzID0gW1xyXG5cdFx0MCwgIDEsICAyLCAgICAgIDAsICAyLCAgMywgICAgLy8gZnJvbnRcclxuXHRcdDQsICA1LCAgNiwgICAgICA0LCAgNiwgIDcsICAgIC8vIGJhY2tcclxuXHRcdDgsICA5LCAgMTAsICAgICA4LCAgMTAsIDExLCAgIC8vIHRvcFxyXG5cdFx0MTIsIDEzLCAxNCwgICAgIDEyLCAxNCwgMTUsICAgLy8gYm90dG9tXHJcblx0XHQxNiwgMTcsIDE4LCAgICAgMTYsIDE4LCAxOSwgICAvLyByaWdodFxyXG5cdFx0MjAsIDIxLCAyMiwgICAgIDIwLCAyMiwgMjMsICAgLy8gbGVmdFxyXG5cdF07XHJcblxyXG5cdGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTsgIC8vIENsZWFyIHRvIGJsYWNrXHJcblx0Z2wuY2xlYXJEZXB0aCgxLjApOyAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXZlcnl0aGluZ1xyXG5cdGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTsgICAgICAgICAgIC8vIEVuYWJsZSBkZXB0aCB0ZXN0aW5nXHJcblx0Z2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7ICAgICAgICAgICAgLy8gTmVhciB0aGluZ3Mgb2JzY3VyZSBmYXIgdGhpbmdzXHJcblx0Z2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7ICAgICAgICAgICAgLy8gRG9uJ3QgZHJhdyBiYWNrIGZhY2VzIChlZmZlY2llbmN5KVxyXG5cclxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7ICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBhbHBoYVxyXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG5cdC8vIFRPRE8gbm8gaWRlYSB3aGF0IHRoaXMgZG9lc1xyXG5cdHZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcblx0Z2wuYmluZFZlcnRleEFycmF5KHZhbyk7XHJcblxyXG5cdC8vIHB1c2ggdmVydGljZXMgdG8gR1BVXHJcblx0bGV0IHZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xyXG5cdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuXHQvLyBwdXNoIGluZGljZXMgdG8gR1BVXHJcblx0bGV0IGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kZXhCdWZmZXIpO1xyXG5cdGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuXHQvLyBhUG9zaXRpb246IGVuYWJsZSBhbmQgbGF5b3V0XHJcblx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XHJcblx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigwLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDI4LCAwKTtcclxuXHJcblx0Ly8gYU5vcm1hbDogZW5hYmxlIGFuZCBsYXlvdXRcclxuXHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcclxuXHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDEsIDMsIGdsLkZMT0FULCBmYWxzZSwgMjgsIDE2KTtcclxuXHJcblx0Ly8gYU12cE1hdHJpeDogZW5hYmxlIGFuZCBtYWtlIGluc3RhbmNlZFxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyICsgaSk7XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKDIgKyBpLCAxKTtcclxuXHR9XHJcblxyXG5cdC8vIGFOb3JtYWxNYXRyaXg6IGVuYWJsZSBhbmQgbWFrZSBpbnN0YW5jZWRcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG5cdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoNiArIGkpO1xyXG5cdFx0Z2wudmVydGV4QXR0cmliRGl2aXNvcig2ICsgaSwgMSk7XHJcblx0fVxyXG5cclxuXHQvLyBhQ29sb3I6IGVuYWJsZSBhbmQgbWFrZSBpbnN0YW5jZWRcclxuXHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxMCk7XHJcblx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigxMCwgNCwgZ2wuRkxPQVQsIGZhbHNlLCA2NCArIDY0ICsgMTYsIDY0ICsgNjQpO1xyXG5cdGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoMTAsIDEpO1xyXG59XHJcblxyXG4vLyBjdWJvaWRzOiB7XHJcbi8vICAgICB4LCB5LCB6LCAgICAvLyBwb3NpdGlvblxyXG4vLyAgICAgc3gsIHN5LCBzeiwgLy8gc2l6ZVxyXG4vLyAgICAgciwgZywgYiwgYSwgICAgLy8gY29sb3JcclxuLy8gICAgIHJvdCwgICAgICAgIC8vIHJvdGF0aW9uIGFyb3VuZCB6IGF4aXNcclxuLy8gICAgIHB4LCBweSwgcHogIC8vIHBpdm90XHJcbi8vIH1bXVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ3Vib2lkcyhjdWJvaWRzKSB7XHJcblxyXG5cdGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcblx0Ly8gVE9ETyBubyBpZGVhIHdoYXQgdGhpcyBkb2VzXHJcblx0Z2wuYmluZFZlcnRleEFycmF5KHZhbyk7XHJcblxyXG5cdGxldCBwcm9ncmFtID0gcHJvZ3JhbXMuY3Vib2lkO1xyXG5cdGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcclxuXHJcblx0Ly8gbXZwTWF0cml4Tm9ybWFsTWF0cml4Q29sb3JEYXRhIDwtXHJcblx0Ly8gPC0gW212cFIxLCBtdnBSMiwgbXZwUjMsIG12cFI0LCBtdnBSMSwgbm9ybWFsUjEsIG5vcm1hbFIyLCBub3JtYWxSMywgbm9ybWFsUjQsIGNvbG9yLCAuLi5dXHJcblx0bGV0IG12cE1hdHJpeE5vcm1hbE1hdHJpeENvbG9yRGF0YSA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBjdWIgb2YgY3Vib2lkcykge1xyXG5cdFx0Ly8gbW9kZWwgbWF0cml4XHJcblx0XHRsZXQgbW9kZWxNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cdFx0bWF0NC50cmFuc2xhdGUobW9kZWxNYXRyaXgsIG1vZGVsTWF0cml4LCBbY3ViLngsIGN1Yi55LCBjdWIuel0pO1xyXG5cdFx0bWF0NC5yb3RhdGVaKCAgbW9kZWxNYXRyaXgsIG1vZGVsTWF0cml4LCBjdWIucm90KTtcclxuXHRcdG1hdDQudHJhbnNsYXRlKG1vZGVsTWF0cml4LCBtb2RlbE1hdHJpeCwgWy1jdWIucHgsIC1jdWIucHksIC1jdWIucHpdKTtcclxuXHRcdC8vIGRpdmlkZSBzeCxzeSxzeiBieSAyIGJlY2F1c2UgbWVzaCBzaXplIGlzIDJcclxuXHRcdG1hdDQuc2NhbGUoICAgIG1vZGVsTWF0cml4LCBtb2RlbE1hdHJpeCwgW2N1Yi5zeC8yLCBjdWIuc3kvMiwgY3ViLnN6LzJdKTtcclxuXHJcblx0XHQvLyBjYWxjdWxhdGUgYW5kIHB1c2ggYU12cE1hdHJpeCB0byBhcnJheVxyXG5cdFx0bGV0IG12cE1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XHJcblx0XHRtYXQ0Lm11bChtdnBNYXRyaXgsIHZpZXdNYXRyaXgsIG1vZGVsTWF0cml4KTtcclxuXHRcdG12cE1hdHJpeE5vcm1hbE1hdHJpeENvbG9yRGF0YS5wdXNoKC4uLm12cE1hdHJpeCk7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIGFuZCBwdXNoIGFOb3JtYWxNYXRyaXggdG8gYXJyYXlcclxuXHRcdGxldCBub3JtYWxNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cdFx0bWF0NC5yb3RhdGVaKG5vcm1hbE1hdHJpeCwgbm9ybWFsTWF0cml4LCBjdWIucm90KTtcclxuXHRcdG1hdDQuaW52ZXJ0KG5vcm1hbE1hdHJpeCwgbm9ybWFsTWF0cml4KTtcclxuXHRcdG1hdDQudHJhbnNwb3NlKG5vcm1hbE1hdHJpeCwgbm9ybWFsTWF0cml4KTtcclxuXHRcdG12cE1hdHJpeE5vcm1hbE1hdHJpeENvbG9yRGF0YS5wdXNoKC4uLm5vcm1hbE1hdHJpeCk7XHJcblxyXG5cdFx0Ly8gcHVzaCBhQ29sb3IgdG8gYXJyYXlcclxuXHRcdG12cE1hdHJpeE5vcm1hbE1hdHJpeENvbG9yRGF0YS5wdXNoKGN1Yi5yLCBjdWIuZywgY3ViLmIsIGN1Yi5hKTtcclxuXHR9XHJcblxyXG5cdC8vIHB1c2ggbXZwIG1hdHJpY2VzLCBub3JtYWwgbWF0cmljZXMsIGNvbG9ycyB0byBHUFVcclxuXHRsZXQgbXZwTWF0cml4Tm9ybWFsTWF0cml4Q29sb3JCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbXZwTWF0cml4Tm9ybWFsTWF0cml4Q29sb3JCdWZmZXIpO1xyXG5cdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KG12cE1hdHJpeE5vcm1hbE1hdHJpeENvbG9yRGF0YSksIGdsLkRZTkFNSUNfRFJBVyk7XHJcblxyXG5cdC8vIGFNdnBNYXRyaXg6IGxheW91dFxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDIgKyBpLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDY0ICsgNjQgKyAxNiwgaSAqIDE2KTtcclxuXHR9XHJcblxyXG5cdC8vIGFOb3JtYWxNYXRyaXg6IGxheW91dFxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDYgKyBpLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDY0ICsgNjQgKyAxNiwgNjQgKyBpICogMTYpO1xyXG5cdH1cclxuXHJcblx0Ly8gYUNvbG9yczogbGF5b3V0XHJcblx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigxMCwgNCwgZ2wuRkxPQVQsIGZhbHNlLCA2NCArIDY0ICsgMTYsIDY0ICsgNjQpO1xyXG5cclxuXHRnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfU0hPUlQsIDAsIGN1Ym9pZHMubGVuZ3RoKTtcclxufVxyXG5cclxuLy8gUmVzaXplIGNhbnZhcyBhbmQgc2V0IHZpZXdwb3J0IGlmIGNsaWVudCBzaXplIGNoYW5nZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdENhbnZhc1NpemUoKSB7XHJcblx0aWYgKGNhbnZhcy53aWR0aCAhPT0gY2FudmFzLmNsaWVudFdpZHRoIHx8XHJcblx0XHRjYW52YXMuaGVpZ2h0ICE9PSBjYW52YXMuY2xpZW50SGVpZ2h0KVxyXG5cdHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHttYXQ0fSBmcm9tICdnbC1tYXRyaXgnO1xyXG5pbXBvcnQge2luaXRDdWJvaWRSZW5kZXJlciwgcmVuZGVyQ3Vib2lkcywgYWRqdXN0Q2FudmFzU2l6ZSwgc2V0Vmlld01hdHJpeH0gZnJvbSAnLi9yZW5kZXItY3Vib2lkcy5qcyc7XHJcblxyXG5pbXBvcnQgZHVja0pzb24gICAgICAgICAgIGZyb20gJy4vYXNzZXRzL2R1Y2suanNvbic7XHJcbmltcG9ydCBmbG9vckpzb24gICAgICAgICAgZnJvbSAnLi9hc3NldHMvZmxvb3IuanNvbic7XHJcbmltcG9ydCB0aWxlSnNvbiAgICAgICAgICAgZnJvbSAnLi9hc3NldHMvdGlsZS5qc29uJztcclxuaW1wb3J0IGdyZWVuVGlsZUpzb24gICAgICBmcm9tICcuL2Fzc2V0cy9ncmVlbi10aWxlLmpzb24nO1xyXG5pbXBvcnQgcm9ja3lUaWxlSnNvbiAgICAgIGZyb20gJy4vYXNzZXRzL3JvY2t5LXRpbGUuanNvbic7XHJcbmltcG9ydCBwYXRoVGlsZUpzb24gICAgICAgZnJvbSAnLi9hc3NldHMvcGF0aC10aWxlLmpzb24nO1xyXG5pbXBvcnQgYmFsaXN0aWNUdXJyZXRKc29uIGZyb20gJy4vYXNzZXRzL2JhbGlzdGljLXR1cnJldC5qc29uJztcclxuaW1wb3J0IGZsYW1lVHVycmV0SnNvbiAgICBmcm9tICcuL2Fzc2V0cy9mbGFtZS10dXJyZXQuanNvbic7XHJcbmltcG9ydCBsYXNlclR1cnJldEpzb24gICAgZnJvbSAnLi9hc3NldHMvbGFzZXItdHVycmV0Lmpzb24nO1xyXG5pbXBvcnQgc25lemFrSnNvbiAgICAgICAgIGZyb20gJy4vYXNzZXRzL3NuZXphay5qc29uJztcclxuaW1wb3J0IGJ1dGNoZXJKc29uICAgICAgICBmcm9tICcuL2Fzc2V0cy9idXRjaGVyLmpzb24nO1xyXG5pbXBvcnQgbWlzc2lsZUpzb24gICAgICAgIGZyb20gJy4vYXNzZXRzL21pc3NpbGUuanNvbic7XHJcbmltcG9ydCBibHVlUG9ydGFsSnNvbiAgICAgZnJvbSAnLi9hc3NldHMvYmx1ZS1wb3J0YWwuanNvbic7XHJcbmltcG9ydCByZWRQb3J0YWxKc29uICAgICAgZnJvbSAnLi9hc3NldHMvcmVkLXBvcnRhbC5qc29uJztcclxuaW1wb3J0IGdyZWVuSGlnaGxpZ2h0SnNvbiBmcm9tICcuL2Fzc2V0cy9ncmVlbi1oaWdobGlnaHQuanNvbic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWUoZ2FtZSkge1xyXG5cdGFkanVzdENhbnZhc1NpemUoKTtcclxuXHJcblx0bGV0IGN1Ym9pZHMgPSBbXTtcclxuXHJcblx0Ly8gdGlsZXNcclxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGdhbWUudGlsZXMubGVuZ3RoOyB5KyspIHtcclxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS50aWxlc1t5XS5sZW5ndGg7IHgrKykge1xyXG5cdFx0XHRsZXQgdGlsZSA9IGdhbWUudGlsZXNbeV1beF07XHJcblx0XHRcdGxldCB0aWxlQ3Vib2lkcyA9IG51bGw7XHJcblxyXG5cdFx0XHRpZiAodGlsZSA9PSAxKSB0aWxlQ3Vib2lkcyA9IGN1Ym9pZHNGcm9tSnNvbihyb2NreVRpbGVKc29uKTtcclxuXHRcdFx0aWYgKHRpbGUgPT0gMikgdGlsZUN1Ym9pZHMgPSBjdWJvaWRzRnJvbUpzb24ocGF0aFRpbGVKc29uKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGl0IG9mIHRpbGVDdWJvaWRzKSB7XHJcblx0XHRcdFx0aXQueCA9IHg7XHJcblx0XHRcdFx0aXQueSA9IHk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGN1Ym9pZHMucHVzaCguLi50aWxlQ3Vib2lkcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBoYW5kbGUgdG93ZXIgb24gbW91c2VcclxuXHRpZiAoZ2FtZS5tb3VzZS50aWxlWCA+PSAwICYmIGdhbWUubW91c2UudGlsZVggPCAxMiAmIGdhbWUubW91c2UudGlsZVkgPj0gMCAmJiBnYW1lLm1vdXNlLnRpbGVZIDwgMTIgJiZcclxuXHRcdGdhbWUubW91c2UudG93ZXIgIT09IG51bGwgJiYgZ2FtZS50b3dlcnNbZ2FtZS5tb3VzZS50aWxlWV1bZ2FtZS5tb3VzZS50aWxlWF0gPT09IG51bGxcclxuXHRcdCYmIGdhbWUudGlsZXNbZ2FtZS5tb3VzZS50aWxlWV1bZ2FtZS5tb3VzZS50aWxlWF0gIT09IDIpIHtcclxuXHJcblx0XHQvLyBzaG93IHRvd2VyIG9uIG1vdXNlIHdoaWxlIHBsYWNpbmdcclxuXHRcdGxldCB0b3dlckN1Ym9pZHMgPSBudWxsO1xyXG5cclxuXHRcdGlmIChnYW1lLm1vdXNlLnRvd2VyLnR5cGUgPT0gJ2JhbGlzdGljJylcdHRvd2VyQ3Vib2lkcyA9IGN1Ym9pZHNGcm9tSnNvbihiYWxpc3RpY1R1cnJldEpzb24pO1xyXG5cdFx0aWYgKGdhbWUubW91c2UudG93ZXIudHlwZSA9PSAnZmxhbWUnKVx0ICAgdG93ZXJDdWJvaWRzID0gY3Vib2lkc0Zyb21Kc29uKGZsYW1lVHVycmV0SnNvbik7XHJcblx0XHRpZiAoZ2FtZS5tb3VzZS50b3dlci50eXBlID09ICdsYXNlcicpXHQgICB0b3dlckN1Ym9pZHMgPSBjdWJvaWRzRnJvbUpzb24obGFzZXJUdXJyZXRKc29uKTtcclxuXHJcblx0XHRmb3IgKGxldCBpdCBvZiB0b3dlckN1Ym9pZHMpIHtcclxuXHRcdFx0aXQueCA9IGdhbWUubW91c2UudGlsZVg7XHJcblx0XHRcdGl0LnkgPSBnYW1lLm1vdXNlLnRpbGVZO1xyXG5cdFx0XHRpdC5hID0gMC42O1xyXG5cdFx0fVxyXG5cclxuXHRcdGN1Ym9pZHMucHVzaCguLi50b3dlckN1Ym9pZHMpO1xyXG5cdH1cclxuXHJcblx0Ly8gdG93ZXJzXHJcblx0Zm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnRvd2Vycy5sZW5ndGg7IHkrKykge1xyXG5cdFx0Zm9yIChsZXQgeCA9IDA7IHggPCBnYW1lLnRvd2Vyc1t5XS5sZW5ndGg7IHgrKykge1xyXG5cdFx0XHRsZXQgdHcgPSBnYW1lLnRvd2Vyc1t5XVt4XTtcclxuXHRcdFx0aWYgKHR3ID09PSBudWxsKSBjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCB0b3dlckN1Ym9pZHMgPSBudWxsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHR3LnR5cGUgPT0gJ2JhbGlzdGljJykgdG93ZXJDdWJvaWRzID0gY3Vib2lkc0Zyb21Kc29uKGJhbGlzdGljVHVycmV0SnNvbik7XHJcblx0XHRcdGlmICh0dy50eXBlID09ICdmbGFtZScpXHR0b3dlckN1Ym9pZHMgPSBjdWJvaWRzRnJvbUpzb24oZmxhbWVUdXJyZXRKc29uKTtcclxuXHRcdFx0aWYgKHR3LnR5cGUgPT0gJ2xhc2VyJylcdHRvd2VyQ3Vib2lkcyA9IGN1Ym9pZHNGcm9tSnNvbihsYXNlclR1cnJldEpzb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaXQgb2YgdG93ZXJDdWJvaWRzKSB7XHJcblx0XHRcdFx0aXQueCAgID0geDtcclxuXHRcdFx0XHRpdC55ICAgPSB5O1xyXG5cclxuXHRcdFx0XHRpZiAoaXQubmFtZSAhPSAnc3RhbmQnICYmIGl0Lm5hbWUgIT0gJ2Jhc2UnKSB7XHJcblx0XHRcdFx0XHRpdC5yb3QgPSB0dy5yb3Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjdWJvaWRzLnB1c2goLi4udG93ZXJDdWJvaWRzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVuZW1pZXNcclxuXHRmb3IgKGxldCBlbiBvZiBnYW1lLmVuZW1pZXMpIHtcclxuXHJcblx0XHQvLyBkdWNrLCBzbmV6YWtcclxuXHRcdGxldCBlbkN1Ym9pZHMgPSBbXTtcclxuXHJcblx0XHRpZiAoZW4udHlwZSA9PSAnZHVjaycpXHQgIGVuQ3Vib2lkcyA9IGN1Ym9pZHNGcm9tSnNvbihkdWNrSnNvbik7XHJcblx0XHRpZiAoZW4udHlwZSA9PSAnc25lemFrJykgIGVuQ3Vib2lkcyA9IGN1Ym9pZHNGcm9tSnNvbihzbmV6YWtKc29uKTtcclxuXHRcdGlmIChlbi50eXBlID09ICdidXRjaGVyJykgZW5DdWJvaWRzID0gY3Vib2lkc0Zyb21Kc29uKGJ1dGNoZXJKc29uKTtcclxuXHJcblx0XHQvLyBmcmllZCBkdWNrc1xyXG5cdFx0aWYgKGVuLnR5cGUgPT0gJ2R1Y2snKSB7XHJcblx0XHRcdGZvciAobGV0IGl0IG9mIGVuQ3Vib2lkcykge1xyXG5cdFx0XHRcdC8vIGRvbid0IGZyeSB0aGVtIGN1dGUgZXllc1xyXG5cdFx0XHRcdGlmIChpdC5uYW1lID09ICdleWVzJykgY29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBrID0gMSAtIE1hdGgubWluKGVuLmZyaWVkbmVzcywgMTAwKSAvIDEwMDtcclxuXHRcdFx0XHRpdC5yID0gayAqIGl0LnI7XHJcblx0XHRcdFx0aXQuZyA9IGsgKiBpdC5nO1xyXG5cdFx0XHRcdGl0LmIgPSBrICogaXQuYjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRsZXQgYWxwaGEgPSAxO1xyXG5cdFx0Ly8gZmFkZSBpbiBlbmVtaWVzIHdoZW4gdGhleSBjb21lIG91dCBvZiBwb3J0YWwgKGZpcnN0IDAuNSBvZiB0aGUgcGF0aClcclxuXHRcdGlmIChlbi5wYXRoUG9zIDwgMC41KSB7XHJcblx0XHRcdGFscGhhID0gTWF0aC5tYXgoMCwgZW4ucGF0aFBvcykgKiAyO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZmFkZSBvdXQgZW5lbWllcyB3aGVuIHRoYXQgZ28gaW4gcG9ydGFsIChsYXN0IDAuNSBvZiB0aGUgcGF0aClcclxuXHRcdGlmIChlbi5wYXRoUG9zID4gZ2FtZS5wYXRoTGVuIC0gMC41KSB7XHJcblx0XHRcdC8vIFRPRE8gdmlzdWFsIGJ1ZzogaGVhbHRoIGJhcnMgbWFrZSBibHVlIHBvcnRhbCB0cmFuc3BhcmVudFxyXG5cdFx0XHRhbHBoYSA9IDEgLSBNYXRoLm1pbihlbi5wYXRoUG9zIC0gKGdhbWUucGF0aExlbi0wLjUpLCAwLjUpICogMjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBpdCBvZiBlbkN1Ym9pZHMpIHtcclxuXHRcdFx0aXQueCAgID0gZW4ueDtcclxuXHRcdFx0aXQueSAgID0gZW4ueTtcclxuXHRcdFx0aXQueiAgID0gZW4uejtcclxuXHRcdFx0aXQucm90ID0gZW4ucm90O1xyXG5cdFx0XHRpdC5hICAgPSBhbHBoYTtcclxuXHRcdH1cclxuXHRcdGN1Ym9pZHMucHVzaCguLi5lbkN1Ym9pZHMpO1xyXG5cclxuXHRcdC8vIGhlYWx0aCBiYXJcclxuXHRcdGxldCBzaXplID0gMC42LzEwMDtcclxuXHRcdGxldCBncmVlbiA9IHtcclxuXHRcdFx0eDogZW4ueCwgeTogZW4ueSwgejogMCxcclxuXHRcdFx0bmFtZTogJ2dyZWVuJyxcclxuXHRcdFx0cHo6IC0xLjUsIHB5OiAwLFxyXG5cdFx0XHRzejogMTAvMjU2LCAgICBzeTogMTAvMjU2LFxyXG5cdFx0XHRzeDogZW4uaGVhbHRoICogc2l6ZSwgcHg6IChlbi5tYXhIZWFsdGggLSBlbi5oZWFsdGgpLzIgKiBzaXplLFxyXG5cdFx0XHRyOiAwLCBnOiAxLCBiOiAwLCBhOiAxLFxyXG5cdFx0XHRyb3Q6IE1hdGguUEkgLyA0LFxyXG5cdFx0fTtcclxuXHRcdGxldCByZWQgPSB7XHJcblx0XHRcdHg6IGVuLngsIHk6IGVuLnksIHo6IDAsXHJcblx0XHRcdG5hbWU6ICdncmVlbicsXHJcblx0XHRcdHB6OiAtMS41LCBweTogMCxcclxuXHRcdFx0c3o6IDEwLzI1NiwgIHN5OiAxMC8yNTYsXHJcblx0XHRcdHN4OiAoZW4ubWF4SGVhbHRoIC0gZW4uaGVhbHRoKSAqIHNpemUsIHB4OiAtZW4uaGVhbHRoLzIgKiBzaXplLFxyXG5cdFx0XHRyOiAxLCBnOiAwLCBiOiAwLCBhOiAxLFxyXG5cdFx0XHRyb3Q6IE1hdGguUEkgLyA0LFxyXG5cdFx0fTtcclxuXHJcblx0XHRjdWJvaWRzLnB1c2goZ3JlZW4sIHJlZCk7XHJcblx0fVxyXG5cdFxyXG5cdC8vIGVudmlyb25tZW50XHJcblx0Zm9yIChsZXQgZW4gb2YgZ2FtZS5lbnZpcm9ubWVudCkge1xyXG5cclxuXHRcdC8vIGJsdWVQb3J0YWwsIHJlZFBvcnRhbFxyXG5cdFx0bGV0IGVuQ3Vib2lkcyA9IFtdO1xyXG5cclxuXHRcdGlmIChlbi50eXBlID09ICdibHVlUG9ydGFsJykgZW5DdWJvaWRzID0gY3Vib2lkc0Zyb21Kc29uKGJsdWVQb3J0YWxKc29uKTtcclxuXHRcdGlmIChlbi50eXBlID09ICdyZWRQb3J0YWwnKSAgZW5DdWJvaWRzID0gY3Vib2lkc0Zyb21Kc29uKHJlZFBvcnRhbEpzb24pO1xyXG5cclxuXHRcdGZvciAobGV0IGl0IG9mIGVuQ3Vib2lkcykge1xyXG5cdFx0XHRpdC54ICAgPSBlbi54O1xyXG5cdFx0XHRpdC55ICAgPSBlbi55O1xyXG5cdFx0XHRpdC56ICAgPSBlbi56O1xyXG5cdFx0XHRpdC5yb3QgPSBlbi5yb3Q7XHJcblxyXG5cdFx0XHQvLyBtYWtlIHRoZSBvcGVuaW5nIHBhcnQgb2YgdGhlIHBvcnRhbCB0cmFuc3BhcmVudFxyXG5cdFx0XHRpZiAoZW4udHlwZSA9PSAnYmx1ZVBvcnRhbCcgfHwgZW4udHlwZSA9PSAncmVkUG9ydGFsJykge1xyXG5cdFx0XHRcdGlmIChpdC5uYW1lID09ICdwbGFzbWEnIHx8IGl0Lm5hbWUgPT0gJ3BhcnRpY2xlJyB8fCBpdC5uYW1lID09ICdwYXJ0aWNsZV9taXJyb3InKSB7XHJcblx0XHRcdFx0XHRpdC5hICAgPSAwLjY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICAgXHJcblx0XHR9XHJcblxyXG5cdFx0Y3Vib2lkcy5wdXNoKC4uLmVuQ3Vib2lkcyk7XHJcblx0fVxyXG5cclxuXHQvLyBidWxsZXRzXHJcblx0Zm9yIChsZXQgYmwgb2YgZ2FtZS5idWxsZXRzKSB7XHJcblx0XHQvLyBtaXNzaWxlXHJcblx0XHRsZXQgYmxDdWJvaWRzID0gW107XHJcblxyXG5cdFx0aWYgKGJsLnR5cGUgPT0gJ21pc3NpbGUnKSBibEN1Ym9pZHMgPSBjdWJvaWRzRnJvbUpzb24obWlzc2lsZUpzb24pO1xyXG5cclxuXHRcdGZvciAobGV0IGl0IG9mIGJsQ3Vib2lkcykge1xyXG5cdFx0XHRpdC54ICAgPSBibC54O1xyXG5cdFx0XHRpdC55ICAgPSBibC55O1xyXG5cdFx0XHRpdC56ICAgPSBibC56O1xyXG5cdFx0XHRpdC5yb3QgPSBibC5yb3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0Y3Vib2lkcy5wdXNoKC4uLmJsQ3Vib2lkcyk7XHJcblx0fVxyXG5cclxuXHQvLyBwYXJ0aWNsZXNcclxuXHRmb3IgKGxldCBwdCBvZiBnYW1lLnBhcnRpY2xlcykge1xyXG5cdFx0bGV0IGN1YiA9IHtcclxuXHRcdFx0bmFtZTogJ3BhcnRpY2xlJyxcclxuXHRcdFx0eDogcHQueCwgeTogcHQueSwgejogcHQueiwgcm90OiBwdC5yb3QsXHJcblx0XHRcdHN4OiBwdC5zeCwgc3k6IHB0LnN5LCBzejogcHQuc3osXHJcblx0XHRcdHB4OiAwLCBweTogMCwgcHo6IC1wdC5zei8yLFxyXG5cdFx0XHRyOiBwdC5yLCBnOiBwdC5nLCBiOiBwdC5iLCBhOiBwdC5hLFxyXG5cdFx0fVxyXG5cdFx0Y3Vib2lkcy5wdXNoKGN1Yik7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyQ3Vib2lkcyhjdWJvaWRzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZVJlbmRlcmVyKCkge1xyXG5cdGluaXRDdWJvaWRSZW5kZXJlcigpO1xyXG5cclxuXHQvLyBzZXQgY2FtZXJhLCBpc29tZXRyaWMgdmlld1xyXG5cdC8vIE5PVEUgdHJhbnNmb3JtYXRpb25zIGFyZSBhcHBsaWVkIGJvdHRvbSB1cFxyXG5cdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKTtcclxuXHJcblx0bGV0IG0gPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cdG1hdDQuc2NhbGUobSwgbSwgWzEyMCAvIGNhbnZhcy5jbGllbnRXaWR0aCwgMTIwIC8gY2FudmFzLmNsaWVudEhlaWdodCwgLTAuMDAxXSk7ICAvLyB0aWxlIHNpemUgMTIwcHhcclxuXHRtYXQ0LnJvdGF0ZVgobSwgbSwgTWF0aC5QSSAqICgtMS80KSk7ICAgLy8gdGlsdCB3b3JsZFxyXG5cdG1hdDQucm90YXRlWihtLCBtLCBNYXRoLlBJICogKC0xLzQpKTsgICAvLyByb3RhdGUgNDVkZWdcclxuXHRtYXQ0LnRyYW5zbGF0ZShtLCBtLCBbLTUuNSwgLTUuNSwgMF0pOyAgLy8gKDAsIDApIHRpbGUgdG8gKC01LjUsIC01LjUpIHBvc1xyXG5cdHNldFZpZXdNYXRyaXgobSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1Ym9pZHNGcm9tSnNvbihtb2RlbEpzb24pIHtcclxuXHRsZXQgY3Vib2lkcyA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBpdCBvZiBtb2RlbEpzb24pIHtcclxuXHRcdGN1Ym9pZHMucHVzaCh7XHJcblx0XHRcdG5hbWU6IGl0Lm5hbWUsXHJcblx0XHRcdHg6IDAsIHk6IDAsIHo6IDAsXHJcblx0XHRcdHN4OiBpdC5zeCAqIDEvMjU2LCBzeTogaXQuc3kgKiAxLzI1Niwgc3o6IGl0LnN6ICogMS8yNTYsXHJcblx0XHRcdHI6IGl0LnIvMjU1LCBnOiBpdC5nLzI1NSwgYjogaXQuYi8yNTUsIGE6IDEsXHJcblx0XHRcdHJvdDogMCxcclxuXHRcdFx0cHg6IC1pdC54ICogMS8yNTYsIHB5OiAtaXQueSAqIDEvMjU2LCBwejogLWl0LnogKiAxLzI1NixcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChpdC5taXJyb3IpIHtcclxuXHRcdFx0Y3Vib2lkcy5wdXNoKHtcclxuXHRcdFx0XHRuYW1lOiBpdC5uYW1lLFxyXG5cdFx0XHRcdHg6IDAsIHk6IDAsIHo6IDAsXHJcblx0XHRcdFx0c3g6IGl0LnN4ICogMS8yNTYsIHN5OiBpdC5zeSAqIDEvMjU2LCBzejogaXQuc3ogKiAxLzI1NixcclxuXHRcdFx0XHRyOiBpdC5yLzI1NSwgZzogaXQuZy8yNTUsIGI6IGl0LmIvMjU1LCBhOiAxLFxyXG5cdFx0XHRcdHJvdDogMCxcclxuXHRcdFx0XHRweDogK2l0LnggKiAxLzI1NiwgcHk6IC1pdC55ICogMS8yNTYsIHB6OiAtaXQueiAqIDEvMjU2LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBjdWJvaWRzO1xyXG59XHJcblxyXG4iLCJjb25zdCB2ZXJ0ZXggPSBgI3ZlcnNpb24gMzAwIGVzXHJcbmxheW91dCAobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFQb3NpdGlvbjtcclxubGF5b3V0IChsb2NhdGlvbiA9IDEpIGluIHZlYzMgYU5vcm1hbDtcclxubGF5b3V0IChsb2NhdGlvbiA9IDIpIGluIG1hdDQgYU12cE1hdHJpeDtcclxubGF5b3V0IChsb2NhdGlvbiA9IDYpIGluIG1hdDQgYU5vcm1hbE1hdHJpeDtcclxubGF5b3V0IChsb2NhdGlvbiA9IDEwKSBpbiB2ZWM0IGFDb2xvcjtcclxuXHJcbm91dCB2ZWM0IHZDb2xvcjtcclxub3V0IHZlYzMgdkxpZ2h0aW5nO1xyXG5cclxudm9pZCBtYWluKCkge1xyXG5cdGdsX1Bvc2l0aW9uID0gYU12cE1hdHJpeCAqIGFQb3NpdGlvbjtcclxuXHR2Q29sb3IgPSBhQ29sb3I7XHJcblxyXG5cdC8vIEFwcGx5IGxpZ2h0aW5nIGVmZmVjdFxyXG5cdGhpZ2hwIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjcsIDAuNywgMC43KTtcclxuXHRoaWdocCB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvciA9IHZlYzMoMC4zLCAwLjMsIDAuMyk7XHJcblxyXG5cdGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUoLXZlYzMoLTAuNywgKzAuMSwgLTAuNikpO1xyXG5cdC8vIGhpZ2hwIHZlYzMgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcclxuXHRcclxuXHRoaWdocCB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gYU5vcm1hbE1hdHJpeCAqIHZlYzQoYU5vcm1hbCwgMS4wKTtcclxuXHJcblx0aGlnaHAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xyXG5cdHZMaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3IgKiBkaXJlY3Rpb25hbCk7XHJcblxyXG59XHJcbmA7XHJcblxyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBgI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuaW4gdmVjNCB2Q29sb3I7XHJcbmluIHZlYzMgdkxpZ2h0aW5nO1xyXG5cclxub3V0IHZlYzQgb0NvbG9yO1xyXG5cclxudm9pZCBtYWluKCkge1xyXG5cdG9Db2xvciA9IHZlYzQodkNvbG9yLnJnYiAqIHZMaWdodGluZywgdkNvbG9yLmEpO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y3Vib2lkOiB7IHZlcnRleCwgZnJhZ21lbnQgfVxyXG59O1xyXG4iLCJpbXBvcnQge21hdDR9IGZyb20gJ2dsLW1hdHJpeCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR2FtZShnYW1lKSB7XHJcblx0Z2FtZS50aW1lKys7XHJcblx0aWYgKGdhbWUudGltZSAlIDUgPT09IDApIGdhbWUucGxheWVyLm1vbmV5Kys7XHJcblxyXG4gICAgLy8gbW91c2UgcG9zIHRvIHRpbGUgcG9zXHJcbiAgICAvLyB2aWV3TWF0cml4IGZyb20gcmVuZGVyLWdhbWUuanMgd2l0aCBhIHNjYWxlIGluc3RlYWQgb2Ygcm90YXRlWCBhbmQgaW52ZXJ0ZWRcclxuICAgIGxldCBtID0gbWF0NC5jcmVhdGUoKTtcclxuICAgIG1hdDQuc2NhbGUobSwgbSwgWzEyMC9nYW1lLndpZHRoLCAxMjAvZ2FtZS5oZWlnaHQsIC0wLjAwMV0pOyAgICAgIC8vIHRpbGUgc2l6ZSAxMjBcclxuICAgIG1hdDQuc2NhbGUobSwgbSwgWzEsIE1hdGguY29zKE1hdGguUEkgKiAoLTEvNCkpLCAxXSk7XHJcbiAgICBtYXQ0LnJvdGF0ZVoobSwgbSwgTWF0aC5QSSAqICgtMS80KSk7ICAgLy8gcm90YXRlIDQ1ZGVnXHJcbiAgICBtYXQ0LnRyYW5zbGF0ZShtLCBtLCBbLTUuNSwgLTUuNSwgMF0pOyAgLy8gKDAsIDApIHRpbGUgdG8gKC01LjUsIC01LjUpIHBvc1xyXG4gICAgbWF0NC5pbnZlcnQobSwgbSk7XHJcblxyXG4gICAgbGV0IG5vcm1hbE1vdXNlWCA9ICAgMiooZ2FtZS5tb3VzZS54IC8gZ2FtZS53aWR0aCkgIC0gMTsgICAvLyBiZXR3ZWVuIC0xIGFuZCAxXHJcbiAgICBsZXQgbm9ybWFsTW91c2VZID0gLSgyKihnYW1lLm1vdXNlLnkgLyBnYW1lLmhlaWdodCkgLSAxKTsgIC8vIGJldHdlZW4gLTEgYW5kIDFcclxuXHJcbiAgICBsZXQgbm9ybWFsTW91c2VDbGlja1ggPSAgIDIqKGdhbWUubW91c2UuY2xpY2tYIC8gZ2FtZS53aWR0aCkgIC0gMTsgICAvLyBiZXR3ZWVuIC0xIGFuZCAxXHJcbiAgICBsZXQgbm9ybWFsTW91c2VDbGlja1kgPSAtKDIqKGdhbWUubW91c2UuY2xpY2tZIC8gZ2FtZS5oZWlnaHQpIC0gMSk7ICAvLyBiZXR3ZWVuIC0xIGFuZCAxXHJcblxyXG4gICAgbGV0IGEgPSBbbm9ybWFsTW91c2VYLCBub3JtYWxNb3VzZVksIDAsIDEsXHJcbiAgICAgICAgICAgICBub3JtYWxNb3VzZUNsaWNrWCwgbm9ybWFsTW91c2VDbGlja1ksIDAsIDEsXHJcbiAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgMCwgMCwgMCwgMCxdO1xyXG5cclxuICAgIG1hdDQubXVsKGEsIG0sIGEpO1xyXG5cclxuICAgIGdhbWUubW91c2UudGlsZVggPSBNYXRoLmZsb29yKGFbMF0rMC41KTtcclxuICAgIGdhbWUubW91c2UudGlsZVkgPSBNYXRoLmZsb29yKGFbMV0rMC41KTtcclxuICAgIGdhbWUubW91c2UuY2xpY2tlZFRpbGVYID0gTWF0aC5mbG9vcihhWzRdKzAuNSk7XHJcbiAgICBnYW1lLm1vdXNlLmNsaWNrZWRUaWxlWSA9IE1hdGguZmxvb3IoYVs1XSswLjUpO1xyXG5cclxuXHQvLyB0b3dlcnNcclxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGdhbWUudG93ZXJzLmxlbmd0aDsgeSsrKSB7XHJcblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGdhbWUudG93ZXJzW3ldLmxlbmd0aDsgeCsrKSB7XHJcblx0XHRcdGxldCB0dyA9IGdhbWUudG93ZXJzW3ldW3hdO1xyXG5cdFx0XHRpZiAodHcgPT09IG51bGwpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Ly8gbG9jayBvblxyXG5cdFx0XHR0dy50YXJnZXRFbiA9IG51bGw7XHJcblx0XHRcdC8vIHRhcmdldCBoaWdoZXN0IHBhdGhQb3MgZW5lbXkgaW4gcmFuZ2VcclxuXHRcdFx0bGV0IFJBTkdFID0gMztcclxuXHRcdFx0Zm9yIChsZXQgZW4gb2YgZ2FtZS5lbmVtaWVzKSB7XHJcblx0XHRcdFx0aWYgKGRpc3Qoe3gseSx6OjB9LCBlbikgPiBSQU5HRSkgY29udGludWU7XHJcblx0XHRcdFx0aWYgKCF0dy50YXJnZXRFbiB8fCBlbi5wYXRoUG9zID4gdHcudGFyZ2V0RW4ucGF0aFBvcykge1xyXG5cdFx0XHRcdFx0dHcudGFyZ2V0RW4gPSBlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNhbGN1bGF0ZSB0YXJnZXRSb3RcclxuXHRcdFx0aWYgKHR3LnRhcmdldEVuKSB7XHJcblx0XHRcdFx0dHcudGFyZ2V0Um90ID0gTWF0aC5hdGFuMih0dy50YXJnZXRFbi55IC0geSwgdHcudGFyZ2V0RW4ueCAtIHgpICsgTWF0aC5QSSAvIDI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJvdGF0ZSB0b3dhcmRzIHRhcmdldFJvdCBhdCBST1RfU1BFRURcclxuXHRcdFx0bGV0IFJPVF9TUEVFRCA9IDMgLyA2MDtcclxuXHJcblx0XHRcdGxldCBhID0gYW5nbGVCZXR3ZWVuKHR3LnRhcmdldFJvdCwgdHcucm90KTtcclxuXHRcdFx0aWYgKE1hdGguYWJzKGEpIDwgUk9UX1NQRUVEKSB7XHJcblx0XHRcdFx0dHcucm90ID0gdHcudGFyZ2V0Um90O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHR3LnJvdCArPSBNYXRoLnNpZ24oYSkgKiBST1RfU1BFRUQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHNob290aW5nXHJcblx0XHRcdGlmICh0dy50YXJnZXRFbiAmJiB0dy5yb3QgPT0gdHcudGFyZ2V0Um90ICYmIHR3LmNvb2xkb3duID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0dy50eXBlID09ICdiYWxpc3RpYycgfHwgdHcudHlwZSA9PSAnbGFzZXInKSB7XHJcbiAgICBcdFx0XHRcdGdhbWUuYnVsbGV0cy5wdXNoKHtcclxuICAgIFx0XHRcdFx0XHR0eXBlOiAnbWlzc2lsZScsXHJcbiAgICBcdFx0XHRcdFx0eCwgeSwgejogMC41LFxyXG4gICAgXHRcdFx0XHRcdHJvdDogMCxcclxuICAgIFx0XHRcdFx0XHR0YXJnZXRFbjogdHcudGFyZ2V0RW4sXHJcbiAgICBcdFx0XHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3LmNvb2xkb3duID0gNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR3LnR5cGUgPT0gJ2ZsYW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZsYW1lIG9yaWdpblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4byA9IHgsIHlvID0geSwgem8gPSAwLjU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHhvICs9IE1hdGguY29zKHR3LnJvdCAtIE1hdGguUEkgLyAyKSAqIDAuNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgeW8gKz0gTWF0aC5zaW4odHcucm90IC0gTWF0aC5QSSAvIDIpICogMC40MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IEZMQU1FX1ZFTE9DSVRZID0gMC4xO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhbWVSb3QgPSB0dy5yb3QgLSBNYXRoLlBJIC8gMiArIChNYXRoLnJhbmRvbSgpIC0gMC41KSooTWF0aC5yYW5kb20oKSAtIDAuNSkqMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZ4ID0gTWF0aC5jb3MoZmxhbWVSb3QpICogRkxBTUVfVkVMT0NJVFk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZ5ID0gTWF0aC5zaW4oZmxhbWVSb3QpICogRkxBTUVfVkVMT0NJVFk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZ6ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzI1MiwgMTY1LCAzXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzI1MiwgNjksIDNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMjUyLCAyMDIsIDNdLFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGNvbG9yc1t+fihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBnYW1lLnBhcnRpY2xlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZsYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogeG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6OiB6byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdngsIHZ5LCB2eixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3R2OiAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeDogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeTogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzejogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByOiBjb2xvclswXS8yNTYsIGc6IGNvbG9yWzFdLzI1NiwgYjogY29sb3JbMl0vMjU2LCBhOiAyLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHR3LnRhcmdldEVuLmhlYWx0aCAgICAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHcudGFyZ2V0RW4uZnJpZWRuZXNzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNvb2xkb3duXHJcblx0XHRcdGlmICh0dy5jb29sZG93biA+IDApIHR3LmNvb2xkb3duLS07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBidWxsZXRzXHJcblx0Zm9yIChsZXQgYmwgb2YgZ2FtZS5idWxsZXRzKSB7XHJcblx0XHQvLyBtaXNzaWxlXHJcblx0XHRpZiAoYmwudGFyZ2V0RW4pIHtcclxuXHRcdFx0Ly8gY2FsY3VsYXRlIGRpcmVjdGlvblxyXG5cdFx0XHRsZXQgZHggPSBibC50YXJnZXRFbi54IC0gYmwueDtcclxuXHRcdFx0bGV0IGR5ID0gYmwudGFyZ2V0RW4ueSAtIGJsLnk7XHJcblx0XHRcdGxldCBkeiA9IGJsLnRhcmdldEVuLnogLSBibC56O1xyXG5cdFx0XHRsZXQgZCAgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSArIGR6KmR6KTtcclxuXHRcdFx0ZHggLz0gZDtcclxuXHRcdFx0ZHkgLz0gZDtcclxuXHRcdFx0ZHogLz0gZDtcclxuXHJcblx0XHRcdGxldCBCVUxMRVRfVkVMT0NJVFkgPSAwLjE7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgcG9zL3JvdFxyXG5cdFx0XHRibC54ICs9IGR4ICogQlVMTEVUX1ZFTE9DSVRZO1xyXG5cdFx0XHRibC55ICs9IGR5ICogQlVMTEVUX1ZFTE9DSVRZO1xyXG5cdFx0XHRibC56ICs9IGR6ICogQlVMTEVUX1ZFTE9DSVRZO1xyXG5cdFx0XHRibC5yb3QgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKyBNYXRoLlBJLzI7XHJcblxyXG5cdFx0XHQvLyBvbiBjb2xsaXNpb25cclxuXHRcdFx0aWYgKGQgPCAwLjEpIHtcclxuXHRcdFx0XHRnYW1lLmJ1bGxldHMuc3BsaWNlKGdhbWUuYnVsbGV0cy5pbmRleE9mKGJsKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBibC50YXJnZXRFbi5oZWFsdGggLT0gMjA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVuZW1pZXNcclxuXHRmb3IgKGxldCBlbiBvZiBnYW1lLmVuZW1pZXMpIHtcclxuXHJcblx0XHQvLyBkdWNrXHJcblx0XHRpZiAoZW4udHlwZSA9PSAnZHVjaycpIHtcclxuXHRcdFx0ZW4ucGF0aFBvcyArPSAyLjAgLyA2MDtcclxuXHJcblx0XHRcdC8vIHBvc2l0aW9uIG9uIHBhdGhcclxuXHRcdFx0bGV0IFt4LCAgeV0gID0gcG9zaXRpb25PblBhdGgoZW4ucGF0aFBvcywgZ2FtZS5wYXRoKTtcclxuXHRcdFx0bGV0IFt4MiwgeTJdID0gcG9zaXRpb25PblBhdGgoZW4ucGF0aFBvcyArIDEsIGdhbWUucGF0aCk7XHJcblx0XHRcdGVuLnggICA9IHg7XHJcblx0XHRcdGVuLnkgICA9IHk7XHJcblx0XHRcdGVuLnJvdCA9IE1hdGguYXRhbjIoeTIteSwgeDIteCkgKyBNYXRoLlBJLzI7XHJcblxyXG4gICAgICAgICAgICBpZiAoeTIgPT0geSAmJiB4MiA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBlbi5yb3QgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0XHQvLyBqdW1waW5nXHJcblx0XHRcdGlmIChlbi56IDw9IDApIHtcclxuXHRcdFx0XHRlbi56ICA9IDA7XHJcblx0XHRcdFx0ZW4udnogPSAwLjEwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhcHBseSB2ZWxvY2l0eVxyXG5cdFx0XHRlbi56ICArPSBlbi52ejtcclxuXHJcblx0XHRcdC8vIGdyYXZpdHlcclxuXHRcdFx0ZW4udnogLT0gMC4wMTA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc25lemFrXHJcblx0XHRpZiAoZW4udHlwZSA9PSAnc25lemFrJyB8fCBlbi50eXBlID09ICdidXRjaGVyJykge1xyXG5cdFx0XHRlbi5wYXRoUG9zICs9IDIuMCAvIDYwO1xyXG5cclxuXHRcdFx0Ly8gcG9zaXRpb24gb24gcGF0aFxyXG5cdFx0XHRsZXQgW3gsICB5XSAgPSBwb3NpdGlvbk9uUGF0aChlbi5wYXRoUG9zLCBnYW1lLnBhdGgpO1xyXG5cdFx0XHRsZXQgW3gyLCB5Ml0gPSBwb3NpdGlvbk9uUGF0aChlbi5wYXRoUG9zICsgMSwgZ2FtZS5wYXRoKTtcclxuXHRcdFx0ZW4ueCAgID0geDtcclxuXHRcdFx0ZW4ueSAgID0geTtcclxuXHRcdFx0ZW4ucm90ID0gTWF0aC5hdGFuMih5Mi15LCB4Mi14KSArIE1hdGguUEkvMjtcclxuICAgICAgICAgICAgaWYgKHkyID09IHkgJiYgeDIgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgZW4ucm90ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAvLyBlbmVteSBkZWF0aFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZW4gPSBnYW1lLmVuZW1pZXNbaV07XHJcblxyXG4gICAgICAgIGlmIChlbi5oZWFsdGggPD0gMCkgeyAgLy8gb24gZGVhdGhcclxuICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgaS0tO1xyXG5cclxuICAgICAgICAgICAgLy8gc3Bhd24gZGVicmlzXHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IFswLCAwLCAwXVxyXG4gICAgICAgICAgICBsZXQgZGVuc2l0eSA9IDM7XHJcbiAgICAgICAgICAgIGlmIChlbi50eXBlID09ICdzbmV6YWsnKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFsyMTcvMjU2LCAyMTgvMjU2LCAyNDIvMjU2XTtcclxuICAgICAgICAgICAgICAgIGRlbnNpdHkgPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbi50eXBlID09ICdkdWNrJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSAxIC0gTWF0aC5taW4oZW4uZnJpZWRuZXNzLCAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBbayAqIDIzMi8yNTYsIGsgKiAyMjAvMjU2LCBrICogNTkvMjU2XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW4udHlwZSA9PSAnYnV0Y2hlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gWzE1My8yNTYsIDAvMjU2LCAwLzI1Nl07XHJcbiAgICAgICAgICAgICAgICBkZW5zaXR5ID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnYW1lLnBhcnRpY2xlcy5wdXNoKC4uLmRlYnJpc1BhcnRpY2xlcyhlbi54LCBlbi55LCBlbi56LCAuLi5jb2xvciwgZGVuc2l0eSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW4ucGF0aFBvcyA+PSBnYW1lLnBhdGhMZW4pIHsgIC8vIG9uIHBvcnRhbCBwYXNzXHJcbiAgICAgICAgICAgIGdhbWUuZW5lbWllcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIGktLTtcclxuXHJcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmhlYWx0aCAtPSAxMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGFydGljbGVzXHJcbiAgICBmb3IgKGxldCBwdCBvZiBnYW1lLnBhcnRpY2xlcykge1xyXG5cclxuICAgICAgICBpZiAocHQudHlwZSA9PSAnZGVicmlzJykge1xyXG4gICAgICAgICAgICAvLyBib3VuY2VcclxuICAgICAgICAgICAgbGV0IEJPVU5DRV9GQUNUT1IgPSAwLjU7XHJcbiAgICAgICAgICAgIGlmIChwdC56IDw9IDAuMDEgJiYgcHQueCA+PSAtMC41ICYmIHB0LnggPD0gMTEuNSAmJiBwdC55ID49IC0wLjUgJiYgcHQueSA8PSAxMS41KSB7ICAvLyBIQVJEQ09ERUQgICBcclxuXHJcbiAgICAgICAgICAgICAgICBwdC56ICA9IDA7XHJcbiAgICAgICAgICAgICAgICBwdC52eiA9IC1wdC52eiAqIEJPVU5DRV9GQUNUT1I7XHJcblxyXG4gICAgICAgICAgICAgICAgcHQudnggPSBwdC52eCAqIEJPVU5DRV9GQUNUT1I7XHJcbiAgICAgICAgICAgICAgICBwdC52eSA9IHB0LnZ5ICogQk9VTkNFX0ZBQ1RPUjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IE1hdGguc3FydChwdC52eCpwdC52eCArIHB0LnZ5KnB0LnZ5ICsgcHQudnoqcHQudnopO1xyXG5cclxuICAgICAgICAgICAgICAgIHB0LnJvdHYgLz0gMjtcclxuICAgICAgICAgICAgICAgIHB0LnJvdHYgKz0gMiooTWF0aC5yYW5kb20oKSAtIDAuNSkqMiooTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB2O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgICAgIGlmIChwdC56ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHQudnogLT0gMC4wMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHBvc1xyXG4gICAgICAgIHB0LnggKz0gcHQudng7XHJcbiAgICAgICAgcHQueSArPSBwdC52eTtcclxuICAgICAgICBwdC56ICs9IHB0LnZ6O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgcm90XHJcbiAgICAgICAgcHQucm90ICs9IHB0LnJvdHY7XHJcblxyXG4gICAgICAgIC8vIGRlY2F5XHJcbiAgICAgICAgaWYgKHB0LnR5cGUgPT0gJ2RlYnJpcycpIHB0LmEgLT0gKDEvNikvNjA7XHJcbiAgICAgICAgaWYgKHB0LnR5cGUgPT0gJ2ZsYW1lJykgIHB0LmEgLT0gNC82MFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBwYXJ0aWNsZSBkZWF0aFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBwdCA9IGdhbWUucGFydGljbGVzW2ldO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgd2hlbiBhIDw9IDBcclxuICAgICAgICBpZiAocHQuYSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGdhbWUucGFydGljbGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gdWlcclxuXHQvLyBUT0RPOiBtYXliZSBkb24ndCB1cGRhdGUgdGhlc2UgdmFsdWVzIGV2ZXJ5IGZyYW1lP1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25leScpLmlubmVySFRNTCAgICAgID0gZ2FtZS5wbGF5ZXIubW9uZXk7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aCcpLmlubmVySFRNTCAgICAgPSBnYW1lLnBsYXllci5oZWFsdGg7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWJhdC1sb2cnKS5pbm5lckhUTUwgPSBnYW1lLnVpLmNvbWJhdExvZztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l0aW9uT25QYXRoKHAsIHBhdGgpIHtcclxuXHRpZiAocCA8IDApIHJldHVybiBbLTEwMCwgLTEwMF07XHJcblxyXG5cdGxldCBwcmV2SXQgPSBwYXRoWzBdO1xyXG5cclxuXHRmb3IgKGxldCBpdCBvZiBwYXRoKSB7XHJcblx0XHQvLyBjYWxjdWxhdGUgc2VnbWVudCBsZW5ndGhcclxuXHRcdGxldCBkID0gTWF0aC5zcXJ0KChpdFswXSAtIHByZXZJdFswXSkqKGl0WzBdIC0gcHJldkl0WzBdKSArIChpdFsxXSAtIHByZXZJdFsxXSkqKGl0WzFdIC0gcHJldkl0WzFdKSk7XHJcblxyXG5cdFx0Ly8gaW50ZXJwb2xhdGUgKHgsIHkpIGJldHdlZW4gcGF0aCB2ZXJ0aWNlc1xyXG5cdFx0aWYgKHAgLSBkIDwgMCkge1xyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdHByZXZJdFswXSAqICgxIC0gcC9kKSArIGl0WzBdICogcC9kLFxyXG5cdFx0XHRcdHByZXZJdFsxXSAqICgxIC0gcC9kKSArIGl0WzFdICogcC9kLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZXZJdCA9IGl0O1xyXG5cdFx0cCAtPSBkO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdHBhdGhbcGF0aC5sZW5ndGgtMV1bMF0sXHJcblx0XHRwYXRoW3BhdGgubGVuZ3RoLTFdWzFdLFxyXG5cdF07XHJcbn1cclxuXHJcblxyXG4vLyBzbWFsbGVzdCByb3QgbmVlZGVkIHRvIGFsaWduIGEgdG8gYlxyXG5mdW5jdGlvbiBhbmdsZUJldHdlZW4oYSwgYikge1xyXG5cdHJldHVybiBNYXRoLmF0YW4yKE1hdGguc2luKGEtYiksIE1hdGguY29zKGEtYikpO1xyXG59XHJcblxyXG4vLyBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHMgOiB7eCx5LHp9XHJcbmZ1bmN0aW9uIGRpc3QoYSwgYikge1xyXG5cdHJldHVybiBNYXRoLnNxcnQoKGEueCAtIGIueCkqKGEueCAtIGIueCkgKyAoYS55IC0gYi55KSooYS55IC0gYi55KSArIChhLnogLSBiLnopKihhLnogLSBiLnopKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlYnJpc1BhcnRpY2xlcyh4LCB5LCB6LCByLCBnLCBiLCBkKSB7XHJcbiAgICBsZXQgQ1VCRV9ERU5TSVRZICAgICAgPSBkO1xyXG4gICAgbGV0IENVQkVfU0laRSAgICAgICAgID0gMC4yO1xyXG4gICAgbGV0IFBBUlRJQ0xFX1NJWkUgICAgID0gMC4xO1xyXG4gICAgbGV0IFBBUlRJQ0xFX1ZFTE9DSVRZID0gMjAvNjA7XHJcbiAgICBsZXQgUk9UQVRJT05fU0NBTEUgICAgPSAwLjM7XHJcblxyXG4gICAgbGV0IHBhcnRpY2xlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAtQ1VCRV9ERU5TSVRZLzIgKyAwLjU7IGkgPCBDVUJFX0RFTlNJVFkvMiArIDAuNTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IC1DVUJFX0RFTlNJVFkvMiArIDAuNTsgaiA8IENVQkVfREVOU0lUWS8yICsgMC41OyBqKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IC1DVUJFX0RFTlNJVFkvMiArIDAuNTsgayA8IENVQkVfREVOU0lUWS8yICsgMC41OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpKmkgKyBqKmogKyBrKmsgPiAoQ1VCRV9ERU5TSVRZLzIpKihDVUJFX0RFTlNJVFkvMikpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkyID0gaSArIE1hdGgucmFuZG9tKCkgLSAwLjU7IFxyXG4gICAgICAgICAgICAgICAgbGV0IGoyID0gaiArIE1hdGgucmFuZG9tKCkgLSAwLjU7IFxyXG4gICAgICAgICAgICAgICAgbGV0IGsyID0gayArIE1hdGgucmFuZG9tKCkgLSAwLjU7IFxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWJyaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IHggKyBpMiAqIENVQkVfU0laRSAvIENVQkVfREVOU0lUWSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB5ICsgajIgKiBDVUJFX1NJWkUgLyBDVUJFX0RFTlNJVFksXHJcbiAgICAgICAgICAgICAgICAgICAgejogeiArIGsyICogQ1VCRV9TSVpFIC8gQ1VCRV9ERU5TSVRZLFxyXG4gICAgICAgICAgICAgICAgICAgIHZ4OiBpMiAqIFBBUlRJQ0xFX1ZFTE9DSVRZIC8gQ1VCRV9ERU5TSVRZLFxyXG4gICAgICAgICAgICAgICAgICAgIHZ5OiBqMiAqIFBBUlRJQ0xFX1ZFTE9DSVRZIC8gQ1VCRV9ERU5TSVRZLFxyXG4gICAgICAgICAgICAgICAgICAgIHZ6OiBrMiAqIFBBUlRJQ0xFX1ZFTE9DSVRZIC8gQ1VCRV9ERU5TSVRZLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdDogMCxcclxuICAgICAgICAgICAgICAgICAgICByb3R2OiAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBST1RBVElPTl9TQ0FMRSxcclxuICAgICAgICAgICAgICAgICAgICBzeDogUEFSVElDTEVfU0laRSpNYXRoLmZsb29yKDIuNSpNYXRoLnJhbmRvbSgpICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3k6IFBBUlRJQ0xFX1NJWkUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3o6IFBBUlRJQ0xFX1NJWkUsXHJcbiAgICAgICAgICAgICAgICAgICAgciwgZywgYiwgYTogMixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJ0aWNsZXM7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=