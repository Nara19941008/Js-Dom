let text1 = document.querySelector(".input-one");

let text2 = document.querySelector(".input-two");


let sumBtn = document.querySelector(".toplama");
function sum() {

    resultNum.innerText = parseFloat(text1.value) + parseFloat(text2.value);
    alert("toplama");
}
sumBtn.addEventListener("click", sum);


let subBtn = document.querySelector(".cixma");
function sub() {

    resultNum.innerText = parseFloat(text1.value) - parseFloat(text2.value);
    alert("Cixma");
}
subBtn.addEventListener("click", sub);

let multBtn = document.querySelector(".vurma");
function mult() {

    resultNum.innerText = parseFloat(text1.value) * parseFloat(text2.value);
    alert("Vurma");

}
multBtn.addEventListener("click", mult);


let divBtn = document.querySelector(".bolme");
function div() {


    resultNum.innerText = parseFloat(text1.value) / parseFloat(text2.value);
    alert("Bolme");

}

divBtn.addEventListener("click", div);

let resultNum = document.querySelector(".result h1");




