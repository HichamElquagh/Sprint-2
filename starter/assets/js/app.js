/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

 let TODO =document.getElementById("to-do-tasks");
 let PROGRESS=document.getElementById("in-progress-tasks");
 let DONE=document.getElementById("done-tasks")


function createTask() {
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
                        <div class="">#${conteurDate}created in${tasks[i].date}</div>
                        <div class="fw-bold" >${tasks[i].description}</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
                            <span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-pen-to-square text-success fs-4 "></i>
                            <i oncklick="deleteTask(${i})"  class="fa-solid fa-trash fs-4 text-success" ></i> 
                        </div>
                    </div>
             </button>`
         conteurTodo++
         conteurdate++;
         }
    // }
    // for(let i=0;i<tasks.length;i++){ 
        if(tasks[i].status=='In Progress'){
            PROGRESS.innerHTML += 
            `<button class="d-flex align-items-center border py-1">
			<div class="mb-3">
			<i class="fa-sharp fa-solid fa-circle-notch text-success fa-rotate-90  fs-4 mb-5"></i>
				</div>
			<div class="text-start ms-3">
             <div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class="">#${conteurDate}created in${tasks[i].date}</div>
										<div class="fw-bold">${tasks[i].description}</div>
									</div>
									<div class="d-flex justify-content-between">
                                         <div>
										<span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
										<span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                                        </div>
                                        <div>
										<i class="fa-solid fa-pen-to-square text-success fs-4  "></i>
                                        <i class="fa-solid fa-trash fs-4 text-success" id="deletetask"></i> 
								</div>
								</div>
							</button>`
                            conteurProgress++;
                            conteurdate++;
        }
    // }

    //    for(let i=0;i<tasks.length;i++){ 
        if(tasks[i].status=='Done'){
            DONE.innerHTML += 
                             `<button class="d-flex align-items-center border py-2 ">
								<div class="mb-3">
									<i class="fa-regular fa-circle-check text-success fs-4 mb-5"></i> 
								</div>
								<div class="text-start ms-3">
									<div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class=""># ${conteurDate}created in ${tasks[i].date}</div>
										<div class="fw-bold">${tasks[i].description}</div>
									</div>
									<div class="d-flex justify-content-between">
                                         <div>
										<span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
										<span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                                        </div>
                                        <div>
										<i class="fa-solid fa-pen-to-square text-success fs-4  "></i>
                                        <i class="fa-solid fa-trash fs-4 text-success" id="deletetask"></i> 
								</div>
								</div>
							</button>`
                            conteurDone++;
                            conteurdate++;
} 
} 
document.getElementById("to-do-tasks-count").innerHTML=conteurTodo;
document.getElementById("in-progress-tasks-count").innerHTML=conteurProgress;
document.getElementById("done-tasks-count").innerHTML=conteurDone;

}    
 
   
createTask();
document.getElementById('saveBtn').addEventListener('click',saveTask)
    // Afficher le boutton save

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
    clear()
    createTask()
    
}
    // document.getElementById("deletetask").addEventListener('click',function(){
    //     editTask(i);
    // });
    function editTask() {
    // Initialisez task form
     
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

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask(i) {
    // Get index of task in the array
    // console.log(i)
    // tasks.splice(i,1);
    // createTask();
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

    // Set Task count
}