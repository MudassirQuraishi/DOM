const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const myForm = document.getElementById('my-form');
const userList = document.getElementById('users');
const deletebtn = document.getElementById('deleteButton')


myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',function(e){
    
    const targetElement = e.target;
    //Since the Li element has both eidt and delete buttons attached to it, we have to check which button was clicked
    //to return the required functionality
    if(targetElement.id==='deleteButton'){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure??')){
                //We will fetch the li element which has to be deleted
                var li = e.target.parentElement;
                //now we will fetch the unique id generated when we were creating the li element
                const delValue = li.id
                //Now we have to remove the li element from the DOM, so that the element is deleted without refreshing the page
                userList.removeChild(li);
                //and we also have to remove the li element from the server
                axios.delete(`https://crudcrud.com/api/7db807ea603e404a8e2f13c73dfd3ccf/userData/${delValue}`)
                //Now the element has been deleted from both the server and the DOM,even when the page is reloaded, 
                //no data will be showed
            }  
        }
    }
    else if(targetElement.id==='editButton'){
        if(e.target.classList.contains('edit')){
            if(confirm('Are You Sure??')){
                //we will fetch the li element to be edited
                var li = e.target.parentElement;
                //now we have to repopulate the form inputs with the data form the li that is to be edited
                nameInput.value = li.firstChild.textContent;
                emailInput.value = li.firstChild.nextSibling.nextSibling.textContent
                phoneInput.value =li.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent
                //after the data has been repopulated, we need to delete the element from the DOM and server
                const delValue = li.id
                userList.removeChild(li);
                axios.delete(`https://crudcrud.com/api/7db807ea603e404a8e2f13c73dfd3ccf/userData/${delValue}`)
                //Now that the data has been deleted form both DOM and server side,
                //when the user submits the edited data, the data will be saved into the DOM and server
            }  
        }

    }
});

function createLiElement(userDetails){
    const li = document.createElement('li');

    const name = document.createTextNode(userDetails.name );
    const email = document.createTextNode(userDetails.email);
    const phone = document.createTextNode(userDetails.phone);
    const hyphen1 = document.createTextNode('--');
    const hyphen2 = document.createTextNode('--');
    li.id= userDetails._id;
    li.appendChild(name);
    li.appendChild(hyphen1);
    li.appendChild(email);
    li.appendChild(hyphen2);
    li.appendChild(phone);
    
    var delbtn = document.createElement('button')
    delbtn.type='button'
    delbtn.className ='delete';
    delbtn.id = 'deleteButton'
    delbtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbtn); 

    var editBtn = document.createElement('button')
    editBtn.type='button'
    editBtn.className ='edit';
    editBtn.id = 'editButton'
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn); 
    
    userList.appendChild(li);
}

function onSubmit(e){
    e.preventDefault();
    //creating an object with user details
    let userDetails ={
        name :nameInput.value,
        email : emailInput.value,
        phone : phoneInput.value,
    }


    axios.post("https://crudcrud.com/api/7db807ea603e404a8e2f13c73dfd3ccf/userData",userDetails)
    .then((response) => {
        createLiElement(response.data);
    })
    .catch((error) => {
        document.body.innerHTML= document.body.innerHTML+ "<h4> Something went wrong</h4>"
    });

    
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
}

document.addEventListener('DOMContentLoaded', loadServerDetais);
// Here i have added a fucntionality where all the server details will be loaded to the page form the server
function loadServerDetais() {
    axios.get("https://crudcrud.com/api/7db807ea603e404a8e2f13c73dfd3ccf/userData").then((response) => {
        //We have to check whether there is any saved data in the database
        let length = Object.keys(response.data).length    
        //If there is no data in the server then we have to show that there are no appointments
        if(length<1){
            console.log('No Appointments at the time')
        }
        //If there is any data stored in the server then we will show the data in the webpage
        for(let i = 0;i<response.data.length;i++) {
            createLiElement(response.data[i])
        }
    
    })
    .catch((error) => {
        document.body.innerHTML= document.body.innerHTML+ "<h4> Something went wrong</h4>"
    });
}