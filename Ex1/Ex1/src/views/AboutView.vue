<template>
  <div class="contain">
        <div class="container">
            <p class="text1">Register</p>
            <p class="text2">Please fill in this form to create an account</p>
            
            <form class="login">
                <div class="field">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Your Email">
                    <br>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Your Name">
                    <br>
                    <label>FirstName</label>
                    <input type="text" placeholder="First Name">
                    <br>
                    <label>LastName</label>
                    <input type="text" placeholder="Last Name">
                    <br>
                    <label>Password</label>
                    <input type="text" placeholder="Create your password">
                    <br>
                   
                </div>
                <p class="text2">By create an account you agree to our Term & Privacy</p>
                <div class="field">
                    <input id="submit" type="submit" value="Sign Up">
                </div>
            </form>
        </div>
    </div>
</template>
<style>
     .contain{
            width: 50%;
            margin-left: 50px;
            margin-top: 80px;
        }
        .container{   
            border-radius: 30px;
            height: 480px;
            width: 350px;
            background-color: #2980b9;
        }
        .container .text1{
            font-size: 30px;
            font-weight: 500;
            color: white;
            margin-left: 100px;
            margin-top: 10px;
        }
        ::placeholder{
            color: aqua;
        }
        .text2{
            left: 5px;
            text-align: center;
            color: darkblue;
            font-weight: 300;
            font-size: 15px;
        }
        .field input{
            height: 30px;
            width: 75%;
            margin: 5px;
            margin-left: 10%;
            padding-left: 5%;
            color: white;
            border: 1px solid white;
            border-radius: 10px;
            background: transparent;
            
        }
        .field label{
            padding-bottom: 0px;
            font-size: 15px;
            margin-left:40px;
            color: white;
            
        }
        #submit{
            margin-left: 40px;
            align-items: center;
            font-size: 15px;
            cursor: pointer;
            margin-top: 10px;
        }
        .forget{
            margin-left: 30px;
            
        }
        
        @media only screen and (max-width: 600px) {
         body {
             flex-direction: column;
         }
        }   
</style>