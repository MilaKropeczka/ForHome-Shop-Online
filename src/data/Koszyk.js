import React from 'react';
import Cart from '../components/Cart/Item/Item';
import Row from 'react-bootstrap/Row';
import { arrItems } from './Items';

function Koszyk() {
	const checkCategory = () => {
		const maps = arrItems.map((el) => {
			let sum;
			if (el.cart === true) {
				if (!el.newPrice === false) {
					sum = el.amount * el.newPrice;
				} else {
					sum = el.amount * el.price;
				}
			}
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
