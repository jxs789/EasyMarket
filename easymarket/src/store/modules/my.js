import { getCollect, getAddress, addSite, delSite } from '../../services/index'
import { observable, action } from 'mobx'


class My {
    @observable collectData = []
    @observable addressData = []
    @observable addressData = []
    @observable siteData = []
    //收藏栏
    @action  async get_Collect({ typeId, size }) {
        let res = await getCollect({ typeId, size });
        console.log(res.data)
    }
    //获取用户地址数据
    @action async get_Address() {
        let res = await getAddress();
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
        console.log(this.delData)
        this.get_Address()
    }


}

export default My;