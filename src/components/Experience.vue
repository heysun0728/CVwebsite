<template>
  <div class="Experience">
  	<div id="scroll_block">
  		<p class="title" id="title">EXPERIENCE</p>
  		<div v-for="item in timeLines"
  			 class="block"
			v-bind:key="item.id">
  			<div id="timeLine">
  				<div id="line"></div>
  				<img :src="'../../static/Resume/'+ item.text +'.png'">
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'Resume',
  data(){
  	return{
  		timeLines:[
  			{text:"experience"},
  			{text:"education"}
  		]
  	}
  }
}
</script>
<style>
#experience,
#education{
	position:relative;
	background-color:black;
	display: block;
	height:auto;
	overflow: auto; 
}

#timeLine img{
	position:absolute;
	right:10px;
	top:0;
	width:20px;
	height:20px;
	padding:10px;
	border-radius:50%;
	background-color:#444444;
}
#line{
	position:absolute;
	right:5px;
	margin:15px;
	width:2px;
	height:500px;
	background-color:#DCDCDC;
}


</style>