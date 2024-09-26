import { isAChild } from "../../interface/children";

const Title: React.FC<isAChild> = ({ children }) => {
	return <div className="text-2xl font-semibold text-center">{children}</div>;
};

export default Title;
