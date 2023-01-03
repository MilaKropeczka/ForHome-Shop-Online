import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapItems from '../../hooks/MapItems';

function Main(props) {
	return (
		<Container>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			{/* <Row>{props.component}</Row> */}
			<Row>
				<MapItems
					title={props.title}
					category={props.category}
					status={props.status}
				/>
			</Row>
		</Container>
	);
}

export default Main;
