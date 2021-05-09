import React from 'react';

const Track = ({ number, board, set }) => {
	const tracks = [];
	for (let j = 0; j < (number & 1 ? 6 : 3); j++) {
		for (let k = 0; k < (number & 1 ? 3 : 6); k++) {
			tracks.push(
				<div onClick={() => set(p => [...p, board[j][k]])} className="box">
					{board[j][k]}
				</div>
			);
		}
	}
	return <div className={`track track-${number & 1 ? 'odd' : 'even'}`}>{tracks}</div>;
};

export default Track;
