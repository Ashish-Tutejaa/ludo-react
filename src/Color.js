import { useEffect, useState } from 'react';

const Piece = ({ color }) => {
	return (
		<div className="circle">
			<div className={`piece ${color}`}></div>
		</div>
	);
};

export const Color = ({ color, inactive, move, turn }) => {
	let init = [];
	for (let i = 0; i < inactive[color]; i++) init.push(1);
	while (init.length < 4) init.push(0);

	const [hightlight, setHighlight] = useState(false);

	useEffect(() => {
		if ((move === 1 || move === 6) && turn === color) {
			console.log('you rolled a ', move);
		}
	}, [move]);

	return (
		<>
			<div className={`color-outer ${color.toLowerCase()}`}>
				<div className="color-inner">
					{init.map(ele => (
						<div className={`circle ${hightlight ? 'highlight' : ''} ${ele ? color.toLowerCase() : ''}`}></div>
					))}
				</div>
			</div>
			{/* <button
				onClick={() =>
					setPlayers(p => {
						let t = [...p];
						t.shift();
						t.push(0);
						return t;
					})
				}>
				Decrease
			</button>
			<button
				onClick={() =>
					setPlayers(p => {
						let t = [...p];
						t.pop();
						t.unshift(1);
						return t;
					})
				}>
				Increase
			</button> */}
		</>
	);
};
