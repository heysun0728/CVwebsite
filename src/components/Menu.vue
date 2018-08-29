<template>
	<div>
        <div class="menu1" 
             :style="{left:isOn?'0px':'-80px'}">
    		<ul>
    			<li><a v-for="item in menuItems" 
    				   :href="item.link"
    				   :class="{ active:item.isActive }"
                       @mouseover="mouseOver(item)"
                       @mouseleave="mouseLeave(item)">
                       <img :src="imgsrc+item.text+item.type+'.png'"
                            @click="setActive(item)">
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu2">
            <div id="toggle"
              :class="{'on': isOn}"
              @click="toggle()">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Menu1',
  props: ['menuItems'],
  data(){
    return{
        imgsrc:'../../static/menu/',
        windowWidth: window.innerWidth,
        isOn: true
    }
  },
  methods:{
    setActive:function(item){
        this.menuItems.forEach(function(element){
            if(element.isActive==true){
                element.isActive=false;
                element.type="2";
            }
        })
        item.isActive=true;
        item.type="1";
        this.$emit('changeView',item.text);
        //close menu
        if(this.windowWidth<480){
            this.isOn=false;
            this.$emit('changeImgSize');
        }
    },
    mouseOver:function(item){
        if(!item.isActive) item.type='1';
    },
    mouseLeave:function(item){
        if(!item.isActive) item.type='2';
    },
    toggle:function(){
      this.isOn = !this.isOn;
      console.log(this.isOn);
      this.$emit('changeImgSize');
    }
  },
  created(){
    if(window.innerWidth>=480) this.isOn=true;
    else this.isOn=false;
  },
  watch:{
    windowWidth(newWidth, oldWidth) {
        if(newWidth>=480) this.isOn=true;
        else this.isOn=false;
    }
  },
  mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
  }
}
</script>
<style scope>
.menu1{
    height: 100%;
    border-right:1px solid #DCDCDC;
    background-color:white;
    z-index:1;
    width:80px;
    overflow:hidden;
}
.menu1 ul{
    padding:0;
    margin:0;
}
.menu1 li{
    list-style-type: none;
    padding: 15px 0;
}
.menu1 li a{
    margin: 15px 17.5px;
    display:block;
    color: white;
    text-decoration: none;
    width:45px;
    height:45px;
    border-radius:50%;
    background-color: #F5F5F5;
}
.menu1 li a:hover:not(.active) {
    background-color: #AAAAAA;
    transition: .5s;
}
.menu1 .active {
    background-color: #444444;
    transition: .4s;
}
.menu1 img{
    padding:13px;
    width:18px;
    height:17px;
}

@media screen and (max-width: 480px) {
    .menu1{
        position:absolute;
        top:5%;
        background-color:transparent;
        border:none;
        -webkit-transition: left 2s;
        transition: left 2s;
    } 
    .menu1 li a{
        background-color:white;
        border:2px solid #DCDCDC;
    }
}
.menu2{
  position:absolute;
  left:0;
  width:15%;
  padding: 5px 0px;
  display:none;
  z-index:99;
}

@media screen and (max-width: 480px) {
    .menu2{
      display:block;
    } 
}

.menu2 #toggle{
  width: 28px;
  height: 30px;
  margin: 10px auto;
  cursor: pointer;
}

.menu2 #toggle div{
  width: 100%;
  height: 5px;
  background-color: #444444;
  margin: 4px auto;
  transition: all 0.3s;
  border-radius:3px
}

.menu2 #toggle.on .one{
  transform: rotate(45deg)
  translate(5px,5px)
}

.menu2 #toggle.on .two{
  opacity:0
}

.menu2 #toggle.on .three{
  transform:rotate(-45deg)
  translate(7px,-8px)
}
</style>
