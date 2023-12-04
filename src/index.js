import uniqid from 'uniqid';
import { compareAsc, format, isSameWeek, isThisWeek, isToday, parseISO } from 'date-fns';

function Database() {

    const createProject = ({ title, description }) => {
        const id = uniqid();
        let tasks = [];

        const _saveToDatabase = (() => {
            const projects = JSON.parse(localStorage.getItem('projects'))
            projects.push({ id, title, description, tasks })
            localStorage.setItem('projects', JSON.stringify(projects))
        })()
        return { id, title, description, tasks }
    }

    const createTask = ({ title, description, date, completed = false, priority = false }, projectId) => {
        const id = uniqid();
        date = new Date(...dateNumbers(date))

        // //input date string from html date (ex: 2014-24-2). output: [2014, 1, 24]
        function dateNumbers(date) {
            let [yyyy, mm, dd] = date.split('-').map(Number)
            return [yyyy, mm - 1, dd] //mm - 1 because new Date monthIndex argument
        }

        const _saveToDatabase = (() => {
            const projects = JSON.parse(localStorage.getItem('projects'))
            const project = projects.find((project) => project.id === projectId)
            project.tasks.push({ id, projectId, title, description, date, completed, priority })
            localStorage.setItem('projects', JSON.stringify(projects))
        })()
        return { id, projectId, title, description, date, completed, priority }
    }

    const getAllTasks = () => {
        let projects = JSON.parse(localStorage.getItem('projects'));
        let allTasks = projects.map((project) => project.tasks).flat()
        return allTasks
    }

    const getCompletedTasks = () => {
        let allTasks = getAllTasks()
        return allTasks.filter((task) => task.completed)
    }

    const getImportantTasks = () => {
        let allTasks = getAllTasks()
        return allTasks.fil((task) => task.priority)
    }

    const getTodaysTasks = () => {
        let allTasks = getAllTasks()
        return allTasks.filter((task) => isToday(parseISO(task.date)))
    }

    const getWeeksTasks = () => {
        let allTasks = getAllTasks()
        return allTasks.filter((task) => isThisWeek(parseISO(task.date)))
    }

    const _populateStorage = () => {
        localStorage.setItem('projects', JSON.stringify([]))
        const projects = JSON.parse(localStorage.getItem('projects'))
        const project1 = createProject({ title: 'start1', description: 'description1' });
        project1.tasks.push(createTask({ title: 'completed task', description: 'desc', date: '2023-12-11', completed: true }, project1.id));
        const project2 = createProject({ title: 'start2', description: 'description2' });
        project2.tasks.push(createTask({ title: 'priority task', description: 'desc', date: '2023-12-4', priority: true }, project2.id));

        projects.push(project1, project2);
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //if there's no projects in the database, make two default projects
    if (!localStorage.getItem('projects')) {
        _populateStorage();
    }


    return { createProject, createTask, getAllTasks, getCompletedTasks, getImportantTasks, getTodaysTasks, getWeeksTasks }
}

localStorage.clear()
let database = Database();
// database.createProject({ title: 'title', description: 'desc' });
// database.createTask({ title: 'task title 2', description: 'task description 2', completed: true, priority: true }, 'lpo3vuu6')
console.log(database.getWeeksTasks())















































//NOT SURE IF I NEED THIS
// function Project(title, description) {

//     //given an id, property, and value of a project, edit the project
//     project.editProperty = (id, property, value) => {
//         let parsedProject = projects.find((project) => project.id === id)
//         parsedProject[property] = value;
//         localStorage.setItem('projects', JSON.stringify(projects))
//     }


//     //deletes project at index of the projects array
//     project.deleteOne = (id) => {
//         let oldProjectIndex = projects.findIndex((project) => project.id === id);
//         projects.splice(oldProjectIndex, 1)
//         localStorage.setItem('projects', JSON.stringify(projects))
//     }

//     //returns obj with id in the projects array
//     project.findOne = (id) => {
//         return projects.find((project) => project.id === id)
//     }

//     // takes id, replaces obj with the new project
//     project.replaceOne = (id, newProject) => {
//         let oldProjectIndex = projects.findIndex((project) => project.id === id);
//         newProject.id = id;
//         projects[oldProjectIndex] = newProject;
//         localStorage.setItem('projects', JSON.stringify(projects))
//     }

//     return project
// }


//game.playRound()



