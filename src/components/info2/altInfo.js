import React from 'react';
import './alt-info.css'

const AltInfo = () => {
	return (
		<div className='container'>
			<div className="row">
				<div className="col-lg">
					<p>Oferit de</p>
					<p>Marca</p>
					<p>Model</p>
					<p>Anul</p>
					<p>Km</p>
					<p>Combustibil</p>
					<p>Transmisie</p>
				</div>
				<div className="col-lg">
					<p>Propietar</p>
					<p>Opel</p>
					<p>Asta 1.6 </p>
					<p>2009</p>
					<p>130 000</p>
					<p>Benzina</p>
					<p>Manuala</p>
				</div>
				<div className="col-lg">
					<p>Consum urban</p>
					<p>Consum extraurban</p>
					<p>Consum mixt</p>
					<p>Putere</p>
					<p>Culoare</p>
					<p>Tip caroserie</p>
					<p>Telefon</p>
				</div>
				<div className="col-lg">
					<p>7L/100km</p>
					<p>5L/100km</p>
					<p>6L/100km</p>
					<p>101 cp</p>
					<p>Gri metalizat</p>
					<p>Compacta</p>
					<p>0772772345</p>
				</div>
			</div>

		</div>
	);
};

export default AltInfo;