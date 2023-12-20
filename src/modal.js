import { format } from 'date-fns';


function Modal() {

    let createEditProjectModal = (project) => {
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


    let createEditTaskModal = (task) => {
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

    let createDeleteProjectModal = (project) => {
        let body = document.querySelector('body');

        let dialog = document.createElement('dialog');
        dialog.classList.add('modal');
        dialog.id = 'delete-project-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Delete Project`;

        let closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.textContent = 'close';

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)


        // MODAL BODY
        let modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        let question = document.createElement('p');
        question.textContent = 'Are you sure?'

        let statement = document.createElement('p');
        statement.textContent = `Project ${project.title} will be gone forever!`

        modalBody.appendChild(question)
        modalBody.appendChild(statement)


        // MODAL BUTTONS
        let modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');


        let cancelButton = document.createElement('button');
        cancelButton.classList.add('close-button');
        cancelButton.classList.add('modal-button');
        cancelButton.textContent = 'Cancel';

        let deleteForm = document.createElement('form');
        deleteForm.setAttribute('action', '');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('modal-button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        deleteForm.appendChild(deleteButton)

        modalButtons.appendChild(cancelButton);
        modalButtons.appendChild(deleteForm);

        dialog.appendChild(modalHeader)
        dialog.appendChild(modalBody)
        dialog.appendChild(modalButtons)

        body.appendChild(dialog)

        return dialog
    }

    let createDeleteTaskModal = (task) => {
        let body = document.querySelector('body');

        let dialog = document.createElement('dialog');
        dialog.classList.add('modal');
        dialog.id = 'delete-task-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Delete Task`;

        let closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.textContent = 'close';

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)


        // MODAL BODY
        let modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        let question = document.createElement('p');
        question.textContent = 'Are you sure?'

        let statement = document.createElement('p');
        statement.textContent = `Task ${task.title} will be gone forever!`

        modalBody.appendChild(question)
        modalBody.appendChild(statement)


        // MODAL BUTTONS
        let modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');


        let cancelButton = document.createElement('button');
        cancelButton.classList.add('close-button');
        cancelButton.classList.add('modal-button');
        cancelButton.textContent = 'Cancel';

        let deleteForm = document.createElement('form');
        deleteForm.setAttribute('action', '');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('modal-button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        deleteForm.appendChild(deleteButton)

        modalButtons.appendChild(cancelButton);
        modalButtons.appendChild(deleteForm);

        dialog.appendChild(modalHeader)
        dialog.appendChild(modalBody)
        dialog.appendChild(modalButtons)

        body.appendChild(dialog)

        return dialog
    }

    let createAddProjectModal = () => {
        let body = document.querySelector('body');

        let dialog = document.createElement('dialog');
        dialog.classList.add('modal');
        dialog.id = 'add-project-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Add Project`;

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

    let createAddTaskModal = () => {
        let body = document.querySelector('body');

        let dialog = document.createElement('dialog');
        dialog.classList.add('modal');
        dialog.id = 'create-task-modal';


        // MODAL HEADER
        let modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header');

        let modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        // !! change (Edit or Add) Project
        modalTitle.textContent = `Create Task`;

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

    return { createEditProjectModal, createEditTaskModal, createDeleteProjectModal, createDeleteTaskModal, createAddProjectModal, createAddTaskModal }
}

export default Modal()
