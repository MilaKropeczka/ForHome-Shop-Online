import React from 'react';
import styles from './Rejestracja.module.sass';

function Rejestracja() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.box}>
					<div className={styles.heading}>Zarejestruj się</div>
					<div className={styles.main}>
						<input placeholder='Login' />
						<br />
						<input type='email' placeholder='E-mail' />
						<br />
						<input type='password' placeholder='Hasło' />
						<br />
						<input type='checkbox' />
						<label>
							Oświadczam, że znam i akceptuję postanowienia <br />
							Regulaminu Allegro.
						</label>
					</div>
					<div className={styles.footer}>
						<button
							className={`${styles.button} mt-lg-0 mx-lg-2 my-4`}>
							zarejestruj się
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Rejestracja;
