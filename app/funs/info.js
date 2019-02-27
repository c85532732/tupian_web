let db=require('../db')
    ,moment=require('moment')
    ,jieba=require('nodejieba')
;

module.exports={
    save_one:async function (param) {
        let tags=[];
        if(param.summary){
            let tag_arr=jieba.extract(param.summary,5);
            for(var i=0;i<tag_arr.length;i++){
                let tmp=tag_arr[i];
                tags.push(tmp.word);
            }
        }

        let option={
            cate_id:param.cate_id,
            title:param.title,
            tags:tags.join(','),
            summary:param.summary,
            logo:param.logo,
            imglist:param.imglist,
            createtime:moment()
        }

        let info=await db.info.create(option);

        return info;
    }
}