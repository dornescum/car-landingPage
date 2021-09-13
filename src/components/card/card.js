import React from 'react';

const Card = ({img, title, subtitle, small, large}) => {
	return (
		<>
			<div>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
			<img src={img} alt={title}
			srcSet={`${small} 600w, ${large} 1920w`}
				 sizes="(max-width:600px) 50vw,
                        (max-width:1920px) 100vh"
			/>
		</>
	);
};

export default Card;