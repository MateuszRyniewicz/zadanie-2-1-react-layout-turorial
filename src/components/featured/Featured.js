import React from 'react';

import House1 from '../../assets/house1.jpg';
import Bed1 from '../../assets/bed1.jpg';
import Bed2 from '../../assets/bed2.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import Bathroom from '../../assets/bath1.jpg';
import House2 from '../../assets/house2.jpg';
import Bed3 from '../../assets/bed3.jpg';
import Bed4 from '../../assets/bed4.jpg';
import Bathroom2 from '../../assets/bath2.jpg';
import LivingRoom from '../../assets/living-room.jpg';
import './Feeatured.css';

const Featured = () => {
	return (
		<div className='featured'>
			<h1 className='featured-text'>Top Featured Listings</h1>
			<p className='featured-text'>
				Selecte Listings by City, State, & Zip based on views.
			</p>
			<div className='container'>
				<img className='span-3 image-grid-row-2' src={House1} alt='' />
				<img src={Bed1} alt='' />
				<img src={Bed2} alt='' />
				<img src={Kitchen} alt='' />
				<img src={Bathroom} alt='' />
				<div className='span-3 img-details'>
					<div className='top'>
						<h2>123 Acme St. Dallas, TX</h2>
						<p>House for Sale</p>
						<p className='price'>$2,677,000</p>
					</div>
					<div className='info-grid'>
						<div>
							<div className='info'>
								<p className='bold'>Bedrooms:</p>
								<p>5</p>
							</div>
							<div className='info'>
								<p className='bold'>Bathrooms:</p>
								<p>7</p>
							</div>
						</div>
						<div>
							<div className='info'>
								<p className='bold'>Square Feet:</p>
								<p>8,138</p>
							</div>
							<div className='info'>
								<p className='bold'>Est Payment:</p>
								<p>$14,797/mo</p>
							</div>
						</div>
					</div>
				</div>
				<div className='span-2 right-img-details'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
						omnis unde dolores sed, sapiente, repudiandae excepturi illum
						laboriosam quaerat voluptatum ipsa quo necessitatibus! Repellendus
						quae?
					</p>
					<button className='btn'>View Listing</button>
				</div>
			</div>
			<div className='container'>
				<img className='order-2' src={Bed3} alt='' />
				<img className='order-3' src={Bed4} alt='' />
				<img className='order-1 span-3 image-grid-row-2' src={House2} alt='' />
				<img className='order-4' src={Bathroom2} alt='' />
				<img className='order-5' src={LivingRoom} alt='' />
				<div className='order-7 span-2 right-img-details'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
						omnis unde dolores sed, sapiente, repudiandae excepturi illum
						laboriosam quaerat voluptatum ipsa quo necessitatibus! Repellendus
						quae?
					</p>
					<button className='btn'>View Listing</button>
				</div>
				<div className='order-6 span-3 img-details'>
					<div className='top'>
						<h2>123 Acme St. Dallas, TX</h2>
						<p>House for Sale</p>
						<p className='price'>$2,677,000</p>
					</div>
					<div className='info-grid'>
						<div>
							<div className='info'>
								<p className='bold'>Bedrooms:</p>
								<p>5</p>
							</div>
							<div className='info'>
								<p className='bold'>Bathrooms:</p>
								<p>7</p>
							</div>
						</div>
						<div>
							<div className='info'>
								<p className='bold'>Square Feet:</p>
								<p>8,138</p>
							</div>
							<div className='info'>
								<p className='bold'>Est Payment:</p>
								<p>$14,797/mo</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
