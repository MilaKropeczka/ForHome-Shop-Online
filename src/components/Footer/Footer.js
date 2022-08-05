import React from 'react';
import styles from './Footer.module.sass';

function Footer() {
	return (
		<div className={`text-center my-5 pb-5 ${styles.fontSize}`}>
			&copy; 2022 Created by MilaKropeczka
		</div>
	);
}

export default Footer;
