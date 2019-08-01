import { getClassify, getRight, getSearch, getKeyword, delHistory, getGoodLists } from '../../services/index'
import { observable, action } from 'mobx'
class Classify {
    @observable classifyData = []
    @observable rightData = []
    @observable searchData = []
    @observable keywordData = []
    @observable goodlistData = []

    @action async get_Classify() {
        let res = await getClassify();
        this.classifyData = res.data
    }

    @action async get_Right(id) {
        let res = await getRight(id);
        this.rightData = res.data
    }

    //搜索纪录
    @action async get_Search() {
        let res = await getSearch();
        // console.log(res.data)
        this.searchData = res.data
    }
    //关键字
    @action async get_Keyword(keyword) {
        let res = await getKeyword(keyword);
        this.keywordData = res.data
    }

    //删除历史记录
    @action async del_History() {
        await delHistory();
        // console.log(res)
    }

    //根据分类Id或者制造商Id获取商品
    @action async getGood_data(params) {
        let data = await getGoodLists(params)
        this.goodlistData = data.data.goodsList
    }
}

export default Classify;