import { mapItems, setMapItems } from '../App';

export function removeCart(e) {
	e.preventDefault();
	let updateItems = [...mapItems];
	let editItems = updateItems[e.target.getAttribute('name')];
	let nameItems = updateItems[e.target.getAttribute('name')].id;
	editItems.cart = false;
	editItems.amount = 0;
	updateItems.splice(nameItems, 1, editItems);
	setMapItems(updateItems);
}
