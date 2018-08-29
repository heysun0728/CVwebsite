<template>
  <div id="app">
    <router-view/>
    <div id="black-block"></div>
    <div id="particles-js"></div>
  </div>
</template>

<script>
import particles from 'particles.js'
export default {
  name: 'App',
  mounted(){
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      particlesJS('particles-js',config)
    }
  }
}

var config={
    'particles': {
      'number': {
        'value': 120,
        'density': {
          'enable': true,
          'value_area': 800
        }
      },
      'color': {
        'value': '#444444'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': 'img/github.svg',
          'width': 20,
          'height': 20
        }
      },
      'opacity': {
        'value': 0.3,
        'random': false,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 5,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 1,
          'size_min': 0.5,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 200,
        'color': '#444444',
        'opacity': 1,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 3,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 800,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 800,
          'size': 80,
          'duration': 2,
          'opacity': 0.8,
          'speed': 3
        },
        'repulse': {
          'distance': 400,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  };

</script>
<style>

html{
  position:fixed;
  height: 100%;
  width:100%;
  margin: 0;
  padding: 0;
}
#app{
  position:absolute;
  height: 100%;
  width: 100%; 
  background-color: #F5F5F5;
}
#particles-js{
	z-index:150;
}
#black-block{
  position:fixed;
  left:0;
  top:50%;
  height: 50%;
  width: 100%;
  background-color: #444444;
  clip-path: polygon(0 0, 100% 80%, 100% 100%, 0% 100%); 
}
canvas {
  display: block;
  vertical-align: bottom;
}

</style>
