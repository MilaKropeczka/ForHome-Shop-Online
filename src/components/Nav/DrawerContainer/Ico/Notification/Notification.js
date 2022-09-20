import React from 'react';
import styles from './Notification.module.sass';
// import SumAmount from '../../../../../data/SumAmount';

function Notification(props) {
	const handleState = props.handleState;

	function SumAmount() {
		let sum;
		let sumData;
		let sumArr = [];

		handleState.map((el) => {
			if (el.cart === true) {
				sumArr.push(el.amount);
			}
		});

		for (let i = 0; i < sumArr.length; i++) {
			if (sum !== undefined) {
				sum += sumArr[i];
			} else {
				sum = sumArr[i];
			}
		}

		sumData = sum;
		sum = undefined;

		return sumData > 0 ? sumData : '0';
	}

	return <div className={styles.notification}>{SumAmount()}</div>;
}
export default Notification;
