import React from 'react';
import Box from '../components/Main/Box/Box';
import img from '../assets/Mobile/mug.jpg';

function Kuchnia() {
	const arrItems = [
		{
			status: 'hit',
			title: 'Kubek zimowy biały',
			price: '23.99 zł',
			img: `${img}`,
			shortContent: 'Kubek zimowy biały',
			id: 1,
		},
	];

	const maps = arrItems.map((el) => {
		return <Box key={el.id} {...el} />;
	});
	return <>{maps}</>;
}

export default Kuchnia;
