import { InputProps } from "../../interface/input";

const Input: React.FC<InputProps> = ({
	type,
	value,
	placeholder,
	pattern,
	minlength,
	maxlength,
	onchange
}) => {
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			required
			onChange={onchange}
			pattern={pattern}
			minLength={minlength}
			maxLength={maxlength}
			className="w-4/4 px-4 py-2 rounded-lg border text-sm border-gray-300 bg-white 
        text-gray-900 placeholder-gray-400 focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
        transition duration-300 ease-in-out shadow-sm"
		/>
	);
};

export default Input;
