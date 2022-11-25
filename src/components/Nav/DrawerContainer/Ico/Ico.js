import React from 'react';
import styles from './Ico.module.sass';
import { Link } from 'react-router-dom';

function Ico(props) {
	const setClick = props.setClick;
	const isClick = props.isClick;

	return (
		<>
			<Link to={props.link} className='position-relative'>
				<i
					className={`${props.className} ${styles.secondaryFont} ${styles.sizeFont}`}
					onClick={() => setClick(!isClick)}>
					{props.component}
				</i>
			</Link>
			{isClick ? props.popup : null}
		</>
	);
}

export default Ico;
