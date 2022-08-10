import React from 'react';
import Box from '../components/Main/Box/Box';
import img from '../assets/Mobile/pillow2.jpg';

function Ulubione() {
	const arrItems = [
		{
			status: 'hit',
			title: 'Poduszka czerwona wzory',
			price: '23.99 zł',
			img: `${img}`,
			shortContent: 'Poduszka czerwona wzory',
			id: 1,
		},
	];

	const maps = arrItems.map((el) => {
		return <Box key={el.id} {...el} />;
	});
	return <>{maps}</>;
}

export default Ulubione;
