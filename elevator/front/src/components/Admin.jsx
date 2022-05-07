
import React from "react";
import { useState } from "react";
import Lift from "./Lift";

const Admin = () => {
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
    const url = (e) => {
        e.preventDefault();
        const header = new Headers({"content-type":"application/json"})
        fetch("http://localhost:3003/Lift", {
          method:"POST",
          headers: header,
          body:JSON.stringify({
             Email:Email,
             password:password
        })}).then(response => response.json())
        // console.log(response)
            .then(data => console.log("data ===>",data))
          }
    
          const mail = (e) => {
            // console.log(e.target.value)
              setEmail(e.target.value)
              console.log("Email ====>", Email)
          }
          const pass = (e) => {
            // console.log(e.target.value)
              setPassword(e.target.value)
              console.log("password ====>", password)
          }
      return (
          <div>
      <form action="/Admin">
        <div className="mb-3">
          <label for="exampleInputEmail1" onChange={mail} class="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={pass} className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary"onClick={url}>Submit</button>
      </form>
      <Lift/>
      </div>
    )
}
export default Admin;