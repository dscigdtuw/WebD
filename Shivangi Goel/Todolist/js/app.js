const clear = document.querySelector("clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const dateElement = document.getElementById("date");

const options ={weekday:"long", month :"short", day:"numeric"};

const today = new Date();

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINETHROUGH = "linethrough";
dateElement.innerHTML= today.toLocaleDateString("en-IN",options);

function addTodo(todo){
    const item = `<li class="item">
    <i class="fa fa-circle thin co" job="complete"></i>
    <p class="text">${todo}</p>
    <i class="fa fa-trash-o de" job="delete"></i>
    </li>
    `
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}
document.addEventListener("keyup",function(event){
   if(event.key =="Enter"){
       const todo = input.value;
       if(todo){
           addTodo(todo);
       }
   }
});

function complete(element){
//    element.classList.toggle(CHECK);
//    element.classList.toggle(UNCHECK);
//    element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);
element.classList.toggle(UNCHECK);
element.classList.toggle(CHECK);
element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

list.addEventListener("click",function(event){
    const element = event.target;
    const elementjob = element.attributes.job.value;
    if(elementjob == "complete"){
        complete(element);
    }
    else if(elementjob == "delete"){
        removeTodo(element);
    }
});

function clearall(){
   
    list.innerHTML = '';
}
