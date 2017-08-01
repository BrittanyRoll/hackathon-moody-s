var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

function add(){
  alert('Hi');
}

function addbtn(){
  var value = document.getElementById("todo-text").value; //gets input value
  var list = document.getElementById('unordered');
  var e = document.createElement('li');
  var innerDOM = '<input type="checkbox"';
  e.innerHTML = value;
  list.appendChild(e);
}
