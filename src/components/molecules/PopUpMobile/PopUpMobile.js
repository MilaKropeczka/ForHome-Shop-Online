import React from 'react';
import styles from './PopUpMobile.module.sass';
import Logo from '../LogoMobile/LogoMobile';
import Item from '../Item/Item';

function PopUpMobile(props) {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<ul className={styles.lists} onClick={props.menuToggle}>
				<Logo title='Strona Główna' className='secondaryFont' />
				<Item title='Sypialnia' className='secondaryFont' />
				<Item title='Salon' className='secondaryFont' />
				<Item title='Kuchnia' className='secondaryFont' />
				<Item title='Wyprzedaż' className='primaryFont' />
			</ul>
		</div>
	);
}

export default PopUpMobile;
