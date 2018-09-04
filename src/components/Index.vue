<template>
    <div class="index">
      <div id="image"
           :style="{width:isOn?'25%':'15%'}"></div>
      <Menu @changeView="updateView"
            @changeImgSize="updateImgSize"></Menu>
      <component :is="view"></component>
    </div>
</template>
<script>
import Menu from './Menu.vue'
import Home from './Home.vue'
import AboutMe from './AboutMe.vue'
import Experience from './Experience.vue'
import Project from './Project.vue'
import ContactMe from './ContactMe.vue'

export default {
  name: 'Index',
  data(){
  	return{
  		view: "Home",
      isOn:false
  	}
  },
  components:{
    'Menu':Menu,
    'Home':Home,
    'AboutMe': AboutMe,
    'Experience':Experience,
    'Project':Project,
    'ContactMe':ContactMe
  },
  methods:{
    updateView:function(newView){
      this.view = newView;
      console.log(this.view);
    },
    updateImgSize:function(){
      this.isOn=!this.isOn;
    }
  }
}
</script>
<style>
.index{
  position:fixed;
  /*margin: 40px 10%;*/
  width: 100vw;
  height: 100vh;/*calc(100% - 80px);*/
  box-shadow:4px 4px 40px 0.5px #444444;
  overflow:hidden;
  background-color:white;
  display: flex;
  z-index:99;
    display:none;

}
.index #image{
  position:relative;
  background-color:white;
  background-image:url("../../static/background/background3.jpg");
  border-right:1px solid #F5F5F5;
  -webkit-transition: width 2s;
  transition: width 2s;
  display:none;
}
.toggle-leave,
.toggle-enter-to{
	opacity:1;
}
.toggle-leave-active,
.toggle-enter-active{
	transition: opacity .1s;
}
.toggle-leave-to,
.toggle-enter{
	opacity:0;
}

.Home,
.AboutMe,
.Project,
.Experience,
.ContactMe{
  padding:40px 50px;
  position:relative;
  width:calc(100vw - 100px);
  left:0px;
  overflow-y:scroll;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}

@media screen and (max-width: 650px) {
  .index{
    margin:0;
    width: 100%;
    height: 100%;
  } 
  .AboutMe,
  .Resume,
  .Award,
  .ContactMe{
    padding:20px;   
  }
  
}
</style>
