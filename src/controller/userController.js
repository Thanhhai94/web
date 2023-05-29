import UserServices from "../services/UserService";

const getLogin = async (req,res) => {
  console.log(req.session.CIF);
  if(req.session.CIF)
  {
    return res.redirect('/homepage')
  }
  res.render('login', {
    pageTitle: 'LOGIN'
  })
}

const loginPost = async (req, res) => {
  let userName = req.body.username
  let password = req.body.password
  let user = await UserServices.getUser(userName);
  if(user && user.password == password){
    req.session.CIF = user.CIF;
    return res.redirect('/homepage')
  } else {
    res.redirect('/login')
  }
};

const logout = (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/login')
  })
}

module.exports = {
  getLogin: getLogin,
  loginPost: loginPost,
  logout: logout
};
