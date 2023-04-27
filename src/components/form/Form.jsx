const Form = () => {
    return(
        <div>
            <form>
                <label>Email</label>
                <input 
                    placeholder="email"
                    type="Email" 
                />

                <label>password</label>
                <input 
                    placeholder="password"
                    type="text" 
                />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Form;