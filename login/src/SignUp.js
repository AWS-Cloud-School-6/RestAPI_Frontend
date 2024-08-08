import axios from 'axios';
import logo from './logo.svg';
import './SignUp.css';
import React, { useEffect, useState } from "react";
import {useNavigate, redirect, Navigate } from 'react-router-dom';
import { useRedirect } from 'react-admin';

const SERVER_API = 'http://35.193.142.55:8080/member'

function SignUp() {
    const [nameInput, setName] = useState("");
    const [idInput, setId] = useState("");
    const [pwInput, setPw] = useState("");

    const redirect = useRedirect();
    const navigate=useNavigate()

  
    const SignUpOnClick = (e) => {
        //e.preventDefault();

        axios.post(SERVER_API, {
            "memberName": nameInput,
            "memberId": idInput,
            "memberPw": pwInput
        })
        .then( (response) => {
            //e.preventDefault();

            setId("");
            setName("");
            setPw("");

            alert(response.data.msg);
            
        }, e.preventDefault() )
        .catch( (error)=> {
            alert(error);
        });
    };

    const RtnLoginBtnOnClick = (e) => {
       
        redirect('/Login');
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
                <h1 className="App-title">Sign-Up</h1>
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