import { observable, action } from "mobx";
import { getPage, getClassifyCommodity, getGoodList, getBrandDetail, getgoodsDetail, getGoodsrelated } from "../../services/index"
import { async } from "q";
//修饰   操作
export default class Pages {
    @observable pageData;
    @observable channelData;
    @observable goodlistData;
    @observable brandDetail;
    @observable goodsDetail;
    @observable goodsrelated;
    constructor() {
        this.pageData = []
        this.channelData = []
        this.goodlistData = []
        this.brandDetail = []
        this.goodsDetail = []
        this.goodsrelated = []
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
    //根据制造商ID获取制造商详情
    @action async getBrandDetail_data(id) {
        let data = await getBrandDetail(id)
        this.brandDetail = data.data.brand;
    }
    //获取商品详情
    @action async getGoodsDetail_data(id) {
        let data = await getgoodsDetail(id)
        this.goodsDetail = data.data
    }
    //相关商品
    @action async getGoodsrelated_data(id) {
        let data = await getGoodsrelated(id)
        console.log(data.data.goodsList)
        this.goodsrelated = data.data.goodsList
    }

}