import React, {useState} from 'react';
import phone from '../../assets/svg/phone.svg'
import emailIcon from  '../../assets/svg/email.svg'
import './FooterState.css';

const FooterState = () => {
	const [showNumber, setShowNumber] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	const handleNumber = () => {
		setShowNumber(!showNumber)
	}
	const handleEmail = () => {
		setShowEmail(!showEmail)
	}

	return (
		<div className='container'>
			<div className="row-footer">
				<button onClick={handleNumber} className='btn-info' ><img src={phone} alt='phone-icon' /></button>
				<div className='row'>
					{showNumber && <p>898989</p>}
				</div>

				<button onClick={handleEmail} className='btn-info'><img src={emailIcon} alt="email-icon"/></button>
				<div className="row">
					{showEmail && <p>email@ya</p>}
				</div>

			</div>
		</div>
	);
};

export default FooterState;