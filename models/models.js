const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Course = sequelize.define('course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    titleCourse: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    description2: {type: DataTypes.TEXT, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    people: {type: DataTypes.INTEGER, allowNull: false},
})

const Tests = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})

const Questions = sequelize.define('questions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING, allowNull: false},
})

const Answers = sequelize.define('answers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING, allowNull: false},
})

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(Course)
Course.belongsTo(User)

Course.hasMany(Tests)
Tests.belongsTo(Course)

User.hasMany(Questions)
Questions.belongsTo(User)

Course.hasMany(Questions)
Questions.belongsTo(Course)

Questions.hasMany(Answers)
Answers.belongsTo(Questions)

User.hasMany(Answers)
Answers.belongsTo(User)

User.hasMany(Comments)
Comments.belongsTo(User)

Course.hasMany(Comments)
Comments.belongsTo(Course)

module.exports = {
    User,
    Course,
}





