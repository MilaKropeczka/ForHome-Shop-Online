import React from 'react';
import Col from 'react-bootstrap/Col';
import styles from './Item.module.sass';

function Item(props) {
	return (
		<>
			<Col xs={12} sm={4} className={`${styles.box} py-5 my-5`}>
				<i className={`${props.ico} ${styles.fontSize} p-2`}></i>
				<p>{props.title}</p>
			</Col>
		</>
	);
}

export default Item;
