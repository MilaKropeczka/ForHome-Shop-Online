import React from 'react';
import Item from './Item/Item';

function NavDeskop() {
	return (
		<>
			<Item title='Sypialnia' className='secondaryFont' />
			<Item title='Salon' className='secondaryFont' />
			<Item title='Kuchnia' className='secondaryFont' />
			<Item title='Wyprzedaż' className='primaryFont' />
		</>
	);
}

export default NavDeskop;
