import React from 'react';
import styles from './PopUpMobile.module.sass';
import Logo from '../LogoMobile/LogoMobile';
import ItemMobile from '../../atoms/ItemMobile/ItemMobile';

function PopUpMobile(props) {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<ul className={styles.lists} onClick={props.menuToggle}>
				<Logo title='Strona Główna' className='secondaryFont' />
				<ItemMobile title='Sypialnia' className='secondaryFont' />
				<ItemMobile title='Salon' className='secondaryFont' />
				<ItemMobile title='Kuchnia' className='secondaryFont' />
				<ItemMobile title='Wyprzedaż' className='primaryFont' />
			</ul>
		</div>
	);
}

export default PopUpMobile;
