import { products, setProducts } from '../components/templates/App';

export const addAmount = function (e) {
	e.preventDefault();

	// let href = window.location.href;
	// let id = href.indexOf('=') + 1;
	// let link = href.slice(id);

	let updateItems = [...products];
	let editItems;
	let nameItems;
	// if (e.target.getAttribute('name')) {
		editItems = updateItems[e.target.getAttribute('name')];
		nameItems = updateItems[e.target.getAttribute('name')].id;
		if (editItems.amount < 9) {
			editItems.amount = editItems.amount + 1;
		}
	// } else {
	// 	nameItems = link;
	// 	editItems = updateItems[link];
	// 	if (editItems.amount < 9) {
	// 		editItems.amount = editItems.amount + 1;
	// 		editItems.cart = true;
	// 	}
	// 	console.log(editItems.cart);
	// }
	updateItems.splice(nameItems, 1, editItems);
	setProducts(updateItems);
};
