export function fitToSquare(s) {
	let cubs = window.getCuboids();

	let maxSize = 0;
	for (let it of cubs) {
		for (let p of 'xyz'.split('')) {
			maxSize = Math.max(maxSize, Math.abs(it[p]) + Math.abs(it['s'+p]));
		}
	}

	for (let it of cubs) {
		for (let p of ['x', 'y', 'z', 'sx', 'sy', 'sz']) {
			it[p] *= s / maxSize;
		}
	}

	window.setCuboids(cubs);
}
