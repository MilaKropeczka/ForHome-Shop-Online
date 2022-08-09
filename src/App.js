import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Route exact={true} path='/'>
					<Header />
					<Main />
					<SendSection />
					<Faq />
				</Route>
				<Route path='/Sypialnia'></Route>
				<Route path='/Salon'></Route>
				<Route path='/Kuchnia'></Route>
				<Route path='/Wyprzedaż'></Route>
				<About />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
