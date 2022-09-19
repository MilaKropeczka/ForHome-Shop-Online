import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './Box/Box';
// import Bestseller from '../../data/Bestseller';

function Main(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.status === 'wyprzedaz') {
			return <Box key={el.id} {...el} />;
		}
	});

	return (
		<Container>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			{/* <Row>{props.component}</Row> */}
			<Row>{mapItems}</Row>
		</Container>
	);
}

export default Main;
