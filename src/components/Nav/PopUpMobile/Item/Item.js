import React from 'react';
import styles from './Item.module.sass';
import { Link } from 'react-router-dom';

function Item(props) {
	return (
		<>
			<li>
				<Link to={`${props.title}`} className={styles[props.className]}>
					{props.title}
				</Link>
			</li>
		</>
	);
}

export default Item;
