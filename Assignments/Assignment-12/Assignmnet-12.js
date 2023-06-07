const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const myForm = document.getElementById('my-form');
const userList = document.getElementById('users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    //creating an object with user details
    let userDetails ={};
    userDetails.name = nameInput.value;
    userDetails.email = emailInput.value;
    userDetails.phone = phoneInput.value;

    //converting the objects to a string to store in local storage
    let userDetailsString = JSON.stringify(userDetails);

    //storing the userdetails value with the users input as the key to avoid overriding of the data 
    localStorage.setItem(emailInput.value,userDetailsString)

    //resetting the form values to null after submit
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    //creating a list element and appending it to the user list to display on the document
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(userDetails.name+" -- "+ userDetails.email +" -- "+ userDetails.phone));
    userList.appendChild(li);
}