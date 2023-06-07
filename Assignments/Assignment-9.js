var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addEvent);
function addEvent(e){
    e.preventDefault();
    var newDiv = document.createElement('div');
    newDiv.className='btn btn-sm float-right';
    newDiv.role = 'group'
    newDiv.ariaLabel ='Basic example'

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var SecItem = document.getElementById('description').value;
    li.append(document.createTextNode(" "+SecItem));
    

    
    var editBtn = document.createElement('button')
    editBtn.type ='button'
    editBtn.className ='btn btn-primary float-right btn-sm edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    newDiv.appendChild(editBtn);
    
    var delbtn = document.createElement('button')
    delbtn.type='button'
    delbtn.className ='btn btn-sm float-right btn-danger delete';
    delbtn.appendChild(document.createTextNode('X'));
    newDiv.appendChild(delbtn)
    li.appendChild(newDiv); 
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

var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterText);
function filterText(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.wholeText;

        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display ='block';
        }
        else{
            item.style.display='none';
        }
    });
}
