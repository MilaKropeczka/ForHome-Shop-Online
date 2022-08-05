import React from 'react';
import styles from './Box.module.sass';
import Col from 'react-bootstrap/Col';

function Box(props) {
	return (
		<Col>
			<div className={`${styles.box}`}>
				<div className={styles.img}></div>
				<div className={styles.main}>
					<p className={styles.status + ' ' + styles[props.status]}>
						{props.status}
					</p>
					<h4>{props.title}</h4>
					<p className={styles[props.statusFont]}>{props.price}</p>
					<p className={styles.newPrice}>{props.newPrice}</p>
				</div>
				<div className={styles.buy}>Dodaj do koszyka</div>
			</div>
		</Col>
	);
}

export default Box;
