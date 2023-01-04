import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../atoms/LogoDeskop/LogoDeskop';
import styles from './About.module.sass';

function About() {
	return (
		<div className={styles.backgroundColor}>
			<Container fluid='lg' className='my-5 py-5'>
				<Row className='text-center'>
					<Col xs={12} className='mb-5'>
						<Logo />
					</Col>
					<Col xs={12} className={`my-2 ${styles.title}`}>
						Obsługa klienta:
					</Col>
					<Col xs={12}>+48 726 341 032</Col>
					<Col xs={12}>kontakt@for-home.pl</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
