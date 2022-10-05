import React from 'react';
import Box from '../Box/Box';

function Wyprzedaz(props) {
	const mapItems = props.handleState.map((el) => {
		if (el.status === 'wyprzedaz') {
			return (
				<Box
					key={el.id}
					{...el}
					handleState={props.handleState}
					setHandleState={props.setHandleState}
				/>
			);
		}
	});
	return mapItems;
}

export default Wyprzedaz;
