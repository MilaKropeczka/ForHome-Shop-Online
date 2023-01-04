import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item/Item';
import styles from './SendSection.module.sass';

function SendSection() {
	return (
		<div className={styles.box}>
			<Container fluid='lg'>
				<Row className='text-center'>
					<Item title='Wysyłka w 24/h' ico='fa-solid fa-truck-fast' />
					<Item
						title='Darmowa dostawa od 99zł'
						ico='fa-solid fa-box-open'
					/>
					<Item
						title='Możliwość zwrotu do 14 dni'
						ico='fa-solid fa-clock-rotate-left'
					/>
				</Row>
			</Container>
		</div>
	);
}

export default SendSection;
