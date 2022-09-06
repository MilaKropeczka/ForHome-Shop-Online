import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Cart.module.sass';
import Koszyk from '../../data/Koszyk';

function Cart(props) {
	return (
		<Container fluid='lg'>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			<Koszyk />
			<hr />
			<Row>
				<Col className='text-center'>
					<h2 className='text-center m-5'>
						Podsumowanie:
						<span className={`${styles.font}`}>
							{props.totalSum} zł
						</span>
					</h2>
					<button
						className={`${styles.button} ${styles.primary} mt-lg-0 mx-lg-2 my-4`}>
						Dostawa i płatność{' '}
						<i className='fa-solid fa-chevron-right'></i>
					</button>
				</Col>
			</Row>
		</Container>
	);
}

export default Cart;
