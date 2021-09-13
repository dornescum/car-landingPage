import React from 'react';


const data =[
		{
			"id": 1,
			"title": "some title",
			"img": "./img/1.webp",
			"imgSm": "./img/1-sm.webp",
			"desc": "description"
		},
		{
			"id": 2,
			"title": "some title",
			"img": "./img/2.webp",
			"imgSm": "./img/1-sm.webp",
			"desc": "description"
		},
		{
			"id": 3,
			"title": "some title",
			"img": "./img/3.webp",
			"imgSm": "./img/1-sm.webp",
			"desc": "description"
		}
]

const Stack = ({img, title, subtitle}) => {
	return (
		<>
			<div>
				<h1>{title}</h1>
				<p>{subtitle}</p>

			</div>
			<img src={img} alt={title}/>
		</>
	);
};
export default Stack;

const App =()=>{
	return (
		<>
			{data.map((car)=>{
				const {img, title, desc, id, imgSm} =car;
				return <Stack key={id}
							 img={img}
							  srcset={`${imgSm} 600w, ${img} 1920w`}
							  sizes="(max-width:600px) 50vw,
                       			 (max-width:1920px) 100vh"
							 title={title}
							 subtitle={desc}
				/>
			})}
		</>
		)
}
export default App;

