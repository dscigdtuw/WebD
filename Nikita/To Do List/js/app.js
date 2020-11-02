const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const options = {weekday : "long", month : "short", day : "numeric"}

const today = new Date();
console.log(today);

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

dateElement.innerHTML = today.toLocaleDateString("en-IN",options);

function addToDo(todo)
{
    const item = `<li class="item">
        <i class="fa fa-circle-thin co" job="complete"></i>
        <p class="text">${todo}</p>
        <i class="fa fa-trash-o de" job="delete"></i>
    </li>`;
    const position = "beforeend"
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        const todo = input.value;

        if(todo){
            addToDo(todo);
        }
    }
});

function completeToDo(element){
    element.classList.toggle(UNCHECK);
    element.classList.toggle(CHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }

    else if(elementJob == "delete"){
        removeToDo(element);
    }
})