import React from 'react';
import styles from '../NavDeskop.module.sass';
import { Link } from 'react-router-dom';

function Item(props) {
	return (
		<div className='d-inline-block mx-4'>
			<Link to={`${props.title}`} className={styles[props.className]}>
				{props.title}
			</Link>
		</div>
	);
}

export default Item;
