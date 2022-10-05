import React from 'react';
import Box from '../Box/Box';

function Salon(props) {
	const mapItems = props.handleState.map((el) => {
		if (el.category === 'Salon') {
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

export default Salon;
