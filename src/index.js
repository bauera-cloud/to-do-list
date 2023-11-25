import uniqid from 'uniqid';

function Project(title, description) {
    //2 default projects with 2 default tasks
    if (!localStorage.getItem('projects')) {
        _populateStorage();
    }
    let projects = JSON.parse(localStorage.getItem('projects'))
    let project = {};

    project.id = uniqid();
    project.title = title;
    project.description = description;
    project.tasks = [];

    //given an id, property, and value of a project, edit the project
    project.editProperty = (id, property, value) => {
        let parsedProject = projects.find((project) => project.id === id)
        parsedProject[property] = value;
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    project.addOne = (newProject) => {
        projects.push(newProject)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //deletes project at index of the projects array
    project.deleteOne = (id) => {
        let oldProjectIndex = projects.findIndex((project) => project.id === id);
        projects.splice(oldProjectIndex, 1)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //returns obj with id in the projects array
    project.findOne = (id) => {
        return projects.find((project) => project.id === id)
    }

    // takes id, replaces obj with the new project
    project.replaceOne = (id, newProject) => {
        let oldProjectIndex = projects.findIndex((project) => project.id === id);
        newProject.id = id;
        projects[oldProjectIndex] = newProject;
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //generates the first 2 projects
    function _populateStorage() {
        localStorage.setItem('projects', JSON.stringify([]))
        let projects = JSON.parse(localStorage.getItem('projects'))
        let project1 = Project('project 1', 'do stuff');
        let project2 = Project('project 2', 'do other stuff')
        projects.push(project1, project2);
        localStorage.setItem('projects', JSON.stringify(projects))
    }



    return project
}

let projects = Project();
// for (let i = 0; i < 10; i++) {
//     projects.addOne(Project('title', 'description'))
// }


function Task(title, description) {
    let task = {};

    task.title = title;
    task.description = description;

    return task
}
