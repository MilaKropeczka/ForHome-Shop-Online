import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
import styles from './Item.module.sass';
import React, { useState } from 'react';
import { useEffect } from 'react';

function Item(props) {
	const [amount, setAmount] = useState(props.amount);

	let amountState = amount;

	const removeWithCart = () => {
		console.log(`usuń`);
	};

	const addAmount = (e) => {
		e.preventDefault();
		if (amountState < 9 && amountState >= 1) {
			amountState = amount + 1;
			setAmount(amountState);
		}
	};

	const removeAmount = (e) => {
		e.preventDefault();
		if (amountState <= 9 && amountState > 1) {
			amountState = amount - 1;
			setAmount(amountState);
		}
	};

	return (
		<>
			<Col>
				<Img img={props.imgSmall} />
			</Col>
			<Col
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
			</Col>
		</>
	);
}

export default Item;
