import { getClassify,getRight} from '../../services/index'
import { observable, action } from 'mobx'

class Classify {
    @observable classifyData
    @observable rightData
    constructor() {
        this.classifyData = []
        this.rightData = []
    }
    @action async get_Classify() {
        let res = await getClassify();
        this.classifyData = res.data
    }

    @action async get_Right(id) {
        let res = await getRight(id);
        this.rightData = res.data
    }
}

export default Classify;