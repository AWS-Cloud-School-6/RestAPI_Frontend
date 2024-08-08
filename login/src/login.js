import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignUp from "./SignUp";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const ChangeId_handler = (e) => {
        setId(e.target.value);
    }
    
    const ChangePw_handler = (e) => {
        setPassword(e.target.value);
    }

    const LoginFunc = (e) => {
        alert(id+password);
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={LoginFunc}>
                <label htmlFor="id">아이디: </label>
                <input type="test" id="id" onChange={ChangeId_handler}/>
                <br />

                <label htmlFor="password">비밀번호: </label>
                <input type="password" onChange={ChangePw_handler}/>
                <br />
                <button type="submit">로그인</button>
                <br />

                <p class="signup-link">
                    아직 회원이 아니신가요? <a href="/SignUp">회원가입</a>
                </p>
            </form>
        </>
    )
}

export default Login;