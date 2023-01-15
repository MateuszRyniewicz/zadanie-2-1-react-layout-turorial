import { React, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../../scss/hero.scss';
import PopUp from '../PopUp/PopUp';
import { data } from '../../data';

const Hero = () => {
	const [filteredList, setFilteredList] = useState(data);
	const [openPopUp, setOpenPopUp] = useState(true);
	const [inputSearchTitle, setInputSearchTitle] = useState('');
	console.log(filteredList);

	useEffect(() => {
		const filterdListItems = () => {
			return data.filter((item) =>
				item.car.toLowerCase().includes(inputSearchTitle.toLowerCase())
			);
		};
		setFilteredList(filterdListItems);
	}, [inputSearchTitle]);

	return (
		<div className='hero'>
			<PopUp
				open={openPopUp}
				filteredList={filteredList}
				onClose={() => setOpenPopUp(false)}></PopUp>
			<div className='content'>
				<h1>Find the perfect place</h1>
				<p className='search-text'>
					Search the largest selection of luxury high-rice apartments,
					multi-family homes, and luxury homes
				</p>
				<form className='search'>
					<div>
						<input
							type='text'
							placeholder='Enter Keyword...'
							onInput={(e) => setInputSearchTitle(e.target.value)}
						/>
					</div>
					<div className='radio'>
						<input type='radio' checked />
						<label>Buy</label>
						<input type='radio' checked />
						<label>Rent</label>
						<button type='button' onClick={() => setOpenPopUp(true)}>
							<AiOutlineSearch className='icon' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Hero;
