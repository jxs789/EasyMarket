import { getSpecial, getDetail,getComment } from '../../services/index'
import { observable, action } from 'mobx'

class Special {
    @observable specialData
    @observable detailData
    @observable commentData
    constructor() {
        this.specialData = []
        this.detailData = []
        this.commentData = []
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
    @action get_Comment(valueId,typeId) {
        getComment(valueId,typeId).then(res => {
            console.log(res)
            // this.detailData = res.data
        })
    }
}

export default Special;