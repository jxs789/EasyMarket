import { login } from '../../services/index'
import { observable, action } from 'mobx'
import { setToken } from '../../utils/index'

class Login {
    @observable getLogin
    constructor() {
        this.getLogin = ''
    }
    @action get_login(mobile, password) {
        let obj = { mobile, password }
        login(obj).then(res => {
            if (res.errno === 0) {
                setToken(res.data.sessionKey)
                this.getLogin = res.errno
            } else {
                this.getLogin = res.errno
            }
        })
    }
}

export default Login;