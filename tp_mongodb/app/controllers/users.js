const UserModel = require('../models/user.js');

module.exports = class Users {
    constructor(app, connect) {
        this.app = app;
        this.UserModel = connect.model('User', UserModel);
        this.run();
    }

    run() {
        this.app.post('/users/', (req, res)=> {
            try{
                const userModel = new this.UserModel(req.body);
                userModel.save().then((user) => {
                    res.status(200).json(user || {});
                }).catch((err)=>{
                    console.log(err);   
                    res.status(200).json({});
                });
            } catch(err) {
                console.error(`[ERROR] post:users -> ${err}`);
            
                res.status(400).json({
                    code: 400,
                    message: 'Bad Request'
                });
            }
        });
        this.app.get('/users', (req, res) => { 
                res.send(await user.find())
         } )

        this.app.put('/users/:email', (req, res) => {
            try {
                    this.UserModel.findOneAndUpdate({email: req.params.email}, 
                        req.body, {
                        // On renvoit l'utilisateur avec les nouvelles valeurs
                        new: true,
                        // Applique les règles de validation du modèle (User)
                        runValidators: true
                    }).then((user) => {
                            res.status(200).json(user || 'User not found');
                    }).catch((err)=>{  
                            res.status(422).json(err.message || {});
                    });
            }
            catch (err) {
                console.error(`[ERROR] post:users -> ${err}`);
                res.status(400).json({
                    code: 400,
                    message: `${err}`
                });
            }
        });

        this.app.delete('/users/:email', (req, res) => {
            try {
                    this.UserModel.findOneAndDelete({email: req.params.email}).then((user) => {
                        let message = !user ? 'User not found':'Successful Delete';
                        res.status(200).json(message);
                    }).catch((err)=>{  
                            res.status(422).json(err.message || {});
                    });
            }
            catch (err) {
                console.error(`[ERROR] post:users -> ${err}`);
                res.status(400).json({
                    code: 400,
                    message: `${err}`
                });
            }
        });


    }
}