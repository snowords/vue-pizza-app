<template>
<div class="row">


    <div class="col-sm-12 col-md-8">
        <table class="table">
            <thead class="thead-dafault">
                <tr>
                    <th>尺寸</th>
                    <th>价格</th>
                    <th>加入</th>
                </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item.name">
                <tr>
                    <td><strong>{{ item.name }}</strong></td>
                </tr>
                <tr v-for="option in item.options" :key="option.size">
                    <td>{{ option.size }}</td>
                    <td>{{ option.price }}</td>
                    <td><button class="btn btn-sm btn-outline-success">+</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm-12 col-md-4">
        <table class="table">
            <thead class="thead-defalult">
                <tr>
                    <th>数量</th>
                    <th>品种</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button class="btn btn-sm">-</button>
                        <span>1</span>
                        <button class="btn btn-sm">+</button>
                    </td>
                    <td>榴莲9寸</td>
                    <td>39</td>
                </tr>
            </tbody>
        </table>
        <p>总价：</p>
        <button class="btn btn-success btn-block">
            提交
        </button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            getMenuItems:{
                item1: {
                    'name': '榴莲Pizza',
                    'description': '这是喜欢吃榴莲的朋友',
                    'options': [
                        {
                            'size': 9,
                            'price': 38
                        },
                        {
                            'size': 12,
                            'price': 48
                        }
                    ]
                },
                item2: {
                    'name': '芝士Pizza',
                    'description': '这是喜欢吃芝士的朋友',
                    'options': [
                        {
                            'size': 9,
                            'price': 38
                        },
                        {
                            'size': 12,
                            'price': 48
                        }
                    ]
                },
                item3: {
                    'name': '芒果Pizza',
                    'description': '这是喜欢吃芒果的朋友',
                    'options': [
                        {
                            'size': 9,
                            'price': 38
                        },
                        {
                            'size': 12,
                            'price': 48
                        }
                    ]
                },
            }
        }
    }
}
</script>

<style>

</style>