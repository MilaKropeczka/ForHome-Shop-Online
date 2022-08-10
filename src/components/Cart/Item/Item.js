import React from 'react';
import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
import img from '../../../assets/Mobile/pillow2.jpg';
import styles from './Item.module.sass';

function Item(props) {
	return (
		<>
			<Col>
				<Img img={`${img}`} />
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize} mb-4 ${styles.bold}`}>
				{props.title}
			</Col>
			<Col
				xs={4}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize} mb-4`}>
				Ilość: <br /> {props.amount}
			</Col>
			<Col
				xs={4}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize} mb-4`}>
				Cena: <br /> {props.price}
			</Col>
			<Col
				xs={4}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<i className={`fa-solid fa-trash-can ${styles.ico}`}></i>
			</Col>
		</>
	);
}

export default Item;
