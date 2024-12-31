const inbox = document.getElementById("input-box");
const ul = document.getElementsByClassName("list-container");

function addtask(){
    if (inbox.value.trim() === '') {
        alert("You must write something ");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inbox.value.trim();
        ul.appendChild(li);
        inbox.value = '';
    }
}