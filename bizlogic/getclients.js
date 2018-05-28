var clients = require('../interface/clients');
module.exports = {
    getAllClients: function (req, res) {
        clients.findAll({
            attributes: ['brandname', 'email', 'logo', 'location']
        }).then(result => {
            res.send({'status': 200, 'response': result});
            console.log(result);
        }).error(err => {
            console.log({'status': 400,'Error': err});
            res.send(err);
        });
    }
}