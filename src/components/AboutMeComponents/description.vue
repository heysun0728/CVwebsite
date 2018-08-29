<template>
<div class="block" id="description">
  	<p id="title">{{title}}</p>
	<p v-html="content"></p>  
</div>
</template>
<script>
export default {
    name: 'description',
    data(){
        return{
            title:"Hi! I'm Cynthia.",
            content:"I'm currently a student majoring in Computer Science at National Chung Cheng University. <br/>-<br/> Programming is my life. I like to keep challenging myself as I belive that it's the best way to grow. I also strive to solve tough problems and build best software for people. <br/>-<br/>I am looking for intern or teleworking opportunity now."
        }
    }
}
</script>
<style>
.AboutMe #description{
	min-height:250px;
	height:auto;
}

#description p{
	line-height:24px;
	font-family: 'Assistant', sans-serif;
	font-size:15px;
}
#description #title{
	margin:10px 0;
	font-family: 'Source Sans Pro', sans-serif;
	font-size:28px;
}
</style>