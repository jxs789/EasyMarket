import { getCollect, getAddress } from '../../services/index'
import { observable, action } from 'mobx'

class My {
    @observable collectData = []
    @observable addressData = []

    //收藏栏
    @action  async get_Collect(typeId) {
        let res = await getCollect(typeId);
        // console.log(res)
        this.collectData = res.data
    }
    //获取用户地址数据
    @action  async get_Address() {
        let res = await getAddress();
        console.log(res)
        this.addressData = res.data
    }
}

export default My;