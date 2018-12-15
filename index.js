var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'text 1' }, 
            { text: 'text 2' }, 
            { text: 'text 3' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'        
    },
    methods: {
        reverseMsg: function () {
            this.message = this.message.split('').reverse().join('');
        }
    } 
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '123'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '肉类' }
        ]
    }
});

var data = {a: 1};
var vm = new Vue({
    data: data
});
console.log(data.a === vm.a);