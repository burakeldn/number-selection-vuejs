const app = Vue.createApp({
    template:`

        <h2>Select Numbers</h2>

        <ul>
            <li v-for="n in numbers" class="number" :class="{selected:n.selected}" @click="selectTag(n)">{{n.number}}</li>
        </ul>    
        <div class="container2" >  
            <h3> Your numbers: </h3>
            <ul class="snum">
                <li v-for="s in selectTags">{{s.number}}</li>
            </ul>
        </div>
        `,
    
    data(){
        return{
            numbers:[
                {number:0, selected:false},
                {number:1, selected:false},
                {number:2, selected:false},
                {number:3, selected:false},
                {number:4, selected:false},
                {number:5, selected:true},
                {number:6, selected:false},
                {number:7, selected:false},
                {number:8, selected:false},
                {number:9, selected:false},
                {number:10, selected:true},
                {number:11, selected:true},
                {number:12, selected:true},
                {number:13, selected:true},
                {number:14, selected:true},
                {number:15, selected:true},
                {number:16, selected:true},
                {number:17, selected:true},
                {number:18, selected:true},
                {number:19, selected:true},
                {number:20, selected:true},
                {number:21, selected:true},
                {number:22, selected:true},
                {number:23, selected:true},
                {number:24, selected:true},
                {number:25, selected:true},
                {number:26, selected:true},
                {number:27, selected:true},
                {number:28, selected:true},
                {number:29, selected:true},
                {number:30, selected:true},
                {number:31, selected:true},
                {number:32, selected:true},
                {number:33, selected:true},
                {number:34, selected:true},
                {number:35, selected:true},
                {number:36, selected:true},
                {number:37, selected:true},
                {number:38, selected:true},
                {number:39, selected:true}
            ]
        }
    },

    methods:{
        selectTag(n){
            n.selected=!n.selected
        }
    },

    computed:{
        selectTags(){
            console.log("something is chance!")
            return selecteds=this.numbers.filter(i=>i.selected)
        }
        
    }
})

app.mount('#app')