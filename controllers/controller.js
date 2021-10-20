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
    new Project("gaudinickiDE", "The code of the web page you are currently visiting", "https://github.com/GaudiNicki/gaudinickiDE", "/img/projects/gaudinickiDE.PNG", ["NodeJS", "EJS", "Express", "JavaScript", "SCSS", "HTML"]),
    new Project("Facade Pattern Teachlet", "A project to demonstrate the facade design pattern", "https://github.com/GaudiNicki/Facade-Pattern-Teachlet", "/img/projects/facade-pattern-teachlet.PNG", ["Spring", "Vaadin", "Hibernate", "Java", "JUnit", "Mockito"]),
    new Project("Game of Life", "Conway's 'Game of Life' as Java version", "https://github.com/GaudiNicki/Game-of-Life", "/img/projects/game-of-life.png", ["Java", "JUnit", "Mockito"]),
    new Project("Socket IO Chat", "A chatroom application based on Socket IO", "https://github.com/GaudiNicki/Socket-IO-Chat", "/img/projects/socketIOChat.PNG", ["NodeJs", "EJS", "Express", "SocketIO", "JavaScript", "CSS", "HTML"]),
    //new Project("Network Visualization", "Visualization of the Twitter network of the members of the German Bundestag", "https://github.com/GaudiNicki/network-visualization", "/img/projects/network-visualization.PNG", ["NetworkX", "Plotly", "Dash", "Tweepy", "Pandas", "Python"]),
    new Project("Signed Distance Field Renderer", "A custom renderer using 'Signed Distance Fields'", "https://github.com/GaudiNicki/Signed-Distance-Field-Renderer", "/img/projects/signedDistanceFieldRenderer.PNG", ["JavaScript"]),
    new Project("Jetpack Compose Theming System Prototype", "Theming System Prototype for the new Androids UI toolkit 'Jetpack Compose'", "https://github.com/GaudiNicki/Jetpack-Compose-Theming-System-Prototype", "/img/projects/jetpack-compose-theming-system-prototype.jpg", ["Android", "Jetpack Compose"]),
    new Project("WiFi Doorbell", "A doorbell communicating over WiFi with camera, microphone and speaker", "https://github.com/GaudiNicki/wifi-doorbell", "/img/projects/wifi-doorbell.PNG", ["Jitsi", "Python"]),
    new Project("2048", "The game '2048' implemented in Java", "https://github.com/GaudiNicki/2048", "/img/projects/2048.PNG", ["Java"]),
    new Project("Pong", "The game 'Pong' implemented in Java", "https://github.com/GaudiNicki/Pong", "/img/projects/pong.PNG", ["Java"]),
    new Project("TicTacToe", "The game 'TicTacToe' implemented in Java", "https://github.com/GaudiNicki/TicTacToe", "/img/projects/tictactoe.PNG", ["Java"]),
    new Project("Snake", "The game 'Snake' implemented in Java", "https://github.com/GaudiNicki/Snake", "/img/projects/snake.PNG", ["Java"]),
    new Project("PanzerHQ", "A rudimentary 2D shooter in which two tanks compete against each other", "https://github.com/GaudiNicki/PanzerHQ", "/img/projects/panzerHQ.PNG", ["Java"])
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