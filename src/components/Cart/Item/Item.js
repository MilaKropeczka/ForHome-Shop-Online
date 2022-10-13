import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
import styles from './Item.module.sass';
import React, { useState } from 'react';

function Item(props) {
	// const [handle, setHandle] = useState(props.amount);
	const setHandle = useState(props.amount);

	function handleChange(e) {
		setHandle({ value: e.target.value });
	}

	function checkIfZeroCart() {
		for (const el of props.handleState) {
			if (el.cart === true) {
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
										onClick={props.removeAmount}
										name={props.id}>
										<i
											className={`fa-solid fa-angle-left ${styles.anim}`}
											name={props.id}></i>
									</button>
									<input
										className={`m-lg-2 m-1 m-sm-0 px-4 px-sm-3 px-md-4 py-3 rounded-3 ${styles.backgroundColor}`}
										value={props.amount}
										onChange={handleChange}></input>
									<button
										className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
										onClick={props.addAmount}
										name={props.id}>
										<i
											className={`fa-solid fa-angle-right ${styles.anim}`}
											name={props.id}></i>
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
								<span className={styles.color}>
									{props.sum} zł
								</span>
							</p>
						</Col>
						<Col
							xs={12}
							sm
							className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
							<i
								className={`fa-solid fa-trash-can ${styles.ico}`}
								onClick={props.removeCart}
								name={props.id}></i>
						</Col>
					</>
				);
			}
		}
	}
	return checkIfZeroCart();
}

export default Item;
