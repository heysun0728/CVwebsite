<template>
<div class="block" id="language">
    <p class="title" id="subtitle">Programing Languages</p>
    <div id="LangType">
        <p>{{LangType}}</p>
    </div>
    <div id="lang" v-for="item in Languages">
        <p>{{item.title}}</p>
        <div id="greyBar">				
            <div id="progress" :style="{width:item.percent}"></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'language',
    data(){
        return{
            LangType : 'Languages',
            Languages:[
                { title:'PHP', percent:'88%'},
                { title:'Java', percent:'90%'},
                { title:'C/C++', percent:'95%'},
                { title:'Golang', percent:'70%'},
                { title:'Kotlin', percent:'65%'},
            ],
            others:[
                { title:'Html5/Css3', percent:'85%'},
                { title:'JS/Jquery/Vue', percent:'80%'},
                { title:'MySQL/SQLServer', percent:'80%'}
            ]
        }
    }
}
</script>
<style>

#LangType{
	width:100%;
	height:auto;
	overflow: overlay;

}
#LangType p{
	text-align:center;
}
#LangType p:before,
#LangType p:after{
	content:"";
	display:inline-block;
	width:15px;
	height:20px;
	background-color:#444444;
	cursor:pointer;
	margin:5px;
}
#LangType p:before{
	float:left;
	-webkit-clip-path: polygon(100% 0, 0 50%, 100% 100%);
	clip-path: polygon(100% 0, 0 50%, 100% 100%);
}
#LangType p:after{
	float:right;
	-webkit-clip-path: polygon(0 0, 0% 100%, 100% 50%);
	clip-path: polygon(0 0, 0% 100%, 100% 50%);
}


#language #lang{
	padding:10px 0;
	height:10px;
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

</style>