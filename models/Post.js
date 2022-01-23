const { Model, DataTypes } = require("sequelize"); //the sequelize model object.
const sequelize = require("../config/connection"); //connection to the db

// define and create our Post model
class Post extends Model {}

//Define the column in the Post model
// create fields/columns for Post model
Post.init( //In the Post.init function we define the Post schema/table. 
  {//here we define all the columns in the post table.
    //id column of integer type, not null, primary key, and auto increment.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //title column of type string  and not null.
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //post_url column of type string, not null, and validation to check for url.
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    //user_id column to reference the id of the user model who created the post
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {//configure the metadata including the naming convention
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
