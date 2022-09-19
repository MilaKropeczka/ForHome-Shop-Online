import React from 'react';
import Box from '../Box/Box';

function Kuchnia(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.category === 'Kuchnia') {
			return <Box key={el.id} {...el} />;
		}
	});
	return mapItems;
}

export default Kuchnia;
