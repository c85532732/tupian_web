'use strict';

var Sequelize = require('sequelize');
//const config = require("../../config").db_config;
const config = require("../../config").db_config_local;
var db_model=require("./dbmodel");

var Op = Sequelize.Op;
var operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

var db = {
    sequelize:new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
        pool: {
            max: 20, //default: 5 最大并发连接数，超过连接数的请求将被拒绝 经测试20可支持到100个并发
            min: 0,
            idle: 10000, //默认值：10000 连接闲置（未使用）10秒后，从池中删除连接
            acquire: 30000, //默认值：10000 抛出错误之前，池将尝试获取连接的最长时间（以毫秒为单位）
            evict: 10000, //默认值：10000 驱逐旧的连接的时间间隔（以毫秒为单位）。将其设置为0可禁用此功能。
            handleDisconnects: true, //默认值：true Controls if pool should handle connection disconnect automatically without throwing errors
        },
        operatorsAliases: operatorsAliases,
        //timezone: 'SYSTEM',//使用系统时区
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        },
        timezone: '+08:00',
    })
};

for(var model in db_model){
    db[model] = db.sequelize.import('./dbmodel/'+model+'.js');
}

module.exports = db;