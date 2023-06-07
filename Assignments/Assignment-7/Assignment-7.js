var newDiv = document.createElement('div');
newDiv.className='Hello';
newDiv.id ='Hello';
newDiv.setAttribute('title','Hello Div');
var textNode = document.createTextNode('Hello');

newDiv.appendChild(textNode);
var conatiner = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
conatiner.insertBefore(newDiv,h1)

var secDiv = document.createElement('div');
secDiv.className='list-group-item';
secDiv.id ='Hello';
secDiv.setAttribute('title','Hello Div');
var textNode = document.createTextNode('Hello');

secDiv.appendChild(textNode);
var sec = document.querySelector('div #items');
var first = document.querySelector('div li')
sec.insertBefore( secDiv, first)

