import React from 'react';
import Box from '../components/Main/Box/Box';
import img1 from '../assets/Mobile/shoes.jpg';
import img2 from '../assets/Mobile/czapka.jpg';
import img3 from '../assets/Mobile/pillow2.jpg';
import img4 from '../assets/Mobile/mug2.jpg';

function Bestseller() {
	const arrItems = [
		{
			status: 'hit',
			title: 'Poduszka czerwona wzory',
			price: '23.99 zł',
			img: `${img3}`,
			shortContent: 'Poduszka czerwona wzory',
			id: 1,
		},
		{
			status: 'hit',
			title: 'Czapka na lato',
			price: '79.99 zł',
			img: `${img2}`,
			shortContent: 'Czapka na lato',
			id: 2,
		},
		{
			status: 'wyprzedaz',
			statusFont: 'through',
			title: 'Buty modne Nike',
			price: '360.99 zł',
			newPrice: '230.99 zł',
			img: `${img1}`,
			shortContent: 'Buty modne Nike',
			id: 3,
		},
		{
			status: 'hit',
			title: 'Kubek czerwony love',
			price: '13.99 zł',
			img: `${img4}`,
			shortContent: 'Kubek czerwony love',
			id: 4,
		},
	];

	const maps = arrItems.map((el) => {
		return <Box key={el.id} {...el} />;
	});
	return <>{maps}</>;
}

export default Bestseller;
