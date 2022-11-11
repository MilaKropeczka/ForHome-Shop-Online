import React from 'react';
import styles from './IsLogged.module.sass';

function IsLogged() {
	return (
		<div className={styles.box}>
			<h4 className={styles.fontTitle}>Witaj w ForHome!</h4>
			<p className={styles.fontText}>
				Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
				powiadomienia!
			</p>
			<button
				className={`${styles.button} ${styles.primary} ${styles.font} mt-lg-0 mx-lg-2 my-4`}>
				zaloguj się
			</button>
			<button
				className={`${styles.button} ${styles.secondary} ${styles.font} mt-lg-0 mx-lg-2 my-4`}>
				dołącz do nas!
			</button>
		</div>
	);
}

export default IsLogged;
