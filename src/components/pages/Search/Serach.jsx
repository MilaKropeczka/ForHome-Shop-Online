import React, { useState } from 'react';
import Main from '../../organisms/Main/Main';
import MapItems from '../../../hooks/MapItems';

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
			{isSearched === true ? <MapItems /> : null}
			<br />
			<br />
			<br />
		</>
	);
}

export default Search;
