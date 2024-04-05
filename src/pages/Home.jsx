import React, { useContext } from "react";
import inputContext from "../stor/InputContextprovider";

function Login() {
    const {formData} = useContext(inputContext);
    return(
        <div>
        username: {formData.username},
        email: {formData.eamil},
        password: {formData.password},
        </div>
    );
}
export default Login;