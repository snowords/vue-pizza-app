<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <img src="@/assets/05-lion.svg" style="width:50px">
      </a>
      <a href="/" class="navbar-brand">自助点餐系统</a>
      <ul class="navbar-nav">
        <!-- <li><router-link tag="div" to="/" class="nav-link">主页</router-link></li> -->
        <!-- <li><router-link :to="homeLink" class="nav-link">主页</router-link></li> -->
        <li>
          <router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>
        </li>
        <li>
          <router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link>
        </li>
        <li>
          <router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li>
          <router-link :to="{name:'loginLink'}" v-show="!isLogin" class="nav-link">登录</router-link>
        </li>

        <li class="nav-link">{{currentUser}}</li>
        <!-- <li><router-link :to="{name:'loginLink'}" v-show="isLogin" class="nav-link" @click="loginOut">[退出]</router-link></li> -->
        <li>
          <span v-show="isLogin" class="nav-link" @click="loginOut">[退出]</span>
        </li>

        <li>
          <router-link :to="{name:'registerLink'}" v-show="!isLogin" class="nav-link">注册</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  // data(){
  //   return {
  //     homeLink:'/'
  //   }
  // }
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    loginOut() {
      localStorage.removeItem("user");
      this.$store.dispatch("setLogin", false);
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>
