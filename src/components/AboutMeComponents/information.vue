<template>
<div class="block" id="information">
    <p class="title" id="subtitle">Personal Information</p>
    <ul><li v-for="item in Info">
        <p id="subject">{{item.title}}</p>
        <p id="content">{{item.content}}</p>
    </li></ul>
</div>
</template>
<script>
export default {
    name: 'information',
    data(){
        return{
  		    Info:[
                { title:'Name', content:'Cynthia Wu'},
                { title:'Age', content:'21'},
                { title:'Email', content:'heysun0728@gmail.com'},
                { title:'Phone', content:'0905-080791'},
                { title:'Address', content:'Chiayi, Taiwan'}
            ]
        }
    }
}
</script>
<style>

#information li{
	margin: 0 0 -15px 0; 
}

#information li p{
	display:inline-block;
	vertical-align: top; 
}

#information #subject{
	font-family: 'Source Sans Pro', sans-serif;
	width: 70px;
}

</style>
