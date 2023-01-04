import React from 'react';
import styles from './Bars.module.sass';

function Bars(props) {
	const isActive = props.isActive;
	const menuToggle = props.menuToggle;
	return (
		<i
			className={
				'fa-solid' +
				' ' +
				styles.bars +
				' ' +
				(!isActive ? 'fa-bars' : 'fa-xmark')
			}
			onClick={menuToggle}></i>
	);
}

export default Bars;
