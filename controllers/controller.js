const index = (req, res) => {
    res.render('index');
};

const me = (req, res) => {
    res.render('me');
};

const coding = (req, res) => {
    res.render('coding');
};

const youtube = (req, res) => {
    res.render('youtube');
};

const imprint = (req, res) => {
    res.render('imprint');
};

const privacy = (req, res) => {
    res.render('privacy');
};

module.exports = {
    index,
    me,
    coding,
    youtube,
    imprint,
    privacy
};