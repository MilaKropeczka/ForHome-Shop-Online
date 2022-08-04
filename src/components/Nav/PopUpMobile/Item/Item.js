import React from 'react';
import styles from './Item.module.sass';

function Item(props) {
	return (
		<li>
			<a className={styles[props.className]} href='#'>
				{props.title}
			</a>
		</li>
	);
}

export default Item;
