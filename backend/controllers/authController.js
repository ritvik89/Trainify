const User = require('../models/User');
const Admin = require('../models/Admin');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const RegistrationForm = async (req, res) => {
    const { name, contact, location, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name, contact, location, email, password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const LoginForm = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        user.isActive = true;
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};


const LogoutUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { isActive: false });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ msg: 'User logged out successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Logout failed' });
  }
};


const AdminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }


        const adminData = {
            _id: admin._id,
            email: admin.email
        };
        console.log(adminData);

        res.status(200).json({
            message: 'Admin login successful',
            admin: adminData
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};



const getTotalMembers = async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.json({ total: count });

    } catch (error) {
        res.status(500).json({ error: 'Error getting total members' });
    }

};

const getActiveMembers = async (req, res) => {
    try {
        const activeUsers = await User.find({ isActive: true }).select('name email location contact');
        console.log("Active users found:", activeUsers);
        res.json({ users: activeUsers });

    } catch (error) {
        res.status(500).json({ error: 'Error getting active members' });
    }
};





module.exports = { RegistrationForm, LoginForm, AdminLogin, LogoutUser, getTotalMembers, getActiveMembers };