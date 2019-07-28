import { observable, action } from "mobx";
import { getPage, getClassifyCommodity, getGoodList } from "../../services/index"
//修饰   操作
export default class Pages {
    @observable pageData;
    @observable channelData;
    @observable goodlistData;
    constructor() {
        this.pageData = []
        this.channelData = []
        this.goodlistData = []
    }
    //获取首页数据
    @action async getpages_data() {
        let data = await getPage()
        this.pageData = data.data
    }
    //获取分类ID分类Nav数据
    @action async getChannel_data(id) {
        let data = await getClassifyCommodity(id)
        this.channelData = data.data.brotherCategory
    }
    //根据分类Id或者制造商Id获取商品
    @action async getGood_data({ categoryId, page, size }) {
        //console.log(categoryId, page, size)
        let data = await getGoodList({ categoryId, page, size })
        this.goodlistData = data.data.goodsList
    }

}