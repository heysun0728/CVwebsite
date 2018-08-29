<template>
<div class="block2" id="skill">
    <p class="title" id="subtitle">Professional Skill</p>
    <div id="skillblock" v-for="item in skills"></div>
</div>
</template>
<script>
export default {
    name: 'skill',
    data(){
        return{
            skills:[
                { title:'Web Development', percent:'90%'},
                { title:'Android Development', percent:'95%'},
                { title:'IOT Development', percent:'80%'},
                { title:'Creative Design', percent:'85%'}
            ]
        }
    }
}
</script>
<style>
#skill #skillblock{
	display:block;
	height:50px;
	width:50px;
	background-color:black;
}
</style>