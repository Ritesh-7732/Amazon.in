// const input = document.getElementById("login-input").value

// const isEmail = input.includes("@");
// const isMobile = /^[0-9]{10}$/.test(input);


// const contiune_btn = document.querySelector('button');


// contiune_btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(isEmail) {
//         console.log(input)
//     } else if(isMobile) {
//         console.log(input)
//     } else if(isEmail) {

//     } else {
//         console.log("invaild")
//     }


// });



// const select_input_box = document.querySelector("#input-box");
// let create_item = document.createElement("p");

// create_item.innerText = "Enter your mobile number or email";


// contiune_btn.addEventListener("click", () => {
     
// });







// const login_form = document.querySelector("form");
// const login_input = document.getElementById("login-input");
// const continue_btn = document.querySelector("button")



// login_form.addEventListener("click", (e) => {

//     const input = login_input.value.trim();
//     const isEmail = input.includes("@");
//     const isMobile = /^[0-9]{10}$/.test(input);

//     const oldError = document.querySelector(".login-error");
//     if(oldError) oldError.remove();


//     if(isEmail) {
//         console.log("Email", input);
//         localStorage.setItem("userLogin", input);

//     } else if(isMobile) {
//         console.log("Mobile", input);
//         localStorage.setItem("UserLogin", input);

//     } else {
//         login_input.classList.add("input-error");
//         const error_msg = document.createElement("p");
//         error_msg.classList.add("login-error");
//         error_msg.innerText = "Enter your mobile number or email";
//         login_input.insertAdjacentElement("afterend", error_msg);
//     }

// });

const login_form = document.querySelector("form");
const login_input = document.getElementById("login-input");
const continue_btn = document.querySelector("button");


const box = document.querySelector(".box");
const inner_box = document.querySelector("inner-box");


login_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = login_input.value.trim();   // ✅ ab click ke waqt fresh value milegi

    const isEmail = input.includes("@");
    const isMobile = /^[0-9]{10}$/.test(input);

    // Purana error paragraph hai toh pehle hata do (taaki duplicate na bane)
    const oldError = document.querySelector(".login-error");
    if (oldError) oldError.remove();

    if (isEmail) {
        console.log("Email hai:", input);
        localStorage.setItem("userLogin", input);
        // yahan aage next step (OTP page waghera) ja sakta hai

    } else if (isMobile) {
        console.log("Mobile number hai:", input);
        localStorage.setItem("userLogin", input);

    } else {
        // ✅ Invalid case — ab paragraph add hota hai
        const error_msg = document.createElement("p");
        error_msg.classList.add("login-error");
        error_msg.innerText = "Enter your mobile number or email";
        login_input.insertAdjacentElement("afterend", error_msg);

        box.style.height = "20rem";
        inner_box.style.height = "20rem";
    }
});