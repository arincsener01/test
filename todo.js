function addItem() {
  const itemInput = document.getElementById("item-input");
  const itemText = itemInput.value.trim();

  if (itemText !== "") {
    const itemList = document.getElementById("item-list");
    const listItem = document.createElement("li");

    // Create a checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
      // Toggle the completed class when the checkbox is clicked
      listItem.classList.toggle("completed");
    };

    listItem.appendChild(checkbox);

    // Create a label element for the item text
    const label = document.createElement("label");
    label.textContent = itemText;

    listItem.appendChild(label);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      itemList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);

    itemInput.value = "";
  }
}
