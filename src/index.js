import database from "./database";
import './styles/style.css';

// let addProjectIcon = document.querySelector('#add-project-icon');

let addProjectButton = document.querySelector('#add-project-icon');
let addProjectModal = document.querySelector('#add-project-modal');

addProjectButton.addEventListener('click', () => {
    addProjectModal.showModal()
})

let deleteProjectButton = document.querySelector('#delete-project-button');
let deleteProjectModal = document.querySelector('#delete-project-modal');

deleteProjectButton.addEventListener('click', () => {
    deleteProjectModal.showModal();
})

let editProjectButton = document.querySelector('#edit-project-icon');
let editProjectModal = document.querySelector('#edit-project-modal');

editProjectButton.addEventListener('click', () => {
    editProjectModal.showModal()
})

// Tasks

let deleteTaskButton = document.querySelector('#delete-task-button');
let deleteTaskModal = document.querySelector('#delete-task-modal');

deleteTaskButton.addEventListener('click', () => {
    deleteTaskModal.showModal();
})

let closeButtons = document.querySelectorAll('.close-button')
closeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let module = e.target.closest('dialog')
        e.preventDefault()
        module.close()
    })
})

let addTaskButton = document.querySelector('#add-task-icon');
let addTaskModal = document.querySelector('#add-task-modal');

addTaskButton.addEventListener('click', () => {
    addTaskModal.showModal()
})

let editTaskButton = document.querySelector('#edit-task-icon');
let editTaskModal = document.querySelector('#edit-task-modal');

editTaskButton.addEventListener('click', () => {
    editTaskModal.showModal()
})