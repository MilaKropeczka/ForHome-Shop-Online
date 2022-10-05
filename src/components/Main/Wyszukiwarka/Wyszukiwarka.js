import React from 'react';
import Box from '../Box/Box';

function Wyszukiwarka(props) {
	const mapItems = props.handleState.map((el) => {
		if (el.fav === true) {
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

export default Wyszukiwarka;
