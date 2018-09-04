<template>
	<full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
            <h3>vue-fullpage.js</h3>
        </div>
        <div class="section">
            <h3>Slide 2</h3>
        </div>
        <div class="section">
            <h3>Section 3</h3>
        </div>
    </full-page>
	<!--<div class="home" id="test">
		<div id="imgblock"
			 v-for="item in theme"
			 v-bind:key="item.id">
			<img :src="imgsrc+item.img">
		</div>
	</div>-->
</template>

<script>

export default {	
	name: 'Home',
	data(){
		return{
			imgsrc:"../../static/Home/",
			theme:[
				{ title:"Cynthia",
				  content:"",
				  img:"1.jpg"},
				{ title:"Self-motivated\nStudent",
				  content:"",
				  img:"2.jpg"}
			],
			options: {
				menu: '#menu',
				anchors: ['page1', 'page2', 'page3'],
				sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
			}
		}
	},
	methods:{
	}
}
</script>
<style>
.home{
	padding:0;
	width:100vw;
	overflow-y:scroll;
}
.home #imgblock{
	width:30%;
	height:100vh;
	overflow:hidden;
}
#imgblock>img{
	height: 100vh;
}
.section{
    position: relative;
    text-align: center;
	width:100vw;
	height:100vh;
}
</style>
