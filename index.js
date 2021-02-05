// to do
// Capture elements in variables
// Handle logic for the input task action + add button
// Createreate a new item each time the add button is clicked(or the enter key is pressed)
// Handle logic the remove btn

const input = document.getElementsByTagName('input')[0];
const addButton = document.querySelector('#add-button');
const container = document.querySelector('#container');

const createNewItem = function() {
	if (input.value === '') {
		return;
	} else {
		//Create new li
		const newItem = document.createElement('li');
		newItem.classList.add('list-item');
		newItem.innerHTML = input.value;
		container.appendChild(newItem);

		// Create remove btn for each li
		const newRmvBtn = document.createElement('button');
		newRmvBtn.classList.add('remove-btn');
		newRmvBtn.innerHTML = '<i class="fas fa-trash"></i>';
		newItem.appendChild(newRmvBtn);

		newRmvBtn.addEventListener('click', () => {
			container.removeChild(newItem);
		});

		// Create check button
		const newCheckBtn = document.createElement('button');
		newCheckBtn.classList.add('check-btn');
		newCheckBtn.innerHTML = '<i class="far fa-check-square"></i>';
		newItem.appendChild(newCheckBtn);

		newCheckBtn.addEventListener('click', () => {
			newItem.classList.toggle('checked');
		});

		// Reset input field
		input.value = '';
	}
};

// Remove button
addButton.addEventListener('click', createNewItem);
input.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		createNewItem();
	}
});

// Prevent form submission
document.getElementsByTagName('form')[0].addEventListener('click', function(event) {
	event.preventDefault();
});
