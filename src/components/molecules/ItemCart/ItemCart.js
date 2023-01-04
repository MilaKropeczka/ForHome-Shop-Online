import Col from 'react-bootstrap/Col';
import Img from '../Img/Img';
import styles from './ItemCart.module.sass';
import React, { useState } from 'react';
import Amount from '../Amount/Amount';

function ItemCart(props) {
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
							<Amount
								handleChange={handleChange}
								id={props.id}
								removeAmount={props.removeAmount}
								addAmount={props.addAmount}
								amount={props.amount}
							/>
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

export default ItemCart;
