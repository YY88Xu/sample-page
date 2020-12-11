import Vue from 'vue';
import SamplePage from './components/SamplePage.vue';

let app = new Vue({
    el: '.app',
    components: {
        SamplePage
    },
    data: {
        name: 'TypeScript and Vue2'
    },
    methods: {
        getPage(val: number){
            console.log(val)
        }
    },
    template: `<div style="width: 400px;"><SamplePage @changePage="getPage"></SamplePage></div>`
})