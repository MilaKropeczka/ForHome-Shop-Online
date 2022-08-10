import React from 'react';
import Box from '../components/Main/Box/Box';
import img3 from '../assets/Mobile/sofa.jpg';

function Salon() {
	const arrItems = [
		{
			status: 'hit',
			title: 'Sofa biała',
			price: '523.99 zł',
			img: `${img3}`,
			shortContent: 'Sofa biała',
			id: 1,
		},
	];

	const maps = arrItems.map((el) => {
		return <Box key={el.id} {...el} />;
	});
	return <>{maps}</>;
}

export default Salon;
