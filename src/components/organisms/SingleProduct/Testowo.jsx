import { useState } from 'react';
import styles from './SingleProduct.module.sass';
import { products, setProducts } from '../../templates/App';

// const Testowo = () => {

export let xyz;

export const Testowo = () => {
	const options = [
		{ value: 1, text: '1' },
		{ value: 2, text: '2' },
		{ value: 3, text: '3' },
		{ value: 4, text: '4' },
		{ value: 5, text: '5' },
		{ value: 6, text: '6' },
		{ value: 7, text: '7' },
		{ value: 8, text: '8' },
		{ value: 9, text: '9' },
	];

	const [selected, setSelected] = useState(options[0].value);

	const handleChange = (event) => {
		// console.log(event.target.value);
		// amountToCart = event.target.value;
		setSelected(event.target.value);
		// let amountToCart = event.target.value;
		// console.log(amountToCart);
		// amountToCart = 1;
		xyz = event.target.value;
		// console.log(xyz);
	};

	return (
		<div>
			<select
				value={selected}
				onChange={handleChange}
				className={`d-inline-block ${styles.select}`}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
};

// export default Testowo;
