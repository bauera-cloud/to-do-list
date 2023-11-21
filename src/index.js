function Project(title, description) {
    let project = {};

    project.title = title;
    project.description = description;
    project.tasks = [];

    project.addTask = (task) => {
        project.tasks.push(task)
        project.save()
    }

    project.edit = (property, value) => {
        let parsedProject = project.get()
        parsedProject[property] = value;
        localStorage.setItem(project.title, JSON.stringify(parsedProject))
    }

    project.save = () => {
        localStorage.setItem(project.title, JSON.stringify(project))
    }
    project.delete = () => {
        localStorage.removeItem(project.title)
    }

    project.get = () => {
        return JSON.parse(localStorage.getItem(project.title))
    }

    return project
}

function Task(title, description) {
    let task = {};

    task.title = title;
    task.description = description;

    return task
}

//2 default projects with 2 default tasks
let project1 = Project('project 1', 'do stuff')
let task1 = Task('task1', 'task1 description')
project1.addTask(task1)
let task2 = Task('task2', 'task2 description')
project1.addTask(task2)

let project2 = Project('project 2', 'do other stuff')
let task3 = Task('task3', 'task3 description')
project2.addTask(task3)
let task4 = Task('task4', 'task4 description')
project2.addTask(task4)

let project3 = Project('project 3', 'do 3 stuff');
project3.addTask(Task('task5', 'task5 description'))

project1.edit('title', 'BLAH')

/* 
algorithm
function deleteTask
if there's a task in this project with the name/title of this task,
    delete the task from the list of tasks in this project.


function editTask
if there's a task in this project with the name 
*/


