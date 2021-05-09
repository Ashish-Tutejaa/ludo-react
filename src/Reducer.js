const init = {
	turn: 'GREEN',
	active: [],
	dice: null,
	safe: [14, 24, 39, 65],
	inactive: {
		GREEN: 4,
		BLUE: 4,
		RED: 4,
		YELLOW: 4,
	},
};

const Reducer = (state, action) => {
	switch (action.type) {
		case 'roll':
			return Object.assign({}, state, { dice: action.value });
		default:
			return state;
	}
};

export { init, Reducer };
