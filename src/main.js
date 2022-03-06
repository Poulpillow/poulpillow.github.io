import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import About from './components/About.vue'
import Audiovisual from './components/Audiovisual.vue'
import Banner from './components/Banner.vue'
import Graphism from './components/Graphism.vue'
import MotionDesign from './components/MotionDesign.vue'
import Other from './components/Other.vue'
import ThreeDimension from './components/ThreeDimension.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Banner },
    { path: '/motiondesign', component: MotionDesign },
    { path: '/graphism', component: Graphism },
    { path: '/audiovisual', component: Audiovisual },
    { path: '/3d', component: ThreeDimension },
    { path: '/other', component: Other }, { path: '/about', component: About }
]

const router = new VueRouter({ routes })

new Vue({ render: h => h(App), router })
    .$mount('#app')