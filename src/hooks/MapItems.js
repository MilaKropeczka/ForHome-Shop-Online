import { products, setProducts } from '../components/templates/App';
import { NotificationWindow } from '../components/molecules/NotificationWindow/NotificationWindow';

function MapItems(props) {
	const mapItemsFunction = products.map((el) => {
		if (el.category === props.category || el.status === props.status) {
			return (
				<NotificationWindow
					key={el.id}
					{...el}
					handleState={products}
					setHandleState={setProducts}
				/>
			);
		} else if (el.title.includes(props.inputValue)) {
			return (
				<>
					<NotificationWindow
						key={el.id}
						{...el}
						handleState={products}
						setHandleState={setProducts}
					/>
				</>
			);
		}
	});
	return mapItemsFunction;
}

export default MapItems;
