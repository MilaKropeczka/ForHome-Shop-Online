import React from 'react';
import styles from './Ico.module.sass';
import { Link } from 'react-router-dom';
import Notification from './Notification/Notification';

function Ico(props) {
	return (
		<Link to={props.link} className='position-relative'>
			<i
				className={`${props.className} ${styles.secondaryFont} ${styles.sizeFont}`}>
				{props.compontent}
			</i>
		</Link>
	);
}

export default Ico;
