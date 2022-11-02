<?php
    include('scripts.php');
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

	<!-- BEGIN #app -->
	<div id="app" class="app-without-sidebar">
		<!-- BEGIN #content -->
		<div id="content" class="app-content main-style">
			<div class="d-flex justify-content-between">
				<div>
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
						<li class="breadcrumb-item active ">Scrum Board </li>
					</ol>
					<!-- BEGIN page-header -->
					<h1 class="page-header">
						Scrum Board 
					</h1>
					<!-- END page-header -->
				</div>
				
				<div class="mt-4">
					<button  class="btn btn-success px-4 rounded-pill" id="btntask" data-bs-toggle="modal" data-bs-target="#modal" ><i class="fa fa-plus"></i> Add Task </a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="bg-dark rounded-top mb-2 ">
						<div class="px-3">
							<h4 class="bg-dark text-white fw-normal mb-2 " >To do (<span id="to-do-tasks-count"><?php counterTasks(1) ?></span>)</h4>

						</div>
						<div class="d-flex flex-column " id="to-do-tasks" >
							<!-- TO DO TASKS HERE -->
							<?php
								//PHP CODE HERE
								getTasks('1')	
								//DATA FROM getTasks() FUNCTION
							?>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="bg-dark rounded-top mb-2">
						<div class="px-3">
							<h4 class="bg-dark text-white fw-normal">In Progress (<span id="in-progress-tasks-count"><?php counterTasks(2) ?></span>)</h4>

						</div>
						<div class="d-flex  flex-column " id="in-progress-tasks" >
							<!-- IN PROGRESS TASKS HERE -->
							<?php
							//PHP CODE HERE
							getTasks('2')	
							//DATA FROM getTasks() FUNCTION
						?>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="bg-dark rounded-top ">
						<div class="px-3 ">
							<h4 class="bg-dark text-white fw-normal ">Done (<span id="done-tasks-count"><?php counterTasks(3)?></span>)</h4>

						</div>
						<div class=" d-flex flex-column" id="done-tasks">
							<!-- DONE TASKS HERE -->
							<?php
							//PHP CODE HERE
							getTasks('3')	
							//DATA FROM getTasks() FUNCTION
						?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END #content -->
		
		
		<!-- BEGIN scroll-top-btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
		<!-- END scroll-top-btn -->
	</div>
	<!-- END #app -->
	
	<!-- TASK MODAL -->
	<div class="modal fade" id="modal">
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
						<div class="form-group">
							<label for="recipient-name" class="col-form-label" id="Title" >TITLE</label>
							<input type="text" class="form-control" id="recipient-name" name="TITLE" >
						</div>
						<h6 class="form-title my-3" id="exampleModalLabel">Type</h6>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="TYPE" id="exampleRadios1" value="1">
							<label class="form-check-label" for="exampleRadios1" >
							Feature
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="TYPE" id="exampleRadios1" value="2" >
							<label class="form-check-label" for="exampleRadios2">
							Bug
							</label>
						</div>
						<h6 class="modal-title mt-3 mb-1 " id="exampleModalLabel">Priority</h6>
						<select class="form-select" id="Selectproprity" name="PRIORITY" aria-label="Default select example">
							<option selected>Please select </option>
							<option value="1">High</option>
							<option value="2">Low</option>
						</select>
						<h6 class="modal-title my-2" id="exampleModalLabel">Status</h6>
						<select class="form-select" id="selectstatus" name="STATUS" aria-label="Default select example">
							<option selected>Please select </option>
							<option value="1">To Do</option>
							<option value="2">In Progress</option>
							<option value="3">Done</option>
						</select>
						<div class="form-group">
							<label for="recipient-name" class="col-form-label">Date</label>
							<input type="date" class="form-control" id="date-task" name="DATETIME" placeholder="Please Select">
						</div>
						<div class="form-group">
							<label for="message-text" class="col-form-label">Description</label>
							<textarea class="form-control" id="message-text" name="DESCRIPTION"`require ></textarea>
						</div>
					</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
						<button type="submit"  name="save" class="btn btn-primary" data-bs-dismiss="modal" id="saveBtn" >Save</button>
						</div>
				</form>
			</div>
		</div>
	</div>	
	
	<!-- ================== BEGIN core-js ================== -->
	<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<script src="assets/js/data.js"></script>
	<script src="assets/js/app.js"></script>


	<!-- ================== END core-js ================== -->
</body>
</html>