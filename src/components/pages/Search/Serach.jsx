import React from 'react';
import Main from '../../organisms/Main/Main';

function Search() {
	return (
		<>
			<Main title='Wyszukaj frazy' status='true' category='fav' />
			<input
				className='text-center m-auto'
				type='text'
				placeholder='wprowadz nazwe produktu'
			/>
			<br />
			<br />
			<br />
		</>
	);
}

export default Search;
