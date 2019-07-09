<template>
  <div class="content">
      <ul class="left">
        <li class="showye">首页</li>
        <li v-for="(item,index) in list" :key="index" :class="{current:item.flag}"  @click="changeclass(index)">
            <router-link :to="'/info'+item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="right">
        <div class="rightop"></div>
        <div class="rightbtm">
            <router-view></router-view>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {name:"个人信息",path:'/mes',flag:false},
                {name:"晋升途径",path:'/lu',flag:false},
                {name:"技术问题",path:'/problem',flag:false},
                {name:"项目展示",path:'/project',flag:false},
                {name:"个人考勤",path:'/chenck',flag:false},
                {name:"战舰管理",path:'/manage',flag:false},
                {name:"战舰升级",path:'/create',flag:false},
            ]
        }
    },
    methods:{
        changeclass(index){
            this.list.forEach(el=>{
                el.flag=false
            })
            this.list[index].flag=true
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    width: 1400px;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 40px;
}
.left{
    float: left;
}
ul{
    margin: 0;
    padding: 0;
    width:100px;
    text-align: center;
    list-style: none;
    margin-left: 10px;
    box-shadow: 0px -1px 8px #fff;
    li:first-child{
    width: 100px;
    height: 80px;
    line-height: 80px;
    background-color: aquamarine;
    }
    li{
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #fff;
        a{
            color: aliceblue;
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
.right{
    float: left;
    width: 1280px;
    height: 640px;
    border: 1px solid #fff;
    .rightop{
        width: 100%;
        height: 80px;
        background-color: aquamarine;
    }
    .rightbtm{
        width: 100%;
        height: 560px;
        background-color: #fff;
        text-align: center;
       
    }
}
.current{
     background-color: aqua;
}
h1{
    color: #000;
    line-height: 560px;
}

</style>
