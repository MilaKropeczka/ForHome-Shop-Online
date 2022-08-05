import React from 'react';
import styles from './Box.module.sass';

function Box() {
	return (
		<div className={`${styles.box}`}>
			<div className={styles.img}></div>
			<div className={styles.main}>
				<h4>Trampki modne Nike</h4>
				<p>79.99 zł</p>
			</div>
			<div className={styles.buy}>Dodaj do koszyka</div>
		</div>
	);
}

export default Box;
