import React from 'react';
import styles from './Logowanie.module.sass';

function Logowanie() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.box}>
					<div className={styles.heading}>Zaloguj się</div>
					<div className={styles.main}>
						<input placeholder='Login' />
						<br />
						<input type='password' placeholder='Hasło' />
					</div>
					<div className={styles.footer}>
						<button
							className={`${styles.button} mt-lg-0 mx-lg-2 my-4`}>
							Zaloguj się
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Logowanie;
