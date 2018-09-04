<template>
	<div>
        <div class="menu1" 
             :style="{left:isOn?'0px':'-80px'}">
    		<div id="internal">
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
            <div id="external">
                <ul>
                    <li>
                        <a v-for="item in external"
                           :href="item.link"
                           target="_blank">
                            <img :src="imgsrc+item.text+'.png'">
                        </a>
                    </li>
                </ul>
            </div>
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
  data(){
    return{
        imgsrc:'../../static/menu/',
        windowWidth: window.innerWidth,
        isOn: true,
        menuItems:[
            { isActive:true, text:'Home',type:'1', link:'#'},
            { isActive:false, text:'AboutMe',type:'2', link:'#'},
            { isActive:false, text:'Experience',type:'2', link:'#'},
            { isActive:false, text:'Project',type:'2', link:'#'},
            { isActive:false, text:'ContactMe',type:'2', link:'#'}
        ],
        external:[
            { text:'linkedin', link:'https://www.linkedin.com/in/ying-ran-wu-5620a1165/'},
            { text:'github', link:'https://github.com/heysun0728'},
            { text:'wordpress', link:'https://516codinghouse.wordpress.com/'}
        ]
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
    position:relative;
    height: 100%;
    border-right:1px solid #DCDCDC;
    background-color:white;
    z-index:1;
    width:80px;
    overflow:hidden;
}
#internal ul{
    padding: 15px 0;
}
#internal li a{
    margin: 15px 17.5px;
    display:block;
    color: white;
    text-decoration: none;
    width:45px;
    height:45px;
    border-radius:50%;
    background-color: #F5F5F5;
}
#internal li a:hover:not(.active) {
    background-color: #AAAAAA;
    transition: .5s;
}
#internal .active {
    background-color: #444444;
    transition: .4s;
}
#internal img{
    padding:13px;
    width:18px;
    height:17px;
}
#external img{
    margin:7px 15px;
    width:15px;
    height:15px;
}
#external{
    position:absolute;
    bottom:3%;
    left:18px;
    width:80px;
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
    #internal li a{
        background-color:white;
        border:2px solid #DCDCDC;
    }
    #external{
        bottom:8%;
    }
    .index #image{
     display:block;
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
