document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const changeTextButton = document.getElementById('changeTextButton');
    const styledElement = document.getElementById('styledElement');
    const toggleStyleButton = document.getElementById('toggleStyleButton');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    const itemList = document.getElementById('itemList');
    let newItemCounter = 1;

    // Change text content dynamically
    changeTextButton.addEventListener('click', () => {
        greetingElement.textContent = 'The greeting has been updated!';
    });

    // Modify CSS styles via JavaScript
    toggleStyleButton.addEventListener('click', () => {
        styledElement.classList.toggle('highlight');
    });

    // Add an element when the button is clicked
    addElementButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${newItemCounter}`;
        newItem.id = `newItem${newItemCounter}`;
        itemList.appendChild(newItem);
        newItemCounter++;
    });

    // Remove an element when the button is clicked
    removeElementButton.addEventListener('click', () => {
        const lastItem = itemList.lastElementChild;
        if (lastItem && lastItem.id !== 'initialItem') {
            itemList.removeChild(lastItem);
            newItemCounter--;
        } else if (itemList.children.length > 1) {
            // If only the initial item remains, try to remove the last dynamically added one
            for (let i = newItemCounter - 1; i >= 1; i--) {
                const dynamicItem = document.getElementById(`newItem${i}`);
                if (dynamicItem) {
                    itemList.removeChild(dynamicItem);
                    newItemCounter = i;
                    break;
                }
            }
        } else {
            alert('No dynamically added items to remove.');
        }
    });
});