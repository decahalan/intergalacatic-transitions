<template>
  <div
    :class="dark + color"
    class="light-mode bg-white max-w-none min-h-screen w-full overflow-x-hidden relative"
  >
    <Nav />
    <StyleNav @dark="toggleDark" @color="toggleColor" />
    <transition
      name="page"
      mode="out-in"
      @leave="leave"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <Nuxt />
    </transition>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import StyleNav from '~/components/StyleNav.vue'
const { gsap } = require('gsap/dist/gsap')
const { Flip } = require('assets/scripts/Flip')
// const { ScrollTrigger } = require('assets/scripts/ScrollTrigger')
if (process.client) {
  gsap.registerPlugin(Flip)
}
export default {
  components: {
    // Logo,
    Nav,
    StyleNav,
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeroute')
    setTimeout(function () {
      console.log('beforeroute')
      next()
    }, 1000)
  },
  scrollToTop: false,
  data() {
    return {
      lastState: null,
      targetID: null,
      dark: ' dark-mode',
      ufoState: ' dark-mode',
      color: ' theme-blue ',
    }
  },
  watch: {
    /* ufoTarget(value) {
      console.log(`Flipping to to ${value}`)
      // const state = Flip.getState('#ufowrapper')
      // this.elUfoTargetHeader.appendChild(this.elUfowrapper)
      this.doUfoFlip(value)
    }, */
    $route(to, from) {
      // ScrollTrigger.getById('trigger1').kill(true)
      // let elemToFlip = null
      /* switch (from.name) {
        case 'index':
          // from home
          switch (to.name) {
            case 'about':
              // to about
              this.targetID = '#about-thumb'
              elemToFlip = document.querySelector('#about-thumb')
              console.log('from home to about', elemToFlip)
              break
            case 'web-dev':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              this.targetID = '#web-thumb'
              elemToFlip = document.querySelector('#web-thumb')
              console.log(elemToFlip)
              console.log('from home to web', to.name)
              break
            case 'seo':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              this.targetID = '#seo-thumb'
              elemToFlip = document.querySelector('#seo-thumb')
              console.log(elemToFlip)
              console.log('from home to web', to.name)
              break
            case 'analytics':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              this.targetID = '#svg-anal-thumb'
              elemToFlip = document.querySelector('#svg-anal-thumb')
              console.log(elemToFlip)
              console.log('from home to anal', to.name)
              break
            default:
            // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
            // code block
          }
          break
        case 'about':
          // from about
          switch (to.name) {
            case 'index':
              console.log('fuckkkkkk')
              // to about
              elemToFlip = document.querySelector('#about-img')
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
              console.log('from about to home', to.name)
              break
            case 'web-dev':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              // console.log('from home to web', to.name)
              break
            default:
            // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
            // code block
          }
          break
        case 'web-dev':
          // from web-dev
          switch (to.name) {
            case 'index':
              // to about
              elemToFlip = document.querySelector('#web-img')
              console.log('from web to home', to.name)
              break
            case 'about':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              // console.log('from home to web', to.name)
              break
            default:
            // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
            // code block
          }
          break
        case 'seo':
          // from web-dev
          switch (to.name) {
            case 'index':
              // to about
              elemToFlip = document.querySelector('#seo-img')
              console.log('from seo to home', to.name)
              break
            case 'about':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              // console.log('from home to web', to.name)
              break
            default:
            // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
            // code block
          }
          break
        case 'analytics':
          // from web-dev
          switch (to.name) {
            case 'index':
              // to about
              this.targetID = '#anal-btn'
              elemToFlip = document.querySelector('#anal-page')
              console.log('from anal to home', to.name)
              break
            case 'about':
              // to web-dev
              // elemToFlip = document.querySelectorAll('[data-flip-id]')[1]
              // console.log('from home to web', to.name)
              break
            default:
            // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
            // code block
          }
          break
        default:
        // elemToFlip = document.querySelectorAll('[data-flip-id]')[0]
        // code block
      } */
      /* if (elemToFlip) {
        this.lastState = Flip.getState(elemToFlip, {
          props: 'backgroundColor,borderRadius',
        })
        console.log('flipping', elemToFlip)
      }

      /* this.lastState = Flip.getState('#anal-thumb', {
        props: 'backgroundColor,borderRadius',
      }) */
      // console.log('flipping', elemToFlip)
      // this.elUfoTargetHeader.appendChild(this.elUfowrapper)
      // this.doUfoFlip(this.elUfoTargetNav)
      // this.show = false
      if (from.name === 'index') {
        this.lastState = Flip.getState(
          ['.flip-cont-thumb', '.flip-svg-thumb'],
          {
            props: 'backgroundColor',
          }
        )
      } else {
        this.lastState = Flip.getState(['.flip-cont-page', '.flip-svg-page'], {
          props: 'backgroundColor',
        })
        this.lastState = null
      }
      console.log('statetest', this.lastState)
    },
  },
  mounted() {},
  methods: {
    beforeEnter(el) {
      // ...
      console.log('beforeEnter', el)
    },
    // the done callback is optional when
    // used in combination with CSS
    enter(el, done) {
      // this.lastState = null
      // ...
      gsap.set('.fade-in', {
        opacity: 0,
        y: 40,
      })
      let elemToFlip = null
      if (el.id === 'index') {
        console.log('innnnnnnnddexxxxxxx')
        elemToFlip = [
          document.querySelectorAll('.flip-cont-thumb'),
          document.querySelectorAll('.flip-svg-thumb'),
          document.querySelectorAll('.flip-heading-thumb'),
        ]
      } else {
        // elemToFlip = el
        elemToFlip = [
          document.querySelectorAll('.flip-cont-page'),
          document.querySelectorAll('.flip-svg-page'),
          document.querySelectorAll('.flip-heading-page'),
        ]
      }
      // elemToFlip = document.querySelector('#anal-thumb')
      // elemToFlip = document.querySelector('#anal-img')
      if (elemToFlip && this.lastState) {
        Flip.from(this.lastState, {
          targets: elemToFlip,
          // fade: true,
          // absolute: true,
          // scale: true,
          duration: 1,
          onComplete: this.$nextTick(function () {
            this.lastState = null
            console.log('Enter', el)
            gsap.to('.fade-in', {
              opacity: 1,
              y: 0,
              delay: 1,
            })
            /* gsap.to('.image-wrapper', {
              width: '50%',
              // opacity: 1,
              duration: 1,
              delay: 0,
            })
            gsap.to('.text-wrapper', {
              width: '50%',
              duration: 1,
              delay: 2,
            })
            gsap.to('.text-wrapper', {
              opacity: 1,
              duration: 1,
              delay: 2,
              y: 0,
            }) */
            if (document.querySelectorAll('.flip-cont-page')[0]) {
              document
                .querySelectorAll('.flip-cont-page')[0]
                .classList.remove('fixed')
            }
            done()
          }),
          // other Flip properties
        })
      } else {
        done()
      }
    },
    afterEnter(el) {
      // ...
      // console.log('after enter', this.lastState.elementStates)
      // console.log('after enter', el)
    },
    leave(el) {
      // ...
      console.log('enter cnacellde')
    },
    toggleDark(value) {
      this.dark = value
      // console.log(value) // someValue
    },
    toggleColor(value) {
      this.color = ' ' + value
      console.log(value) // someValue
    },
    toggleSpeed(value) {
      this.speed = value
      console.log(value) // someValue
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
