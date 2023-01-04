import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SingleProduct.module.sass';

function SingleProduct(props) {
	const mapItems = props.products;
	let href = window.location.href;
	let id = href.indexOf('=') + 1;
	let link = href.slice(id);
	let el = mapItems[link];
	return (
		<>
			<Container>
				<Row>
					<Col xs={12} md={6} className={styles.leftBox}>
						<div className='d-md-none'>
							<h1 className={styles.title}>{el.title}</h1>
						</div>
						<div>
							<div
								className={styles.imgLarge}
								style={{
									backgroundImage: `url('${el.imgLarge}')`,
								}}></div>
						</div>
					</Col>
					<Col xs={12} md={6} className={styles.rightBox}>
						<div className='d-none d-md-block'>
							<h1 className={styles.title}>{el.title}</h1>
						</div>
						<div className={styles.price}>
							{el.newPrice === false ? (
								<h3 className='text-center'>{el.price} zł</h3>
							) : (
								<h3 className='text-center'>
									<del className={styles.oldPrice}>
										{el.price} zł
									</del>
									{el.newPrice} zł
								</h3>
							)}
						</div>
						<div className={styles.content}>{el.content}</div>
						<div>Liczba sztuk</div>
						<div className='d-flex justify-content-around flex-wrap'>
							<button className={`${styles.buy}`}>
								Dodaj do koszyka
							</button>
							<button
								className={`${styles.buyNow} ${styles.buy}`}>
								Kup teraz
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SingleProduct;
