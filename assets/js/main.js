
document.getElementById('clickButton').onclick=showAlert;
function showAlert(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('Name').value;
    
    alert("Bonjour " + firstName + " " + lastName);
} 