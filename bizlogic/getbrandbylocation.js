var clients = require('../interface/clients');

module.exports = {
    getByLocation: function(req,res){
        clients.findAll({
            where: {location: req.params.location},
            attributes: ['brandname']
        }).then( result => {
            console.log(result);
            res.send({'status': 200, 'response': result});
        }).error( err=> {
            console.log(err);
            res.send({'status': 404, 'Error': err})
        })
    }
}