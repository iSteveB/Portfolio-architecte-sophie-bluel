export const checkUser = () => {
	const token = localStorage.getItem('token');
	return token;
};