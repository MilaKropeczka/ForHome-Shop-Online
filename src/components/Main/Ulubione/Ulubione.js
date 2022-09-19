import React from 'react';
import Box from '../Box/Box';

function Ulubione(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.fav === true) {
			return <Box key={el.id} {...el} />;
		}
	});
	return mapItems;
}

export default Ulubione;
