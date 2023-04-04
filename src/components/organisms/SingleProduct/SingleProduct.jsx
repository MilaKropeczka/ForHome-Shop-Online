import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SingleProduct.module.sass';
import { Testowo } from './Testowo';
import { xyz } from './Testowo';
import { products, setProducts } from '../../templates/App';

function SingleProduct() {
	const mapItems = products;
	let href = window.location.href;
	let id = href.indexOf('=') + 1;
	let link = href.slice(id);
	let el = mapItems[link];

	function addToCart() {
		let updateItems = [...products];
		let editItems = updateItems[link];
		let nameItems = updateItems[link].id;
		editItems.cart = true;
		if (xyz === undefined) {
			editItems.amount += 1;
		} else {
			editItems.amount += parseInt(xyz);
		}
		updateItems.splice(nameItems, 1, editItems);
		setProducts(updateItems);
		xyz = undefined;
	}

	function buyNow() {
		console.log(products[link]);
		console.log(`Kup teraz`);
	}

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
						<div className='m-4'>
							<div className='d-inline-block m-3'>
								<b>Ilość:</b>
							</div>
							<Testowo />
						</div>
						<div className='d-flex justify-content-around flex-wrap'>
							<button
								className={`${styles.buy}`}
								onClick={addToCart}>
								Dodaj do koszyka
							</button>
							<button
								className={`${styles.buyNow} ${styles.buy}`}
								onClick={buyNow}>
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
