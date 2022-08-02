import styles from './Nav.module.sass';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nav() {
	return (
		<>
			<nav className={styles.backgroundColor}>
				<Container className={styles.nav}>
					<Row className='align-items-center h-100 text-center'>
						<Col>LOGO</Col>
						<Col lg={8} className='d-none d-lg-block'>
							<div className='d-inline-block mx-4'>Buty</div>
							<div className='d-inline-block mx-4'>Sukienki</div>
							<div className='d-inline-block mx-4'>Spodnie</div>
							<div className='d-inline-block mx-4'>Wyprzedaż</div>
						</Col>
						<Col className='d-lg-none'>MenuMobile</Col>
						<Col>Profil</Col>
					</Row>
				</Container>
			</nav>
		</>
	);
}

export default Nav;
