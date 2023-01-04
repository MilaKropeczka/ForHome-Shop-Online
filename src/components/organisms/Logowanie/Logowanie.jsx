import React from 'react';
import styles from './Logowanie.module.sass';

function Logowanie() {
	return (
		<>
			<div className={styles.wrapper}>
				<form className={styles.box}>
					<div className={styles.heading}>Zaloguj się</div>
					<div className={styles.main}>
						<input placeholder='Login' autoComplete='username' />
						<br />
						<input
							type='password'
							placeholder='Hasło'
							autoComplete='current-password'
						/>
					</div>
					<div className={styles.footer}>
						<button
							className={`${styles.button} mt-lg-0 mx-lg-2 my-4`}>
							Zaloguj się
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Logowanie;
