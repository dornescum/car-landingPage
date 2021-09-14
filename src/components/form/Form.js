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

						<div className="create-blog content">
							<form action="/" method="POST">
								<div className='display-f'>
									<div className="col-form-left">
										<input type="text" id="name" name="name" required  placeholder='Nume'/>
										<input type="text" id="phone" name="phone" required  placeholder='Telefon'/>
										<input type="text" id="email" name="email" required placeholder='Email' />
									</div>
									<div className="col-form-right">
										<textarea id="body" name="body" required placeholder="Mesajul tau"></textarea>
									</div>
								</div>


								<div className='btn-holder'>
									<button>Submit</button>
								</div>

							</form>
						</div>


			</div>

	)
};

export default Form;