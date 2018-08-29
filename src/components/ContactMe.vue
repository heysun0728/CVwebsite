<template>
  <div class="ContactMe">
    <div id="scroll_block">
  		<p class="title" id="title">CONTACT ME</p>
      <div class="block2">
        <div class="block" id="left"></div>
        <div class="block" id="right"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactMe'
}
</script>
<style>
.ContactMe #scroll_block .block2{
  margin:15px 0;
  
  height:450px;
  box-shadow:4px 4px 40px 0.5px #DCDCDC;
}
.ContactMe #right{
  background-image:url("../../static/ContactMe/whiteblock.jpg");
	background-size: 550px 550px;
}
.ContactMe #left:after{
  content:"";
  display:block;
  background-color:WHITE;
  width:80%;
  height:85%;
  margin:9%;
}
.ContactMe #left{
  background-image:url("../../static/background/background3.jpg");
  background-color:#444444;
	//background-size: 550px 550px;
}
.ContactMe #scroll_block .block{
  margin:0;
  background-color:white;
  border:1px solid #DCDCDC;
  height:100%;
}
@media (min-width: 1000px) {
	.ContactMe #scroll_block .block{
		width:calc(50% - 2px);
	}
}
</style>