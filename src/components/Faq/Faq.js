import React from 'react';
import Accordions from './Accordions/Accordions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Faq() {
	return (
		<>
			<Container fluid='lg'>
				<Row>
					<h2 className='text-center my-5'>FAQ</h2>
				</Row>
				<Row>
					<Accordions
						title='W jaki sposób moge złożyć zamówienie?'
						content='Złożenie zamówienia jest bardzo proste! W naszym sklepie możesz składać zamówienia przez całą dobę.
Produkty znajdziesz za pomocą wyszukiwarki lub nawigacji. Jeśli wybrała(e)ś produkt, możesz wybrać w zależności od produktu, rodzaj, smak a także ilość.'
					/>
					<Accordions
						title='Jak mogę zapłacić za zamówienie?'
						content='W większości sklepów zakupy można opłacić także standardowym przelewem zlecanym przez system bankowości internetowej. Po dokonaniu zakupu dostaniemy informację o numerze rachunku, na który mamy wpłacić należność. Będziemy też musieli wpisać odpowiedni tytuł przelewu. Z reguły jest to numer zamówienia.'
					/>
					<Accordions
						title='Jakie są opcje dostawy?'
						content='Najpopularniejszymi formami dostawy są: Poczta Polska oraz Paczkomaty InPost, ale też dowolny szybki i sprawdzony kurier.'
					/>
					<Accordions
						title='W jaki sposób mogę złożyć reklamację?'
						content='Reklamację można złożyć osobiście lub wysłać pocztą. Do reklamacji można dołączyć paragon - pomoże on sprawniej załatwić sprawę. Ważne! Do reklamacji nie jest wymagane dołączenie paragonu, może się on jedynie przydać w szybszym rozwiązaniu sprawy.'
					/>
				</Row>
			</Container>
		</>
	);
}

export default Faq;
