import React from 'react';
import Cart from '../components/Cart/Item/Item';
import Row from 'react-bootstrap/Row';
import { arrItems } from './Items';

function Koszyk() {
	let totalSum;
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
					<>
						<hr />
						<Row className='text-center'>
							<Cart key={el.id} {...el} sum={sum} />
						</Row>
					</>
				);
			}
		});
		return maps;
	};
	return <>{checkCategory()}</>;
}

export default Koszyk;
