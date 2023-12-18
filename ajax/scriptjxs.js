console.log("we re doing jxs");
let fetchBtn=document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',tnclick);
function tnclick(){
    console.log("you clicked");
    const xhr=new XMLHttpRequest();
    xhr.open('GET','mehreen.txt',true);
    xhr.onprogress=function(){
        console.log("ongoing progress");}
        xhr.onload=function(){
            if(this.status===200){
                console.log(this.responseText);
            }
            else{
                console.log("some error occured");
            }
           
        }

        xhr.send();
        console.log("we re done")
}