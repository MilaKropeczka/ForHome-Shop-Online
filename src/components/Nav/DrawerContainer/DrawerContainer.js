import React from 'react';
import Ico from './Ico/Ico';
import Notification from './Ico/Notification/Notification';
// import IsLogged from '../IsLogged/IsLogged';
import IsLogged from './IsLogged/IsLogged';

function DrawerContainer(props) {
	const handleState = props.handleState;
	return (
		<>
			<Ico
				className={`fa-solid fa-magnifying-glass px-3`}
				link='Wyszukiwarka'
			/>
			<Ico className={`fa-solid fa-heart px-3`} link='Ulubione' />
			<Ico
				className={`fa-solid fa-cart-shopping px-3`}
				link='Koszyk'
				component={<Notification handleState={handleState} />}
			/>
			<Ico
				className={`fa-solid fa-user px-3`}
				link={props.isLogged ? null : `Profil`}
				component={<IsLogged />}
			/>
		</>
	);
}

export default DrawerContainer;
