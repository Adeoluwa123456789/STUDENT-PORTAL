var allStudents =[]
function Submit() {
var firstname =document.getElementById('firstname') .value
var lastname =document.getElementById('lastname') .value
var email =document.getElementById('email').value
var Password = document.getElementById('Password').value
var CPassword = document.getElementById('CPassword').value

    
if (Password !== CPassword) {
    paserr.style.display = 'block'

}else{
    if(firstname === '' || lastname ==='' || email === '' || Password ==='' || CPassword ===''){
    
        emperror.style.display = 'block'
    }else{
    var studentObj = {firstname, lastname, email, Password, CPassword}
    
    allStudents.push(studentObj)
    console.log(allStudents);
    
    console.log(studentObj);
    displayStudents()
    
    document.getElementById('firstname').value = ''
    document.getElementById('lastname').value=''
    document.getElementById('email').value=''
    document.getElementById('Password').value=''
    document.getElementById('CPassword').value=''
    emperror.style.display = 'none'
    paserr.style.display = 'none'
    }    
        
}
localStorage.setItem('students', JSON.stringify(allStudents ))
        window.location.href='dashboard.html'
        show.innerHTML = 'allStudents'


}
function displayStudents() {
    if (allStudents.length > 0) {
    for(i=0; i < allStudents.length; i++){
        console.log(allStudents[i].firstname);
    }
    }
}
