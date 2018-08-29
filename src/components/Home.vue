<template>
	<div class="home">
		<div id="scroll_block">123</div>
	</div>
</template>
<script>
export default {
	name: 'Home'
}
</script>
<style>
#scroll_block{
	width:100%;
}
#scroll_block .block,
#scroll_block .block2{
	float:left;
	margin:15px 25px 15px 0px;
	height:auto;
	display: inline;
}
#scroll_block .block2{
	width:100%;
}
.title{
	position:relative;
	padding-bottom:15px;
	border-bottom: 1px solid #DCDCDC;
	margin:0px 0px 2% 0px;
}
.title:after{
	content: "";
	position: absolute;
	bottom:-1px;
	left:0;
	width:50px;
	border-bottom: 1px solid #444444;
}
#title{
    font-family: 'Pathway Gothic One', sans-serif;
	font-size:40px;
}

#subtitle{
	display: inline-block;
	font-size:25px;
	font-family: 'Ropa Sans', sans-serif;
}

@media (min-width: 0px) {
	#scroll_block .block{
		width:100%;
	}
}

@media (min-width: 1000px) {
	#scroll_block .block{
		width:45%;
	}
}

.block{
	height:auto;
}

</style>
