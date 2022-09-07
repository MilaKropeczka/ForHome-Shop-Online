// import React from 'react';
import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
// import styles from './Item.module.sass';
// import { arrItems } from '../../../data/Items';
import React, { useState } from 'react';
import { useEffect } from 'react';

// function Item(props) {
function Item() {
	// const [amount, setAmount] = useState(props.amount);
	// const [amount, setAmount] = useState(false);

	// const removeWithCart = () => {
	// 	console.log(`usuń`);
	// };

	// const addAmount = (e) => {
	// 	e.preventDefault();
	// 	if (amount < 9 && amount >= 1) {
	// 		setAmount(amount + 1);
	// 	}
	// 	setAmount(true);
	// 	console.log(amount);
	// };

	// const removeAmount = (e) => {
	// 	e.preventDefault();
	// 	if (amount <= 9 && amount > 1) {
	// 		setAmount(amount - 1);
	// 	}
	// 	console.log(amount);
	// };
	const [count, setCount] = useState(false);

	console.log(count);
	function checkCount() {
		const countTest = true;
		setCount(countTest);
		console.log(countTest);
	}

	return (
		<>
			<Col>
				<button
					className='m-lg-2 m-1 px-4 py-3 rounded-3'
					onClick={checkCount}>
					PLUS
				</button>

				{/* <Img img={props.imgSmall} /> */}
			</Col>
			{/* <Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontTitle} my-5 ${styles.bold}`}>
				{props.title}
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize} mb-5`}>
				<div>
					<form>
						Ilość: <br />
						<button
							className='m-lg-2 m-1 px-4 py-3 rounded-3'
							onClick={removeAmount}>
							<i
								className={`fa-solid fa-angle-left ${styles.anim}`}></i>
						</button>
						<input
							className={`m-lg-2 m-1 px-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={amount}></input>
						<button
							className='m-lg-2 m-1 px-4 py-3 rounded-3'
							onClick={addAmount}>
							<i
								className={`fa-solid fa-angle-right ${styles.anim}`}></i>
						</button>
					</form>
				</div>
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<p>
					Cena: <br />
					<span className={styles.color}>{props.sum} zł</span>
				</p>
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<i
					className={`fa-solid fa-trash-can ${styles.ico}`}
					onClick={removeWithCart}></i>
			</Col> */}
		</>
	);
}

export default Item;
