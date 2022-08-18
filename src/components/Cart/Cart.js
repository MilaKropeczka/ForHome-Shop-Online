import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item/Item';
import styles from './Cart.module.sass';
import img from '../../assets/Mobile/pillow2.jpg';
import img1 from '../../assets/Mobile/pillow1.jpg';

function Cart(props) {
	return (
		<Container fluid='lg'>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			<hr />
			<Row className='text-center'>
				<Item
					img={img}
					amount='2'
					price='29.99 zł'
					title='Poduszka czerwona serce'
				/>
			</Row>
			<hr />
			<Row className='text-center'>
				<Item
					img={img1}
					amount='1'
					price='220.99 zł'
					title='Buty nike sportowe'
				/>
			</Row>
			<hr />
			<Row>
				<Col className='text-center'>
					<h2 className='text-center m-5'>
						Podsumowanie:{' '}
						<span className={`${styles.font}`}>{props.sum} zł</span>
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
