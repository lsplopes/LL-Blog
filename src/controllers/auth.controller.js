const authService = require('../services/auth.service');

const login = async (req, res) => {
    const { email, password } = authService.validateBody(req.body);

    const token = await authService.validateLogin({ email, password });

    return res.status(200).json({ token });
};

module.exports = { login };