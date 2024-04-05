import React, { useContext } from "react";
import inputContext from "../stor/InputContextprovider"

function Form() {
    const {formData, setFormData} = useContext(inputContext);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // setFormData();
    };


    return(
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
        </label> <br/>
        <label>
            Email:
            <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </label> <br/>
        <label>
            Password:
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            maxLength={12}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
}
export default Form;