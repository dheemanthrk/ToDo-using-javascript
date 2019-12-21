const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = doucment.getElementById("list");
const input = document.getElementById("input");

const CHECK= "fa-check-circle";
const UNCHECK = "fa-cricle-thin";
const LINE_THROUGH = "lineThrough";

const options={weekday: "long",month:"short",day="numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",options);

function addToDo(toDo, id, done, trash)
{
    if(trash){return;}
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    let LIST =[], id=0;

    const item = `
                    <li class = "item">
                    <i class = "fa ${DONE} co" job = "complete" id="${id}"></i>
                    <p class = "text ${LINE}">${toDo}</p>
                    <i class = "fa fa-trash-o de" job = "delete" id ="${id}"></i>
                    </li>
                    `;
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.nodeValue;

        if(toDo){
            addToDo(toDo, id , false , false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false  
            });
        }
        input.value="";
    }
});

function completeToDo(element)
{
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element)
{
    element.parentNode.parentNode.removeChild(element.parentnode);
    LIST[element.id].trash = "true";
}

list.addEventListener("click",function(event){
    const element = event.target;
    const elementjob = element.attributes.job.value;

    if(elementjob == "complete"){
        completeToDo(element);
    }
    else if(elementJob == "remove"){
        removeToDo(element);     
    }
}