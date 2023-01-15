import React from 'react';
import './popUp.scss';

const PopUp = ({ open, onClose, filteredList }) => {
	if (!open) return null;
	return (
		<div onClick={onClose} className='overlay'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='container-popUp'>
				<div className='popUpRight'>
					<p onClick={onClose} className='closeBtn'>
						X
					</p>
					<div className='content-popUp'>
						{filteredList.map((item, index) => (
							<div key={index} className='card-item'>
								<thead className='table'>
									<tr>
										<th colSpan={2}>Car</th>
									</tr>
								</thead>
								<tbody className='tbody'>
									<tr className='row'>
										<td className='td'>Car: {item.car}</td>
									</tr>
									<tr>
										<td className='td'>Model: {item.car_model}</td>
									</tr>
									<tr>
										<td className='td'>Color: {item.car_color}</td>
									</tr>
									<tr>
										<td className='td'>Year: {item.car_model_year}</td>
									</tr>
									<tr>
										<td className='td'>Vin: {item.car_vin}</td>
									</tr>
									<tr>
										<td className='td'>Price: {item.price}</td>
									</tr>
								</tbody>
							</div>
						))}
					</div>
					<div className='btnContainer'>
						<button className='btnPrimary' onClick={onClose}>
							<span className='bold'>Yes</span>
						</button>
						<button className='btnOutline' onClick={onClose}>
							<span className='bold'>NO</span>,Thanks
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopUp;
