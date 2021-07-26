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

const index = (req, res) => {
    res.render('index', { 
        title: 'Home',
        skills: skills
    });
};

module.exports = {
    index
};