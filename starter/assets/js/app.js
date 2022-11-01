
document.getElementById('normalIcon').addEventListener('click',confirmDelete)
//   THIS FUNCTION FOR CONFIRM DELETE  "POP UP"  
function confirmDelete (){
        
    if(confirm('are you sure to delete this !!')==true){
        document.getElementById('hiddeIcon').click();
    }
}


