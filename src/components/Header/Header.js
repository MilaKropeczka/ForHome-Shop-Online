import React from 'react';
import styles from './Header.module.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';

function Header() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplaySpeed: 3500,
		autoplay: true,
		pauseOnHover: false,
	};
	return (
		<header>
			<Container fluid='lg'>
				<Row className='rounded-bottom overflow-hidden'>
					<Slider {...settings}>
						<div id={styles.img1} className={`${styles.heroImg}`}>
							<div className={styles.shadow}></div>
							<div className='h-100'>
								<h3
									className={`${styles.specialOffer} d-flex h-100 align-items-center justify-content-center`}>
									20% rabatu na zakupy z kodem
									<p className={`${styles.code}`}> LATO#22</p>
								</h3>
							</div>
						</div>
						<div
							id={styles.img2}
							className={`${styles.heroImg}`}></div>
					</Slider>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
