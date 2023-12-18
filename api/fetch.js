const url = "https://cat-fact.herokuapp.com/facts";
let fct=document.getElementById("fct");
let tn=document.getElementById("tn");
const getfct = async () => {
    console.log("getting dte ......");
    let response = await fetch(url);
    console.log(response);
    let dte=await response.json();
    fct.innerText=dte[1].text;
    
};
tn.addEventListener('click',getfct);
