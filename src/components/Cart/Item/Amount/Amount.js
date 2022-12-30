import React from 'react';
import styles from './Amount.module.sass';

function Amount(props) {
	const handleChange = props.handleChange;
	return (
		<div>
			<form>
				Ilość: <br />
				<button
					className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
					onClick={props.removeAmount}
					name={props.id}>
					<i
						className={`fa-solid fa-angle-left ${styles.anim}`}
						name={props.id}></i>
				</button>
				<input
					className={`m-lg-2 m-1 m-sm-0 px-4 px-sm-3 px-md-4 py-3 rounded-3 ${styles.backgroundColor}`}
					value={props.amount}
					onChange={handleChange}></input>
				<button
					className='m-lg-2 m-1 px-4 px-sm-3 px-lg-4 py-3 rounded-3'
					onClick={props.addAmount}
					name={props.id}>
					<i
						className={`fa-solid fa-angle-right ${styles.anim}`}
						name={props.id}></i>
				</button>
			</form>
		</div>
	);
}

export default Amount;
