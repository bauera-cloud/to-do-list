import database from "./database";
import { format } from 'date-fns';
import './styles/style.css';


// MODAL FORM
function createEditProjectModal(project) {
    let body = document.querySelector('body');

    let dialog = document.createElement('dialog');
    dialog.classList.add('modal');
    dialog.id = 'edit-project-modal';


    // MODAL HEADER
    let modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header');

    let modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    // !! change (Edit or Add) Project
    modalTitle.textContent = `Edit Project`;

    let closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'close';

    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(closeButton)


    let form = document.createElement('form');
    form.classList.add('modal-form')
    form.setAttribute('action', '') // add action attribute??

    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    let titleDiv = document.createElement('div');

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title')
    titleLabel.textContent = 'Title'

    let titleInput = document.createElement('input')
    titleInput.setAttribute('name', 'title')
    titleInput.setAttribute('id', 'title')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('value', project.title) //dynamic input title

    titleDiv.appendChild(titleLabel)
    titleDiv.appendChild(titleInput)

    let descriptionDiv = document.createElement('div');

    let descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';

    let descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('value', project.description) //dynamically change

    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionInput)

    modalBody.appendChild(titleDiv)
    modalBody.appendChild(descriptionDiv)

    let modalButtons = document.createElement('div');
    modalButtons.classList.add('modal-buttons');

    let modalButtonsDiv = document.createElement('div');

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('close-button');
    cancelButton.classList.add('modal-button');
    cancelButton.textContent = 'Cancel';

    let saveButton = document.createElement('button');
    saveButton.classList.add('close-button');
    saveButton.classList.add('modal-button');
    saveButton.textContent = 'Save';

    modalButtonsDiv.appendChild(cancelButton);
    modalButtonsDiv.appendChild(saveButton);

    modalButtons.appendChild(modalButtonsDiv);

    form.appendChild(modalBody)
    form.appendChild(modalButtons)

    dialog.appendChild(modalHeader)
    dialog.appendChild(form)

    body.appendChild(dialog)

    return dialog
}


function createEditTaskModal(task) {
    let body = document.querySelector('body');

    let dialog = document.createElement('dialog');
    dialog.classList.add('modal');
    dialog.id = 'edit-task-modal';


    // MODAL HEADER
    let modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header');

    let modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    // !! change (Edit or Add) Project
    modalTitle.textContent = `Edit Task`;

    let closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'close';

    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(closeButton)


    let form = document.createElement('form');
    form.classList.add('modal-form')
    form.setAttribute('action', '') // add action attribute??

    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    let titleDiv = document.createElement('div');

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title')
    titleLabel.textContent = 'Title'

    let titleInput = document.createElement('input')
    titleInput.setAttribute('name', 'title')
    titleInput.setAttribute('id', 'title')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('value', task.title) //dynamic input title

    titleDiv.appendChild(titleLabel)
    titleDiv.appendChild(titleInput)

    let descriptionDiv = document.createElement('div');

    let descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';

    let descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('value', task.description) //dynamically change

    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionInput)

    let dueDateDiv = document.createElement('div');

    let dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date')
    dueDateLabel.textContent = 'Due Date'

    let dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('name', 'due-date')
    dueDateInput.setAttribute('id', 'due-date')
    dueDateInput.setAttribute('type', 'date')
    dueDateInput.setAttribute('value', format(new Date(task.date), "yyyy-MM-dd"))

    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDateInput)

    let priorityDiv = document.createElement('div');

    let priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority')
    priorityLabel.textContent = 'Priority'

    let priorityInput = document.createElement('input');
    priorityInput.setAttribute('name', 'priority')
    priorityInput.setAttribute('id', 'priority')
    priorityInput.setAttribute('type', 'checkbox')
    priorityInput.classList.add('priority')
    priorityInput.checked = task.priority

    priorityDiv.appendChild(priorityLabel)
    priorityDiv.appendChild(priorityInput)

    modalBody.appendChild(titleDiv)
    modalBody.appendChild(descriptionDiv)
    modalBody.appendChild(dueDateDiv)
    modalBody.appendChild(priorityDiv)

    let modalButtons = document.createElement('div');
    modalButtons.classList.add('modal-buttons');

    let modalButtonsDiv = document.createElement('div');

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('close-button');
    cancelButton.classList.add('modal-button');
    cancelButton.textContent = 'Cancel';

    let saveButton = document.createElement('button');
    saveButton.classList.add('close-button');
    saveButton.classList.add('modal-button');
    saveButton.textContent = 'Save';

    modalButtonsDiv.appendChild(cancelButton);
    modalButtonsDiv.appendChild(saveButton);

    modalButtons.appendChild(modalButtonsDiv);

    form.appendChild(modalBody)
    form.appendChild(modalButtons)

    dialog.appendChild(modalHeader)
    dialog.appendChild(form)

    body.appendChild(dialog)

    return dialog
}


// // BUTTON MODAL LOGIC

// let addProjectButton = document.querySelector('#add-project-icon');
// let addProjectModal = document.querySelector('#add-project-modal');

// addProjectButton.addEventListener('click', () => {
//     addProjectModal.showModal()
// })

// let deleteProjectButton = document.querySelector('#delete-project-button');
// let deleteProjectModal = document.querySelector('#delete-project-modal');

// deleteProjectButton.addEventListener('click', () => {
//     deleteProjectModal.showModal();
// })

// let editProjectButton = document.querySelector('#edit-project-icon');
// let editProjectModal = document.querySelector('#edit-project-modal');

// editProjectButton.addEventListener('click', () => {
//     editProjectModal.showModal()
// })

// // Tasks

// let deleteTaskButton = document.querySelector('#delete-task-button');
// let deleteTaskModal = document.querySelector('#delete-task-modal');

// deleteTaskButton.addEventListener('click', () => {
//     deleteTaskModal.showModal();
// })

// let closeButtons = document.querySelectorAll('.close-button')
// closeButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         let module = e.target.closest('dialog')
//         e.preventDefault()
//         module.close()
//     })
// })

// let addTaskButton = document.querySelector('#add-task-icon');
// let addTaskModal = document.querySelector('#add-task-modal');

// addTaskButton.addEventListener('click', () => {
//     addTaskModal.showModal()
// })

// let editTaskButton = document.querySelector('#edit-task-icon');
// let editTaskModal = document.querySelector('#edit-task-modal');

// editTaskButton.addEventListener('click', () => {
//     editTaskModal.showModal()
// })

let editProjectButtons = document.querySelectorAll('.project-edit');
editProjectButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let projectID = e.target.parentElement.parentElement.getAttribute('data-project-id');
        let project = database.getProject(projectID)
        let modal = createEditProjectModal(project)
        modal.showModal()
    })
})

let editTaskButtons = document.querySelectorAll('.task-edit');
editTaskButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let taskID = e.target.parentElement.parentElement.getAttribute('data-task-id');
        let task = database.getTask(taskID)
        let modal = createEditTaskModal(task)
        modal.showModal()
    })
})

//this isn't doing anything because it selects the dialog .closebuttons (which don't exist) upon initially loading the document. It should be in effect after the modal is shown.
let closeButtons = document.querySelectorAll('.close-button')
closeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let modal = e.target.closest('dialog')
        e.preventDefault()
        modal.close()
        modal.remove()
    })
})