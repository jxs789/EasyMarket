import Home from '../views/page/home'
import Page from '../views/page/pages'
import Special from '../views/page/special'
import Classify from '../views/page/classify'
import ShoppingCar from '../views/page/shoppingCar'
import My from '../views/page/my'
import Login from '../views/page/login'
import SpecialDetail from '../views/page/special/specialDetail'
import ChannelClassity from '../views/page/pages/channelClassify'
import More from '../views/page/special/more'
import AddMessage from '../views/page/special/addMessage'

const route = [
    {
        path: '/addMessage/:id',
        component: AddMessage,
    },
    {
        path: '/more/:id',
        component: More,
    },
    {
        path: '/specialDetail/:id',
        component: SpecialDetail,
    },
    {
        path: '/channelClassify/:id',
        component: ChannelClassity,
    },
    {
        path: '/login',
        component: Login,
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: '/home/page',
            component: Page,
            LinkName: '首页',
            iconfont: 'iconfont icon-fangzi'
        }, {
            path: '/home/special',
            component: Special,
            LinkName: '专题',
            iconfont: 'iconfont  icon-zhuanti'
        }, {
            path: '/home/classify',
            component: Classify,
            LinkName: '分类',
            iconfont: 'iconfont icon-leimupinleifenleileibie'
        }, {
            path: '/home/shoppingCar',
            component: ShoppingCar,
            LinkName: '购物车',
            iconfont: 'iconfont icon-icon_gouwuchexi'
        }, {
            path: '/home/my',
            component: My,
            LinkName: '我的',
            iconfont: 'iconfont icon-wode'
        }, {
            from: '/home',
            to: '/home/page'
        }]
    }, {
        from: '/',
        to: '/login'
    }]

export default route