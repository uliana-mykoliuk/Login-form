import React from "react";
import "./Button.css";

const Button = ({ type, label, className }) => {
	const buttonClassName = `button text-white text-20px md:text-24px py-14px md:py-20px px-8px w-full ${className}`;

	return (
		<button type={type} className={buttonClassName}>
			{label}
		</button>
	);
};

export default Button;
