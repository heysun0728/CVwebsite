<template>
  <div class="Project">
    <div id="scroll_block">
  		<p class="title" id="title" >PROJECT</p>
      <ul><li v-for="item in list"
              :class="{active:item.isActive}"
              :key="item.id"
              @click="li_Click(item)">
          {{item.title}}
      </li></ul>
      <div id="imgblock">
        <div id="projectItem"
             v-for="item in Design"
             :key="item.id"
             v-show="isProgram">
          <img :src="imgsrc+item.img" id="background">
          <div id="blackblock">
            <p id="title" >{{item.title}}</p>
            <p id="content" >{{item.content}}</p>
          </div>
        </div>
        <div id="projectItem"
             v-for="item in Program"
             :key="item.id"
             v-show="!isProgram">
          <img :src="imgsrc+item.img" id="background">
          <div id="blackblock">
            <p id="title" >{{item.title}}</p>
            <p id="content" >{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Award',
  data(){
    return{
      imgsrc:'./../static/Project/',
      type:"Program",
      isProgram:false,
      list:[
        { title:"Program",isActive:true},
        { title:"Design",isActive:false}
      ],
      Program:[
        { title:"123456789",
          content:"456",
          img:"Program/book.jpg",
          url:""
        },
        { title:"123456789",
          content:"123422343234",
          img:"Program/car.jpg",
          url:""
        },
        { title:"123456789",
          content:"456",
          img:"Program/cloud.jpg",
          url:""
        },
        { title:"123456789",
          content:"456",
          img:"Program/map.jpg",
          url:""
        },
        { title:"123456789",
          content:"456",
          img:"Program/plug.jpg",
          url:""
        }
      ],
      Design:[
        { title:"",
          content:"",
          img:"Design/1.jpg"
        },
        { title:"",
          content:"",
          img:"Design/trian.jpg"
        },
        { title:"",
          content:"",
          img:"Design/cover.jpg"
        },
        { title:"",
          content:"",
          img:"Design/movie.jpg"
        },
        { title:"",
          content:"",
          img:"Design/camp.jpg"
        },
        { title:"",
          content:"",
          img:"Design/singer.jpg"
        },
        { title:"",
          content:"",
          img:"Design/name.jpg"
        },
        { title:"",
          content:"",
          img:"Design/worker.jpg"
        },
        { title:"",
          content:"",
          img:"Design/number.jpg"
        }
      ]
    }
  },
  methods:{
    li_Click:function(item){
      if(item.title!="Program"){
        this.isProgram=true;
        this.list[0].isActive=false;
        this.list[1].isActive=true;
      }
      else{
        this.isProgram=false;
        this.list[0].isActive=true;
        this.list[1].isActive=false;
      }
    }
  }
}
</script>
<style>

/* list */
.Project li{
  font-family: 'Assistant', sans-serif;
  display:inline;
  margin:0px 30px;
  cursor:pointer;
  padding:1.5px 0;
}

.Project ul{
  margin:20px 0;
  text-align:center;
}

.Project .active{
  border-bottom:1px solid #444444;
}

/* block */
.Project #imgblock{
  display:block;
  height:100%;
  width:100%;
}
.Project #projectItem{
  position:relative;
  display:inline-block;
  margin:10px;
}
.Project #projectItem #background{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#dcdcdc;
}

#projectItem #blackblock{
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height: 100%;
  background-color:#444444;
  opacity:0;
  transition:opacity .4s;
  cursor:pointer;
}

#projectItem #blackblock:hover{
  opacity:0.8;
}


#projectItem p{
  position:absolute;
  left:0;
  color:white;
  margin:5% 10%;
}

#projectItem #title{
  font-size:175%;
  padding:2% 0;
  border-bottom:2px solid white;
  top:50%;
}

#projectItem #content{
  top:65%;
  font-size:125%;
}

@media screen and (min-width: 1350px) {
	.Project #projectItem {
		width:20vw;
    height:20vw;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1350px){
	.Project #projectItem {
		width:19vw;
    height:19vw;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px){
  .Project #projectItem {
		width:25vw;
    height:25vw;
	}
}

@media screen and (min-width: 850px) and (max-width: 1000px){
  .Project #projectItem {
		width:37vw;
    height:37vw;
	}
}

@media screen and (min-width: 700px) and (max-width: 850px){
  .Project #projectItem {
		width:30vw;
    height:30vw;
	}
}


@media screen and (max-width: 700px){
  .Project #projectItem {
		width:65vw;
    height:65vw;
  }
  #projectItem #title{
    top:5%;
  }
  #projectItem #content{
    top:35%;
  }
}
</style>