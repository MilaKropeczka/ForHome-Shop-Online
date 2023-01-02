import { mapItems, setMapItems } from '../App';

export const removeAmount = function (e) {
	e.preventDefault();
	let updateItems = [...mapItems];
	let editItems = updateItems[e.target.getAttribute('name')];
	let nameItems = updateItems[e.target.getAttribute('name')].id;
	if (editItems.amount > 1) {
		editItems.amount = editItems.amount - 1;
	}
	updateItems.splice(nameItems, 1, editItems);
	setMapItems(updateItems);
};
