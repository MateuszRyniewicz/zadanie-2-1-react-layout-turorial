import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
	return (
		<div className='hero'>
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
						<labe>Buy</labe>
						<input type='radio' checked />
						<label>Rent</label>
						<button type='submit'>
							<AiOutlineSearch className='icon' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Hero;
