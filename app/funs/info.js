let db = require('../db')
    , moment = require('moment')
    , base_config = require('../../config/tsconfig.json')
;

module.exports = {
    all: async function (param, res) {
        var limit = base_config.countPerPage, offset = limit * (param.page - 1);

        var condition = {
            'limit': limit,
            'offset': offset,
            "raw": true,
            "order": [["id", "desc"]],
            attributes: ["id", "cate_id", "title", "logo"],
            where: {
                st: 1
            }
        }

        let data = await db.info.findAndCount(condition);

        let result={
            list:data.rows,
            count: data.count,
            current: param.page
        }

        res.render("index", result)
    },
    cate_list: function (cate_id) {

    },
    info_detail: async function (param, res) {
        let option = {
            where: {
                id: param.id
            },
            raw: true
        }
        let data = await db.info.findOne(option);
        data.imglist=data.imglist.split(',');
        res.render("single", data)
    }
}