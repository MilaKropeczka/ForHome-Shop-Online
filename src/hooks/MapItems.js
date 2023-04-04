// import { products, setProducts } from '../App.jsx';
import { products, setProducts } from '../components/templates/App';
import { NotificationWindow } from '../components/molecules/NotificationWindow/NotificationWindow';

function MapItems(props) {
	props.title
		.replaceAll(`ą`, `a`)
		.replaceAll(`ć`, `c`)
		.replaceAll(`ę`, `e`)
		.replaceAll(`ł`, `l`)
		.replaceAll(`ń`, `n`)
		.replaceAll(`ó`, `o`)
		.replaceAll(`ś`, `s`)
		.replaceAll(`ź`, `z`)
		.replaceAll(`ż`, `z`);

	const mapItemsFunction = products.map((el) => {
		console.log(el.title);
		console.log(props.status);
		if (
			el.category === props.category ||
			el.status === props.status ||
			el.title.includes(`kub`)

		) {
			return (
				<NotificationWindow
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
