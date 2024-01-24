import database from "./database";
import Modal from './modal'
import { format } from 'date-fns';


//DISPLAY MODALS

let projectAddIcon = document.querySelector('.project-add-icon');
projectAddIcon.addEventListener('click', displayAddProjectModal)


function displayAddProjectModal(event) {
    let modal = Modal.createAddProjectModal()
    modal.showModal(modal)
    onClose(modal, event)
}

function displayAddTaskModal(event) {
    let modal = Modal.createAddTaskModal()
    modal.showModal()
    onClose(modal, event)
}

function displayDeleteProjectModal(event) {
    let projectNode = event.target.parentElement.parentElement;
    let projectID = projectNode.getAttribute('data-project-id');
    let project = database.getProject(projectID)
    let modal = Modal.createDeleteProjectModal(project)
    modal.showModal()
    onClose(modal, event)

    // console.log(projectNode)
    //logic for selecting the delete button, deleting data in database, removing the current tab
}

function displayEditProjectModal(event) {
    let projectID = event.target.parentElement.parentElement.getAttribute('data-project-id');
    console.log(projectID)
    let project = database.getProject(projectID)
    let modal = Modal.createEditProjectModal(project)
    modal.showModal()
    onClose(modal, event)
}

function displayEditTaskModal(event) {
    let taskID = event.target.parentElement.parentElement.getAttribute('data-task-id');
    let task = database.getTask(taskID)
    let modal = Modal.createEditTaskModal(task)
    modal.showModal()
    onClose(modal, event)
}

function displayDeleteTaskModal(event) {
    let taskNode = event.target.parentElement.parentElement;
    let taskID = taskNode.getAttribute('data-task-id');
    let task = database.getTask(taskID)
    let modal = Modal.createDeleteTaskModal(task)
    modal.showModal()
    onClose(modal, event)

    // console.log(projectNode)
    //logic for selecting the delete button, deleting data in database, removing the current tab
}

//MODAL EVENT LISTENERS

function onClose(modal, event) {
    let closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            event.preventDefault()
            modal.close()
            modal.remove()
        })
    })
}

//NOTES: 
//I deleted adding task to tasks.


//check if it needs to add a addTaskIcon only if what I selected was a project



//test createProjectTab, addendProjectToProjects
// appendProjectToProjects()

//I might have to change how addendProjectToProjects works. It may need a button node as a parameter.

//PROJECTS


export function appendProjectToSidebar(project) {
    /**
     * Appends Node button to .projects div
     * 
     * @param {Object} project Project
     * @param {string} project.title Project title
     * @param {string} project.description Project description
     */

    //delete fakeProject once I get displayTasksFromProject() working.
    // let fakeProject = {
    //     id: "lqwrsrpn",
    //     title: "start1",
    //     description: "description1",
    //     tasks: [
    //         {
    //             id: "lqwrsrpo",
    //             projectId: "lqwrsrpn",
    //             title: "completed task",
    //             description: "desc",
    //             date: "2023-12-11T05:00:00.000Z",
    //             completed: true,
    //             priority: false
    //         }
    //     ]
    // }

    let projects = document.querySelector('.projects');
    let newProject = createProjectTab(project)
    projects.appendChild(newProject)
}

function createProjects() {
    let projects = database.getProjects();
    if (projects) {
        projects.forEach(project => appendProjectToSidebar(project))
    }
}

//PROJECT TAB

function createProjectTab(project) {
    /**
     * Returns a button node with the new project id
     * 
     * @param {Object} project Project
     * @param {string} project.title title of project
     * @param {string} project.description description of project
     * @param {string} project.id id of project
     * @param {Array} project.tasks array of Tasks
     * 
     * @return {Node} return button node with project id assigned to data-project-id
     */

    let projectTab = document.createElement('button');
    projectTab.classList.add('project');
    projectTab.classList.add('project-tab'); //old
    projectTab.setAttribute('data-project-id', project.id)

    let projectIcon = createConstructionIcon();
    let projectTitleDiv = document.createElement('div');

    let projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.title;

    projectTitleDiv.appendChild(projectIcon);
    projectTitleDiv.appendChild(projectTitle)

    let projectButtonsDiv = document.createElement('div');

    let projectEditIcon = createEditProjectIcon();
    let projectDeleteIcon = createDeleteProjectIcon();

    projectButtonsDiv.appendChild(projectEditIcon);
    projectButtonsDiv.appendChild(projectDeleteIcon);

    projectTab.appendChild(projectTitleDiv)
    projectTab.appendChild(projectButtonsDiv)

    projectTab.addEventListener('click', () => {
        displayProjectContent(project.id)
    })

    return projectTab
}

export function displayProjectContent(projectId) {
    let project = database.getProject(projectId);

    displayProjectHeader(project)
    displayProjectTasksHeader()
    displayProjectTasks(project)
}

function displayProjectHeader(project) {
    let mainContent = document.querySelector('.main-content');
    let oldProjectHeader = document.querySelector('.content-header');
    let newProjectHeader = getProjectHeader(project);
    mainContent.replaceChild(newProjectHeader, oldProjectHeader);
}

function getProjectHeader(project) {
    let projectHeaderDiv = document.createElement('div');
    projectHeaderDiv.classList.add('content-header');

    let projectHeader = document.createElement('h2');
    projectHeader.id = "content-title";
    projectHeader.textContent = project.title;
    projectHeader.setAttribute('data-project-id', project.id)

    let constructionIcon = createConstructionIcon();
    constructionIcon.classList.replace('md-18', 'md-36')

    projectHeaderDiv.appendChild(constructionIcon)
    projectHeaderDiv.appendChild(projectHeader)

    return projectHeaderDiv
}

function displayProjectTasksHeader() {
    let mainContent = document.querySelector('.main-content');
    let oldTasksHeader = document.querySelector('.tasks-header');
    let newTasksHeader = getProjectTasksHeader();
    mainContent.replaceChild(newTasksHeader, oldTasksHeader)
}

function getProjectTasksHeader() {
    let tasksHeader = document.createElement('div');
    tasksHeader.classList.add('tasks-header');

    let tasksHead = document.createElement('div')
    tasksHead.textContent = "Tasks";

    let addTaskIcon = createAddTaskIcon()

    tasksHeader.appendChild(tasksHead);
    tasksHeader.appendChild(addTaskIcon); //1st or 2nd to append?

    return tasksHeader
}

function displayProjectTasks(project) {
    let tasks = document.querySelector('.tasks');
    let newTasks = getProjectTasks(project); //array of divs
    tasks.replaceChildren(...newTasks)
}

function getProjectTasks(project) {
    let tasks = [];

    database.getProjectTasks(project.id).forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks
}

//projectTab.addEventListener('click', displayProjectContent)


//CREATE ICONS

function createAddTaskIcon() {
    let addTaskIcon = document.createElement('div');
    addTaskIcon.classList.add('modal');
    addTaskIcon.classList.add('material-icons');
    addTaskIcon.classList.add('md-24');
    addTaskIcon.id = 'task-add';
    addTaskIcon.textContent = 'add_circle'

    addTaskIcon.addEventListener('click', displayAddTaskModal)

    return addTaskIcon
}

function createConstructionIcon() {
    let projectIcon = document.createElement('div');
    projectIcon.classList.add('project-icon');
    projectIcon.classList.add('material-icons');
    projectIcon.classList.add('md-18');
    projectIcon.textContent = 'construction'

    return projectIcon
}

function createEditTaskIcon() {
    let taskEditButton = document.createElement('div');
    taskEditButton.classList.add('task-edit');
    taskEditButton.classList.add('material-icons');
    taskEditButton.classList.add('md-18');
    taskEditButton.textContent = 'edit' //edit

    taskEditButton.addEventListener('click', displayEditTaskModal)

    return taskEditButton
}

function createDeleteTaskIcon() {
    let taskDeleteButton = document.createElement('div');
    taskDeleteButton.classList.add('task-delete');
    taskDeleteButton.classList.add('material-icons');
    taskDeleteButton.classList.add('md-18');
    taskDeleteButton.textContent = 'delete'; //delete

    taskDeleteButton.addEventListener('click', displayDeleteTaskModal)

    return taskDeleteButton
}

function createEditProjectIcon() {
    let projectEditButton = document.createElement('div');
    projectEditButton.classList.add('project-edit');
    projectEditButton.classList.add('material-icons');
    projectEditButton.classList.add('md-18');
    projectEditButton.textContent = 'edit' //edit

    projectEditButton.addEventListener('click', displayEditProjectModal)

    return projectEditButton
}

function createDeleteProjectIcon() {
    let projectDeleteButton = document.createElement('div');
    projectDeleteButton.classList.add('project-delete');
    projectDeleteButton.classList.add('material-icons');
    projectDeleteButton.classList.add('md-18');
    projectDeleteButton.textContent = 'delete'; //delete

    projectDeleteButton.addEventListener('click', displayDeleteProjectModal)

    return projectDeleteButton
}

function createInfoTaskIcon() {
    let taskInfoButton = document.createElement('div');
    taskInfoButton.classList.add('task-info');
    taskInfoButton.classList.add('material-icons');
    taskInfoButton.classList.add('md-18');
    taskInfoButton.textContent = 'info'; //info

    return taskInfoButton
}




//categoryTab.addEventListener('click', displayCategoryContent)

export function loadDefaultPage() {
    let mainContent = document.querySelector('.main-content');

    let tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks')

    let contentHeader = getCategoryHeader('All');
    let tasksHeader = getCategoryTasksHeader();

    mainContent.appendChild(contentHeader);
    mainContent.appendChild(tasksDiv)
    mainContent.appendChild(tasksHeader)

    createProjects()
    displayCategoryTasks('All')
}

//CATEGORY

//CATEGORY EVENT LISTENER

export function onClickCategoryTab() {
    let categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach((categoryTab) => {
        categoryTab.addEventListener('click', displayCategoryContent)
    })
}


export function displayCategoryContent(event) {
    let category = event === 'All' ? 'All' : event.currentTarget.children[1].textContent

    displayCategoryHeader(category)
    displayCategoryTasksHeader()
    displayCategoryTasks(category)
}

//CATEGORY DOM NODES

function displayCategoryHeader(category) {
    let mainContent = document.querySelector('.main-content');
    let oldCategoryHeader = document.querySelector('.content-header');
    let newCategoryHeader = getCategoryHeader(category);
    mainContent.replaceChild(newCategoryHeader, oldCategoryHeader);
}

function getCategoryHeader(category) {
    let categoryHeaderDiv = document.createElement('div');
    categoryHeaderDiv.classList.add('content-header');

    let categoryHeader = document.createElement('h2');
    categoryHeader.id = "content-title";
    categoryHeader.textContent = category;

    let categoryIcon = createCategoryIcon(category); //may change

    categoryHeaderDiv.appendChild(categoryIcon)
    categoryHeaderDiv.appendChild(categoryHeader)

    return categoryHeaderDiv
}

function createCategoryIcon(category) {
    let categoryIcon = document.createElement('div');
    categoryIcon.classList.add('material-icons')
    categoryIcon.classList.add('md-36');
    categoryIcon.id = "task-category-icon";

    if (category === 'All') {
        categoryIcon.textContent = "calendar_month"
    } else if (category === 'Today') {
        categoryIcon.textContent = "today"
    } else if (category === 'Week') {
        categoryIcon.textContent = "date_range"
    } else if (category === "Important") {
        categoryIcon.textContent = "stars"
    } else if (category === "Completed") {
        categoryIcon.textContent = "verified"
    }

    return categoryIcon
}

function displayCategoryTasksHeader() {
    let mainContent = document.querySelector('.main-content');
    let oldTasksHeader = document.querySelector('.tasks-header');
    let newTasksHeader = getCategoryTasksHeader();
    mainContent.replaceChild(newTasksHeader, oldTasksHeader)
}

function getCategoryTasksHeader() {
    let tasksHeader = document.createElement('div');
    tasksHeader.classList.add('tasks-header');

    let tasksHead = document.createElement('div')
    tasksHead.textContent = "Tasks";

    tasksHeader.appendChild(tasksHead)

    return tasksHeader
}

function displayCategoryTasks(category) {
    let tasks = document.querySelector('.tasks');
    let newTasks = getCategoryTasks(category); //array of divs
    tasks.replaceChildren(...newTasks)
}

function getCategoryTasks(category) {
    let categoryTasks = [];

    if (category === "All") {
        categoryTasks = allTasks();
    } else if (category === "Today") {
        categoryTasks = todaysTasks();
    } else if (category === "Week") {
        categoryTasks = weeksTasks();
    } else if (category === "Important") {
        categoryTasks = importantTasks();
    } else if (category === "Completed") {
        categoryTasks = completedTasks();
    }

    return categoryTasks
}

function allTasks() {
    let tasks = [];

    database.getAllTasks().forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks
}

function todaysTasks() {
    let tasks = [];

    database.getTodaysTasks().forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks

}

function weeksTasks() {
    let tasks = [];

    database.getWeeksTasks().forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks
}

function importantTasks() {
    let tasks = [];

    database.getImportantTasks().forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks
}

function completedTasks() {
    let tasks = [];

    database.getCompletedTasks().forEach(task => {
        tasks.push(createTaskDiv(task))
    })

    return tasks
}


export function createTaskDiv(task) {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.setAttribute('data-task-id', task.id)

    let titleDiv = document.createElement('div');

    let checkboxButton = document.createElement('div');
    checkboxButton.classList.add('task-checkbox');
    checkboxButton.classList.add('material-icons');
    checkboxButton.classList.add('md-18');
    if (task.completed) {
        checkboxButton.textContent = 'radio_button_checked'
    } else if (!task.completed) {
        checkboxButton.textContent = 'radio_button_unchecked'; //radio_button_unchecked
    }

    checkboxButton.addEventListener('click', checkBox)

    function checkBox() {
        task.completed = !task.completed
        if (task.completed) {
            checkboxButton.textContent = 'radio_button_checked'
        } else if (!task.completed) {
            checkboxButton.textContent = 'radio_button_unchecked'; //radio_button_unchecked
        }
        database.replaceTask(task.id, task)
    }

    let title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = task.title;

    titleDiv.appendChild(checkboxButton)
    titleDiv.appendChild(title)

    let buttonsDiv = document.createElement('div');

    // parse a date in yyyy-mm-dd format
    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    }

    // console.log(task.date instanceof Date)
    let taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = format(new Date(task.date), "yyyy-MM-dd");

    let taskEditButton = createEditTaskIcon();
    let taskDeleteButton = createDeleteTaskIcon();
    let taskInfoButton = createInfoTaskIcon();

    buttonsDiv.appendChild(taskDate)
    buttonsDiv.appendChild(taskEditButton)
    buttonsDiv.appendChild(taskDeleteButton);
    buttonsDiv.appendChild(taskInfoButton);

    taskDiv.appendChild(titleDiv)
    taskDiv.appendChild(buttonsDiv)

    return taskDiv
}

export function appendTaskToTasks(task) {
    let tasks = document.querySelector('.tasks');
    let tasksDiv = createTaskDiv(task);
    tasks.appendChild(tasksDiv);
}