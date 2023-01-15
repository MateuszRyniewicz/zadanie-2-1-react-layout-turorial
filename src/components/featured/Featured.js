import React from 'react';

import '../../scss/Feeatured.scss';

const Featured = () => {
	return (
		<div className='featured'>
			<h1 className='featured-text'>Top Featured Listings</h1>
			<p className='featured-text'>
				Selecte Listings by City, State, & Zip based on views.
			</p>
			<div className='container'>
				<img
					className='span-3 image-grid-row-2'
					src='https://cdn.pixabay.com/photo/2014/08/11/21/27/houses-416031_1280.jpg'
					alt=''
				/>
				<img
					src='https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg'
					alt=''
				/>
				<img
					src='https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077_1280.jpg'
					alt=''
				/>
				<img
					src='https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg'
					alt=''
				/>
				<img
					src='https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_1280.jpg'
					alt=''
				/>
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
				<img
					className='order-2'
					src='https://cdn.pixabay.com/photo/2018/01/25/20/53/lifestyle-3107041_1280.jpg'
					alt=''
				/>
				<img
					className='order-3'
					src='https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg'
					alt=''
				/>
				<img
					className='order-1 span-3 image-grid-row-2'
					src='https://cdn.pixabay.com/photo/2017/11/25/15/48/house-2977085_1280.jpg'
					alt=''
				/>
				<img
					className='order-4'
					src='https://cdn.pixabay.com/photo/2016/08/26/15/06/bathroom-1622403_1280.jpg'
					alt=''
				/>
				<img
					className='order-5'
					src='https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_1280.jpg'
					alt=''
				/>
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
