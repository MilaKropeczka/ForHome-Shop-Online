import React from 'react';
import Box from '../Box/Box';

function Salon(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.category === 'Salon') {
			return <Box key={el.id} {...el} />;
		}
	});
	return mapItems;
}

export default Salon;
