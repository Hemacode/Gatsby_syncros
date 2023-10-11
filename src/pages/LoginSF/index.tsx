import React, { useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {  navigate } from "gatsby";
import LOGO_IMG from "../../images/logo.svg";
import "./style.scss";

const LoginSF = () => {

    const [token, setToken] = useState('');

    const handleSubmit= ()=>{
        if(token){
        localStorage.setItem('auth',token)
        navigate("main/dashboard")
        }
        else {
            alert("Enter Auth Token with KonamiAuth")
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-wrapper__logo">
                <img src={LOGO_IMG} alt="Synkros" />
            </div>
            <div className="login-wrapper__formblk">
                <div className="login-wrapper__container">
                    {/* {showMessage && message && (
                        <MessageComponent
                            id="msg_error"
                            content={message}
                            severity="Error"
                        ></MessageComponent>
                    )} */}
                        <TextBoxComponent
                            type="textbox"
                            placeholder={"Enter Auth Token"}
                            onChange={(e)=>setToken(e.target.value)}
                            cssClass={`e-outline custom-form__input  && "e-error"
                                }`}
                            multiline={true}
                            floatLabelType="Auto" id="username"
                        />
                        {/* <TextBoxComponent
                            type="password"
                            // onChange={(e) => handleChange(e, "password")}
                            placeholder={"Password"}
                            // cssClass={`e-outline custom-form__input ${error.includes("password") && "e-error"
                            //     }`}
                            floatLabelType="Auto" id="password"
                        /> */}
                        <div className="login-wrapper__button" onClick={()=>handleSubmit()}>
                            <ButtonComponent cssClass="e-primary custom-form__button custom-form--primary" id="submit">
                                {"Sign In"}
                            </ButtonComponent>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSF;
