import React from 'react'
import style from './CSS/Login.module.css'

function LoginSingup() {
  return (
    <div className={style.LoginSingup}>
      <div className={style.LoginSingup_Container}>
        <h1>Sing Up</h1>
        <div className={style.Loginsing_input}>
          <input type="text" name="" id=""  placeholder='Enter Name'/>
         
          <input type="email" name="" id="" placeholder='Enter Email'/>
         
          <input type="password" name="" id=""  placeholder='Enter password'/>
     

        </div>
        <button>Continue</button>
        <p className={style.Loginsing_login}>Already have an account?  <span>Login here</span></p>
        <div className={style.Loginsing_agree}>
          <input type="checkbox" name="" id="" />
          <p>Agree term and condition</p>

        </div>


      </div>
   
   
    </div>
  )
}

export default LoginSingup
