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

// IMG
import imgPillow1 from '../src/assets/Mobile/pillow1.jpg';
import imgPillow2 from '../src/assets/Mobile/pillow2.jpg';
import imgPillow3 from '../src/assets/Mobile/pillow3.jpg';
import imgPillow4 from '../src/assets/Mobile/pillow4.jpg';
import imgPillow5 from '../src/assets/Mobile/pillow5.jpg';
import imgCandle2 from '../src/assets/Mobile/candle2.jpg';
import imgCandle4 from '../src/assets/Mobile/candle4.jpg';
import imgCandle7 from '../src/assets/Mobile/candle7.jpg';
import imgCandle8 from '../src/assets/Mobile/candle8.jpg';
import imgMug2 from '../src/assets/Mobile/mug2.jpg';
import imgMug3 from '../src/assets/Mobile/mug3.jpg';
import imgMug4 from '../src/assets//Mobile/mug4.jpg';
import imgMug7 from '../src/assets/Mobile/mug7.jpg';

// let totalSum;

function App() {
	const [mapItems, setMapItems] = useState([
		{
			id: 1,
			status: false,
			statusFont: 'normal',
			title: `Poduszka żółta niebieska`,
			shortContent: `poduszka na jesień`,
			content: false,
			price: 9.99,
			newPrice: false, //priceSale
			imgSmall: `${imgPillow1}`,
			imgLarge: false,
			category: 'Sypialnia',
			fav: false,
			amount: 4,
			cart: true,
		},
		{
			id: 2,
			status: false,
			statusFont: 'normal',
			title: `Poduszka serce walentynki`,
			shortContent: `poduszka serce walentynki`,
			content: false,
			price: 33.99,
			newPrice: false,
			imgSmall: `${imgPillow2}`,
			imgLarge: false,
			category: 'Sypialnia',
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 3,
			status: `hit`,
			statusFont: 'normal',
			title: `Komplet poduszek beżowych`,
			shortContent: `Komplet poduszek beżowych`,
			content: false,
			price: 104.99,
			newPrice: false,
			imgSmall: `${imgPillow3}`,
			imgLarge: false,
			category: 'Sypialnia',
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 4,
			status: false,
			statusFont: 'normal',
			title: `Zestaw czarno-biały`,
			shortContent: `Komplet poduszek beżowych`,
			content: false,
			price: 49.99,
			newPrice: false,
			imgSmall: `${imgPillow4}`,
			imgLarge: false,
			category: 'Sypialnia',
			fav: false,
			amount: 2,
			cart: true,
		},
		{
			id: 5,
			status: 'wyprzedaz',
			statusFont: 'through',
			title: `Komplet poduszek kolorowe`,
			shortContent: `Komplet poduszek kolorowe`,
			content: false,
			price: 129.99,
			newPrice: `99.78 zł`,
			imgSmall: `${imgPillow5}`,
			imgLarge: false,
			category: 'Sypialnia',
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 6,
			status: 'hit',
			statusFont: 'normal',
			title: `Świeczka kwiat`,
			shortContent: `Świeczka kwiat`,
			content: false,
			price: 29.99,
			newPrice: false,
			imgSmall: `${imgCandle2}`,
			imgLarge: false,
			category: 'Salon',
			fav: false,
			amount: 2,
			cart: false,
		},
		{
			id: 7,
			status: `wyprzedaz`,
			statusFont: 'through',
			title: `Zestaw świec z gwiazdą`,
			shortContent: `Zestaw świec z gwiazdą`,
			content: false,
			price: 19.99,
			newPrice: `14.99 zł`,
			imgSmall: `${imgCandle4}`,
			imgLarge: false,
			category: 'Salon',
			fav: false,
			amount: 2,
			cart: false,
		},
		{
			id: 8,
			status: false,
			statusFont: 'normal',
			title: `Świeczki losowe kolory`,
			shortContent: `Świeczki losowe kolory`,
			content: false,
			price: 3.99,
			newPrice: false,
			imgSmall: `${imgCandle7}`,
			imgLarge: false,
			category: 'Salon',
			fav: false,
			amount: 2,
			cart: false,
		},
		{
			id: 9,
			status: `hit`,
			statusFont: 'normal',
			title: `Duża świeczka różana`,
			shortContent: `Zestaw świec z gwiazdą`,
			content: false,
			price: 34.99,
			newPrice: false,
			imgSmall: `${imgCandle8}`,
			imgLarge: false,
			category: 'Salon',
			fav: false,
			amount: 2,
			cart: false,
		},
		{
			id: 10,
			status: `hit`,
			statusFont: 'normal',
			title: `Turkusowy kubek`,
			shortContent: `Turkusowy kubek`,
			content: false,
			price: 19.99,
			newPrice: false,
			imgSmall: `${imgMug2}`,
			imgLarge: false,
			category: `Kuchnia`,
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 11,
			status: `wyprzedaz`,
			statusFont: 'through',
			title: `Beżowy kubek serce`,
			shortContent: `Beżowy kubek serce`,
			content: false,
			price: 24.99,
			newPrice: `21.99 zł`,
			imgSmall: `${imgMug3}`,
			imgLarge: false,
			category: `Kuchnia`,
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 12,
			status: false,
			statusFont: 'normal',
			title: `coffe saves kubek`,
			shortContent: `coffe saves kubek`,
			content: false,
			price: 14.99,
			newPrice: false,
			imgSmall: `${imgMug4}`,
			imgLarge: false,
			category: `Kuchnia`,
			fav: false,
			amount: 1,
			cart: false,
		},
		{
			id: 13,
			status: `wyprzedaz`,
			statusFont: 'through',
			title: `Brązowy matowy kubek`,
			shortContent: `Brązowy matowy kubek`,
			content: false,
			price: 17.99,
			newPrice: `14.99 zł`,
			imgSmall: `${imgMug7}`,
			imgLarge: false,
			category: `Kuchnia`,
			fav: true,
			amount: 1,
			cart: false,
		},
	]);

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/Sypialnia'>
						<Main
							title='Sypialnia'
							component={<Sypialnia handleState={mapItems} />}
						/>
					</Route>
					<Route path='/Salon'>
						<Main
							title='Salon'
							component={<Salon handleState={mapItems} />}
						/>
					</Route>
					<Route path='/Kuchnia'>
						<Main
							title='Kuchnia'
							component={<Kuchnia handleState={mapItems} />}
						/>
					</Route>
					<Route path='/Wyprzedaż'>
						<Main
							title='Wyprzedaż'
							component={<Wyprzedaz handleState={mapItems} />}
						/>
					</Route>
					<Route path='/Koszyk'>
						{/* <Cart title='Koszyk' /> */}
						<Cart title='Koszyk' handleState={mapItems} />
					</Route>
					<Route path='/Ulubione'>
						<Main
							title='Ulubione'
							component={<Ulubione handleState={mapItems} />}
						/>
					</Route>
					<Route path='/Wyszukiwarka'>
						<Main
							title='Wyszukaj frazy ...""'
							component={<Wyszukiwarka handleState={mapItems} />}
						/>
					</Route>
					<Route exact path='/'>
						<Header />
						<Main
							title='Bestsellery'
							component={<Bestseller handleState={mapItems} />}
						/>
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
