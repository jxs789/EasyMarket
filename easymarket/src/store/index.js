//引入模块
import Login from './modules/login'
import Special from './modules/special'
import Pages from './modules/pages';

//实例模块
const login = new Login();
const special = new Special();
let pages = new Pages();

export default {
    login,
    special,
    pages
}
