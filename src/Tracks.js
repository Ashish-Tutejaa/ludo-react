import React from 'react';

const Track = ({ number }) => {
	const tracks = [];
	for (let i = 0; i < 18; i++) {
		tracks.push(<div className="box"></div>);
	}
	return <div className={`track track-${number & 1 ? 'odd' : 'even'}`}>{tracks}</div>;
};

export default Track;
