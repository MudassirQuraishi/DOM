const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const myForm = document.getElementById('my-form');
const userList = document.getElementById('users');


myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',delLi);



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
    localStorage.setItem(userDetails.email,userDetailsString)

    //resetting the form values to null after submit
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    //creating a list element and appending it to the user list to display on the document
    const li = document.createElement('li');

    const name = document.createTextNode(userDetails.name );
    const email = document.createTextNode(userDetails.email);
    const phone = document.createTextNode(userDetails.phone);
    const hyphen1 = document.createTextNode('--');
    const hyphen2 = document.createTextNode('--');

    li.appendChild(name);
    li.appendChild(hyphen1);
 
    li.appendChild(email);
    li.appendChild(hyphen2);
    li.appendChild(phone);
    
    var delbtn = document.createElement('button')
    delbtn.type='button'
    delbtn.className ='delete';
    delbtn.id = 'deleteButton'
    delbtn.appendChild(document.createTextNode('delete'));
    li.appendChild(delbtn); 
    
    userList.appendChild(li);
    
}

function delLi(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure??')){
            var li = e.target.parentElement;
            const delValue = li.firstChild.nextSibling.nextSibling.textContent

            userList.removeChild(li);
            localStorage.removeItem(delValue);
        }  
    }
}