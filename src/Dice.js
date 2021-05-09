import React, { useRef } from 'react';

const Dice = ({ dispatch }) => {
	const headerRef = useRef(null);
	const handleRoll = () => {
		console.log(headerRef.current);
		let roll = Math.floor(1 + ((Math.random() * 1000) % 6));
		headerRef.current.innerText = roll;
		dispatch({ type: 'roll', value: roll });
	};

	return (
		<div className="dice">
			<button onClick={handleRoll}>Roll Dice</button>
			<h1 ref={headerRef}>--</h1>
		</div>
	);
};

export { Dice };
