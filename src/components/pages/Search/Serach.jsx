import React, { useState } from 'react';
import Main from '../../organisms/Main/Main';
import { NotificationWindow as ProductsWindow } from '../../molecules/NotificationWindow/NotificationWindow';
import { products, setProducts } from '../../templates/App';

function checkSearchProducts() {
	const mapItemsFunction = products.map((el) => {
		if (el.title.includes(`Brązo`)) {
			return (
				<ProductsWindow
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

function Search() {
	const [isSearched, setSearched] = useState(false);

	const changeIsSearched = () => {
		setSearched(true);
	};

	return (
		<>
			<Main title='Wyszukaj frazy...' />
			<input
				onChange={changeIsSearched}
				className='text-center m-auto'
				type='text'
				placeholder='wprowadz nazwe produktu'
			/>
			{isSearched === true ? checkSearchProducts() : null}
			<br />
			<br />
			<br />
		</>
	);
}

export default Search;
