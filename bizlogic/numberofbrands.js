var clients = require('../interface/clients');

module.exports = {
    getNumberofBrands: function(req,res){
        clients.findAndCount({
            attributes: ['brandname']
        }).then(result => {
            console.log(result);
            res.send({'status': 200,'result': result});
        }).error( err => {
            console.log(err);
            res.send({'status':440 ,'error':err});
        })
    }
}