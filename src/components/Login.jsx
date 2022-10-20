import React, {useState} from 'react';
import Home from "./Home";

const Login = () => {

    const [firstnamelog , setFirstnamelog] = useState("");
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog , setPasswordlog] = useState("");

    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {

        e.preventDefault();
        let user = localStorage.getItem("Firstname").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");
    if (!firstnamelog || !setPasswordlog){
        setFlag(true);
    console.log("Empty");
    } else if (passwordlog !== pass || firstnamelog !== user){
        setFlag(true)
    }
       else {
        setHome(!home);
        setFlag(false);

       }
    }
  return (
    <div>

        {home ? (
        <form onSubmit={handleLogin}>
        <h1 className='d-flex justify-content-center'>Log In</h1>
            <div className='form-group'>
                <label> First Name</label>
                <input type="text"
                className='form-control'
                placeholder='Enter first name'
                onChange={(event) => setFirstnamelog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="text"
                className='form-control '
                placeholder='Enter E-mail'
                onChange={(event) => setEmaillog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password"
                className='form-control'
                placeholder='Enter password'
                onChange={(event) => setPasswordlog(event.target.value)}
                />
            </div>
            <div className='text-center'>

            <button type='submit' className='btn border border-white bg-danger mt-2 btn-dark btn-lg btn-block'>Log In</button>
            </div>
              {flag &&(
                 <div className='alert alert-danger' role="alert">
                           !Please Fill Correct Info.
                 </div>
            )}
            
        </form>
        ):(
            <Home />
        )}
    </div>
  )
}

export default Login