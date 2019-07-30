import { observable, action } from "mobx";
import { getPage, getClassifyCommodity, getGoodList, getBrandDetail, getgoodsDetail, getGoodsrelated, getCarGoodscount, getCommentList, getCartAdd, getCartIndex } from "../../services/index"
//修饰   操作
export default class Pages {
    @observable pageData;
    @observable channelData;
    @observable goodlistData;
    @observable brandDetail;
    @observable goodsDetail;
    @observable goodsrelated;
    @observable carContnum;
    @observable commentListData;
    @observable caraddcont;
    constructor() {
        this.pageData = []
        this.channelData = []
        this.goodlistData = []
        this.brandDetail = []
        this.goodsDetail = []
        this.goodsrelated = []
        this.carContnum = []
        this.commentListData = []
        this.caraddcont = []
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
        console.log(data)
        this.goodsDetail = data.data
    }
    //相关商品
    @action async getGoodsrelated_data(id) {
        let data = await getGoodsrelated(id)
        this.goodsrelated = data.data.goodsList
    }
    //获取用户购物车商品数量
    @action async getCarGoodscount_data() {
        let data = await getCarGoodscount()
        // console.log(data)
        this.carContnum = data.data.cartTotal.goodsCount
    }
    //根据专题ID或者商品ID获取评论获取相关专题
    @action async getCommentList_data({ valueId, typeId, size, page }) {
        let data = await getCommentList({ valueId, typeId, size, page })
        // console.log(data);
        this.commentListData = data.data.data;
    }
    //添加到购物车
    @action async getCartAdd_data({ goodsId, productId, number, }) {
        console.log(goodsId, productId, number)
        let data = await getCartAdd({ goodsId, productId, number, })
        console.log(data)
        // this.caraddcont = data.data.data;
    }
    //获取用户购物车数据
    @action async getCartIndex_data() {
        let data = await getCartIndex()
        console.log(data)
        this.caraddcont = data.data
    }
}