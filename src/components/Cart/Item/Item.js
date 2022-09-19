import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Img from './Img/Img';
import styles from './Item.module.sass';
import React, { useState } from 'react';
import { useRef } from 'react';

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
			ref.current.value = amountState;
		}
	};

	const removeAmount = (e) => {
		e.preventDefault();
		if (amountState <= 9 && amountState > 1) {
			amountState = amount - 1;
			setAmount(amountState);
			ref.current.value = amountState;
		}
	};

	const ref = useRef(null);

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
							className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
							onClick={removeAmount}>
							<i
								className={`fa-solid fa-angle-left ${styles.anim}`}></i>
						</button>
						<input
							ref={ref}
							className={`m-lg-2 m-1 m-sm-0 px-4 px-sm-3 px-md-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={amountState}></input>
						{/* <input
							ref={ref}
							className={`m-lg-2 m-1 px-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={amountState}></input> */}
						<button
							className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
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
				sm={1}
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<i
					className={`fa-solid fa-trash-can ${styles.ico}`}
					onClick={removeWithCart}></i>
			</Col>
		</>
	);
}

export default Item;
