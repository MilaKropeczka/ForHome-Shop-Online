import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='ForHome/Sypialnia'>Sypialnia</Route>
					<Route path='ForHome/Salon'>Salon</Route>
					<Route path='ForHome/Kuchnia'>Kuchnia</Route>
					<Route path='ForHome/Wyprzedaż'>Wyprzedaż</Route>
					<Route path='ForHome/Koszyk'>Koszyk</Route>
					<Route path='ForHome/Ulubione'>Ulubione</Route>
					<Route path='ForHome/Wyszukiwarka'>Wyszukiwarka</Route>
					<Route path='/ForHome'>
						<Header />
						<Main />
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
