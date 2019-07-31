import { getCollect, getAddress, } from '../../services/index'
import { observable, action } from 'mobx'

class My {
    @observable collectData = []
    @observable addressData = []
    //收藏栏
    @action  async get_Collect({ typeId, size }) {
        let res = await getCollect({ typeId, size });
        console.log(res.data)
        this.collectData = res.data
    }
    //获取用户地址数据
    @action  async get_Address() {
        let res = await getAddress();
        this.addressData = res.data
    }

}

export default My;