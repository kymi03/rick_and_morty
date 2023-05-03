import { useState } from "react";
import  validation  from './validation.js';

const Form = (props) => {

    const { login } = props

    const [ userData, setUserData] = useState({email: " ", password: " "});

    const [errors, setErrors] = useState({}); 

    const handleChange = (event) => {
        setUserData({ 
            ...userData,
            [ event.target.name ] : event.target.value
        })
        setErrors(validation({
            ...userData,
            [ event.target.name ] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div>
            <form>
                <label>Email</label>
                <input 
                    placeholder="email"
                    type="Email" 
                    name="email"
                    onChange={handleChange}

                />
                {
                    errors.email ? (
                        <p  style={{color: 'red'}}>{errors.email}</p>
                    ) : errors.emailVacio ? (
                        <p style={{color: 'red'}}>{errors.emailVacio}</p>
                    ) : (
                        <p style={{color: 'red'}}> {errors.caracteres}</p>
                    )
                }
                <label>password</label>
                <input 
                    placeholder="password"
                    type="text" 
                    name="password"
                    onChange={handleChange}

                />
                {
                    errors.password ? (
                        <p style={{color: 'red'}}  >{errors.password}</p>
                    ) : 
                    ''
                }

                <button type='submit' onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Form;