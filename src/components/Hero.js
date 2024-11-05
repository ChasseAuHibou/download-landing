import React from "react";
import "./Hero.css";
import "./Button.css";
import Download from "./Download";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<Download />
			</div>
		</div>
	);
};

export default Hero;
