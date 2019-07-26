import { observable, action } from "mobx";
import { getPage } from "../../services/index"
//修饰   操作
export default class Pages {
    @observable pageData;
    constructor() {
        this.pageData = []
    }
    @action getpages_data() {
        getPage().then(res => {
            console.log(res)
            this.pageData = res.data
        })
    }

}