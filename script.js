const themeChange = document.getElementById("check");


themeChange.addEventListener("click" , ()=> {
    const top = document.querySelectorAll(".top");
    const body = document.querySelector(".body");
    const heading = document.querySelector(".heading");
    const type1 = document.querySelectorAll(".type-1");
    const type2 = document.querySelectorAll(".type-2");
    const number = document.querySelectorAll(".number");
    const bottom = document.querySelectorAll(".bottom");
    const hr = document.querySelector(".hr");
    const h2 = document.querySelectorAll(".h2");
    const button = document.querySelector(".button");

    body.classList.toggle("active");
    heading.classList.toggle("active");
    hr.classList.toggle("active");
    button.classList.toggle("active");
    


    type1.forEach(element => {
        element.classList.toggle("active");
    });

    type2.forEach(element => {
        element.classList.toggle("active");
    });

    number.forEach(element => {
        element.classList.toggle("active");
    });

    bottom.forEach(element => {
        element.classList.toggle("active");
    });

    top.forEach(element => {
        element.classList.toggle("active");
    });

    h2.forEach(element => {
        element.classList.toggle("active");
    });

    
});

