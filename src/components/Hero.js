import React from "react";
import "./Hero.css";
import "./Button.css";
import Download from "./Download";

const Hero = () => {
	return (
		<div className="hero">
			{/* Элемент сверху */}
			<div className="hero-item top">
				<h2>Hellmann East Europe Overseas LLC</h2>
			</div>
			
			{/* Центральный элемент */}
			<div className="hero-item center">
				<Download />
			</div>

			{/* Элемент снизу */}
			<div className="hero-item bottom">
				<p>
					Waiting for Your request:
					<br />
					<br />
					Dariia Iarmolovych - diarmolo@hellmann.com
					<br /> +3 80 50 490 34 30 / +3 80 63 136 2278
					<br />
					<br />
					Yana Lystopad - ylystopa@hellmann.com
					<br /> +38 068 825 96 33
				</p>
			</div>
		</div>
	);
};

export default Hero;
