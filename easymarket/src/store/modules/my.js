import { getCollect, getAddress, addSite, delSite } from '../../services/index'
import { observable, action } from 'mobx'

class My {
    @observable collectData
    @observable addressData
    @observable siteData
    constructor() {
        this.collectData = []
        this.addressData = []
        this.siteData = []
    }
    //收藏栏
    @action async get_Collect(typeId) {
        let res = await getCollect(typeId);
        this.collectData = res.data
    }
    //获取用户地址数据
    @action async get_Address() {
        let res = await getAddress();
        console.log(res)
        this.addressData = res.data
    }
    //新增地址
    @action async set_site(params) {
        await addSite(params);
        this.get_Address()
    }
    //删除数据
    @action async del_Site(id) {
        let res = await delSite(id);
        this.delData = res
        this.get_Address()
    }
    //滑动更改状态
    @action async set_collect(index) {
        let arr = this.collectData.map((item) => {
            item.isClose = false
            return item
        })
        arr[index].isClose = true;
        this.collectData = arr
        console.log(this.collectData, 2)
    }
    @action.bound async delcollect(id) {
        // this.collectData = this.collectData.filter((item) => {
        //     return item.value_id != id
        // })
        let res = this.collectData.findIndex((item) => {
            return item.value_id === id
        })
        console.log(res)

        this.collectData.splice(res, 1)


        this.collectData = this.collectData
    }
}

export default My;