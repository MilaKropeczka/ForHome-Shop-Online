import React from 'react';
import styles from './Ico.module.sass';
import { Link } from 'react-router-dom';

function Ico(props) {
	return (
		<Link to={props.link}>
			<i
				className={`${props.className} ${styles.secondaryFont} ${styles.sizeFont}`}></i>
		</Link>
		// <a href={props.link}>
		// 	<i
		// 		className={`${props.className} ${styles.secondaryFont} ${styles.sizeFont}`}></i>
		// </a>
	);
}

export default Ico;
