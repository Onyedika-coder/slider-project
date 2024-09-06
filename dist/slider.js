const akative = document.getElementById("signin");
const purple = document.getElementById("purple");
const signIn = document.getElementById("btn1");
const forgot = document.getElementById("forgot");
const forms = document.getElementById("forms");
let isReversed = true;



forms.addEventListener("submit", event => {
  event.preventDefault();  
  if (signIn.innerText === "SIGN UP") {
    purple.classList.remove("deactive");
    purple.classList.add("active");

    purple.style.borderRadius = "20px 80px 50px 20px";

    const akative = document.getElementById("signin");
    akative.classList.add("akative");
    akative.classList.remove("apative");

    const slide3 = document.getElementById("hello");
    slide3.classList.remove("slide3");
    slide3.classList.remove("slide4");

    const slide = document.getElementById("hello");
    slide.classList.add("slide");

    setTimeout((count) => {
      slide.classList.add("slider");
      document.getElementById("btn1").innerHTML = "SIGN IN";
    }, 250);
    
    setTimeout((count) => {
      document.getElementById("welcome").innerHTML = "Create Account";
      document.getElementById("sign").innerHTML =
        "or use your email for registration";

      
      const originalEmailInput = document .getElementById("email");
const newUserInput = document.createElement ("input");
newUserInput.setAttribute("id","text");
newUserInput.type = "text";
newUserInput.placeholder = "Username";
newUserInput.style.marginTop = ''; 
newUserInput.style.width = '150px';
newUserInput.style.heigth = '15px';
originalEmailInput.parentNode.replaceChild(newUserInput, originalEmailInput);
      
      
   const originalPassInput = document .getElementById("pass");
const newEmailInput = document.createElement ("input");
newEmailInput.setAttribute("id","email");
newEmailInput.type= "email";
newEmailInput.placeholder = "Email";
newEmailInput.style.width = '150px';
newEmailInput.style.heigth = '15px';
originalPassInput.parentNode.replaceChild(newEmailInput, originalPassInput);
      
      
const forgot = document .getElementById("forgot");
const newPasswordInput = document.createElement ("input");
newPasswordInput.setAttribute("id"
,"password");
newPasswordInput.type = "password";
newPasswordInput.placeholder = "password";
newPasswordInput.style.marginTop = '12px'; 
newPasswordInput.style.width = '150px';
newPasswordInput.style.heigth = '15px';
newPasswordInput.style.fontSize = '12px';
forgot.replaceWith(newPasswordInput);
    }, 250);

    setTimeout((count) => {
      document.getElementById("granted").innerHTML = "Welcome Back!";
      document.getElementById("btn").innerHTML = "SIGN UP";
      document.getElementById("btn1").innerHTML = "SIGN IN";
      document.getElementById("note").innerHTML =
        "Register with your personal details to use all site features";
    }, 250);
  }
   
    if (signIn.innerText === "SIGN IN") {
    const purple = document.getElementById("purple");
    purple.classList.remove("active");
    purple.classList.add("deactive");

    purple.style.borderRadius = "80px 20px 20px 50px";
    akative;
    akative.classList.remove("akative");
    akative.classList.add("apative");

    const slide = document.getElementById("hello");
    slide.classList.remove("slide");
    slide.classList.remove("slider");

    const slide3 = document.getElementById("hello");
    slide3.classList.add("slide3");

    setTimeout((uncount) => {
      document.getElementById("btn").innerHTML = "SIGN IN";
      document.getElementById("btn1").innerHTML = "SIGN UP";
      slide3.classList.add("slide4");
    }, 250);

    setTimeout((uncount) => {
      document.getElementById("welcome").innerHTML = "Sign in";
      document.getElementById("sign").innerHTML = "or use your email password";
    }, 200);

    setTimeout((uncount) => {
      document.getElementById("granted").innerHTML = " Hello Friend!";

      document.getElementById("note").innerHTML =
        "Enter  your personal details to enjoy all site features";
      
  
const returnEmail = document.querySelector("#text");
const oldEmailInput = document.createElement ("input");
oldEmailInput.setAttribute("id","email");
oldEmailInput.type= "email";
oldEmailInput.placeholder = "Email";
oldEmailInput.style.bottom = '30px'; 
oldEmailInput.style.width = '150px';
oldEmailInput.style.heigth = '15px';
returnEmail.replaceWith(oldEmailInput);
      
   const returnPass = document .querySelector("#email");
const oldPassInput = document.createElement ("input");
oldPassInput.setAttribute("id","password");
oldPassInput.type= "password";
oldPassInput.placeholder = "Password";
oldPassInput.style.bottom = '30px'; 
oldPassInput.style.width = '150px';
oldPassInput.style.heigth = '15px';
returnPass.parentNode.replaceChild(oldPassInput, returnPass)
      
  const returnForgotPass = document.querySelector('#password');
  const oldForgetPass = document.createElement ("div");
  oldForgetPass.setAttribute("id","forgot");
  oldForgetPass.innerText = 'Forget your  password?';
  oldForgetPass.style.top ='50px';
   returnForgotPass.replaceWith(oldForgetPass);
      
    }, 250);
  } 
 
});