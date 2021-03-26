console.log("Index.js")
const inp = document.getElementById("inp");
const btn = document.getElementById("addTodo");
const mylist = document.getElementById("list");
const remove = document.getElementById("remove");


btn.onclick = function() {
    console.log("Button clicked")
    const todoText = inp.value;
    const li = document.createElement('li');
    const Remove = document.createElement("BUTTON");
    Remove.innerHTML = "Remove"
    li.innerHTML= todoText;
    li.onclick = function(e) {
        e.target.remove();
    }
    mylist.append(li)
  

    inp.value=""
}
