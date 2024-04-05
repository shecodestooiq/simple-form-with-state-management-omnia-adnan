import { Link } from "react-router-dom";


function Login() {
    return(
        <>
        <ul>
            <li>
                <Link to='/'>Login</Link>
            </li>
            <li>
                <Link to='/Home'>Home</Link>
            </li>
        </ul>
        </>
    );
}
export default Login;