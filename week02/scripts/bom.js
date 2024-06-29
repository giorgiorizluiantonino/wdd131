const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Create the list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content of the list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and set focus to it
        input.value = '';
    }

    // Set focus to the input field
    input.focus();
});
