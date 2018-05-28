var clients = require('../interface/clients');

module.exports = {
    getABrandByName: function(req, res){
        clients.findOne({
             where: {
                 brandname: req.params.name
             },
            attributes: ['brandname', 'email', 'logo']
        }).then( result => {
            console.log(result);
            res.send(result);
        }).error( err => {
            console.log(err);
            res.send(err);
        })
    }
}