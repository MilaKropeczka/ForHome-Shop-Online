import Nav from './components/templates/Nav/Nav';
import Header from './components/templates/Header/Header';
import Main from './components/templates/Main/Main';
import SendSection from './components/templates/SendSection/SendSection';
import Faq from './components/templates/Faq/Faq';
import About from './components/templates/About/About';
import Footer from './components/templates/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/templates/Cart/Cart';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logowanie from './components/organisms/Logowanie/Logowanie';
import Rejestracja from './components/organisms/Rejestracja/Rejestracja';
import { data } from './api/data';
import SingleProduct from './components/organisms/SingleProduct/SingleProduct';
import { addAmount } from './hooks/addAmount';
import { removeAmount } from './hooks/removeAmount';
import { removeCart } from './hooks/removeCart';

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
								<Main
									title='Sypialnia'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/salon'>
								<Main
									title='Salon'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/kuchnia'>
								<Main
									title='Kuchnia'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/wyprzedaz'>
								<Main
									title='Wyprzedaż'
									category='status'
									status='wyprzedaz'
								/>
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
								<Main
									title='Ulubione'
									status='true'
									category='fav'
								/>
							</Route>
							<Route path='/wyszukiwarka'>
								<Main
									title='Wyszukaj frazy ...""'
									status='true'
									category='fav'
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
								<SingleProduct products={products} />
							</Route>

							<Route exact path='/'>
								<Header />
								<Main
									title='Bestsellery'
									status='hit'
									category='status'
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
