import React from 'react';
import img from './Logo.png';
import styles from './Logo.module.sass';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<>
			<Link to='ForHome'>
				<img src={img} alt='Logo' className={styles.logo} />
			</Link>
		</>
	);
}

export default Logo;
