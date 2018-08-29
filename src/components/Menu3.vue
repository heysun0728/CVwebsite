<template>
<div class="Menu3">
	<button @click="show=!show">click</button>
	<transition name="blockshow">
	<div id="color" v-show="show"></div>
	</transition>

	<button class="button">
		<span>hover</span>
	</button>

</div>
</template>
<script>
export default {
	name: 'Menu3',
  	props:['menuItems'],
  	data(){
  		return{
  			show:false
  		}
  	},
	methods:{
		sayHi:function(name){
			this.$emit('sayHi');
		},
		add:function(){
			this.menuItems.push({ isActive:false, text:'Add', link:'#'})
		}
	}
}
</script>

<style>
.Menu3{
	margin:30px;
}
#color{
	width:100px;
	height:100px;
	background-color:#EE7700;
	position:relative;
	left:50px;
	animation-timing-function: ease-out;
}
.blockshow-enter-active {
  animation: go .5s;
}

@keyframes go {
  from { background: #fff; 
  		 left:0px}
  to { background: #EE7700;
	   left:50px;}
}

@keyframes back {
  from { background: #EE7700; }
  to { background: #fff; }
}

#tooltiptext{
	width:200px;
	height:100px;
	line-height:100px;
	text-align:center;
	background-color:black;
	color:white;
	position: relative;
	border-radius:10px;
}

#tooltiptext::after{
	content:"";
	position: absolute;
	margin-left: -15px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent  black transparent;
    top:-30%;
    left:50%;
    z-index:100;
}

#circle{
	width:100px;
	height:100px;
	background: #EE7700;
	border-radius:50%;
}

.button{
	width:200px;
	height:75px;
	border-radius:10px;
	background: #EE7700;
	border:none;
	font-size: 28px;
	color:white;
}
.button span{
	position:relative;
	transition:.5s;
}
.button span:after{
	content:'\00bb';
	position: absolute;
	opacity:0;
	right:-20px;
	top:0;
	transition:.5s;
}
.button:hover span{
	padding-right: 25px;
}
.button:hover span:after{
	opacity:1;
	right:0;
}
</style>