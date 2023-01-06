// import { products, setProducts } from '../App.jsx';
import { products, setProducts } from '../components/templates/App';
import Box from '../components/molecules/NotificationWindow/NotificationWindow';

function MapItems(props) {
	const title = props.title
		.replaceAll(`ą`, `a`)
		.replaceAll(`ć`, `c`)
		.replaceAll(`ę`, `e`)
		.replaceAll(`ł`, `l`)
		.replaceAll(`ń`, `n`)
		.replaceAll(`ó`, `o`)
		.replaceAll(`ś`, `s`)
		.replaceAll(`ź`, `z`)
		.replaceAll(`ż`, `z`);
	const category = props.category;
	const status = props.status;

	const mapItemsFunction = products.map((el) => {
		if (
			(el[category] === title && category === 'category') ||
			(category === 'status' && el[category] === status) ||
			(el.fav === true && title === 'Ulubione')
		) {
			return (
				<Box
					key={el.id}
					{...el}
					handleState={products}
					setHandleState={setProducts}
				/>
			);
		}
	});
	return mapItemsFunction;
}

export default MapItems;
