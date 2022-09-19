import React from 'react';
import Box from '../Box/Box';

function Wyprzedaz(props) {
	// const mapItems = () => {
	// const handleState = props.handleState;
	// console.log(props.handleState);
	// const mapa = props.handleState.map((el) => {
	const maps = props.handleState.map((el) => {
		// console.log(el.status);
		if (el.status === 'wyprzedaz') {
			return <Box key={el.id} {...el} />;
			// console.log(el);
			// return <h1>Test</h1>;
		}
	});
	// };
	return maps;
	// return mapItems;
}

export default Wyprzedaz;
