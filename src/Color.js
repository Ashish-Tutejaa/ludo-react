import { useState } from 'react';

const Piece = ({ color }) => {
	return (
		<div className="circle">
			<div className={`piece ${color}`}></div>
		</div>
	);
};

export const Color = ({ color }) => {
	console.log(color);
	const [players, setPlayers] = useState([1, 1, 1, 1]);

	return (
		<>
			<div className={`color-outer ${color}`}>
				<div className="color-inner">
					{players.map(ele => (
						<div className={`circle ${ele ? color : ''}`}></div>
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
