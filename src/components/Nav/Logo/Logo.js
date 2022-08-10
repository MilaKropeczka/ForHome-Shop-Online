import React from 'react';
import img from './Logo.png';
import styles from './Logo.module.sass';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<>
			<Link to=''>
				<div className={styles.shadow}>
					<img src={img} alt='Logo' className={styles.logo} />
				</div>
			</Link>
		</>
	);
}

export default Logo;
