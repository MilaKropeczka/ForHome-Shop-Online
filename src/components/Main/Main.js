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
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
				<Col>
					<Box />
				</Col>
			</Row>
		</Container>
	);
}

export default Main;
