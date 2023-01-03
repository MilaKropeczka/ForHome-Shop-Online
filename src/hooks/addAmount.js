import { products, setProducts } from '../App';

export const addAmount = function (e) {
	e.preventDefault();
	let updateItems = [...products];
	let editItems = updateItems[e.target.getAttribute('name')];
	let nameItems = updateItems[e.target.getAttribute('name')].id;
	if (editItems.amount < 9) {
		editItems.amount = editItems.amount + 1;
	}
	updateItems.splice(nameItems, 1, editItems);
	setProducts(updateItems);
};
