class Project {
    constructor(name, description, githubLink, imgUrl) {
        this.name = name;
        this.description = description;
        this.githubLink = githubLink;
        this.imgUrl = imgUrl;
    }
}

let skills = {
    programmingLanguages: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 95 },
        { name: 'Java', level: 95 }, 
        { name: 'Kotlin', level: 90 }, 
        { name: 'SQL', level: 85 }, 
        { name: 'Python', level: 80 }, 
        { name: 'JavaScript', level: 80 }, 
        { name: 'C++', level: 70 }, 
        { name: 'C#', level: 70 }, 
        { name: 'SML', level: 60 }, 
        { name: 'TypeScript', level: 60 }, 
        { name: 'Dart', level: 40 }, 
        { name: 'Clojure', level: 40 }, 
        { name: 'PHP', level: 40 } 
    ],
    technologiesAndFrameworks: [
        { name: 'GitLab', level: 100 },
        { name: 'GitHub', level: 100 },
        { name: 'Vaadin', level: 100 },
        { name: 'Express', level: 90 },
        { name: 'EJS', level: 90 },
        { name: 'Pandas', level: 80 },
        { name: 'Statsmodels', level: 80 },
        { name: 'Spring Boot', level: 80 },
        { name: 'JPA', level: 80 },
        { name: 'Hibernate', level: 80 },
        { name: 'Android', level: 70 },
        { name: 'Jetpack Compose', level: 70 },
        { name: 'NodeJS', level: 60 },
        { name: 'QlikSense', level: 50 },
        { name: 'Angular', level: 40 }
    ]
};

let projects = [
    new Project("gaudinickiDE", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/gaudinickiDE", "/img/projects/placeholder.png"),
    new Project("Facade Pattern Teachlet", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Facade-Pattern-Teachlet", "/img/projects/placeholder.png"),
    new Project("Game of Life", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Game-of-Life", "/img/projects/placeholder.png"),
    new Project("Socket IO Chat", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Socket-IO-Chat", "/img/projects/placeholder.png"),
    new Project("Network Visualization", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/network-visualization", "/img/projects/placeholder.png"),
    new Project("Signed Distance Field Renderer", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Signed-Distance-Field-Renderer", "/img/projects/placeholder.png"),
    new Project("Jetpack Compose Theming System Prototype", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Jetpack-Compose-Theming-System-Prototype", "/img/projects/placeholder.png"),
    new Project("WiFi Doorbell", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/wifi-doorbell", "/img/projects/placeholder.png"),
    new Project("2048", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/2048", "/img/projects/placeholder.png"),
    new Project("Pong", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Pong", "/img/projects/placeholder.png"),
    new Project("TicTacToe", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/TicTacToe", "/img/projects/placeholder.png"),
    new Project("Snake", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/Snake", "/img/projects/placeholder.png"),
    new Project("PanzerHQ", "Lorem ipsum dolor sit amet", "https://github.com/GaudiNicki/PanzerHQ", "/img/projects/placeholder.png")
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