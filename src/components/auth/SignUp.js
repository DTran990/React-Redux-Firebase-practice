import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleChange = (e) =>{
        switch (e.target.id){
            case ("email"):
                setEmail(e.target.value);
                break;
            case ("password"):
                setPassword(e.target.value);
                break;
            case ("firstName"):
                setFirstName(e.target.value);
                break;
            case ("lastName"):
                setLastName(e.target.value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password, firstName, lastName)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="firstName">First Name</label><br/>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="lastName">LastName</label><br/>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
            </form>
        </div>
    )}

export default SignUp;
