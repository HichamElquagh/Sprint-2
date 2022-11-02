<?php 
 include('database.php');
    //  j'ai crée une nouvelle page et j'ai envoyer le id par methode de GET  pour remplir le model 
    if(isset($_GET['Update'])){
        $id=$_GET['Update'];
        $sql=" SELECT * FROM tasks WHERE tasks.id=$id ";
        $result=mysqli_query($conn,$sql);
        $rows=mysqli_fetch_assoc($result);
        // l'affectation des values de tableau database a des variables 'rows'
        $id= $rows['id'];
        $title= $rows['title'];
        $type= $rows['type_id'];
        $priority = $rows['priority_id'];
        $status= $rows['status_id'];
        $datetime= $rows['task_datetime'];
        $description= $rows['description'];
?>
<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="utf-8" />
	<title>YouCode | Scrum Board</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	<link href="assets/css/vendor.min.css" rel="stylesheet" />
	<link href="assets/css/default/app.min.css" rel="stylesheet" />
	<link href="assets/css/style.css" rel="stylesheet" />
	<!-- ================== END core-css ================== -->
</head>
<body>
       <!-- TASK MODAL   -->
       <div class="modal-dialog" role="document">
		    <div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel" >Add task</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" data-bs-dismiss="modal" id="modalboton">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
                    <form action="scripts.php" method="POST" id="form">
                        <div class="modal-body">
                            <input name='id'  type="hidden" value="<?php echo $id ?>">
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label" id="Title">TITLE</label>
                                <input type="text" class="form-control" name="TITLE" id="recipient-name" value="<?php echo $title; ?>">
                            </div>
                            <h6 class="form-title my-3" id="exampleModalLabel">Type</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="TYPE" id="exampleRadios1" value="1" 
                                <?php if($type==1) echo'checked'?> >
                                <label class="form-check-label" for="exampleRadios1">
                                Feature
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="TYPE" id="exampleRadios1" value="2"
                                <?php if($type==2) echo'checked'?> >
                                <label class="form-check-label" for="exampleRadios2">
                                Bug
                                </label>
                            </div>
                            <h6 class="modal-title mt-3 mb-1 " id="exampleModalLabel">Priority</h6>
                            <select class="form-select" id="Selectproprity" name="PRIORITY" aria-label="Default select example">
                                <option selected>Please select </option>
                                <option value="1" <?php if($priority==1) echo'selected'?> >High</option>
                                <option value="2" <?php if($priority==2) echo'selected'?> >Low</option>
                            </select>
                            <h6 class="modal-title my-2" id="exampleModalLabel">Status</h6>
                            <select class="form-select" id="selectstatus" name="STATUS" aria-label="Default select example">
                                <option selected>Please select </option>
                                <option value="1" <?php if ($status==1) echo 'selected' ?> >To Do</option>
                                <option value="2"<?php if ($status==2) echo 'selected' ?> >In Progress</option>
                                <option value="3"<?php if ($status==3) echo 'selected' ?> >Done</option>
                            </select>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Date</label>
                                <input type="datetime-local" value="<?php echo $datetime; ?>" class="form-control" id="date-task" name="DATETIME" placeholder="Please Select">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label" >Description</label>
                                <textarea class="form-control" value="" id="message-text" name="DESCRIPTION"`require><?php echo $description; ?></textarea>
                            </div>
                        </div>
                            <div class="modal-footer">
                            <button type="submit" name="cancel" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" name="Update" class="btn btn-primary" data-bs-dismiss="modal" id="saveBtn" >update</button>
                            </div>
                    </form>
                </div>
            </div>
        
        
    <?php }else header('location: index.php'); ?>
    
    <!-- ================== BEGIN core-js ================== -->
	<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<script src="assets/js/data.js"></script>
	<script src="assets/js/app.js"></script>
	<!-- ================== END core-js ================== -->
</body>
</html>