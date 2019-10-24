<template>
    <div>
        <div class="row mb-5">
            <div class="col-md-4">
                <div class="list-group mb-5">
                <router-link tag="li" class="nav-link" to="/history">
                    <a class="list-group-item list-group-item-action">历史订单</a>
                </router-link>
                <router-link tag="li" class="nav-link" to="/contact">
                    <a class="list-group-item list-group-item-action">联系我们</a>
                </router-link>
                <router-link tag="li" class="nav-link" to="/guide">
                    <a class="list-group-item list-group-item-action">点餐文档</a>
                </router-link>
                <router-link tag="li" class="nav-link" to="/delivery">
                    <a class="list-group-item list-group-item-action">快点信息</a>
                </router-link>
                </div>
            </div>
            <div class="col-md-8">
                <router-view>
                </router-view>
            </div>
        </div>    
    </div>      
</template>

<script>
export default {

}
</script>

<style>

</style>