const uList = document.querySelector("ul");
const input = document.querySelector("input");
const inputButton = document.querySelector("button");


function addToList(){
    let val = input.value;
    input.value = '';

    const span = document.createElement("span");
    const listButton = document.createElement("button");
    const listItem = document.createElement("li");

    listItem.appendChild(span);
    listItem.appendChild(listButton);
    
    span.textContent = val;
    listButton.textContent = "Delete";

    uList.appendChild(listItem);

    listButton.addEventListener("click", () => listItem.remove());

    input.focus();
}

inputButton.addEventListener("click", addToList);




