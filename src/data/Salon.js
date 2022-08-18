import React from 'react';
import Box from '../components/Main/Box/Box';
import { arrItems } from './Items';

function Salon() {
	const checkCategory = () => {
		const maps = arrItems.map((el) => {
			if (el.category === 'Salon') {
				return <Box key={el.id} {...el} />;
			}
		});
		return maps;
	};

	return <>{checkCategory()};</>;
}

export default Salon;
