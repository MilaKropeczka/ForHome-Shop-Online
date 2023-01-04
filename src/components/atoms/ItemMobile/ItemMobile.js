import React from 'react';
import styles from './ItemMobile.module.sass';
import { Link } from 'react-router-dom';

function ItemMobile(props) {
	return (
		<li>
			<Link
				to={`${props.title
					.toLowerCase()
					.replaceAll(`ą`, `a`)
					.replaceAll(`ć`, `c`)
					.replaceAll(`ę`, `e`)
					.replaceAll(`ł`, `l`)
					.replaceAll(`ń`, `n`)
					.replaceAll(`ó`, `o`)
					.replaceAll(`ś`, `s`)
					.replaceAll(`ź`, `z`)
					.replaceAll(`ż`, `z`)}`}
				className={styles[props.className]}>
				{props.title.replaceAll(`/`, ``)}
			</Link>
		</li>
	);
}

export default ItemMobile;
