import React from "react";

const Input = ({ id, name, type, placeholder, className }) => {
	const inputClassName = `text-20px md:text-24px hover:placeholder:text-blue focus:placeholder:text-blue border-b-2 border-gray hover:border-blue focus:border-blue focus:outline-none bg-transparent w-full px-8px py-8px md:py-14px ${className}`;

	return <input id={id} name={name} type={type} placeholder={placeholder} className={inputClassName} />;
};

export default Input;
