import styles from './Nav.module.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopUpMobile from '../../molecules/PopUpMobile/PopUpMobile';
import DrawerContainer from '../../molecules/DrawerContainer/DrawerContainer';
import Bars from '../../atoms/Bars/Bars';
import Logo from '../../molecules/LogoDeskop/LogoDeskop';
import NavDeskop from '../../molecules/NavDeskop/NavDeskop';
import { useState } from 'react';

function Nav(props) {
	const handleState = props.handleState;
	const [isActive, setActive] = useState(false);
	const menuToggle = () => {
		setActive(!isActive);
	};
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
							lg={6}
							className={
								'd-none d-lg-block text-center ' +
								styles.pointer
							}>
							<NavDeskop />
						</Col>
						<Col
							className={'d-lg-none text-left ' + styles.pointer}>
							<Bars
								isActive={isActive}
								setActive={setActive}
								menuToggle={menuToggle}
							/>
						</Col>
						<Col
							className={`text-center ${styles.pointer}`}
							xs={7}
							sm
							lg={3}>
							<DrawerContainer
								handleState={handleState}
								isLogged={props.isLogged}
							/>
						</Col>
					</Row>
					<Row
						className={`d-lg-none ${styles.menu} ${
							isActive ? null : styles.close
						}`}>
						<PopUpMobile menuToggle={menuToggle} />
					</Row>
				</Container>
			</nav>
		</>
	);
}

export default Nav;
