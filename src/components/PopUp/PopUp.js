import React from 'react';
import './popUp.scss';

const PopUp = ({ open, onClose }) => {
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
						<p>text</p>
						<h3>text</h3>
						<p>test</p>
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
