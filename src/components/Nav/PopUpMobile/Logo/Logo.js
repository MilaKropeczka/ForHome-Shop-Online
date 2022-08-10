import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.sass';

function Logo(props) {
	return (
		<li className='d-block d-sm-none'>
			<Link to={``} className={styles[props.className]}>
				{props.title}
			</Link>
		</li>
	);
}

export default Logo;
