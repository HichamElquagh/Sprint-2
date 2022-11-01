

//   THIS FUNCTION FOR CONFIRM DELETE  "POP UP"  
function confirmDelete (id){
    if(confirm('are you sure to delete this !!')==true){
        // document.getElementById('hiddeIcon').click();
        document.location = `index.php?delete=${id}`;
    }

};



