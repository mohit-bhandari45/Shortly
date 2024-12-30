const User = require("../models/user")

async function signUpHandler(req, res) {
    const { username, email, password } = req.body;

    try {
        const exist = await User.findOne({
            email: email
        })

        if (exist) {
            return res.status(400).json({ msg: "User Already Exist" });
        }

        const user = await User.create({
            username, email, password
        })

        return res.status(201).json({ user })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}

async function loginHandler(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            email: email,
            password: password
        })

        if (!user) {
            return res.status(400).json({ msg: "Incorrect Email or password" });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}

module.exports = { signUpHandler, loginHandler }