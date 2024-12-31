const inbox = document.getElementById("input-box");
const ul = document.getElementById("list-container");

function addtask(){
    if (inbox.value.trim() === '') {
        alert("You must write something ");
    }
    else{
     
        let li = document.createElement('li');
        li.innerHTML = inbox.value;
        ul.appendChild(li);
       let span= document.createElement('span');
       span.innerHTML = "\u00d7";
       li.appendChild(span);
      
    }
    inbox.value = '';
}
ul.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
