import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
import styles from './Item.module.sass';
import React, { useState } from 'react';
import { useRef } from 'react';

function Item(props) {
	const addAmount = props.addAmount;
	const removeAmount = props.removeAmount;
	// const amount = props.amount;
	// const ref = useRef(null);
	// const el = props.el;
	// const ref = props.ref;
	let number = props.amount;

	// const ref = useRef(null);
	// let number = 1;
	// function add(e) {
	// 	e.preventDefault();
	// 	number = ref.current.value;
	// 	number = parseFloat(number);
	// 	number += 1;
	// 	ref.current.value = number;
	// 	console.log(`${number} = ${typeof number}`);
	// }

	const removeWithCart = (e) => {
		console.log(`usuń`);
		console.log(props.amount);
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
							className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
							onClick={removeAmount}
							name={props.id}>
							<i
								className={`fa-solid fa-angle-left ${styles.anim}`}
								name={props.id}></i>
						</button>
						<input
							ref={props.refState}
							className={`m-lg-2 m-1 m-sm-0 px-4 px-sm-3 px-md-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={number}></input>
						<button
							className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
							onClick={addAmount}
							name={props.id}>
							<i
								className={`fa-solid fa-angle-right ${styles.anim}`}
								name={props.id}></i>
						</button>
					</form>
					{/* <form>
						<button
							className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
							onClick={add}>
							+
						</button>
						<input
							ref={ref}
							className={`m-lg-2 m-1 m-sm-0 px-4 px-sm-3 px-md-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={number}
						/>
					</form> */}
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
