<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <img id="yer" v-show="isYer" src="@/assets/yer.jpg">
        <img id="pizza" v-show="!isYer" src="@/assets/pizza.jpg">
        <div class="background">
            <img class="mx-auto d-block" src="@/assets/02-cat.svg" style="width: 120px">
            <h1>欢迎大家品尝pizza!</h1>
            <h2>这里有你非常喜欢的pizza!</h2>
            <button @click="changerYer" class="btn btn-success">Learn More</button>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              isYer: false
          }
      },
    methods:{
        changerYer(){
            return this.isYer = !this.isYer
        },
      goToMenu(){
        // 跳转到上一次浏览的页面
        // this.$router.go(-1)
        // 指定跳转的地址
        // this.$router.replace('/menu')
        // 指定跳转路由的名字下
        // this.$router.replace({name:'menuLink'})
        // 通过push进行跳转
        // this.$router.push('/menu')
        this.$router.push({ name:'menuLink' })
      }
    }
  }
</script>

<style>
#home{
  /* background: url(../../src/assets/pizza.jpg); */
  height: 85vh;
  padding: 10%;
  color: #fff;
}
#yer,#pizza{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
h1,h2{
  margin: 6%;
}
.background{
  background: rgb(189, 139, 139);
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
