function cf_visible(){
    
    let chatform = document.querySelector("#chat-form");
    chatform.style.right ="0px";
    chatform.style.transition = "0.2s ease-in-out";    
}
function crossicon(){
    let chatform = document.querySelector("#chat-form");
    chatform.style.right ="-400px";
    chatform.style.transition = "0.1s ease-in-out";    

}


let chatbtn = document.querySelector(".chat-btn");
let cross_icon = document.querySelector("#cross-icon");


chatbtn.addEventListener("click", cf_visible);
cross_icon.addEventListener("click", crossicon);