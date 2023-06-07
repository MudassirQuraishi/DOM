var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//create a eventListener to add a new item to the itemList
form.addEventListener('submit',addEvent);
//the first prarameter here takes the action which has to be done to perform the event
//here clicking on the submit button will be the action and the second parameter will be the 
//function that has to be performed after clciking the submit button
function addEvent(e){
    e.preventDefault();
    //Collect the data from the input first
    var newItem = document.getElementById('item').value;
    //now we have to create a new list item
    var li = document.createElement('li');
    //add class name to the newly created list item
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    //now we have to create a delete button and add it to li
    var delbtn = document.createElement('button')
    delbtn.className ='btn btn-danger btn-sm float-right delete';
    delbtn.appendChild(document.createTextNode('X'));
    li.appendChild(delbtn)
    itemList.appendChild(li);
}
itemList.addEventListener('click',delEvent);
function delEvent(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement.parentElement;
            itemList.removeChild(li);

        }
    }
}