import { observable, action } from "mobx";
import { getPage, getClassifyCommodity, getGoodList, getBrandDetail, getgoodsDetail, getGoodsrelated, getCarGoodscount, getCommentList, getCartAdd, getCartIndex, getcollectDaddordelete, delCarNum, cartupdate } from "../../services/index"
//修饰   操作
export default class Pages {
    @observable pageData = [];
    @observable channelData = []
    @observable goodlistData = [];
    @observable brandDetail = [];
    @observable goodsDetail = [];
    @observable goodsrelated = [];
    @observable carContnum = [];
    @observable commentListData = [];
    @observable caraddcont = [];
    @observable collect = {}

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
    @action async getGood_data({ categoryId, keyword, page, size }) {
        let data = await getGoodList({ categoryId, keyword, page, size })
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
        this.goodsrelated = data.data.goodsList
    }

    //获取用户购物车商品数量
    @action async getCarGoodscount_data() {
        let data = await getCarGoodscount()
        this.carContnum = data.data.cartTotal.goodsCount
    }

    //根据专题ID或者商品ID获取评论获取相关专题
    @action async getCommentList_data({ valueId, typeId, size, page }) {
        let data = await getCommentList({ valueId, typeId, size, page })
        this.commentListData = data.data.data;
    }

    //添加到购物车
    @action async getCartAdd_data({ goodsId, productId, number, }) {
        await getCartAdd({ goodsId, productId, number, })
    }
    //获取用户购物车数据
    @action async getCartIndex_data() {
        let data = await getCartIndex()
        this.caraddcont = data.data
    }

    //是否添加到收藏栏
    @action async getcollectDaddordelete_data({ typeId, valueId }) {
        let data = await getcollectDaddordelete({ typeId, valueId })
        this.collect = data.data
    }


    //单选
    @action.bound async getIsChecked(id) {
        let inde = this.caraddcont.cartList.findIndex((item) => {
            return item.goods_id === id
        })
        this.caraddcont.cartList[inde].checked = this.caraddcont.cartList[inde].checked === 1 ? 0 : 1
    }

    //全选
    @action.bound async getAllChecked(flag) {
        //  console.log(id, ',,,,,', this.caraddcont)
        this.caraddcont.cartList = this.caraddcont.cartList.map((item) => {
            item.checked = flag
            return item

        })
    }

    //点击编辑到完成视图清楚选中状态
    @action.bound async geteliminate() {
        this.caraddcont.cartList = this.caraddcont.cartList.map((item) => {
            item.checked = 0
            return item
        })

    }

    //商品数加加减减
    @action.bound async getCalculate(id, compute) {
        let inde = this.caraddcont.cartList.findIndex((item) => {
            return item.goods_id === id
        })
        if (this.caraddcont.cartList[inde].number === 1 && compute == -1) {

            alert("该宝贝不能再减了")
        }

        cartupdate({ goodsId: this.caraddcont.cartList[inde].goods_id, id: this.caraddcont.cartList[inde].id, number: this.caraddcont.cartList[inde].number + compute, productId: this.caraddcont.cartList[inde].product_id })
        this.caraddcont.cartList[inde].number += compute
    }

    //删除商品
    @action.bound async delete() {
        this.caraddcont.cartList.map((item, index) => {
            if (item.checked) {
                delCarNum(item.product_id + "")
            }
            return item.checked === 0
        })
        this.caraddcont.cartList = this.caraddcont.cartList.filter((item, index) => {
            return item.checked === 0
        })
    }

}