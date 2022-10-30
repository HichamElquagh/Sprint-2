<?php
    //INCLUDE DATABASE FILE
    include "database.php" ;
        
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_GET['update']))      updateTask();
    // if(isset($_POST['Delete']))      deleteTask();
    if(isset($_GET['delete']))       deleteTask();
      
   
    

    function getTasks($num)  
    {
        global $conn ;
        //CODE HERE 
        $sql = "SELECT  tasks.id ,tasks.title,tasks.type_id,tasks.priority_id,tasks.status_id,tasks.task_datetime,tasks.description,priorities.name AS priorities ,
        statuses.name AS statues ,types.name AS types
        FROM tasks,types,priorities,statuses
        WHERE tasks.type_id=types.id AND tasks.priority_id=priorities.id AND tasks.status_id=statuses.id";
           

        $result = mysqli_query($conn,$sql) ;
        if ($result){
            // $id=$row=['id'];
            while($row=mysqli_fetch_assoc($result)){
                if($row['statues']=='To do' && $num==1){
                    $icon='fa-regular fa-circle-question';
                    echo ' 
                <button class="d-flex align-items-center border py-2">
                    <div class="mb-5">
                        <i class=" '.$icon.' text-success fs-4 mb-3"></i>
                    </div>
                    <div class="text-start w-100 ms-3">
                        <div class="fw-bolder">'.$row['title'].'</div>
                        <div class="">
                            <div class=""> #created in '.$row['task_datetime'].'</div>
                            <div class="fw-bold" >'.$row['description'].'</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary py-1 px-3">'.$row['priorities'].'</span>
                                <span class="btn btn-secondary py-1 px-3">'.$row['types'].'</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-pen-to-square text-success fs-4 " data-bs-toggle="modal" data-bs-target="#modal" ></i>
                                <a href="index.php?delete='.$row['id'].'"><i class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" ></i></a>
                            </div>
                        </div>
                    </div>
                </button>  
                ';
                } 
                if($row['statues']=='In Progress' && $num==2){
                    $icon='fa-sharp fa-solid fa-circle-notch';
                    echo ' 
                <button class="d-flex align-items-center border py-2">
                    <div class="mb-5">
                        <i class=" '.$icon.' text-success fs-4 mb-3"></i>
                    </div>
                    <div class="text-start w-100 ms-3">
                        <div class="fw-bolder">'.$row['title'].'</div>
                        <div class="">
                            <div class=""> #created in '.$row['task_datetime'].'</div>
                            <div class="fw-bold" >'.$row['description'].'</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary py-1 px-3">'.$row['priorities'].'</span>
                                <span class="btn btn-secondary py-1 px-3">'.$row['types'].'</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-pen-to-square text-success fs-4 " data-bs-toggle="modal" data-bs-target="#modal" ></i>
                                <a href="index.php?delete='.$row['id'].'"><i class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" ></i></a>
                            </div>
                        </div>
                    </div>
                </button>  
                ';

                 }     
                if($row['statues']=='Done' && $num==3){
                $icon='fa-regular fa-circle-check';
                echo ' 
                <button class="d-flex align-items-center border py-2">
                    <div class="mb-5">
                        <i class=" '.$icon.' text-success fs-4 mb-3"></i>
                    </div>
                    <div class="text-start w-100 ms-3">
                        <div class="fw-bolder">'.$row['title'].'</div>
                        <div class="">
                            <div class=""> #created in '.$row['task_datetime'].'</div>
                            <div class="fw-bold" >'.$row['description'].'</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary py-1 px-3">'.$row['priorities'].'</span>
                                <span class="btn btn-secondary py-1 px-3">'.$row['types'].'</span>
                            </div>
                            <div>
                                <a href="index.php?update='.$row['id'].'"><i class="fa-solid fa-pen-to-square text-success fs-4 " data-bs-toggle="modal" data-bs-target="#modal" ></i></a>
                                <a href="index.php?delete='.$row['id'].'"><i class="fa-solid fa-trash fs-4 text-success" data-bs-toggle="tooltip" ></i></a>
                            </div>
                        </div>
                    </div>
                </button>  
                ';   
        }
    }
}

        //SQL SELECT
        // echo "Fetch all tasks";
    }

    
    function saveTask()
    {
        //CODE HERE
        
        $TITLE=$_POST['TITLE'];
        $TYPE=$_POST['TYPE'];
        $PRIOIRTY=$_POST['PRIORITY']; 
        $STATUS=$_POST['STATUS']; 
        $DATETIME=$_POST['DATETIME'];
        $DESCRIPTION=$_POST['DESCRIPTION'];   
        require 'database.php';
        $sql =  "INSERT INTO tasks (`title`, `type_id`, `priority_id`, `status_id`, `task_datetime`,`description`)
        VALUES ('$TITLE','$TYPE','$PRIOIRTY','$STATUS','$DATETIME','$DESCRIPTION')"; 
        $result = mysqli_query($conn, $sql);
    
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
        //SQL INSERT
    }


    function updateTask()
    {
        //CODE HERE
        global $conn;
        // header('location:index.php');
        //SQL UPDATE

        $_SESSION['message'] = "Task has been updated successfully !";
		
    }

    function deleteTask()
    {
        //CODE HERE
        global $conn;
        $id=$_GET['delete'];
        $sql="DELETE FROM tasks WHERE id=$id";
        $result=mysqli_query($conn,$sql);
        header('location: index.php');
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		
    }

?>