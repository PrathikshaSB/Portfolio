let sendButton = document.getElementById('submit');
let form = document.getElementById('form');

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let feedback = document.getElementById('feedback');

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    feedback = feedback.value;
    localStorage.setItem('feedback', feedback);
    
    console.log(localStorage);
    clearAllData();
})

function clearAllData(){
    resetForm();
}    

function resetForm(){
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('feedback').value="";
}