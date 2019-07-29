import loadable from 'react-loadable'
import React, { useEffect } from 'react'
import { Toast } from 'antd-mobile';

function Loading() {
    useEffect(() => {
        Toast.loading('Loading...', 1, () => {
        })
    }, [])
    return <div>

    </div>
}

const Home = loadable({
    loader: () => import("../views/page/home"),
    loading: Loading
})

const Page = loadable({
    loader: () => import("../views/page/pages"),
    loading: Loading
})

const Special = loadable({
    loader: () => import("../views/page/special"),
    loading: Loading
})

const Classify = loadable({
    loader: () => import("../views/page/classify"),
    loading: Loading
})

const ShoppingCar = loadable({
    loader: () => import("../views/page/shoppingCar"),
    loading: Loading
})

const My = loadable({
    loader: () => import("../views/page/my"),
    loading: Loading
})

const Login = loadable({
    loader: () => import("../views/page/login"),
    loading: Loading
})

const SpecialDetail = loadable({
    loader: () => import("../views/page/special/specialDetail"),
    loading: Loading
})

const ChannelClassity = loadable({
    loader: () => import("../views/page/pages/channelClassify"),
    loading: Loading
})

const More = loadable({
    loader: () => import("../views/page/special/more"),
    loading: Loading
})

const AddMessage = loadable({
    loader: () => import("../views/page/special/addMessage"),
    loading: Loading
})

const BrandDetail = loadable({
    loader: () => import("../views/page/pages/brandDetail"),
    loading: Loading
})
const Goods = loadable({
    loader: () => import("../components/goods"),
    loading: Loading
})

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
        path: '/brandDetail/:id',
        component: BrandDetail
    }, {
        path: '/goods/:id',
        component: Goods
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