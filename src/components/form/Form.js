import React, {useState} from 'react';
import './form.css';
import phone from '../../assets/svg/phone.svg'
import emailIcon from  '../../assets/svg/email.svg'

const Form = () => {
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
				<div className="row-form">
					<div className="col-left">
						<div className="create-blog content">
							<form action="/" method="POST">
								<label htmlFor="name">Nume:</label>
								<input type="text" id="name" name="name" required />
								<label htmlFor="phone">Numar de telefon:</label>
								<input type="text" id="phone" name="phone" required />
								<label htmlFor="body">Mesaj:</label>
								<textarea id="body" name="body" required></textarea>
								<button>Submit</button>
							</form>
						</div>
					</div>

					<div className="col-form">

						<div className="center">
							<div className="display-f">
								<button onClick={handleNumber} className='btn-info' ><img src={phone} alt='phone-icon' /></button>
								<div className='display-f'>
									{showNumber && <p className='show-info'>898989</p>}
								</div>
							</div>
							<div className="display-f">
								<button onClick={handleEmail} className='btn-info'><img src={emailIcon} alt="email-icon"/></button>
								<div className="row">
									{showEmail && <p className='show-info'>email@ya</p>}
								</div>
							</div>
						</div>


					</div>
				</div>

			</div>

	)
};

export default Form;