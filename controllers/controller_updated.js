const index = (req, res) => {
    res.render('updated/index', { 
        title: 'Home',
        styleFile: 'indexStyles.css'
    });
};

const me = (req, res) => {
    res.render('updated/me', { 
        title: 'Me',
        styleFile: 'meStyles.css' 
    });
};

const coding = (req, res) => {
    res.render('updated/coding', { 
        title: 'Coding',
        styleFile: 'codingStyles.css' 
    });
};

const youtube = (req, res) => {
    res.render('updated/youtube', { 
        title: 'YouTube',
        styleFile: 'youtubeStyles.css' 
    });
};

const imprint = (req, res) => {
    res.render('updated/imprint', { 
        title: 'Impressum',
        styleFile: 'imprintStyles.css' 
    });
};

const privacy = (req, res) => {
    res.render('updated/privacy', { 
        title: 'Datenschutz',
        styleFile: 'privacyStyles.css' 
    });
};

module.exports = {
    index,
    me,
    coding,
    youtube,
    imprint,
    privacy
};