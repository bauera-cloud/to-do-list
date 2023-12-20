import database from "./database";
import Modal from "./modal";
import './styles/style.css';

let editProjectButtons = document.querySelectorAll('.project-edit');
editProjectButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let projectID = e.target.parentElement.parentElement.getAttribute('data-project-id');
        let project = database.getProject(projectID)
        let modal = Modal.createEditProjectModal(project)
        modal.showModal()

        let closeButtons = document.querySelectorAll('.close-button');
        closeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                e.preventDefault()
                modal.close()
                modal.remove()
            })
        })
    })
})

let editTaskButtons = document.querySelectorAll('.task-edit');
editTaskButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let taskID = e.target.parentElement.parentElement.getAttribute('data-task-id');
        let task = database.getTask(taskID)
        let modal = Modal.createEditTaskModal(task)
        modal.showModal()

        let closeButtons = document.querySelectorAll('.close-button');
        closeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                e.preventDefault()
                modal.close()
                modal.remove()
            })
        })
    })
})

let deleteProjectButtons = document.querySelectorAll('.project-delete');
deleteProjectButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let projectNode = e.target.parentElement.parentElement;
        let projectID = projectNode.getAttribute('data-project-id');
        let project = database.getProject(projectID)
        let modal = Modal.createDeleteProjectModal(project)
        modal.showModal()

        let closeButtons = document.querySelectorAll('.close-button');
        closeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                e.preventDefault()
                modal.close()
                modal.remove()
            })
        })

        // console.log(projectNode)
        //logic for selecting the delete button, deleting data in database, removing the current tab
    })
})

let deleteTaskButtons = document.querySelectorAll('.task-delete');
deleteTaskButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let taskNode = e.target.parentElement.parentElement;
        let taskID = taskNode.getAttribute('data-task-id');
        let task = database.getTask(taskID)
        let modal = Modal.createDeleteTaskModal(task)
        modal.showModal()

        let closeButtons = document.querySelectorAll('.close-button');
        closeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                e.preventDefault()
                modal.close()
                modal.remove()
            })
        })

        // console.log(projectNode)
        //logic for selecting the delete button, deleting data in database, removing the current tab
    })
})

let addProjectButton = document.querySelector('#project-add');
addProjectButton.addEventListener('click', (e) => {
    let modal = Modal.createAddProjectModal()
    modal.showModal()

    let closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            e.preventDefault()
            modal.close()
            modal.remove()
        })
    })
})

let addTaskButton = document.querySelector('#task-add');
addTaskButton.addEventListener('click', (e) => {
    let modal = Modal.createAddTaskModal()
    modal.showModal()

    let closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            e.preventDefault()
            modal.close()
            modal.remove()
        })
    })
})