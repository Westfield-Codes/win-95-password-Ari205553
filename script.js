CrUser= "Lawnmover Mann"
CrPassword = "7.3942"

function setUp(){
    let buttons = document.getElementById("buttons");
    let ok = document.createElement("button");
    ok.innerHTML="ok";
    ok.addEventListener("click" ,checkPassword);
    buttons.appendChild(ok);
    let cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    buttons.appendChild(cancel);
}
function checkPassword(){
    let dialogs = document.getElementById("dialogs");
    let userName = dialogs.querySelector(' :nth-child(2)').value;
    let password = dialogs.querySelector(':nth-child(4)').value;
    let body = document.getElementByTagName("body")[0];
    let box = document.getElementByClassName("box");
    if (username == Cruser  &&  password == Crpassword) {
      let box = document.getElementByClassName("box");
      box[0].remove()
        body.style.backgroundImage = "url ('http://i.imgur.com/IUVDNyp.jpg')"
    else{
    userName ="";
    password = "";
    body.style.backgroundColor = "red";

    }
}
}