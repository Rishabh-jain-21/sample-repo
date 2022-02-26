console.log('Java script is running');
function add(){
let input = document.querySelector('.textInput').value; //Taking the input from user
var len = input.length;
if(len == 0)
{
    alert('Task cant be empty');
}
else
{
document.querySelector('.Head1').style.visibility = 'visible';
let check = document.createElement('input');
let elm = document.createElement('li'); //Creating a list element
elm.className = 'insid';
elm.innerText = input;
let ul = document.querySelector('.list');
ul.append(elm);
}
}