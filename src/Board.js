import React, { useReducer, useState } from 'react';
import { Color } from './Color';
import Track from './Tracks';
import { boards } from './Functionality';
import { init, Reducer } from './Reducer';
import { Dice } from './Dice';

const colors = { GREEN: 0, YELLOW: 1, RED: 2, BLUE: 3 };

export const Board = () => {
	const [state, dispatch] = useReducer(Reducer, init);
	const [sel, setSel] = useState([]);

	const toColor = {
		move: state.dice,
		inactive: state.inactive,
		turn: state.turn,
	};

	return (
		<>
			<div className="board">
				<Color {...toColor} color="GREEN" />
				<Track number={1} set={setSel} board={boards[1]} />
				<Color {...toColor} color="YELLOW" />
				<Track number={2} set={setSel} board={boards[0]} />
				<div className="center"></div>
				<Track number={4} set={setSel} board={boards[2]} />
				<Color {...toColor} color="RED" />
				<Track number={3} set={setSel} board={boards[3]} />
				<Color {...toColor} color="BLUE" />
			</div>
			<Dice dispatch={dispatch} />
			<div>
				{sel.map(ele => (
					<p>{ele}</p>
				))}
			</div>
		</>
	);
};
