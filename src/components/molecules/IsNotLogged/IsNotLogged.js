import React from 'react';
import styles from './IsNotLogged.module.sass';
import { Link } from 'react-router-dom';

function IsNotLogged(props) {
	let setClick = props.setClick;
	return (
		<div className={styles.box}>
			<h4 className={styles.fontTitle}>Witaj w ForHome!</h4>
			<p className={styles.fontText}>
				Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
				powiadomienia!
			</p>
			<Link
				to={`/logowanie`}
				className={`${styles.button} ${styles.primary} ${styles.font} mt-lg-0 mx-lg-2 my-4`}
				onClick={() => setClick(false)}>
				zaloguj się
			</Link>
			<br />
			<Link
				to={`/rejestracja`}
				className={`${styles.button} ${styles.secondary} ${styles.font} mt-lg-0 mx-lg-2 my-4`}
				onClick={() => setClick(false)}>
				dołącz do nas!
			</Link>
		</div>
	);
}

export default IsNotLogged;
