<template>
  <div class="ContactMe">
    <div id="scroll_block">
  		<p class="title" id="title">CONTACT ME</p>
      <div class="block2">
        <div class="block" id="left">
          <div class="block" id="whiteblock">
            <p class="title" id="subtitle">Get in Touch</p>
            <p v-html="content"></p>
            <div id="contactLine" 
                 v-for="item in contact">
                <img :src="imgsrc+item.text+'.png'">
                <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <div class="block" id="right">
          <input type="text" name="name" placeholder="Name">
          <input type="text" name="email" placeholder="Email">
          <textarea name="message" cols="40" rows="5" placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactMe',
  data(){
    return{
      imgsrc:'../../static/ContactMe/',
      contact:[
        {text:"phone",content:"0905-080791"},
        {text:"email",content:"heysun0728@gmail.com"}
      ],
      content:"Please feel free to leave a message to me. I would love to hear from you anytime. Also you can call me or push me a message to my social networks. </br>Thank you"
    }
  }
}
</script>
<style>
.ContactMe #scroll_block .block2{
  margin:15px 0;
  height:550px;
  box-shadow:4px 4px 40px 0.5px #DCDCDC;
}

.ContactMe #right{
  background-image:url("../../static/ContactMe/whiteblock.jpg");
	background-size: 550px 550px;
}

#contactLine{
  margin:10px 0;
  height:auto;
}

#contactLine img,
#contactLine p{
  display:inline-block;
  margin:0px 10px;
}

#contactLine p{
  position:absolute;
}

#contactLine img{
  width:32px;
  height:32px;
}

#right input,
#right textarea{
  float:left;
  padding:15px;
  margin:7% 7% 0px 7%;
  width:75%;
  background-color:#ebeaea;
  border:none;
  font-family: 'Assistant', sans-serif;
  border-radius:5px;
}

#right textarea{
  height:150px;
} 

#right button{
  float:right;
  margin:7% 7% 0px 7%;
  background-color:#444444;
  color:white;
  padding:15px;
  border:none;
  border-radius:5px;
  cursor:pointer;
}

.ContactMe #left #whiteblock{
  content:"";
  display:block;
  position:absolute;
  background-color:WHITE;
  width:70%;
  min-height:70%;
  height:auto;
  margin:9%;
  padding:25px;
}
.ContactMe #left{
  position:relative;
  background-image:url("../../static/background/background3.jpg");
  height:100%;
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