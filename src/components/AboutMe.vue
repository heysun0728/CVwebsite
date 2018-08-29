<template>
  <div class="AboutMe">
  	<div id="scroll_block">
  		<p class="title" id="title">ABOUT ME</p>
  		<div class="block" id="avatar"></div>
  		<description></description>
  		<information></information>
  		<language></language>
  		<skill></skill>
  	</div>
  </div>
</template>
<script>
import description from './AboutMeComponents/description.vue'
import information from './AboutMeComponents/information.vue'
import language from './AboutMeComponents/language.vue'
import skill from './AboutMeComponents/skill.vue'
export default {
  name: 'AboutMe',
  components:{
	  'description':description,
	  'information':information,
	  'language':language,
	  'skill':skill
  }
}
</script>
<style>
.AboutMe #avatar{
	background-image:url("../../static/AboutMe/me.jpg");
	background-size: 550px 550px;
	background-position: center -100px; 
	background-repeat: no-repeat;
	min-height:250px;
}
</style>