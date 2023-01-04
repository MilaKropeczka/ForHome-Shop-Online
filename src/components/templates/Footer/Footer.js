import React from 'react';
import styles from './Footer.module.sass';

function Footer() {
	return (
		<footer className={`text-center my-5 pb-5 ${styles.fontSize}`}>
			&copy; 2022 Created by MilaKropeczka
		</footer>
	);
}

export default Footer;
