<template>
    <div class="header">
        <div class="userInfo">
            <div class="left">
                <span>您好，欢迎来到杂货铺</span>
            </div>
            <div class="right">
                <span class="userName">
                    qiyan93
                </span>
                <span class="logout">
                    退出
                </span>
            </div>
        </div>
        <nav class="navbar-static-top">
            <ul class="nav nav-tabs" style="max-width: 1200px;min-width: 1000px">
                <li role="presentation" class="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    .header{
        display: inline-block;
        width: 100%;
        .userInfo{
            display:inline-block;
            width:100%;
            .left{
                float: left;
            }
            .right{
                float: right;
            }
        }
    }
</style>