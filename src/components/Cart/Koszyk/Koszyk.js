import React from 'react';
import Item from '../Item/Item';
import Row from 'react-bootstrap/Row';

function Kuchnia(props) {
	const handleState = props.handleState;
	const addAmount = props.addAmount;
	let totalSum;
	let sum;
	let sumArr = [];
	const mapItems = handleState.map((el) => {
		if (el.cart === true) {
			if (!el.newPrice === false) {
				sum = el.amount * el.newPrice;
				sumArr.pop(sum);
			} else {
				sum = el.amount * el.price;
				sumArr.push(sum);
			}

			totalSum = 0;
			for (let i = 0; i < sumArr.length; i++) {
				totalSum += sumArr[i];
			}
			totalSum = parseFloat(totalSum).toFixed(2);

			return (
				<div key={el.id} name={el.id}>
					<hr />
					<Row className='text-center'>
						<Item
							{...el}
							sum={sum}
							handleState={handleState}
							addAmount={addAmount}
						/>
					</Row>
				</div>
			);
		}
	});
	return mapItems;
}

export default Kuchnia;
