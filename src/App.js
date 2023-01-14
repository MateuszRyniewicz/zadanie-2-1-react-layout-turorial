import React from 'react';
import Best from './components/best/Best';
import Featured from './components/featured/Featured';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Best />
			<Featured />
		</>
	);
};

export default App;


