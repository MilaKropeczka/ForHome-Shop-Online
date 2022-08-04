import styles from './Nav.module.sass';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopUpMobile from './PopUpMobile/PopUpMobile';
import DrawerContainer from './DrawerContainer/DrawerContainer';
import Bars from './Bars/Bars';
import Logo from './Logo/Logo';
import NavDeskop from './NavDeskop/NavDeskop';

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
							<Logo />
						</Col>
						<Col
							lg={8}
							className={
								'd-none d-lg-block text-center ' +
								styles.pointer
							}>
							<NavDeskop />
						</Col>
						<Col
							className={'d-lg-none text-left ' + styles.pointer}>
							<Bars />
						</Col>
						<Col className={`text-center ${styles.pointer}`}>
							<DrawerContainer></DrawerContainer>
						</Col>
					</Row>
					<Row className={`d-lg-none ${styles.menu} ${styles.close}`}>
						<PopUpMobile />
					</Row>
				</Container>
			</nav>
		</>
	);
}

export default Nav;
