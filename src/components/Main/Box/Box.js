import React, { useState } from 'react';
import styles from './Box.module.sass';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Box(props) {
	let checkNotification = false;
	const [notification, setNotification] = useState(checkNotification);

	function addItem() {
		let updateItems = [...props.handleState];
		let editItems = updateItems[props.id];
		editItems.cart = true;
		editItems.amount += 1;
		updateItems.splice(props.id, 1, editItems);
		props.setHandleState(updateItems);

		setNotification(true);
	}

	function addFavorite() {
		let updateItems = [...props.handleState];
		let editItems = updateItems[props.id];
		if (editItems.fav === true) {
			editItems.fav = false;
		} else {
			editItems.fav = true;
		}
		updateItems.splice(props.id, 1, editItems);
		props.setHandleState(updateItems);
	}

	function Notification() {
		return (
			<>
				<div className={styles.shadow}></div>
				<div className={styles.infoBox}>
					<div className={styles.check}>
						<i className={`fa-solid fa-circle-check`}></i>
					</div>
					<div className={styles.xmark} onClick={closeNotification}>
						<i className={`fa-solid fa-xmark`}></i>
					</div>
					<div className={styles.addItem}>
						Nowy przedmiot został dodany do Twojego koszyka.
					</div>
					<div className={styles.button}>
						{/* <button className={styles.btn1}>Pokaż koszyk</button> */}
						<button className={styles.btn1}>
							<Link to={`Koszyk`} className={styles.white}>
								Pokaż koszyk
							</Link>
						</button>
						{/* <Link to={`Koszyk`} className={styles.btn1}>
						Pokaż koszyk
					</Link> */}
						<button
							className={styles.btn2}
							onClick={closeNotification}>
							Kontynuuj zakupy
						</button>
					</div>
				</div>
			</>
		);
	}

	function closeNotification() {
		setNotification(false);
	}

	return (
		<>
			{/* {Notification()} */}
			{notification === true ? Notification() : null}
			<Col>
				<div className={`${styles.box}`}>
					<div className={styles.img}>
						<i
							className={`fa-solid fa-heart ${styles.ico} ${
								props.fav === true ? styles.icoTrue : styles.ico
							}`}
							onClick={addFavorite}></i>
						<img src={props.imgSmall} alt={props.shortContent} />
					</div>
					<div className={styles.main}>
						<p
							className={
								styles.status + ' ' + styles[props.status]
							}>
							{props.status}
						</p>
						<h4>{props.title}</h4>
						<p className={styles[props.statusFont]}>
							{props.price} zł
						</p>
						<p className={styles.newPrice}>
							{props.newPrice ? props.newPrice + ` zł` : null}
						</p>
					</div>
					{/* <div className={styles.buy} onClick={Notification}> */}
					<div className={styles.buy} onClick={addItem}>
						Dodaj do koszyka
					</div>
				</div>
			</Col>
		</>
	);
}

export default Box;
