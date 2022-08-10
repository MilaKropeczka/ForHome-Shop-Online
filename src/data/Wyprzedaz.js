import React from 'react';
import Box from '../components/Main/Box/Box';
import img from '../assets/Mobile/sofa.jpg';
import img1 from '../assets/Mobile/mug2.jpg';
import img2 from '../assets/Mobile/pillow2.jpg';

function Wyprzedaz() {
	const arrItems = [
		{
			status: 'wyprzedaz',
			statusFont: 'through',
			title: 'Modna biała sofa',
			price: '559.99 zł',
			newPrice: '438.99 zł',
			img: `${img}`,
			shortContent: 'Buty modne Nike',
			id: 3,
		},
		{
			status: 'wyprzedaz',
			statusFont: 'through',
			title: 'Kubek czerwony serce',
			price: '59.99 zł',
			newPrice: '29.99 zł',
			img: `${img1}`,
			shortContent: 'Kubek czerwony serce',
			id: 3,
		},
		{
			status: 'wyprzedaz',
			statusFont: 'through',
			title: 'Poduszka czerwona wzory',
			price: '32.99 zł',
			newPrice: '23.99',
			img: `${img2}`,
			shortContent: 'Poduszka czerwona wzory',
			id: 3,
		},
	];

	const maps = arrItems.map((el) => {
		return <Box key={el.id} {...el} />;
	});
	return <>{maps}</>;
}

export default Wyprzedaz;
