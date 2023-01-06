import Nav from './components/organisms/Nav/Nav';
import SendSection from './components/organisms/SendSection/SendSection';
import Faq from './components/organisms/Faq/Faq';
import About from './components/organisms/About/About';
import Footer from './components/organisms/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/organisms/Cart/Cart';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logowanie from './components/molecules/Logowanie/Logowanie';
import Rejestracja from './components/molecules/Rejestracja/Rejestracja';
import { data } from './api/data';
import SingleProduct from './components/organisms/SingleProduct/SingleProduct';
import { addAmount } from './hooks/addAmount';
import { removeAmount } from './hooks/removeAmount';
import { removeCart } from './hooks/removeCart';
import Bedroom from './components/pages/Bedroom/Bedroom';
import LivingRoom from './components/pages/LivingRoom/LivingRoom';
import Kitchen from './components/pages/Kitchen/Kitchen';
import Sale from './components/pages/Sale/Sale';
import Favourite from './components/pages/Favourite/Favourite';
import Search from './components/pages/Search/Serach';
import Bestseller from './components/pages/Bestseller/Bestseller';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export let products;
export let setProducts;

export function App() {
	const [isLogged, setLogged] = useState(false);
	[products, setProducts] = useState(data);

	return (
		<>
			<Router>
				<ScrollToTop />
				<Route>
					<div className='App'>
						<Nav handleState={products} isLogged={isLogged} />
						<Switch>
							<Route path='/sypialnia'>
								<Bedroom />
							</Route>
							<Route path='/salon'>
								<LivingRoom />
							</Route>
							<Route path='/kuchnia'>
								<Kitchen />
							</Route>
							<Route path='/wyprzedaz'>
								<Sale />
							</Route>
							<Route path='/koszyk'>
								<Cart
									title='Koszyk'
									handleState={products}
									setHandleState={setProducts}
									addAmount={addAmount}
									removeAmount={removeAmount}
									removeCart={removeCart}
								/>
							</Route>
							<Route path='/ulubione'>
								<Favourite />
							</Route>
							<Route path='/wyszukiwarka'>
								<Search />
							</Route>
							<Route path='/profil'></Route>
							<Route path='/logowanie'>
								<Logowanie />
							</Route>
							<Route path='/rejestracja'>
								<Rejestracja />
							</Route>
							<Route path='/oferty'>
								<SingleProduct products={products} />
							</Route>
							<Route exact path='/'>
								<Bestseller />
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
