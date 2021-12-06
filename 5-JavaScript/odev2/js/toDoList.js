let list = document.querySelector("#list");
let allLi = document.querySelectorAll("li");
let closeButtons = document.querySelectorAll(".close");


allLi.forEach((li) => {
  li.onclick = elementDone;
});

closeButtons.forEach((button) => {
  button.onclick = deleteElement;
});

function newElement() {
  let task = document.querySelector("#task").value;

  let addList = false;

  if (task != "") {
    for (let i = 0; i < task.length; i++) {
      if (task[i] != " ") {
        addList = true;
        break;
      }
    }
  }

  if (addList) {
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
    li.onclick = elementDone;

    let button = document.createElement("button");
    button.classList.add("close");
    button.innerHTML = "x";
    li.appendChild(button);
    button.onclick = deleteElement;

    var toastLive = document.querySelector("#addedToast");
    var toast = new bootstrap.Toast(toastLive);
    toast.show();
  } 
  else {
    var toastLive = document.querySelector("#notAddedToast");
    var toast = new bootstrap.Toast(toastLive);
    toast.show();
  }
  document.querySelector("#task").value = "";
}

function elementDone(element) {
  let li = element.target
  li.className == "checked" ? li.classList.remove("checked") : li.classList.add("checked")
}

function deleteElement(element) {
  let parent = element.target.parentElement;
  parent.remove();
}
