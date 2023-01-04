import React from 'react';
import img from '../../../assets/Logo.png';
import styles from './LogoDeskop.module.sass';
import { Link } from 'react-router-dom';

function LogoDeskop() {
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

export default LogoDeskop;
