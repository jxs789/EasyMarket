//引入模块
import Login from './modules/login'
import Special from './modules/special'

//实例模块
const login = new Login();
const special = new Special();

export default {
    login,
    special
}