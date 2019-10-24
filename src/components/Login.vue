<template>
    <div class="row mt-3">

        <h1>Login Page</h1>  
        <div class="col-md-12 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <img style="width:70px" src="@/assets/28-dog.svg" alt="dog" class="mx-auto d-block">
                    <img style="width:70px" src="@/assets/02-cat.svg" alt="cat" class="mx-auto d-block">
                    <img style="width:70px" src="@/assets/05-lion.svg" alt="lion" class="mx-auto d-block">
                    <img style="width:70px" src="@/assets/10-giraffe.svg" alt="giraffe" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">
                            登录
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        onSubmit(){
            axios.get('/users.json')
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                // 把数据库中的信息写入数组中
                const users = [];
                for(let key in data ){
                    const user = data[key];
                    // console.log(user);
                    users.push(user)
                }
                console.log(users);
                // 实现过滤
                let result = users.filter((user) => {
                    return user.email === this.email && user.password === this.password
                })

                // console.log(result)
                // 判断比对结果
                if(result != null && result.length > 0 ){
                    console.log("账号密码正确")
                    this.$router.push('/')
                }else{
                    alert("账号或者密码错误")
                }
            })
        }
    }
}
</script>

<style>

</style>