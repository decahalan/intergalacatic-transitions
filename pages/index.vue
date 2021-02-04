<template>
  <div id="index" class="w-full">
    <Heading />
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <Services />
    <div class="h-screen"></div>
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Services from '~/components/Services.vue'
const { gsap } = require('gsap/dist/gsap')
const { Flip } = require('assets/scripts/Flip')
const { ScrollTrigger } = require('assets/scripts/ScrollTrigger')
if (process.client) {
  gsap.registerPlugin(Flip, ScrollTrigger)
}
export default {
  components: {
    Heading,
    Services,
  },
  data() {
    return {
      isHovering: false,
      elUfowrapper: null,
      elUfoTargetHeader: null,
      elUfoTargetNav: null,
      // ufoState: 'hi',
      elGlobalSVGWrapper: null,
      elGlobalHeadingWrapper: null,
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.getElements()
      gsap.set('#ufo-vertical-light', { scaleX: '0', opacity: 0 })
      gsap.set('#ufosvg', { transformPerspective: 1000 })
      gsap.set('#pick-text', {
        transformPerspective: 3000,
        transformOrigin: '100% 0%',
      })
      gsap.set('.control-button', {
        transformPerspective: 2000,
        transformOrigin: '50% 0%',
      })
      // this.initHeadingTL()
      this.startTL()
      // console.log(this.$store.state.services.flipstate)
      /* const elemToFlip = document.querySelector('[data-flip-id]')
      // this.$store.commit('services/update', Flip.getState(elemToFlip))
      if (this.$store.state.services.service) {
        Flip.from(this.$store.state.services.service, {
          targets: elemToFlip,
          duration: 1,
          // other Flip properties
        })
      } */
      // this.lastState = Flip.getState(document.querySelector('[data-flip-id]'))
      // this.$store.dispatch('services/update', this.lastState)
      /* this.$store.commit(
        'services/update',
        Flip.getState(document.querySelector('[data-flip-id]'))
      ) */
      // console.log(Flip.getState(document.querySelector('[data-flip-id]')))
      // console.log(this.$store.state.services.service)
      // this.$store.commit('ufo/update', 'h')
      // this.$store.state.ufo = 'tesfdgdting'
      // console.log(this.$store.state.ufo)
      // this.changeUfoState()
      // this.initHeadingTL()
      // this.initHeadingTL()
      // this.initScrollTriggers()
      // this.initFeatureScrollTrigger()
      // this.moveUfo(this.elUfoTargetHeader)
      // this.moveUfo(this.elUfoTargetHeader)
    })
  },
  methods: {
    getElements() {
      this.elSectionHeading = document.querySelector('#section-heading')
      this.elUfowrapper = document.querySelector('#ufowrapper')
      this.elVerticalLight = document.querySelector('#ufo-vertical-light')
      this.elUfoTargetHeader = document.querySelector('#headingtarget')
      this.elUfoTargetNav = document.querySelector('#ufowrappernav')
    },
    startTL() {
      this.tlHeading = gsap.timeline({
        paused: true,
      })
      const ufoState = Flip.getState('.ufowrapper')
      this.elUfoTargetNav.classList.toggle('hidden')
      this.elUfowrapper.classList.toggle('hidden')
      // const target = Flip.getState('#ufowrapper')
      Flip.from(ufoState, {
        duration: 2,
        ease: 'power1.inOut',
        absolute: true,
        // onComplete: gsap.to('#ufosvg', { scale: 0.3, autoAlpha: 0 }),
      })
        .addLabel('start')
        .set(this.elVerticalLight, { display: 'block', opacity: 1 })
        .to('#ufosvg', { scale: 1.3 })
        // .to('#ufowrapper', { x: '-100vw' })
        // .to('.control-button', { width: '4rem' }, '>')
        .to('#pick-text', { rotationX: -75, opacity: 0 }, '>')
        // .to('.control-button', { rotationX: -75, opacity: 0 }, '<')
        // .to('#nav-group', { y: -166, duration: 2 }, '<')
        // .to('#ufowrapper', { scale: '1.3', y: 150 }, '<')
        // .addLabel('2')
        .to('#ufosvg', { rotationX: -75 }, '<')
        .to(
          '#headernav',
          {
            rotationX: 75,
            yPercent: -200,
            opacity: 0,
          },
          '<'
        )
        // .to('#ufowrapper', { y: 0 }, '<0.5')
        .addLabel('3')
        .to(
          this.elVerticalLight,
          {
            scaleX: '1',
            scaleY: 2.5,
            skewX: -50,
            opacity: 1,
          },
          '>'
        )
        .to('#heading-cover', { width: 0, duration: 1 }, '>')
        .to(this.elVerticalLight, { skewX: 50, opacity: 1, duration: 1 }, '<')
        .to(this.elVerticalLight, { scaleX: '0', opacity: 0 }, '>')
      gsap.set(this.elVerticalLight, { opacity: 0 }, '>')
    },
    initHeadingTL() {
      // this.initUfoState = Flip.getState(this.elUfowrapper)
      // this.initStyleButtonState = Flip.getState('#nav-group')
      this.tlHeading = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            id: 'trigger1',
            trigger: this.elSectionHeading,
            // endTrigger: '#section-heading',
            pin: true, // pin the trigger element while active
            start: '10 top', // when the top of the trigger hits the top of the viewport
            end: 'bottom top', // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: {
              startColor: 'green',
              endColor: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              indent: 20,
            },
            onEnter: () => {
              // this.changeUfoState()
              // this.elUfoTargetHeader.appendChild(this.elUfowrapper)
              const ufoState = Flip.getState('.ufowrapper')
              this.elUfoTargetNav.classList.toggle('hidden')
              this.elUfowrapper.classList.toggle('hidden')
              // const target = Flip.getState('#ufowrapper')
              Flip.from(ufoState, {
                duration: 1,
                ease: 'power1.inOut',
                absolute: true,
                // onComplete: next(),
              })
              // this.initUfoState = Flip.getState('#ufowrapper')
              // this.doUfoFlip(this.initUfoState)
            },
            onEnterBack: () => {
              /* const state = Flip.getState(this.elUfowrapper)
              this.elUfoTargetHeader.appendChild(this.elUfowrapper)
              this.doUfoFlip(state)
              gsap.to('#ufosvg', { rotationX: -75, duration: 1 }) */
            },
            onLeave: () => {
              const ufoState1 = Flip.getState(this.elUfowrapper)
              this.elUfoTargetNav.appendChild(this.elUfowrapper)

              // ScrollTrigger.getById('trigger1').kill(true)
              Flip.from(ufoState1, {
                duration: 1,
                ease: 'power1.inOut',
                absolute: true,
              })
              /* const state = Flip.getState(this.elUfowrapper)
              this.elUfoTargetNav.appendChild(this.elUfowrapper)
              this.doUfoFlip(state)
              // this.initUfoState = Flip.getState('#ufowrapper')
              gsap.to('#ufosvg', { rotationX: 0, duration: 1 })
              this.exitHeaderFlip() */
            },
            // onLeaveBack: () => this.doFlip('#target-nav'),
            // onLeaveBack: () => this.doUfoFlip('#target-heading'),
          },
        })
        .addLabel('start')
        .set(this.elVerticalLight, { display: 'block' })
        // .to('#ufosvg', { scale: 0.3, autoAlpha: 0 })
        // .to('#ufowrapper', { x: '-100vw' })
        .addLabel('1')
        // .to('.control-button', { width: '4rem' }, '>')
        .to('#pick-text', { rotationX: -75, opacity: 0 }, '>')
        .to('.control-button', { rotationX: -75, opacity: 0 }, '<')
        // .to('#nav-group', { y: -166, duration: 2 }, '<')
        // .to('#ufowrapper', { scale: '1.3', y: 150 }, '<')
        .addLabel('2')
        .to('#ufosvg', { rotationX: -75 }, '<')
        .to(
          '#headernav',
          {
            rotationX: 75,
            yPercent: -200,
            opacity: 0,
          },
          '<'
        )
        // .to('#ufowrapper', { y: 0 }, '<0.5')
        .addLabel('3')
        .to(
          this.elVerticalLight,
          {
            scaleX: '1',
            scaleY: 2.5,
            skewX: -50,
            opacity: 1,
          },
          '>'
        )
        .to('#heading-cover', { width: 0, duration: 1 }, '>')
        .to(this.elVerticalLight, { skewX: 50, opacity: 1, duration: 1 }, '<')
        .to(this.elVerticalLight, { scaleX: '0', opacity: 0 }, '>')
        .to('#heading-content', { y: -300 })
      gsap.set(this.elVerticalLight, { opacity: 0 }, '>')

      // this.doControlFlip()
      // this.initAnim() */
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.index-enter-active,
.index-leave-active {
  transition: opacity 350ms cubic-bezier(0.42, 0, 0.58, 1) 350ms;
}
.index-enter,
.index-leave-to {
  opacity: 1;
}
</style>
