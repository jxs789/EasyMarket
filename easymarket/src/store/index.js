//引入模块
import Login from './modules/login'
import Special from './modules/special'
import Pages from './modules/pages';
import Classify from './modules/classify';

//实例模块
const login = new Login();
const special = new Special();
let pages = new Pages();
let classify = new Classify();

export default {
    login,
    special,
    pages,
    classify
}
