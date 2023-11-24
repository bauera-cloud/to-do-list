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

    // project.edit = (property, value) => {
    //     let parsedProject = project.get()
    //     parsedProject[property] = value;
    //     localStorage.setItem(project.title, JSON.stringify(parsedProject))
    // }

    project.addOne = (newProject) => {
        projects.push(newProject)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //deletes project at index of the projects array
    project.deleteOne = (index) => {
        projects.splice(index, 1)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //returns obj at index in the projects array
    project.findOne = (index) => {
        return projects[index]
    }

    // takes index, replaces obj at index with the new project. resets id
    project.replaceOne = (index, newProject) => {
        projects[index] = newProject
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    //generates the first 2 projects
    function _populateStorage() {
        localStorage.setItem('projects', JSON.stringify([]))
        let projects = JSON.parse(localStorage.getItem('projects'))
        let project1 = Project('project 1', 'do stuff');
        project1.id = uniqid();
        projects.push(project1);
        let project2 = Project('project 2', 'do other stuff')
        project2.id = uniqid();
        projects.push(project2);
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
