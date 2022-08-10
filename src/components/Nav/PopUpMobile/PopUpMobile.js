import React from 'react';
import styles from './PopUpMobile.module.sass';
import Item from './Item/Item';
import { Link } from 'react-router-dom';

function PopUpMobile() {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<ul className={styles.lists}>
				<li>
					<Link to={``} className='secondaryFont'>
						Strona Główna
					</Link>
				</li>
				<Item title='Sypialnia' className='secondaryFont' />
				<Item title='Salon' className='secondaryFont' />
				<Item title='Kuchnia' className='secondaryFont' />
				<Item title='Wyprzedaż' className='primaryFont' />
			</ul>
		</div>
	);
}

export default PopUpMobile;
