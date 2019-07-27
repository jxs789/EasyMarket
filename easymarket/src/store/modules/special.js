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
    @action get_special() {
        getSpecial().then(res => {
            this.specialData = res.data.data
        })
    }
    //专题详情
    @action get_Detail(id) {
        getDetail(id).then(res => {
            this.detailData = res.data
        })
    }
    //专题详情评论
    @action get_Comment(valueId, typeId, page, size) {
        getComment(valueId, typeId, page, size).then(res => {
            console.log(res)
            this.commentData = res.data.data
        })
    }
    //相关专题
    @action get_Related(id) {
        getRelated(id).then(res => {
            // console.log(res)
            this.relatedData = res.data
        })
    }
    @action add_Message(obj) {
        // console.log(obj)
        addMessage({obj}).then(res => {
            console.log(res)
        })
    }
}

export default Special;