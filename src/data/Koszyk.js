import React from 'react';
import Cart from '../components/Cart/Item/Item';
import Row from 'react-bootstrap/Row';
import { arrItems } from './Items';

// function Koszyk() {
export let totalSum;

export function Koszyk() {
	// let totalSum;

	const checkCategory = () => {
		let sum;
		let sumArr = [];
		const maps = arrItems.map((el) => {
			if (el.cart === true) {
				if (!el.newPrice === false) {
					sum = el.amount * el.newPrice;
					sumArr.pop(sum);
				} else {
					sum = el.amount * el.price;
					sumArr.push(sum);
				}
			}

			totalSum = 0;
			for (let i = 0; i < sumArr.length; i++) {
				totalSum += sumArr[i];
			}
			totalSum = parseFloat(totalSum).toFixed(2);

			if (el.cart === true) {
				return (
					<div key={el.id}>
						<hr />
						<Row className='text-center'>
							<Cart {...el} sum={sum} />
						</Row>
					</div>
				);
			}
		});
		return maps;
	};
	return <>{checkCategory()}</>;
}
// export function Koszyk() {
// 	// let totalSum;

// 	const checkCategory = () => {
// 		let sum;
// 		let sumArr = [];
// 		const maps = arrItems.map((el) => {
// 			if (el.cart === true) {
// 				if (!el.newPrice === false) {
// 					sum = el.amount * el.newPrice;
// 					sumArr.pop(sum);
// 				} else {
// 					sum = el.amount * el.price;
// 					sumArr.push(sum);
// 				}
// 			}

// 			totalSum = 0;
// 			for (let i = 0; i < sumArr.length; i++) {
// 				totalSum += sumArr[i];
// 			}
// 			totalSum = parseFloat(totalSum).toFixed(2);

// 			if (el.cart === true) {
// 				return (
// 					<div key={el.id}>
// 						<hr />
// 						<Row className='text-center'>
// 							<Cart {...el} sum={sum} />
// 						</Row>
// 					</div>
// 				);
// 			}
// 		});
// 		return maps;
// 	};
// 	return <>{checkCategory()}</>;
// }

// export default Koszyk;
