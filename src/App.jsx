import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Wyszukiwarka from './components/Main/Wyszukiwarka/Wyszukiwarka';
import Bestseller from './components/Main/Bestseller/Bestseller';
import Sypialnia from './components/Main/Sypialnia/Sypialnia';
import Salon from './components/Main/Salon/Salon';
import Wyprzedaz from './components/Main/Wyprzedaz/Wyprzedaz';
import Kuchnia from './components/Main/Kuchnia/Kuchnia';
import Ulubione from './components/Main/Ulubione/Ulubione';
import Cart from './components/Cart/Cart';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logowanie from './components/Logowanie/Logowanie';
import Rejestracja from './components/Rejestracja/Rejestracja';
import { data } from './api/data';
import SingleProduct from './components/organisms/SingleProduct';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

let mapItems
let setMapItems


function App() {
	const [isLogged, setLogged] = useState(false);
	const [mapItems, setMapItems] = useState(data);
	// [mapItems, setMapItems] = useState(data);

	const addAmount = function (e) {
		e.preventDefault();
		let updateItems = [...mapItems];
		let editItems = updateItems[e.target.getAttribute('name')];
		let nameItems = updateItems[e.target.getAttribute('name')].id;
		if (editItems.amount < 9) {
			editItems.amount = editItems.amount + 1;
		}
		updateItems.splice(nameItems, 1, editItems);
		setMapItems(updateItems);
	};

	const removeAmount = function (e) {
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

	function removeCart(e) {
		e.preventDefault();
		let updateItems = [...mapItems];
		let editItems = updateItems[e.target.getAttribute('name')];
		let nameItems = updateItems[e.target.getAttribute('name')].id;
		editItems.cart = false;
		editItems.amount = 0;
		updateItems.splice(nameItems, 1, editItems);
		setMapItems(updateItems);
	}

	return (
		<>
			<Router>
				<ScrollToTop />
				<Route>
					<div className='App'>
						<Nav handleState={mapItems} isLogged={isLogged} />
						<Switch>
							<Route path='/sypialnia'>
								<Main
									title='Sypialnia'
									component={
										<Sypialnia
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/salon'>
								<Main
									title='Salon'
									component={
										<Salon
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/kuchnia'>
								<Main
									title='Kuchnia'
									component={
										<Kuchnia
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/wyprzedaż'>
								<Main
									title='Wyprzedaż'
									component={
										<Wyprzedaz
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/koszyk'>
								<Cart
									title='Koszyk'
									handleState={mapItems}
									setHandleState={setMapItems}
									addAmount={addAmount}
									removeAmount={removeAmount}
									removeCart={removeCart}
								/>
							</Route>
							<Route path='/ulubione'>
								<Main
									title='Ulubione'
									component={
										<Ulubione
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/wyszukiwarka'>
								<Main
									title='Wyszukaj frazy ...""'
									component={
										<Wyszukiwarka
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
							<Route path='/profil'></Route>
							<Route path='/logowanie'>
								<Logowanie />
							</Route>
							<Route path='/rejestracja'>
								<Rejestracja />
							</Route>
							<Route path='/oferty'>
								<SingleProduct mapItems={mapItems} />
							</Route>

							<Route exact path='/'>
								<Header />
								<Main
									title='Bestsellery'
									component={
										<Bestseller
											handleState={mapItems}
											setHandleState={setMapItems}
										/>
									}
								/>
							</Route>
						</Switch>
						<SendSection />
						<Faq />
						<About />
						<Footer />
					</div>
				</Route>
			</Router>
		</>
	);
}

export default App;
