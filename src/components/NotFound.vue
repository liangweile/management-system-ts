<template>
    <div class="notfound">
        <div class="wrapper">
            <div class="big">页面不见了</div>
            <div>首页瞧瞧，点击<router-link to="/">这里</router-link>进入首页</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style>
.notfound {
    width: 100%;
    height:100%;
    background-image: url(../assets/picture/404.jpg),url(../assets/picture/bg.jpg);
    background-position: center center,right top;
    background-repeat:repeat,no-repeat;
    background-size: cover,auto;
}
.notfound .wrapper {
    position: absolute;
    top:60%;
    right:2%;
    color:#fff;
    width: 635px;
    font-size: 19px;
    line-height: 29px;
    -webkit-font-smoothing: antialiased;
    padding: 20px;
    font-family: 'Source Sans Pro', sans-serif;
}
.notfound .wrapper .big {
    font-size: 74px;
    font-weight: 700;
    line-height: 68px;
    margin-bottom: 48px;
}
.notfound .wrapper a {
    color: #ffcc00;
    text-decoration: none;
    font-weight: 700 ;
    cursor: pointer;
}
@media only screen and (min-width:666px){
    .notfound .wrapper {
        left:auto;
        right: 0;
        width: 100px;
        max-width: 450px;
        top:35%;
    }
    .notfound .wrapper .big {
        font-size: 42px;
        line-height: 50px;
        margin-bottom: 15px;
    }
}
</style>