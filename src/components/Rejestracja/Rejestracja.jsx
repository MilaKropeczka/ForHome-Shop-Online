import React from 'react';
import styles from './Rejestracja.module.sass';

function Rejestracja() {
	return (
		<>
			<div className={styles.wrapper}>
				<form className={styles.box}>
					<div className={styles.heading}>Zarejestruj się</div>
					<div className={styles.main}>
						<input placeholder='Login' autoComplete='name' />
						<br />
						<input
							type='email'
							placeholder='E-mail'
							autoComplete='email'
						/>
						<br />
						<input
							type='password'
							placeholder='Hasło'
							autoComplete='new-password'
						/>
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
				</form>
			</div>
		</>
	);
}

export default Rejestracja;
