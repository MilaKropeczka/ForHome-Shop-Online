import styles from './Nav.module.sass';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './logo.png';

function Nav() {
	return (
		<>
			<nav className={styles.backgroundColor}>
				<Container fluid='lg' className={styles.nav}>
					<Row className='align-items-center h-100'>
						<Col
							className={`text-right d-none d-sm-block ${styles.pointer}`}
							sm={{ order: `last` }}
							lg={{ order: 0 }}>
							<img src={img} alt='Logo' className={styles.logo} />
						</Col>
						<Col
							lg={8}
							className={
								'd-none d-lg-block text-center ' +
								styles.pointer
							}>
							<div className='d-inline-block mx-4'>
								<a href='#' className={styles.secondaryFont}>
									Sypialnia
								</a>
							</div>
							<div className='d-inline-block mx-4'>
								<a href='#' className={styles.secondaryFont}>
									Salon
								</a>
							</div>
							<div className='d-inline-block mx-4'>
								<a href='#' className={styles.secondaryFont}>
									Kuchnia
								</a>
							</div>
							<div className={'d-inline-block mx-4'}>
								<a href='#' className={styles.primaryFont}>
									Wyprzedaż
								</a>
							</div>
						</Col>
						<Col
							className={'d-lg-none text-left ' + styles.pointer}>
							<i
								className={
									'fa-solid fa-bars ' + styles.bars
								}></i>
						</Col>
						<Col className={`text-center ${styles.pointer}`}>
							<a href='#'>
								<i
									className={`fa-solid fa-magnifying-glass px-3 ${styles.secondaryFont} ${styles.sizeFont}`}></i>
							</a>
							<a href='#'>
								<i
									className={`fa-solid fa-heart px-3 ${styles.secondaryFont} ${styles.sizeFont}
									`}></i>
							</a>
							<a href='#'>
								<i
									className={`fa-solid fa-cart-shopping px-3 ${styles.secondaryFont} ${styles.sizeFont}
									`}></i>
							</a>
						</Col>
					</Row>
					<Row className={`d-lg-none ${styles.menu} ${styles.close}`}>
						<div className='d-flex justify-content-center align-items-center'>
							<ul className={styles.lists}>
								<li>Sypialnia</li>
								<li>Salon</li>
								<li>Kuchnia</li>
								<li className={styles.primaryFont}>
									Wyprzedaż
								</li>
							</ul>
						</div>
					</Row>
					<Row>test</Row>
				</Container>
			</nav>
		</>
	);
}

export default Nav;
