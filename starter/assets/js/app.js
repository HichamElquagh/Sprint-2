/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

 let TODO =document.getElementById("to-do-tasks");
 let PROGRESS=document.getElementById("in-progress-tasks");
 let DONE=document.getElementById("done-tasks")


function createTask() {
    // initialiser task form
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
                     <div class="">${tasks[i].date}</div>
                     <div class="fw-bold" >${tasks[i].description}</div>
                 </div>
                 <div class=" ">
                     <span class="btn btn-primary py-1 px-3">${tasks[i].priority}</span>
                     <span class="btn btn-secondary py-1 px-3">${tasks[i].type}</span>
                 </div>
             </div>
         </button>`

         }
    }
    for(let i=0;i<tasks.length;i++){ 
        if(tasks[i].status=='In Progress'){
            PROGRESS.innerHTML += 
            `<button class="d-flex align-items-center border py-2">
			<div class="mb-3">
			<i class="fa-sharp fa-solid fa-circle-notch text-success fa-rotate-90  fs-4 mb-5"></i>
				</div>
			<div class="text-start ms-3">
             <div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class="">${tasks[i].date}</div>
										<div class="fw-bold">${tasks[i].description}</div>
									</div>
									<div class="">
										<span class="btn btn-primary py-1 px-3">${tasks[i].type}</span>
										<span class="btn btn-secondary py-1 px-3">${tasks[i].priority}</span>
									</div>
								</div>
							</button>`
        }
    }

       for(let i=0;i<tasks.length;i++){ 
        if(tasks[i].status=='Done'){
            DONE.innerHTML += 
                             `<button class="d-flex align-items-center border py-2 ">
								<div class="mb-3">
									<i class="fa-regular fa-circle-check text-success fs-4 mb-5"></i> 
								</div>
								<div class="text-start ms-3">
									<div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class="">${tasks[i].date}</div>
										<div class="fw-bold">${tasks[i].description}</div>
									</div>
									<div class="">
										<span class="btn btn-primary p-1 px-3">${tasks[i].type}</span>
										<span class="btn btn-secondary  p-1 px-3">${tasks[i].proprity}</span>
									</div>
								</div>
							</button>`
} 
} 
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
     let TYPE=document.getElementById("exampleRadios1"); 
     let PROPRITY=document.getElementById("Selectproprity"); 
     let STATUS=document.getElementById("selectstatus"); 
     let DATE=document.getElementById("date-task"); 
     
    // Créez task object
    let Save = 
        {         
            'title'         :   TITLE.value,
            'type'          :   TYPE.value,
            'priority'      :   PROPRITY.value,
            'status'        :   STATUS.value,
            'date'          :   DATE.value,
        }
      
    // Ajoutez object au Array
    tasks.push(Save)
    clear()
    createTask()
    
}
function editTask(index) {
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

function deleteTask() {
    // Get index of task in the array

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