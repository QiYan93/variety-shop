<template>
    <div class="navbar-fixed-top header">
        <ul class="nav nav-tabs nav-ul">
            <li role="presentation" class="brand"><a href="#">您好，欢迎来到杂货铺</a></li>
            <li role="presentation" :class="[isActive==='dangshan' ? 'active' : '']" @click="setActive('dangshan')"><a href="#">砀山站</a></li>
            <li role="presentation" :class="[isActive==='jianshui' ? 'active' : '']" @click="setActive('jianshui')"><a href="#">建水站</a></li>
            <li role="presentation" :class="[isActive==='freedom' ? 'active' : '']" @click="setActive('freedom')"><a href="#">自由站</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'header',
        data(){
            return {
                isActive:'dangshan'
            }
        },
        methods:{
            setActive(type){
                if(type !== this.isActive){
                    this.isActive = type;
                }
            }
        }
    }
</script>
<style lang="scss">
    .header{
        width: 100%;
        background: #045bb2;
        .nav-ul{
            max-width: 1200px;
            min-width: 1000px;
            margin: auto;
            border:none;
            .brand{
                margin-right: 25px;
            }
        }
    }
</style>