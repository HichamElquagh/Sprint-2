/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 var id_to_update;
 let TODO =document.getElementById("to-do-tasks");
 let PROGRESS=document.getElementById("in-progress-tasks");
 let DONE=document.getElementById("done-tasks")

function createTask() {
    clear();
    // initialiser task form
    let conteurTodo=0;
    let conteurProgress=0;
    let conteurDone=0;
    let conteurDate=1;

    for(let i=0;i<tasks.length;i++){
        if (tasks[i].status=='To Do'){
            TODO.innerHTML +=
                `<button class="d-flex align-items-center border py-2 ">
                    <div class="mb-5">
                        <i class="fa-regular fa-circle-question text-success fs-4 mb-3  "></i>
                    </div>
                    <div class="text-start ms-3">
                        <div class="fw-bolder">${tasks[i].title}</div>
                        <div class="">
                            <div class=""># ${conteurDate} created in ${tasks[i].date}</div>
                            <div class="fw-bold" >${tasks[i].description}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
                                <span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                            </div>
                            <div>
                                <i onclick="editTask(${i})"  class="fa-solid fa-pen-to-square text-success fs-4 " data-bs-toggle="modal" data-bs-target="#modal" ></i>
                                <i onclick="deleteTask(${i})"  class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" title="delete" ></i> 
                            </div>
                        </div>
                    </div>
                </button>`
            conteurTodo++
            conteurDate++;
        }
    
        if(tasks[i].status=='In Progress'){
            PROGRESS.innerHTML += 
                `<button class="d-flex align-items-center border py-1">
			        <div class="mb-3">
			            <i class="fa-sharp fa-solid fa-circle-notch text-success fa-rotate-90  fs-4 mb-5"></i>
				    </div>
			        <div class="text-start ms-3">
                        <div class="fw-bolder">${tasks[i].title}</div>
                            <div class="">
                                <div class=""># ${conteurDate} created in ${tasks[i].date}</div>
                                <div class="fw-bold">${tasks[i].description}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
                                    <span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                                </div>
                                <div>
                                    <i onclick="editTask(${i})"  class="fa-solid fa-pen-to-square text-success fs-4 " data-bs-toggle="modal" data-bs-target="#modal" ></i>
                                    <i onclick="deleteTask(${i})"  class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" title="delete" ></i>  
								</div>
                            </div>
                </button>`
            conteurProgress++;
            conteurDate++;
        }
    
        if(tasks[i].status=='Done'){
            DONE.innerHTML += 
                `<button class="d-flex align-items-center border py-2 ">
                    <div class="mb-3">
                        <i class="fa-regular fa-circle-check text-success fs-4 mb-5"></i> 
                    </div>
                    <div class="text-start ms-3">
                        <div class="fw-bolder">${tasks[i].title}</div>
                        <div class="">
                            <div class=""># ${conteurDate} created in ${tasks[i].date}</div>
                            <div class="fw-bold">${tasks[i].description}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
                                <span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                            </div>
                            <div>
                                <i onclick="editTask(${i})"  class="fa-solid fa-pen-to-square text-success fs-4"  data-bs-toggle="modal" data-bs-target="#modal" ></i>
                                <i onclick="deleteTask(${i})"  class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" title="delete" ></i> 
                            </div>
                        </div>
                    </div>
                </button>`
            conteurDone++;
            conteurDate++;
        } 
 } 

document.getElementById("to-do-tasks-count").innerHTML=conteurTodo;
document.getElementById("in-progress-tasks-count").innerHTML=conteurProgress;
document.getElementById("done-tasks-count").innerHTML=conteurDone;

}      
createTask();
    // Afficher le boutton save
    document.getElementById('saveBtn').addEventListener('click',saveTask)
    // Ouvrir modal form
    function clear(){
        TODO.innerHTML='';
        PROGRESS.innerHTML='';
        DONE.innerHTML='';
    }
  
function saveTask() {
    // Recuperer task attributes a partir les champs input
     let TITLE=document.getElementById("recipient-name"); 
     let TYPE=document.querySelector('.form-check-input:checked');
     let PROPRITY=document.getElementById("Selectproprity"); 
     let STATUS=document.getElementById("selectstatus"); 
     let DATE=document.getElementById("date-task"); 
     let DESCIPTION=document.getElementById("message-text");
     
    // Créez task object
    let Save = 
        {         
            'title'         :   TITLE.value,
            'type'          :   TYPE.value,
            'priority'      :   PROPRITY.value,
            'status'        :   STATUS.value,
            'date'          :   DATE.value,
            'description'   :   DESCIPTION.value,
        }
      
    // Ajoutez object au Array
    tasks.push(Save)
    createTask()
    reloadTasks();
  
    
}
    // document.getElementById("deletetask").addEventListener('click',function(){
    //     editTask(i);
    // });
function editTask(i) {
    // Initialisez task for
    document.getElementById('recipient-name').value =  tasks[i].title;
    document.getElementById('exampleRadios1').value =  tasks[i].type;
    document.getElementById('Selectproprity').value =  tasks[i].priority;
    document.getElementById('selectstatus').value =  tasks[i].status;
    document.getElementById('date-task').value =  tasks[i].date;
    document.getElementById('message-text').value =  tasks[i].description;
    id_to_update = i;

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {

    // GET TASK ATTRIBUTES FROM INPUTS
    
    // Créez task object
    // Remplacer ancienne task par nouvelle task
    tasks[id_to_update].title = document.getElementById('recipient-name').value;
    tasks[id_to_update].type = document.querySelector('.form-check-input:checked').value;
    tasks[id_to_update].priority = document.getElementById('Selectproprity').value;
    tasks[id_to_update].status = document.getElementById('selectstatus').value;
    tasks[id_to_update].date = document.getElementById('date-task').value;
    tasks[id_to_update].description = document.getElementById('message-text').value;
    // Fermer Modal form
    createTask();    
    
    // Refresh tasks
    
}

function deleteTask(i) {
    // Get index of task in the array
     tasks.splice(i,1);
     createTask();
    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
  document.getElementById('form').reset();
    // Set Task count
}