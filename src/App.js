import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/Sypialnia'>
						<Main title='Sypialnia' />
						Sypialnia
					</Route>
					<Route path='/Salon'>Salon</Route>
					<Route path='/Kuchnia'>Kuchnia</Route>
					<Route path='/Wyprzedaż'>Wyprzedaż</Route>
					<Route path='/Koszyk'>Koszyk</Route>
					<Route path='/Ulubione'>Ulubione</Route>
					<Route path='/Wyszukiwarka'>Wyszukiwarka</Route>
					<Route exact path='/'>
						<Header />
						<Main title='Bestsellery' />
						<SendSection />
						<Faq />
					</Route>
				</Switch>
				<About />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
