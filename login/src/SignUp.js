import logo from './logo.svg';
import './SignUp.css';
import React, { useEffect, useState } from "react";
function SignUp() {
    const [nameInput, setName] = useState("");
    const [idInput, setId] = useState("");
    const [pwInput, setPw] = useState("");

    const SignUpOnClick = () => {
        alert("Sign Up Button Clicked" + nameInput + idInput + pwInput);
    };
    const RtnLoginBtnOnClick = () => {
        console.log("Return to Login Button Clicked");
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeId = (e) => {
        setId(e.target.value);
    }
    const handleChangePw = (e) => {
        setPw(e.target.value);
    }
    return (
        <div className="SignUp">
            <header className="App-header">
                <h1 className="App-title">Sign-In</h1>
            </header>
            <body>
                <form>
                    <div className="Name">
                        <label className="nameText" for='name.input'>이름: </label>
                        <input className="nameInput" value={nameInput} id="name.input" type="text" onChange={handleChangeName} />
                    </div>
                    <div className="IDFeatures">
                        <label className="idText" for='id.input'>아이디: </label>
                        <input className="idInput" value={idInput} id="id.input" type="text" onChange={handleChangeId} />
                    </div>
                    <div className="PWFeatures">
                        <label className="pwText" for='pw.input'>비밀번호: </label>
                        <input className="pwInput" value={pwInput} id="pw.input" type="password" onChange={handleChangePw} />
                    </div>
                    <div className="Btn-Container">
                        <button onClick={SignUpOnClick} className="SignUpBtn">Sign Up</button>
                        <button onClick={RtnLoginBtnOnClick} className="RtnLoginBtn">Return to Login</button>
                    </div>
                </form>
            </body>

        </div>
    );
}

export default SignUp;