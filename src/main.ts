import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils';

const app = createApp(App);

// 全局注册图标 
for (let i in Icons) {
    // i 是图标名称 Icons[i] 是图标组件
    // 把所有图标注册组件
    app.component(`lwq-icon-${toLine(i)}`, (Icons as any)[i])
    // console.log((Icons as any)[i])
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
