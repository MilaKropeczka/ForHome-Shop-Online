import React from 'react';
import styles from './NavDeskop.module.sass';

function NavDeskop() {
	return (
		<>
			<div className='d-inline-block mx-4'>
				<a href='#' className={styles.secondaryFont}>
					Sypialnia
				</a>
			</div>
			<div className='d-inline-block mx-4'>
				<a href='#' className={styles.secondaryFont}>
					Salon
				</a>
			</div>
			<div className='d-inline-block mx-4'>
				<a href='#' className={styles.secondaryFont}>
					Kuchnia
				</a>
			</div>
			<div className={'d-inline-block mx-4'}>
				<a href='#' className={styles.primaryFont}>
					Wyprzedaż
				</a>
			</div>
		</>
	);
}

export default NavDeskop;
