/**
 * Created by jack on 17-11-2.
 */
var front= require('./front');
// var ws= require('./ws');
// var image=require("./image");
var utils=require("../app/utils");

module.exports=function (app) {
    //utils.template();

    // app.use(ws);
    // app.use(image);
    app.use(front);
}
