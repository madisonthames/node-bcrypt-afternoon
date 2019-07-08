module.exports = {
    usersOnly: (req, res, next) => {
        if (!req.session.user) {
            return res.status(401).send('Please log in or register.')
        }
        next();
    },
    adminsOnly: (req, res, next) => {
        if (!req.session.user.isAdmin) {
          return res.status(403).send('You are not admin');
        }
        next();
    }
}