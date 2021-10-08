const addButton = document.querySelector(".addButton");
var inputValue = document.querySelector(".input");
const container = document.getElementById("container");

class item {
    construtor(itemName){
        //create the item div
        this.createDiv(itemName);
    }

    createDiv (itemName){
        let input = document.creatElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        removeButton.classList.add('removeButton');

        itemBox.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input){
    input.disabled =!input.disabled;
}

remove(item){
    container.removeChild(item);
}