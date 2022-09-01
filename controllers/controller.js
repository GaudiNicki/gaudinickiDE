class Project {
    constructor(name, description, githubLink, imgUrl, technologies) {
        this.name = name;
        this.description = description;
        this.githubLink = githubLink;
        this.imgUrl = imgUrl;
        this.technologies = technologies;
    }
}

let skills = {
    programmingLanguages: [
        { name: 'Java', level: 100 }, 
        { name: 'JavaScript', level: 90 },
        { name: 'SQL', level: 90 }, 
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'Kotlin', level: 80 },
        { name: 'Python', level: 80 }, 
        { name: 'TypeScript', level: 80 }, 
        { name: 'C++', level: 50 }, 
        { name: 'C#', level: 50 }, 
        { name: 'SML', level: 40 },
        { name: 'Dart', level: 40 }, 
        { name: 'Clojure', level: 40 }, 
        { name: 'PHP', level: 40 } 
    ],
    technologiesAndFrameworks: [
        { name: 'GitLab', level: 100 },
        { name: 'GitHub', level: 100 },
        { name: 'Camunda', level: 100 },
        { name: 'Spring Boot', level: 100 },
        { name: 'JPA', level: 100 },
        { name: 'Hibernate', level: 100 },
        { name: 'Vaadin', level: 80 },
        { name: 'NodeJS', level: 80 },
        { name: 'Express', level: 80 },
        { name: 'EJS', level: 80 },
        { name: 'Android SDK', level: 80 },
        { name: 'Jetpack Compose', level: 80 },
        { name: 'Vue.js', level: 80 },
        { name: 'Angular', level: 60 },
        { name: 'Pandas', level: 60 },
        { name: 'Statsmodels', level: 60 },
        { name: 'Amazon AWS Platform', level: 60 },
        
    ]
};

let projects = [
    new Project("gaudinickiDE", "The code of the web page you are currently visiting", "https://github.com/GaudiNicki/gaudinickiDE", "/img/projects/gaudinickiDE.PNG", ["NodeJS", "EJS", "Express", "JavaScript", "SCSS", "HTML"]),
    new Project("Facade Pattern Teachlet", "A project to demonstrate the facade design pattern", "https://github.com/GaudiNicki/Facade-Pattern-Teachlet", "/img/projects/facade-pattern-teachlet.PNG", ["Spring", "Vaadin", "Hibernate", "Java", "JUnit", "Mockito"]),
    new Project("Game of Life", "Conway's 'Game of Life' as Java version", "https://github.com/GaudiNicki/Game-of-Life", "/img/projects/game-of-life.png", ["Java", "JUnit", "Mockito"]),
    new Project("Network Visualization", "Visualization of the Twitter network of the members of the German Bundestag", undefined, "/img/projects/network-visualization.jpeg", ["NetworkX", "Plotly", "Dash", "Tweepy", "Pandas", "Python"]),
    new Project("Signed Distance Field Renderer", "A custom renderer using 'Signed Distance Fields'", "https://github.com/GaudiNicki/Signed-Distance-Field-Renderer", "/img/projects/signedDistanceFieldRenderer.PNG", ["JavaScript"]),
    new Project("Jetpack Compose Theming System Prototype", "A theming system for reusable components in Jetpack Compose", "https://github.com/GaudiNicki/Jetpack-Compose-Theming-System-Prototype", "/img/projects/jetpack-compose-theming-system-prototype.jpg", ["Android", "Jetpack Compose"]),
    new Project("OTTO Payments", "Large-scale process automation project with the Camunda Framework", undefined, "img/projects/otto-payments-logo.png", ["Java", "Spring Boot", "Camunda", "AWS", "Vue.js"])
]

const index = (req, res) => {
    res.render('index', { 
        title: 'Home',
        skills: skills,
        projects: projects
    });
};

const imprint = (req, res) => {
    res.render('imprint', {
        title: 'Imprint'
    });
};

const privacy = (req, res) => {
    res.render('privacy', {
        title: 'Privacy'
    });
};

module.exports = {
    index,
    imprint,
    privacy
};