import Item from '../ItemCart/Item';
import Row from 'react-bootstrap/Row';

let totalSum;

function Koszyk(props) {
	let sum;
	let sumArr = [];
	const mapItems = props.handleState.map((el) => {
		if (el.cart === true) {
			if (!el.newPrice === false) {
				sum = el.amount * el.newPrice;
				sumArr.push(sum);
			} else {
				sum = el.amount * el.price;
				sumArr.push(sum);
			}
			sum = parseFloat(sum).toFixed(2);

			totalSum = 0;
			for (let i = 0; i < sumArr.length; i++) {
				totalSum += sumArr[i];
			}
			totalSum = parseFloat(totalSum).toFixed(2);

			return (
				<div key={el.id}>
					<hr />
					<Row className='text-center'>
						<Item
							{...el}
							sum={sum}
							handleState={props.handleState}
							setHandleState={props.setHandleState}
							addAmount={props.addAmount}
							removeAmount={props.removeAmount}
							removeCart={props.removeCart}
							el={el}
						/>
					</Row>
				</div>
			);
		}
	});
	return mapItems;
}

export { Koszyk, totalSum };
