// read required elements by IDs
var taskInputEle = document.getElementById('taskInput');
var addTaskEle = document.getElementById('addTask');
var taskToBeDoneEle = document.getElementById('taskToBeDone');
var tasksDoneEle = document.getElementById('tasksDone');

function createEle(NodeName) {
    return document.createElement(NodeName)
}

// create to-do task list templete
function toDoTaskTemplete(text, isDonetask) {
    var li = createEle('li');
    li.classList.add('To-do-list-wrapper');
    if(isDonetask) {
        li.classList.add('disable-task');
    }

    var mainDiv = createEle('div');
    mainDiv.classList.add('To-do-list-main-div');

    var span = createEle('span');
    span.classList.add('parrel-divs', 'taskTitle');
    span.innerHTML = text;

    var innerDiv = createEle('div');
    innerDiv.classList.add('parrel-divs', 'icons-divs');

    var img1 = createEle('img');
    img1.classList.add('icons', 'delete', 'parrel-divs');
    img1.src = 'icons/trash-solid.svg'
    img1.addEventListener('click', function() {
      li.remove();
    });

    var img2 = createEle('img');
    img2.classList.add('icons', 'tick', 'parrel-divs');
    img2.src = 'icons/check-circle-regular.svg';
    img2.addEventListener('click', function() {
        onAddTask(text, true);
        li.remove();
    })

    innerDiv.appendChild(img1);
    innerDiv.appendChild(img2);
    mainDiv.appendChild(span);
    mainDiv.appendChild(innerDiv);
    li.appendChild(mainDiv);
    return li
}

// this function is executed when user clicked on add icon
function onAddTask(taskName, isDonetask) {
    var li = toDoTaskTemplete(taskName, isDonetask);
    if(!isDonetask) {
        taskToBeDoneEle.appendChild(li);
        taskInputEle.value = '';
    } else {
        tasksDoneEle.appendChild(li);
    }
}

// Below code is click event for add icon
addTaskEle.addEventListener('click', function() {
    var taskName = taskInputEle.value;
    if(taskName) {
        onAddTask(taskName);
    }else{
        alert('Please enter task')
    }
})