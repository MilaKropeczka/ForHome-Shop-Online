import React from 'react';
import Box from '../Box/Box';

function Sypialnia(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.category === 'Sypialnia') {
			return <Box key={el.id} {...el} />;
		}
	});
	return mapItems;
}

export default Sypialnia;
