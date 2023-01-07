import { products, setProducts } from '../components/templates/App';

export function addFavorite(e) {
	let updateItems = [...products];
	let editItems = updateItems[e.target.getAttribute('name')];
	let nameItems = updateItems[e.target.getAttribute('name')].id;
	if (editItems.fav === true) {
		editItems.fav = false;
	} else {
		editItems.fav = true;
	}
	updateItems.splice(nameItems, 1, editItems);
	setProducts(updateItems);
}
