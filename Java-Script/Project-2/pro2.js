

function addtask() {
    document.getElementById("Add_new_list_div").style.display = 'block';
    document.getElementById('first_page_div').style.filter = 'blur(5px)';

}

function closetask() {
    document.getElementById("Add_new_list_div").style.display = 'none';
    document.getElementById('first_page_div').style.filter = 'blur(0px)';

}

function addnewitem(index) {
    document.getElementById("Add_new_item_div").style.display = 'block';
    selectedCardIndex = index;

}

function closeitem() {
    document.getElementById("Add_new_item_div").style.display = 'none';
}
function addnewActivity() {
    const addnewActivityInput = document.getElementById('activity_list_input').value;
    taskList[selectedCardIndex].activityList.push({
        name: addnewActivityInput,
        isCompleted: false
    })
    closeitem()
}


function deleteItem(index) {
    taskList.splice(index, 1);
}




let taskList = []

let selectedCardIndex = null;


function addnewlist() {
    const addNewListInput = document.getElementById('add_new_lis_input').value;
    taskList.push({
        heading: addNewListInput,
        activityList: []
    })
    closetask()
}

function markActCompleted(i,j) {
    taskList[i].activityList[j].isCompleted = true
    
}

function getTaskListView() {
    let taskListHtmlStr = "";
    for (let i = 0; i < taskList.length; i++) {
        taskListHtmlStr += `<div class="card" id="card${i}"><p class="card-heading">${taskList[i].heading}</p><hr>`;
        taskListHtmlStr += (`${taskList[i].activityList.length > 0 ? `<div class="activity-list-div">` : ``}`)

        for (let j = 0; j < taskList[i].activityList.length; j++) {
            taskListHtmlStr += ` <div><span class="activity-text ${taskList[i].activityList[j].isCompleted ? "completed-task" : ""}" id="activity${[j + 1]}">${taskList[i].activityList[j].name}</span>`

            taskListHtmlStr += (taskList[i].activityList[j].isCompleted) ? "" : ` <button id="btn_activity${[j + 1]}" onclick="markActCompleted(${i},${j})" class="activity-btn">Mark Done</button>`
            taskListHtmlStr += " </div>";

        };
        taskListHtmlStr += ` <div class="card-icon-section"><i class="fa-solid fa-trash cardiconsdelete  delete-icon" onclick="deleteItem(${i})"></i><i
                    class="fa-solid fa-circle-plus  cardiconsadd" onclick="addnewitem(${i})"></i></div>`;
        taskListHtmlStr += " </div>";
        taskListHtmlStr += " </div>";

    }

    let taskListMaintElement = document.getElementById('task_list_main_div');

    taskListMaintElement.innerHTML = (taskList.length > 0) ? taskListHtmlStr : `<p class="first_page_todo_list_text">No Items in the to do list</p>`
    setTimeout(getTaskListView, 1000);

}


getTaskListView()




// taskList[i].activityList[j].isCompleted = true

