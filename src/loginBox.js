import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import axios from 'axios'; 
const LoginPage = (props) => {
        // var userName= sessionStorage.getItem("username");
        // var password= sessionStorage.getItem("password");
         if(userName!=undefined && password!=undefined){

            setTimeout(function(){ 
            // document.getElementById("loginForm").classList.add("hide");
            // document.getElementById("searchPanel").classList.remove("hide");
            // document.getElementById("logout").classList.remove("hide");
            // document.getElementById("showList").classList.remove("hide");
        }, 10);
            
        
    }
    const loginWasClickedCallback = (data) => {
        if(userName==undefined && password==undefined){
            var usr=data.username;
            var pwd=data.password;
        }
    // var url='http://129.146.111.65:3000/user/userauth/?user='+usr+'&pwd='+pwd;
    //   axios.get(url).then(response => {
    //       var json = response.data;
          if(data.username==='admin' && data.password==='admin123'){
              alert('success');
                // document.getElementById("loginForm").classList.add("hide");
                // document.getElementById("searchPanel").classList.remove("hide");
                // document.getElementById("logout").classList.remove("hide");
                // document.getElementById("showList").classList.remove("hide");
            if (typeof(Storage) !== "undefined") {
                 if(userName!=undefined && password!=undefined){
                 }
                 else{
                    var userName= sessionStorage.setItem("username", data.username);
                    var password= sessionStorage.setItem("password", data.password);    
                }
            } 




          }else{
            alert('Please try again you are not authorized user');
            return false;
          }         
      });
    };
    
    return (
        <div id="loginForm">
            <ReactSignupLoginComponent
                title="Admin"
                handleLogin={loginWasClickedCallback}
            />
        </div>
    );
};
 
export default LoginPage;

  