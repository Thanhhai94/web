import db from "../models/index";

const getAllUser = () => {
  return new Promise (async (resolve,reject) => {
    try {
      let users = await db.User.findAll({})
      resolve(users)
    } catch (error) {
      console.log(error)
    }
  })
}

const getUser = (userName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where : {username: userName},
        raw: true,
      });
      if(user) {
        resolve(user)
      } else {
        resolve([])
      };
    } catch (error) {}
  });
};

module.exports = {
  getUser: getUser,
  getAllUser: getAllUser
};
