import { React, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../../scss/hero.scss';
import PopUp from '../PopUp/PopUp';

const Hero = () => {
	const [openPopUp, setOpenPopUp] = useState(true);

	return (
		<div className='hero'>
			<PopUp open={openPopUp} onClose={() => setOpenPopUp(false)}></PopUp>
			<div className='content'>
				<h1>Find the perfect place</h1>
				<p className='search-text'>
					Search the largest selection of luxury high-rice apartments,
					multi-family homes, and luxury homes
				</p>
				<form className='search'>
					<div>
						<input type='text' placeholder='Enter Keyword...' />
					</div>
					<div className='radio'>
						<input type='radio' checked />
						<label>Buy</label>
						<input type='radio' checked />
						<label>Rent</label>
						<button type='submit' onClick={() => setOpenPopUp(true)}>
							<AiOutlineSearch className='icon' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Hero;
