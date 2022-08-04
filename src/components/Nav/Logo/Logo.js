import React from 'react';
import img from './Logo.png';
import styles from './Logo.module.sass';

function Logo() {
	return (
		<>
			<img src={img} alt='Logo' className={styles.logo} />
		</>
	);
}

export default Logo;
