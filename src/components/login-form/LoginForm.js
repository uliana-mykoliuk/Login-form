import Input from "../basic/input/Input";
import Button from "../basic/button/Button";
import "./LoginForm.css";

const LoginForm = () => {
	return (
		<div className="app-bg h-100vh w-full flex justify-center items-center px-20px">
			<div className="bg-white max-w-540px w-full mt-24px py-60px md:py-115px px-24px md:px-60px rounded-3xl">
				<h2 className="text-center">Login</h2>
				<form className="my-45px md:my-82px">
					<Input placeholder="Email" />
					<Input placeholder="Password" className="mt-45px" />
					<Button label="Login" className="mt-50px" />
				</form>
				<p className="text-center">
					Forgot <a href="#">Password?</a>
				</p>
				<p className="text-center mt-20px">
					Don't have an account? <a href="#">Sign up</a>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
