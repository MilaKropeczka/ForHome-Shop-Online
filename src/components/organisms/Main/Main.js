import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapItems from '../../../hooks/MapItems';
import { useState } from 'react';

function Main(props) {
	const [isSearched, setSearched] = useState(false);
	const [inputValue, setInputValue] = useState(false);

	const changeIsSearch = (e) => {
		setInputValue(e.target.value.toLowerCase());
		setSearched(true);
	};

	const checkIsSearched = () => {
		if (isSearched === true) {
			return (
				<MapItems
					category={props.category}
					status={props.status}
					isSearched={isSearched}
					inputValue={inputValue}
				/>
			);
		}
	};

	const CategorySerachInput = () => {
		if (props.category === 'search') {
			return (
				<>
					<input
						onChange={changeIsSearch}
						className='text-center m-auto'
						type='text'
						placeholder='wprowadz nazwe produktu'
					/>{' '}
					{checkIsSearched()}
				</>
			);
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			<Row>
				{props.category === 'search' ? (
					CategorySerachInput()
				) : (
					<MapItems
						category={props.category}
						status={props.status}
						isSearched={isSearched}
					/>
				)}
			</Row>
		</Container>
	);
}

export default Main;
