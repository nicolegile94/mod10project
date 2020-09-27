const createTeam = team => {

    const createManager = manager => {
        return `
    <h2>Manager: ${manager.getName()}</h2>
    <ul>
        <li>ID: ${manager.getID()}</li>
        <li>Email: ${manager.getEmail()}</li>
        <li>Office: ${manager.getofficeNumber()}</li>
    </ul>
    `};

    const createEngineer = engineer => {
    return `
    <h2>Engineer: ${engineer.getName()}</h2>
    <ul>
        <li>ID: ${engineer.getID()}</li>
        <li>Email: ${engineer.getEmail()}</li>
        <li>GitHub: ${engineer.getGithub()}</li>
        </ul> 
    `};

    const createIntern = intern => {
        return `
        <h2>Intern: ${intern.getName()}</h2>
        <ul>
            <li>ID: ${intern.getID()}</li>
            <li>Email: ${intern.getEmail()}</li>
            <li>School: ${intern.getSchool()}</li>
        </ul>
        `    
    };

    const html = [];
    
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"   />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    ${createTeam(team)}
    </body>
    `;
};
