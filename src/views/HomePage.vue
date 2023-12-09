<template>
  <div>
    <TheHeader></TheHeader>
    <section class="main">
      <div id="particles-js">
        <div class="main__info">
            <h1 class="main__info-title">Novikov Nikolay</h1>
            <p class="main__info-descript">Frontend-разработчик из Санкт-Петербурга</p>
        </div>
        
      </div>
    </section>
    <PortfolioBlock></PortfolioBlock>
  </div>
</template>
<script>
import 'particles.js'
import TheHeader from '@/components/TheHeader.vue'
import PortfolioBlock from "@/components/PortfolioBlock.vue"
export default {
  components: { TheHeader, PortfolioBlock },
  name: 'HomePage',
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 110,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                                "enable": true,
                                "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
    }
  }

}
</script>
<style lang="sass">
@import "@/assets/sass/main.sass"
#particles-js 
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
.main
    max-height: 100vh
    height: 100vh
    overflow: hidden
    &__title
        font-size: 80px
    &__info
        position: absolute
        text-align: center
        &-title
            font-size: 80px
        &-descript
            width: 0
            overflow: hidden
            border-right: 2px solid white
            margin: 0 auto
            white-space: nowrap
            animation: typing 2.5s steps(25) forwards, blink 1s infinite

@keyframes typing 
  from
    width: 0
  to 
    width: 342px
@keyframes blink 
    0%, 45% 
        border-color: transparent
    
    50%, 100% 
        border-color: white
  

</style>
