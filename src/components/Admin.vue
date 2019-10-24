<template>
    <h1>Admin Page</h1>  
</template>

<script>
export default {
    data(){
        return{
            name:"Henry"
        }
    },
    // 组件内的守卫
    // beforeRouteEnter: (to,from,next) => {
    //     // alert("Hello" + this.name);
    //     next(vm => {
    //         alert("Hello" + vm.name);
    //     })
    // },
    // beforeRouteLeave: (to,from,next) => {
    //     if(confirm("确认离开吗？")){
    //         next();
    //     }else{
    //         next(false);
    //     }
    // }
}
</script>

<style>

</style>