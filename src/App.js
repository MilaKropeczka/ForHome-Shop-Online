import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Bestseller from './data/Bestseller';
import Sypialnia from './data/Sypialnia';
import Salon from './data/Salon';
import Kuchnia from './data/Kuchnia';
import Wyprzedaz from './data/Wyprzedaz';
import Ulubione from './data/Ulubione';
import Wyszukiwarka from './data/Wyszukiwarka';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/Sypialnia'>
						<Main title='Sypialnia' component={<Sypialnia />} />
					</Route>
					<Route path='/Salon'>
						<Main title='Salon' component={<Salon />} />
					</Route>
					<Route path='/Kuchnia'>
						<Main title='Kuchnia' component={<Kuchnia />} />
					</Route>
					<Route path='/Wyprzedaż'>
						<Main title='Wyprzedaż' component={<Wyprzedaz />} />
					</Route>
					<Route path='/Koszyk'>
						<Cart title='Koszyk' totalSum={329} />
					</Route>
					<Route path='/Ulubione'>
						<Main title='Ulubione' component={<Ulubione />} />
					</Route>
					<Route path='/Wyszukiwarka'>
						<Main
							title='Wyszukaj frazy ...""'
							component={<Wyszukiwarka />}
						/>
					</Route>
					<Route exact path='/'>
						<Header />
						<Main title='Bestsellery' component={<Bestseller />} />
					</Route>
				</Switch>
				<SendSection />
				<Faq />
				<About />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
