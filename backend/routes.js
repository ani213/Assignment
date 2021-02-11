var csvFileDataController =require("./controller/csvFileData");
module.exports=function(router){
    router.route('/:type').get(csvFileDataController.getData);
    router.route('/all/types').get(csvFileDataController.getTypes)
}