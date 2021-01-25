<template>
  <div>
    <Nav />
    <transition
      name="home"
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <Nuxt />
    </transition>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
const { gsap } = require('gsap/dist/gsap')
const { Flip } = require('assets/scripts/Flip')
// const { ScrollTrigger } = require('assets/scripts/ScrollTrigger')
if (process.client) {
  gsap.registerPlugin(Flip)
}
export default {
  components: {
    Nav,
  },
  transition: {
    name: 'home',
    mode: '',
  },
  data() {
    return {
      lastState: null,
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
      console.log(to)
      const elemToFlip = document.querySelector('[data-flip-id]')
      if (elemToFlip) {
        this.lastState = Flip.getState(elemToFlip)
        console.log('flipping', this.lastState)
      }
      // this.elUfoTargetHeader.appendChild(this.elUfowrapper)
      // this.doUfoFlip(this.elUfoTargetNav)
      // this.show = false
    },
  },
  methods: {
    beforeEnter(el) {
      // ...
      console.log('beforeEnter', el)
    },
    // the done callback is optional when
    // used in combination with CSS
    enter(el, done) {
      const elemToFlip = document.querySelector('[data-flip-id]')
      if (elemToFlip && this.lastState) {
        Flip.from(this.lastState, {
          targets: elemToFlip,
          duration: 1,
          absolute: true,
          onComplete: this.$nextTick(function () {
            this.lastState = null
            console.log('Enter', el)
            done()
          }),
          // other Flip properties
        })
      }

      // this.lastState = null
      // ...
      // done()
    },
    afterEnter(el) {
      // ...
      console.log('after enter', el)
    },
    enterCancelled(el) {
      // ...
      console.log('enter cnacellde')
    },

    // --------
    // LEAVING
    // --------

    beforeLeave(el) {
      // ...
      console.log('before Leave')
    },
    // the done callback is optional when
    // used in combination with CSS
    leave(el, done) {
      // ...
      console.log('leave')
      done()
    },
    afterLeave(el) {
      // ...
      console.log('after leave')
    },
    // leaveCancelled only available with v-show
    leaveCancelled(el) {
      // ...
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
