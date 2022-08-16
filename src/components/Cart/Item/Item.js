import React from 'react';
import Col from 'react-bootstrap/Col';
import Img from './Img/Img';
import styles from './Item.module.sass';

function Item(props) {
	return (
		<>
			<Col>
				<Img img={props.img} />
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontTitle} my-5 ${styles.bold}`}>
				{props.title}
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize} mb-5`}>
				<div>
					<form>
						Ilość: <br />
						<button className='m-lg-2 m-1 px-4 py-3 rounded-3'>
							<i
								className={`fa-solid fa-angle-left ${styles.anim}`}></i>
						</button>
						<input
							className={`m-lg-2 m-1 px-4 py-3 rounded-3 ${styles.backgroundColor}`}
							defaultValue={`${props.amount}`}></input>
						<button className='m-lg-2 m-1 px-4 py-3 rounded-3'>
							<i
								className={`fa-solid fa-angle-right ${styles.anim}`}></i>
						</button>
					</form>
				</div>
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<p>
					Cena: <br />
					<span className={styles.color}>{props.price}</span>
				</p>
			</Col>
			<Col
				xs={12}
				sm
				className={`d-flex justify-content-center align-items-center ${styles.fontSize}`}>
				<i className={`fa-solid fa-trash-can ${styles.ico}`}></i>
			</Col>
		</>
	);
}

export default Item;
