import { products, setProducts } from '../components/templates/App';
import { setNotification } from '../components/molecules/NotificationWindow/NotificationWindow';

export function addItem(e) {
	let updateItems = [...products];
	let editItems = updateItems[e.target.getAttribute('name')];
	let nameItems = updateItems[e.target.getAttribute('name')].id;
	editItems.cart = true;
	editItems.amount += 1;
	updateItems.splice(nameItems, 1, editItems);
	setProducts(updateItems);
	setNotification(true);
}
