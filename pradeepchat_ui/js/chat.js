
const aiResponses=[
"That's interesting.",
"I can help you with that.",
"Try breaking the problem into smaller parts.",
"Good question!",
"Let me explain that."
];

function scrollToBottom(){
let container=$("#messages");
container.scrollTop(container[0].scrollHeight);
}

function addMessage(text,sender){

let msg=`<div class="message ${sender}">${text}</div>`;

$("#messages").append(msg);

scrollToBottom();
}

function sendMessage(){

let text=$("#messageInput").val().trim();

if(text==="") return;

addMessage(text,"user");

$("#welcomeSection").hide();

$("#messageInput").val("");
$("#sendBtn").prop("disabled",true);

$("#typingIndicator").show();

setTimeout(()=>{

$("#typingIndicator").hide();

let reply=aiResponses[Math.floor(Math.random()*aiResponses.length)];

addMessage(reply,"ai");

},Math.random()*1000+1000);

}

$("#sendBtn").click(sendMessage);

$("#messageInput").on("input",function(){

let text=$(this).val().trim();

$("#sendBtn").prop("disabled",text.length===0);

this.style.height="auto";
this.style.height=this.scrollHeight+"px";

});

$("#messageInput").keypress(function(e){

if(e.which===13 && !e.shiftKey){
e.preventDefault();
sendMessage();
}

});
