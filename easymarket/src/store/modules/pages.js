import { observable, action } from "mobx";
import { getPage, getClassifyCommodity } from "../../services/index"
//修饰   操作
export default class Pages {
    @observable pageData;
    constructor() {
        this.pageData = []
        this.channelData = []
    }
    @action async getpages_data() {
        let data = await getPage()
        this.pageData = data.data
    }
    @action async getChannel_data(id) {
        console.log(id)
        let data = await getClassifyCommodity(id)
        console.log(data.data.brotherCategory)
        this.channelData = data.data.brotherCategory
    }

}