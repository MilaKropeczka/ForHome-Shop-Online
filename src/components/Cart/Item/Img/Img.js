import React from 'react';
import styles from './Img.module.sass';

function Img(props) {
	return (
		<div className={`${styles.box} mx-auto`}>
			<img src={props.img} alt='produkt' />
		</div>
	);
}

export default Img;
