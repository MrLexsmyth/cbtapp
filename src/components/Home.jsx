import React, {useState} from 'react';
import Question from './Question';

const Home = () => {

  const [firstnamelog , setFirstnamelog] = useState("");
  const [question, setQuestion] = useState(true);
  const [flag, setFlag] = useState(false);

  let user = localStorage.getItem("Firstname").replace(/"/g,"");

  function handleStart(e) {

    e.preventDefault();

if (!firstnamelog ){
    setFlag(true);
console.log("Empty");
} else if (firstnamelog !== user){
    setFlag(true)
}
   else {
    setQuestion(!question);
    setFlag(false);

   }
  } 
  
  const capitalizeFirst = user => {
    return user.charAt(0).toUpperCase() + user.slice(1);
  };
  return (
    
    <div>
      
      {question ? ( 
        <>
        <form onSubmit={handleStart}>
      <h3>Hey {capitalizeFirst(user)}, Please carefully read the Instructions.</h3>
      <div className='text-center text-decoration-underline'>
          <h3 style={{fontWeight: 'bold', fontSize: '2rem', marginTop:50} }>Instructions.</h3>
      </div>
      <div style={{textAlign: "start", marginLeft: '50px'}}>
        <p>• Do not navigate away from quiz window or close this window. Do not use any browser navigation buttons (i.e. Back, Forward etc). Select your answers and click Next.</p>
       
        <p>• Click Submit Quiz only when done to save and submit answers. Do not click Submit Quiz until you have completed the test.</p>
      </div>
      <br/>
            <div className='form-group'>
                <input type="text"
                className='form-control'
                placeholder='Enter first name and start the exam....Good Luck!'
                onChange={(event) => setFirstnamelog(event.target.value)}
                />
            </div>

     <button type='submit' className='btn border border-white bg-danger mt-2 btn-dark btn-lg btn-block'>Start</button>
      </form> 

      
      </>



      )
      :(
        <Question />
    )}
    </div>
  )
}

export default Home;