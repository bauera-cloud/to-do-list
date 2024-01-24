import { format } from 'date-fns';
import database from './database';
import { appendProjectToSidebar, appendTaskToTasks, displayCategoryContent, createTaskDiv } from './dom';


function Modal() {

    let createEditProjectModal = (project) => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'edit-project-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = `Edit Project`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)

        let form = Form('edit-project', project)

        modal.appendChild(modalHeader)
        modal.appendChild(form)

        body.appendChild(modal)

        return modal
    }

    let createEditTaskModal = (task) => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'edit-task-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Edit Task`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)

        let form = Form('edit-task', task);

        modal.appendChild(modalHeader)
        modal.appendChild(form)

        body.appendChild(modal)

        return modal
    }

    let createDeleteProjectModal = (project) => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'delete-project-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Delete Project`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)


        // MODAL BODY
        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let question = document.createElement('p');
        question.textContent = 'Are you sure?'

        let statement = document.createElement('p');
        statement.textContent = `Project ${project.title} will be gone forever!`

        formBody.appendChild(question)
        formBody.appendChild(statement)


        // MODAL BUTTONS
        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');


        let cancelButton = getCancelButton();

        let deleteForm = document.createElement('form');
        deleteForm.setAttribute('action', '');

        let deleteButton = getDeleteButton();

        deleteForm.appendChild(deleteButton)

        formButtons.appendChild(cancelButton);
        formButtons.appendChild(deleteForm);

        deleteForm.addEventListener('submit', deleteProject)

        function deleteProject(e) {
            e.preventDefault()
            deleteProjectTab(project.id)
            database.deleteProject(project.id)
            modal.close();
            displayCategoryContent('All')
        }

        function deleteProjectTab(projectId) {
            let projectTab = document.querySelector(`[data-project-id="${projectId}"]`);
            projectTab.remove();
        }

        modal.appendChild(modalHeader)
        modal.appendChild(formBody)
        modal.appendChild(formButtons)

        body.appendChild(modal)

        return modal
    }

    let createDeleteTaskModal = (task) => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'delete-task-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Delete Task`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)


        // MODAL BODY
        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let question = document.createElement('p');
        question.textContent = 'Are you sure?'

        let statement = document.createElement('p');
        statement.textContent = `Task ${task.title} will be gone forever!`

        formBody.appendChild(question)
        formBody.appendChild(statement)


        // MODAL BUTTONS
        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');


        let cancelButton = getCancelButton();

        let deleteForm = document.createElement('form');
        deleteForm.setAttribute('action', '');

        let deleteButton = getDeleteButton();

        deleteForm.addEventListener('submit', deleteTask);

        function deleteTask(e) {
            e.preventDefault();
            deleteTaskDiv(task.id)
            database.deleteTask(task.id)
            modal.close();
        }

        function deleteTaskDiv() {
            let taskDiv = document.querySelector(`[data-task-id="${task.id}"]`);
            taskDiv.remove();
        }

        deleteForm.appendChild(deleteButton)

        formButtons.appendChild(cancelButton);
        formButtons.appendChild(deleteForm);

        modal.appendChild(modalHeader)
        modal.appendChild(formBody)
        modal.appendChild(formButtons)

        body.appendChild(modal)

        return modal
    }

    let createAddTaskModal = () => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'create-task-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Create Task`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)

        let form = Form('add-task')

        modal.appendChild(modalHeader)
        modal.appendChild(form)

        body.appendChild(modal)

        return modal
    }


    let createAddProjectModal = () => {
        let body = document.querySelector('body');

        let modal = document.createElement('dialog');
        modal.classList.add('modal');
        modal.id = 'add-project-modal';

        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Add Project`;

        let closeButton = getCloseButton();

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)

        let form = Form('add-project');

        modal.appendChild(modalHeader)
        modal.appendChild(form)

        body.appendChild(modal)

        return modal
    }


    //BUTTONS
    function getCancelButton() {
        let cancelButton = document.createElement('button');
        cancelButton.classList.add('close-button');
        cancelButton.classList.add('modal-button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';

        return cancelButton;
    }

    function getDeleteButton() {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('modal-button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.textContent = 'Delete';

        return deleteButton;
    }

    function getCloseButton() {
        let closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.setAttribute('type', 'button');
        closeButton.textContent = 'close';

        return closeButton;
    }


    return { createEditProjectModal, createEditTaskModal, createDeleteProjectModal, createDeleteTaskModal, createAddProjectModal, createAddTaskModal }
}

export default Modal()



function Form(type, entity) {


    if (type === 'add-project') {
        let addProjectForm = createAddProjectForm();
        return addProjectForm
    } else if (type === 'edit-project') {
        let editProjectForm = createEditProjectForm(entity);
        return editProjectForm
    } else if (type === 'add-task') {
        let addTaskForm = createAddTaskForm();
        return addTaskForm
    } else if (type === 'edit-task') {
        let editTaskForm = createEditTaskForm(entity);
        return editTaskForm
    } else if (type === 'delete-project') {

    } else if (type === 'delete-task') {

    }

    function createAddProjectForm() {
        let form = document.createElement('form');
        form.classList.add('modal-form')
        form.setAttribute('action', '') // add action attribute??

        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let titleDiv = getTitleDiv();
        let descriptionDiv = getDescriptionDiv()

        formBody.appendChild(titleDiv)
        formBody.appendChild(descriptionDiv)

        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');

        let formButtonsDiv = document.createElement('div');

        let cancelButton = getCancelButton();
        let saveButton = getSaveButton();

        formButtonsDiv.appendChild(cancelButton);
        formButtonsDiv.appendChild(saveButton);

        formButtons.appendChild(formButtonsDiv);

        form.appendChild(formBody)
        form.appendChild(formButtons)

        form.addEventListener('submit', addProject)

        function addProject(event) {
            let modal = document.querySelector('dialog');
            event.preventDefault();

            let formData = getFormData(form);
            saveFormData(formData)

            let project = database.getSavedProject()
            appendProjectToSidebar(project)

            modal.close();
        }

        function getFormData(form) {
            let titleInput = form.querySelector('input[name="title"]');
            let descriptionInput = form.querySelector('input[name="description"]');

            const formData = {
                title: titleInput.value,
                description: descriptionInput.value
            };
            return formData
        }

        function saveFormData(formData) {
            /**
             * Save form input into local storage.
             * 
             * @param {Object} formData form input data
             * @param {string} formData.title Title of project
             * @param {string} formData.description Description of project 
             */
            database.createProject(formData)
        }

        return form
    }

    function createEditProjectForm(project) {
        let form = document.createElement('form');
        form.classList.add('modal-form')
        form.setAttribute('action', '') // add action attribute??

        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let titleDiv = getTitleDiv(project);
        let descriptionDiv = getDescriptionDiv(project);

        formBody.appendChild(titleDiv)
        formBody.appendChild(descriptionDiv)

        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');

        let formButtonsDiv = document.createElement('div');

        let cancelButton = getCancelButton();
        let saveButton = getSaveButton();

        formButtonsDiv.appendChild(cancelButton);
        formButtonsDiv.appendChild(saveButton);

        formButtons.appendChild(formButtonsDiv);

        form.appendChild(formBody)
        form.appendChild(formButtons)

        form.addEventListener('submit', saveProject)

        function saveProject(event) {
            event.preventDefault();
            let modal = document.querySelector('dialog');
            let projectTab = document.querySelector(`[data-project-id="${project.id}"]`)
            let projectTitle = projectTab.querySelector('.project-title');
            let contentTitle = document.querySelector('#content-title');

            let formData = getFormData(form);

            database.replaceProject(project.id, formData)
            projectTitle.textContent = `${formData.title}`
            contentTitle.textContent = `${formData.title}`

            modal.close();
        }

        function getFormData(form) {
            let titleInput = form.querySelector('input[name="title"');
            let descriptionInput = form.querySelector('input[name="description"');

            const formData = {
                title: titleInput.value,
                description: descriptionInput.value
            };
            return formData
        }

        return form
    }

    function createAddTaskForm() {
        let form = document.createElement('form');
        form.classList.add('modal-form')
        form.setAttribute('action', '') // add action attribute??

        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let titleDiv = getTitleDiv();
        let descriptionDiv = getDescriptionDiv();
        let dueDateDiv = getDueDateDiv();
        let priorityDiv = getPriorityDiv();

        formBody.appendChild(titleDiv)
        formBody.appendChild(descriptionDiv)
        formBody.appendChild(dueDateDiv)
        formBody.appendChild(priorityDiv)

        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');

        let formButtonsDiv = document.createElement('div');

        let cancelButton = getCancelButton();
        let saveButton = getSaveButton();

        formButtonsDiv.appendChild(cancelButton);
        formButtonsDiv.appendChild(saveButton);

        formButtons.appendChild(formButtonsDiv);

        form.appendChild(formBody)
        form.appendChild(formButtons)

        form.addEventListener('submit', addTask)

        function addTask(event) {
            let modal = document.querySelector('dialog');
            event.preventDefault();

            let formData = getFormData(form);
            saveFormData(formData)

            modal.close();
        }

        function getFormData(form) {
            let formData = new FormData(form)

            const task = {
                title: formData.get('title'),
                description: formData.get('description'),
                date: formData.get('due-date'),
                priority: formData.get('priority'),
            };

            return task
        }

        function saveFormData(formData) {
            /**
             * Save form input into local storage.
             * 
             * @param {Object} formData form input data
             * @param {string} formData.title Task title
             * @param {string} formData.description Task description 
             * @param {string} formData.date Task date
             * @param {boolean} formData.priority Task priority
             */
            let projectTitle = document.querySelector(`#content-title`);
            let projectId = projectTitle.getAttribute('data-project-id');
            let task = database.createTask(formData, projectId)
            appendTaskToTasks(task)
        }

        return form
    }

    function createEditTaskForm(task) {
        let form = document.createElement('form');
        form.classList.add('modal-form')
        form.setAttribute('action', '') // add action attribute??

        let formBody = document.createElement('div');
        formBody.classList.add('form-body');

        let titleDiv = getTitleDiv(task);
        let descriptionDiv = getDescriptionDiv();
        let dueDateDiv = getDueDateDiv(task);
        let priorityDiv = getPriorityDiv();

        formBody.appendChild(titleDiv)
        formBody.appendChild(descriptionDiv)
        formBody.appendChild(dueDateDiv)
        formBody.appendChild(priorityDiv)

        let formButtons = document.createElement('div');
        formButtons.classList.add('form-buttons');

        let formButtonsDiv = document.createElement('div');

        let cancelButton = getCancelButton();
        let saveButton = getSaveButton();

        formButtonsDiv.appendChild(cancelButton);
        formButtonsDiv.appendChild(saveButton);

        formButtons.appendChild(formButtonsDiv);

        form.appendChild(formBody)
        form.appendChild(formButtons)

        form.addEventListener('submit', editTask);

        function editTask(e) {
            e.preventDefault();
            let modal = document.querySelector('dialog');
            let formData = getFormData(form)
            let newTask = database.replaceTask(task.id, formData)
            replaceTaskDiv(newTask);
            modal.close();
        }

        function getFormData(form) {
            let titleInput = form.querySelector('input[name="title"');
            let descriptionInput = form.querySelector('input[name="description"]');
            let dateInput = form.querySelector('input[name="due-date"');
            let priorityInput = form.querySelector('input[name="priority"]');

            let formData = {
                title: titleInput.value,
                description: descriptionInput.value,
                date: dateInput.value,
                priority: priorityInput.value,
            }

            return formData
        }

        function replaceTaskDiv(newTask) {
            let taskDiv = document.querySelector(`[data-task-id="${task.id}"]`);
            let newTaskDiv = createTaskDiv(newTask)
            taskDiv.replaceWith(newTaskDiv)
        }

        return form
    }
    //INPUTS
    function getTitleDiv(entity) {
        let titleDiv = document.createElement('div');
        let titleLabel = getTitleLabel();
        let titleInput = getTitleInput();

        titleDiv.appendChild(titleLabel)
        titleDiv.appendChild(titleInput)

        if (entity) {
            titleInput.setAttribute('value', entity.title);
        }

        return titleDiv
    }

    function getTitleInput() {
        let titleInput = document.createElement('input')
        titleInput.setAttribute('name', 'title')
        titleInput.setAttribute('id', 'title')
        titleInput.setAttribute('type', 'text')

        return titleInput
    }

    function getTitleLabel() {
        let titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title')
        titleLabel.textContent = 'Title'

        return titleLabel
    }

    function getDescriptionDiv(entity) {
        let descriptionDiv = document.createElement('div');
        let descriptionLabel = getDescriptionLabel();
        let descriptionInput = getDescriptionInput();
        if (entity) {
            descriptionInput.setAttribute('value', entity.description)
        }

        descriptionDiv.appendChild(descriptionLabel)
        descriptionDiv.appendChild(descriptionInput)

        return descriptionDiv
    }

    function getDescriptionInput() {
        let descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.setAttribute('id', 'description');
        descriptionInput.setAttribute('type', 'text');

        return descriptionInput
    }

    function getDescriptionLabel() {
        let descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description';

        return descriptionLabel
    }

    function getDueDateDiv(task) {
        let dueDateDiv = document.createElement('div');

        let dueDateLabel = getDueDateLabel();
        let dueDateInput = getDueDateInput();

        if (task) {
            dueDateInput.setAttribute('value', format(new Date(task.date), "yyyy-MM-dd"))

        }

        dueDateDiv.appendChild(dueDateLabel)
        dueDateDiv.appendChild(dueDateInput)

        return dueDateDiv
    }

    function getDueDateLabel() {
        let dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'due-date')
        dueDateLabel.textContent = 'Due Date'

        return dueDateLabel
    }

    function getDueDateInput() {
        let dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('name', 'due-date')
        dueDateInput.setAttribute('id', 'due-date')
        dueDateInput.setAttribute('type', 'date')

        return dueDateInput
    }

    function getPriorityDiv(task) {
        let priorityDiv = document.createElement('div');
        let priorityLabel = getPriorityLabel();
        let priorityInput = getPriorityInput();

        if (task) {
            priorityInput.checked = task.priority
        }

        priorityDiv.appendChild(priorityLabel)
        priorityDiv.appendChild(priorityInput)

        return priorityDiv
    }

    function getPriorityLabel() {
        let priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority')
        priorityLabel.textContent = 'Priority';

        return priorityLabel
    }

    function getPriorityInput() {
        let priorityInput = document.createElement('input');
        priorityInput.setAttribute('name', 'priority')
        priorityInput.setAttribute('id', 'priority')
        priorityInput.setAttribute('type', 'checkbox')
        priorityInput.classList.add('priority')

        return priorityInput
    }

    //BUTTONS
    function getSaveButton() {
        let saveButton = document.createElement('button');
        saveButton.classList.add('modal-button');
        saveButton.classList.add('save-button')
        saveButton.setAttribute('type', 'submit');
        saveButton.textContent = 'Save';

        return saveButton;
    }

    function getCancelButton() {
        let cancelButton = document.createElement('button');
        cancelButton.classList.add('close-button');
        cancelButton.classList.add('modal-button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';

        return cancelButton;
    }

    function getDeleteButton() {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('modal-button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.textContent = 'Delete';

        return deleteButton;
    }
}

// let form = Form('add-project')
// let form = Form('edit-project', project)

