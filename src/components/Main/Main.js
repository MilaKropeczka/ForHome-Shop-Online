import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './Box/Box';

function Main() {
	return (
		<Container>
			<Row>
				<Col>
					<h2 className='text-center m-5'>Bestsellery</h2>
				</Col>
			</Row>
			<Row>
				<Box status='hit' title='Buty modne Nike' price='23.99 zł' />
				<Box status='hit' title='Czapka na lato' price='79.99 zł' />
				<Box
					status='wyprzedaz'
					statusFont='through'
					title='Poduszka czerwona serce'
					price='46.99 zł'
					newPrice='23.99 zł'
				/>
				<Box
					status='hit'
					title='Kubek termiczny love'
					price='13.99 zł'
				/>
			</Row>
		</Container>
	);
}

export default Main;
