import { getSpecial, getDetail, getComment, getRelated, addMessage } from '../../services/index'
import { observable, action } from 'mobx'

class Special {
    @observable specialData
    @observable detailData
    @observable commentData
    @observable relatedData
    constructor() {
        this.specialData = []
        this.detailData = []
        this.commentData = []
        this.relatedData = []
    }
    //专题
    @action async get_special() {
        let res = await getSpecial();
        this.specialData = res.data.data

    }
    //专题详情
    @action async get_Detail(id) {
        let res = await getDetail(id)
        this.detailData = res.data
    }
    //专题详情评论
    @action async get_Comment(valueId, typeId, page, size) {
        let res = await getComment(valueId, typeId, page, size)
        this.commentData = res.data.data
    }
    //相关专题
    @action get_Related(id) {
        getRelated(id).then(res => {
            // console.log(res)
            this.relatedData = res.data
        })
    }
    //添加留言
    @action async add_Message(obj) {
        await addMessage({ obj })
    }
}

export default Special;