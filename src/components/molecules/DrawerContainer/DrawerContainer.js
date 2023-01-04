import React from 'react';
import Ico from '../../atoms/Ico/Ico';
import Notification from '../../atoms/Notification/Notification';
import IsNotLogged from '../IsNotLogged/IsNotLogged';
import { useState } from 'react';

function DrawerContainer(props) {
	const handleState = props.handleState;
	const [isClick, setClick] = useState(false);

	return (
		<>
			<Ico
				className={`fa-solid fa-magnifying-glass px-3`}
				link='/wyszukiwarka'
			/>
			<Ico className={`fa-solid fa-heart px-3`} link='/ulubione' />
			<Ico
				className={`fa-solid fa-cart-shopping px-3`}
				link='/koszyk'
				component={<Notification handleState={handleState} />}
			/>
			<Ico
				className={`fa-solid fa-user px-3`}
				link={props.isLogged ? `/profil` : `#`}
				popup={
					props.isLogged ? null : (
						<IsNotLogged isClick={isClick} setClick={setClick} />
					)
				}
				isClick={isClick}
				setClick={setClick}
			/>
		</>
	);
}

export default DrawerContainer;
