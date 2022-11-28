<template>
    <div class="row1">
        <div class="subheading">
            <h5>{{content}}</h5>
        </div>
        <div class="line"></div>
        <div class="backlink">
            <router-link to="/">  Back to home</router-link>
        </div>
        
    </div>
</template>

<script>
export default{
    name : 'SubHeading',
    props:{
        content:String
    }
}
</script>

<style>
.row1{
    padding: 20px;
    background-color: rgb(248, 248, 248);
    text-align: left;
}

.line{
    width: 100%;
    height: 1px;
    margin: 10px 0px;
}
.backlink a{
    text-decoration: none;
    font-size: 15px;
    color: teal;
}
h5{
    font-size: 17px;
}
</style>