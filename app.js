//Select elements from the dom
let eventType = document.getElementById("eventType");
let dateInput = document.getElementById("dateInput");
let timeInput = document.getElementById("timeInput");
let eventBtn = document.getElementById("addEvent");
let container = document.querySelector(".eventContainer");
let checkAll = document.querySelector(".checkAll");
let clearAll = document.querySelector(".clearAll");

function toDoApp() {
  //Create new input and label element

  let newInput = document.createElement("INPUT");
  let newLabel = document.createElement("LABEL");
  let li = document.createElement("LI");
  
  //Assigning Attributes to the element above
  //For input, we want to create a checkbox, so we set the attribute type and id
  newInput.type = "checkbox";
  newInput.id = "check";

  //For label we identify it with the created check box
  newLabel.htmlFor = "check";

  //assigning the user input as textNode
  let textNodeForLabel = document.createTextNode(
    "I have to " +
      eventType.value +
      " | " +
      dateInput.value +
      " | " +
      timeInput.value
  );

  //Appending the textNode to the label
  newLabel.appendChild(textNodeForLabel);
  li.appendChild(newInput);
  li.appendChild(newLabel);
  container.appendChild(li);

  //The code below removes or clear the checked item from the list
  clearAll.addEventListener("click", function () {
    items = Array.prototype.slice.call(container.childNodes), li;
    while (li = items.pop()) {
      if (li.firstChild && li.firstChild.checked) {
        container.removeChild(li);
      }
    }
  });
}
//Function below checks all item
function checkAllItems() {
  let checkBox = document.querySelectorAll("#check");
  checkBox.forEach(function (element, index) {
    return (checkBox[index].checked = true);
  });
}

eventBtn.addEventListener("click", toDoApp);
checkAll.addEventListener("click", checkAllItems);
