<template>
    <div class="menu2">
      <div id="toggle"
          :class="{'on': isOn}"
          @click="toggle()">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
      </div>
      <transition name="toggle">
      <div id="menublock" v-show="isOn">
          <ul>
              <li>
              <a v-for="item in menuItems"
                      :href="item.link"
                      :key="item.id">
                      {{item.text}}</a>
              </li>
          </ul>
      </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Menu2',
  props: ['menuItems'],
  data () {
    return {
      isOn: false
    }
  },
  methods: {
    toggle: function () {
      this.isOn = !this.isOn
    }
  }
}
</script>

<style>

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

.menu2 #menublock {
  position:fixed;
  left:30%;
  width:40%;
  height:auto;
  top:30%;
  padding:7% 5%;
  border:1px solid #444444;
}


.menu2 ul,
.menu2 li,
.menu2 li a{
  display: block;
  margin: 0;
  padding: 0;
  height:auto;
}

.menu2 li a {
  padding: 5px;
  color: #444444;
  text-decoration: none;
  transition: all .3s;
  text-align: center;
  font-size:25px;
}

.menu2 li a:hover,
.menu2 li a:focus {
  //background: #444444;
  //color:white;
}



</style>