import React from 'react';
import Box from '../Box/Box';

function Sypialnia(props) {
	const mapItems = props.handleState.map((el) => {
		if (el.category === 'Sypialnia') {
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

export default Sypialnia;
