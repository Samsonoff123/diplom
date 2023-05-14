const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    age: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, defaultValue: ""},
    level: {type: DataTypes.STRING},
    progress: {type: DataTypes.STRING, defaultValue: ""},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Descriptions = sequelize.define('descriptions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
    user: {type: DataTypes.JSON}
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    html: {type: DataTypes.JSON, allowNull: true},
    variations: {type: DataTypes.JSON, allowNull: true},
    sliderImg: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true},
    tag: {type: DataTypes.STRING, allowNull: true},
    url: {type: DataTypes.STRING, allowNull: true},
})



module.exports = {
    User,
    Device,
    Descriptions
}



