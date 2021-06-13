const index = (req, res) => {
    res.render('index');
};

const me = (req, res) => {
    res.render('me', { title: 'Me' });
};

const coding = (req, res) => {
    res.render('coding', { title: 'Coding' });
};

const youtube = (req, res) => {
    res.render('youtube', { title: 'YouTube' });
};

const imprint = (req, res) => {
    res.render('imprint', { title: 'Impressum' });
};

const privacy = (req, res) => {
    res.render('privacy', { title: 'Datenschutz' });
};

module.exports = {
    index,
    me,
    coding,
    youtube,
    imprint,
    privacy
};