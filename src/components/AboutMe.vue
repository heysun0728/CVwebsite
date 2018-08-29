<template>
  <div class="AboutMe">
  	<div id="scroll_block">
  		<p class="title" id="title">ABOUT ME</p>
  		<div class="block" id="avatar"></div>
  		<div class="block" id="description"></div>
  		<div class="block" id="information">
  			<p class="title" id="subtitle">Personal Information</p>
  			<ul><li v-for="item in Informations">
  				<p id="subject">{{item.title}}</p>
  				<p id="content">{{item.content}}</p>
  			</li></ul>
  		</div>
  		<div class="block" id="language">
  			<p class="title" id="subtitle">Programing Languages</p>
  			<div id="lang" v-for="item in Languages">
				<p>{{item.title}}</p>
				<div id="greyBar">				
					<div id="progress" :style="{width:item.percent}"></div>
				</div>
  			</div>
  		</div>
  		<div class="block2" id="skill">
  			<p class="title" id="subtitle">
  			Professional Skill
  			</p>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'AboutMe',
  data(){
  	return{
  		Informations:[
            { title:'Name', content:'Ying-Ran Wu'},
            { title:'Age', content:'21'},
            { title:'Email', content:'heysun0728@gmail.com'},
            { title:'Phone', content:'0905-080791'},
            { title:'Address', content:'Chiayi, Taiwan'}
        ],
        Languages:[
        	{ title:'PHP', percent:'88%'},
        	{ title:'Java', percent:'90%'},
        	{ title:'C/C++', percent:'95%'},
        	{ title:'Golang', percent:'70%'},
        	{ title:'Kotlin', percent:'65%'},
        ],
        others:[
        	{ title:'Html5/Css3', percent:'85%'},
        	{ title:'Javascript/Jquery', percent:'80%'},
        	{ title:'Vue.js', percent:'85%'},
        	{ title:'MySQL/SQL Server', percent:'80%'}
  		],
  		skills:[
  			{ title:'Web Development', percent:'90%'},
  			{ title:'Android Development', percent:'95%'},
  			{ title:'IOT Development', percent:'80%'},
  			{ title:'Creative Design', percent:'85%'}
  		]
  	}
  }
}
</script>
<style>

.AboutMe #avatar{
	background-image:url("../../static/AboutMe/me.jpg");
	background-size: 550px 550px;
	background-position: center -100px; 
	background-repeat: no-repeat;
	height:250px;
}

.AboutMe #description{
	background-color:#444444;
	height:250px;
}

.AboutMe ul{
    padding:0;
    margin:0;
}
.AboutMe li{
	list-style-type: none;
}
#information li{
	margin: 0 0 -15px 0; 
}

.AboutMe p{
	font-family: 'Source Sans Pro', sans-serif;
	font-size:16px;
}

#information li p{
	display:inline-block;
	vertical-align: top; 
}

#information #subject{
	width: 70px;
}

#information #content{
	color:#888888;
}

#language #lang{
	padding:10px 0;
	height:20px;
}
#language #lang p{
	width:55px;
	display:inline;
}
#greyBar{
	float:right;
	margin:5px 0;
	width:calc(100% - 60px);
	background-color:#DCDCDC;
	height:10px;
	border-radius:5px;
}
#progress{
	height:10px;
	background-color:#444444;
	border-radius:5px;
}

#skill{
	
}

</style>