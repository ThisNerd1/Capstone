exports.login = (req,res) => {
    const inputUser = {username: req.body.username}
    Account.find(inputUser, (err,user) => {
        if(err) return console.error(err);
        console.log(inputUser)
        console.log(user);
        //console.log(bcrypt.compareSync(req.body.password, user.password))
        console.log(user[0].username);
        if(bcrypt.compareSync(req.body.password, user[0].password))
        {
            currentUser = inputUser;
            req.session.user = {
                isAuthenticated: true,
                username: req.body.username
            }
            avatarLink = user[0].avatarLink
            console.log(avatarLink)
            res.redirect('/home');
        }
        else{
            res.redirect('/');
        }
    })
    //bcrypt.compareSync(req.body.password, database password)
}