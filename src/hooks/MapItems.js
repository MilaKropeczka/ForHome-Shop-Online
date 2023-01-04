import { products, setProducts } from '../App.jsx';
import Box from '../components/templates/Main/Box/Box';

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
			(el.fav === true && el[category] === status)
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
