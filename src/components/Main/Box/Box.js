import React from 'react';
import styles from './Box.module.sass';
import Col from 'react-bootstrap/Col';

function Box(props) {
	function addItem() {
		let updateItems = [...props.handleState];
		let editItems = updateItems[props.id];
		editItems.cart = true;
		editItems.amount += 1;
		updateItems.splice(props.id, 1, editItems);
		props.setHandleState(updateItems);
	}
	return (
		<Col>
			<div className={`${styles.box}`}>
				<div className={styles.img}>
					<i className={`fa-solid fa-heart ${styles.ico}`}></i>
					<img src={props.imgSmall} alt={props.shortContent} />
				</div>
				<div className={styles.main}>
					<p className={styles.status + ' ' + styles[props.status]}>
						{props.status}
					</p>
					<h4>{props.title}</h4>
					<p className={styles[props.statusFont]}>{props.price} zł</p>
					<p className={styles.newPrice}>
						{props.newPrice ? props.newPrice + ` zł` : null}
					</p>
				</div>
				<div className={styles.buy} onClick={addItem}>
					Dodaj do koszyka
				</div>
			</div>
		</Col>
	);
}

export default Box;
