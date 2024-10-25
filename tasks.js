const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-task')
const inputBox = document.getElementById('todo');
const schedule = document.getElementById('tasks-list');
inputBox.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addBtn.click();
    }

})
addBtn.addEventListener('click', addTask);

function addTask() {
    

    if (inputBox.value === '') {
        alert("You've not written anything!");
    } else {
        // Add the task to the list container
        listContainer.innerHTML+=  `<li class="text-white text-xl font-semibold capitalize text-left flex justify-between cursor-pointer">${inputBox.value} <span class='cursor-pointer hover:bg-gray-600/50 rounded-full px-2'>\u00d7</span></li>`
        inputBox.value = '';
    }
    saveData()
}

// Handle marking tasks as done and removing tasks
document.getElementById('list-container').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Toggle task completion
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove task
    }
    saveData()
});


function saveData(){
    localStorage.setItem('task', listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('task');
    schedule.innerHTML = localStorage.getItem('task');
}

showData();
