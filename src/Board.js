import React from 'react';
import { Color } from './Color';
import Track from './Tracks';

const colors = ['green', 'yellow', 'red', 'blue'];

export const Board = () => {
	return (
		<div className="board">
			<Color color="green" />
			<Track number={1} />
			<Color color="yellow" />
			<Track number={2} />
			<div className="center"></div>
			<Track number={4} />
			<Color color="red" />
			<Track number={3} />
			<Color color="blue" />
		</div>
	);
};
