/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

 let TODO =document.getElementById("to-do-tasks");
 let PROGRESS=document.getElementById("in-progress-tasks");
 let DONE=document.getElementById("done-tasks")

//  var PROGRESS =getElementById("in-progress-tasks");
//  var DONE =getElementById("done-tasks");
function createTask() {
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
                     <div class="fw-bold" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">There is hardly anything more frustrating than having t...</div>
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
										<div class="fw-bold" title="including as many details as possible.">including as many details as possible.</div>
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
										<div class="fw-bold" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">as they can be helpful in reproducing the steps that ca...</div>
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
// initialiser task form
document.getElementById('saveBtn').addEventListener('click',saveTask)
    // Afficher le boutton save

    // Ouvrir modal form
    
  
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
            'statuss'        :   STATUS.value,
            'date'          :   DATE.value,
        }
      
    // Ajoutez object au Array
    tasks.push(Save)

    // refresh tasks
    
    var conteur=0;
    for(let i=0;i<tasks.length;i++){
        if (tasks[i].statuss=='Done'){
            DONE.innerHTML+=
            `<button class="d-flex align-items-center border py-2 ">
								<div class="mb-3">
									<i class="fa-regular fa-circle-check text-success fs-4 mb-5"></i> 
								</div>
								<div class="text-start ms-3">
									<div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class="">${tasks[i].date}</div>
										<div class="fw-bold" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">as they can be helpful in reproducing the steps that ca...</div>
									</div>
									<div class="">
										<span class="btn btn-primary p-1 px-3">${tasks[i].type}</span>
										<span class="btn btn-secondary  p-1 px-3">${tasks[i].proprity}</span>
									</div>
								</div>
							</button>`
            
                    conteur++
        }
        else if (tasks[conteur].statuss=='In Progress'){
            PROGRESS.innerHTML+=
            `<button class="d-flex align-items-center border py-2 ">
								<div class="mb-3">
									<i class="fa-regular fa-circle-check text-success fs-4 mb-5"></i> 
								</div>
								<div class="text-start ms-3">
									<div class="fw-bolder">${tasks[i].title}</div>
									<div class="">
										<div class="">${tasks[i].date}</div>
										<div class="fw-bold" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">as they can be helpful in reproducing the steps that ca...</div>
									</div>
									<div class="">
										<span class="btn btn-primary p-1 px-3">${tasks[i].type}</span>
										<span class="btn btn-secondary  p-1 px-3">${tasks[i].proprity}</span>
									</div>
								</div>
							</button>`
                    conteur++;

        }
    }

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