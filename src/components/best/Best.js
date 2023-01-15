import React from 'react';

import apt1 from '../../assets/apt1.jpeg';
import apt2 from '../../assets/apt2.jpeg';
import apt3 from '../../assets/apt3.jpeg';

import '../../scss/Best.scss';

const Best = () => {
	return (
		<div className='best'>
			<h1>Find Best Rated Properties</h1>
			<div>
				<p>
					<span className='bold'>All</span>
				</p>
				<p>Commercial</p>
				<p>Residential</p>
				<p>Agricultural</p>
			</div>
			<div className='container'>
				<img
					src='https://cdn.pixabay.com/photo/2017/10/28/09/57/venice-2896591_1280.jpg'
					alt=''></img>
				<img
					src='https://cdn.pixabay.com/photo/2015/05/02/09/31/dresden-749683_1280.jpg'
					alt=''></img>
				<img
					src='https://cdn.pixabay.com/photo/2017/06/03/11/37/giethoorn-2368494_1280.jpg'
					alt=''></img>
			</div>
			<button className='btn'>View All</button>
		</div>
	);
};

export default Best;
