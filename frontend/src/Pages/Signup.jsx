import React, { useState } from "react";
import "../Pages/Styles/Signup.css"
//import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function checkEmptyField(stringInput){
        if(stringInput=="" || stringInput.length === 0){
            return true
        }
        return false
    }
    function checkPassword(passwrd){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
        return passwordRegex.test(passwrd)
    }

    const onButtonClick = async () => {
        console.log("Clicked")
        var isOk = false
        if(checkEmptyField(name) || checkEmptyField(username), checkEmptyField(password), checkEmptyField(conPassword)){
            alert("Fields cannot be empty")
        }
        else if(password!==conPassword){
            alert("Password doesnot match")
        }
        else if(false){
            alert("Username already exist")
        }
        else if(!checkPassword(password)){
            alert("Password must have atleast 1 uppercase,lowercase,number and # or @")
        }
        else{
            isOk=true
        }

        if(isOk){
            
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Signup</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={name}
                placeholder="Full Name"
                onChange={ev => setName(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={username}
                placeholder="Username"
                onChange={ev => setUsername(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={conPassword}
                placeholder="Password"
                onChange={ev => setConPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                style={{ background:'cornflowerblue'}}
                value={"Sign up"} />
        </div>
    </div>
}

export default Signup