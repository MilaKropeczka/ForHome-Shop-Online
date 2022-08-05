import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Header />
			<Main />
			<SendSection />
			<Faq />
			<About />
			<Footer />
		</div>
	);
}

export default App;
