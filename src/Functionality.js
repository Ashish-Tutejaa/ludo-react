const boards = [];

for (let i = 0, c = 0; i < 4; i++) {
	let tx = [];
	for (let j = 0; j < (i & 1 ? 6 : 3); j++) {
		let ty = [];
		for (let k = 0; k < (i & 1 ? 3 : 6); k++) {
			ty.push(c);
			c++;
		}
		tx.push(ty);
	}
	boards.push(tx);
}

export { boards };
