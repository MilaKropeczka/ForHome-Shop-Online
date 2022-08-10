import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item/Item';

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
					amount='2'
					price='29.99 zł'
					title='Poduszka czerwona serce'
				/>
			</Row>
			<hr />
			<Row className='text-center'>
				<Item
					amount='2'
					price='29.99 zł'
					title='Poduszka czerwona serce'
				/>
			</Row>
			<hr />
		</Container>
	);
}

export default Cart;
