import React from 'react';
import styles from './Notification.module.sass';

function Notification(props) {
	const checkAmount = () => {
		if (props.amount > 0) {
			return <div className={styles.notification}>{props.amount}</div>;
		}
	};
	return <>{checkAmount()}</>;
}

export default Notification;
