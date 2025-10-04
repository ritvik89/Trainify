const { model } = require("mongoose");
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');

const createDefaultAdmin = async () => {
    try {
        const existingAdmin = await Admin.findOne({ email: 'admingym@gmail.com' });

        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);

            const newAdmin = new Admin({
                email: 'admingym@gmail.com',
                password: hashedPassword
            });

            await newAdmin.save();
            console.log('✅ Default admin created successfully');
        } else {
            console.log('ℹ️ Admin already exists');
        }
    } catch (error) {
        console.error('❌ Error creating admin:', error);
    }
};

module.exports = createDefaultAdmin;
