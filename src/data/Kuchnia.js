import React from 'react';
import Box from '../components/Main/Box/Box';
import { arrItems } from './Items';

function Kuchnia() {
	const checkCategory = () => {
		const maps = arrItems.map((el) => {
			if (el.category === 'Kuchnia') {
				return <Box key={el.id} {...el} />;
			}
		});
		return maps;
	};

	return <>{checkCategory()};</>;
}

export default Kuchnia;
