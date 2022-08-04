import React from 'react';
import styles from './Ico.module.sass';

function Ico(props) {
	return (
		<a href={props.link}>
			<i
				className={`${props.className} ${styles.secondaryFont} ${styles.sizeFont}`}></i>
		</a>
	);
}

export default Ico;
