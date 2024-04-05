import React, { useContext } from "react";
import inputContext from "../stor/InputContextprovider";

function Form() {
    const {formData, setFormData} = useContext(inputContext);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
            placeholder="your real name"
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
            placeholder="example@test.com"
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
            placeholder="Min 6 charaters long"
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
}
export default Form;