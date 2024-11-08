import React from "react";
import "./Button.css";

const Download = () => {
	const fileId = "1eLpAi6UgEGxPlGr50fnnaS-v1iUqbD7O";
	const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

	return (
		<a href={fileUrl} download className="button">
			Download Presentation
		</a>
	);
};

export default Download;
