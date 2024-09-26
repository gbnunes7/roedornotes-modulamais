export interface InputProps {
	type: string;
	value: string;
	placeholder: string;
	pattern: string;
	maxlength?: number;
	minlength?: number;
	onchange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}
