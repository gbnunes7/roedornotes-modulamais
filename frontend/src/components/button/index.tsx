import React from "react";

const Button = ({
	children,
	background,
	color,
	type,
	onclick,
}: {
	background: string;
	color: string;
	children: React.ReactNode;
	type?: "submit" | "reset" | "button";
	onclick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			type={type}
			onClick={onclick}
			className="py-2 px-6 w-[153px] rounded-[32px] text-[20px] text-center border border-[#041832] transition-transform duration-300 transform hover:scale-110"
			style={{ backgroundColor: background, color: color }}
		>
			{children}
		</button>
	);
};

export default Button;
