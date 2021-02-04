<template>
  <div
    id="nav-group"
    ref="nav-group"
    class="nav-group text-black text-right my-auto right-0 z-50 bottom-0 mb-6 mr-6 fixed"
  >
    <button
      aria-label="Toggle Style"
      class="focus:outline-none w-24 h-24 p-5 rounded-full border-primary-300 border-2 bottom-0 right-0 z-50 absolute pointer-events-auto"
      @click="toggleStyle"
    >
      <svg
        id="sylesvg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>color-swatch</title>
        <path
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M10,8h4a2,2,0,0,1,2,2V22a4,4,0,0,1-4,4h0a4,4,0,0,1-4-4V10a2,2,0,0,1,2-2Z"
          transform="translate(27 3) rotate(90)"
        />
        <path
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M8.53,4.46h4a2,2,0,0,1,2,2v12a4,4,0,0,1-4,4h0a4,4,0,0,1-4-4v-12a2,2,0,0,1,2-2Z"
          transform="translate(10.61 -5.51) rotate(45)"
        />
        <path
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M3,1H7A2,2,0,0,1,9,3V15a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V3A2,2,0,0,1,3,1Z"
        />
        <circle fill="currentColor" stroke="none" cx="5" cy="15" r="1" />
      </svg>
    </button>
    <button
      id="dark-btn"
      ref="dark-btn"
      aria-label="Toggle dark/light mode"
      class="control-button focus:outline-none w-24 h-24 p-3 rounded-full border-primary-300 border-2 bottom-0 right-0 absolute pointer-events-auto"
      @click="darkClass"
    >
      <svg
        id="sunmoon"
        ref="sunmoon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="style-icon mx-auto"
        style="transform-origin: 50% 50%"
      >
        <circle
          id="sun"
          ref="sun"
          cx="16"
          cy="16"
          r="10"
          stroke="currentColor"
          stroke-opacity=".2"
          stroke-width="2"
        ></circle>
        <path
          id="moon"
          ref="moon"
          d="M26 16c0 5.549-4.37 10-9.704 10-.599 0-.986-.04-1.224-.091a.814.814 0 01.008-.02c.111-.261.304-.598.583-1.056l.221-.361c1.111-1.804 2.872-4.662 2.872-8.472 0-3.81-1.76-6.668-2.872-8.472a86.046 86.046 0 01-.221-.36c-.28-.46-.472-.796-.583-1.056a1.085 1.085 0 01-.008-.02c.238-.053.625-.092 1.224-.092C21.63 6 26 10.451 26 16zm-11.15 9.84s0 0 0 0h0zm0-19.68s0 0 0 0h0z"
          stroke="currentColor"
          stroke-width="2"
        ></path>
      </svg>
    </button>
    <button
      id="speed-btn"
      ref="speed-btn"
      class="control-button focus:outline-none w-24 h-24 p-5 rounded-full border-primary-300 border-2 bottom-0 right-0 absolute pointer-events-auto"
      @click="toggleSpeed"
    >
      <svg
        data-name="tachometer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        class="style-icon"
      >
        <path
          id="dial"
          class="text-black stroke-current"
          d="M102.81 454.84A248.91 248.91 0 0150 301.16c0-138.08 111.93-250 250-250s250 111.92 250 250a248.91 248.91 0 01-52.81 153.68"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="60"
        />
        <g id="needle" ref="needle">
          <rect width="600" height="600" fill="none" stroke="none" />
          <path
            class="text-black fill-current"
            d="M245.34 269.42a60.42 60.42 0 1113.75 78l-369.67 25z"
          />
          <path
            class="text-white fill-current"
            d="M297.18 252.58a47.93 47.93 0 11-33.69 82L4.56 352.11 253.85 280a48 48 0 0143.33-27.39m0-25a73 73 0 00-59.77 31.12L-2.39 328.1l-223.33 64.63 232-15.68 249-16.82a72.92 72.92 0 1041.9-132.65z"
          />
        </g>
      </svg>
    </button>
    <button
      id="color-btn"
      ref="color-btn"
      aria-label="Toggle Color"
      class="control-button focus:outline-none w-24 h-24 p-5 rounded-full border-primary-300 border-2 bottom-0 right-0 pointer-events-auto"
      style="transform-origin: 50% 50%"
      @click="toggleColor"
    >
      <svg
        id="color-swatch"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="style-icon"
        style="transform-origin: 50% 0%"
      >
        <title>color-swatch</title>
        <path
          id="swatch3"
          ref="swatch3"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M10,8h4a2,2,0,0,1,2,2V22a4,4,0,0,1-4,4h0a4,4,0,0,1-4-4V10a2,2,0,0,1,2-2Z"
          transform="translate(27 3) rotate(90)"
        />
        <path
          id="swatch2"
          ref="swatch2"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M8.53,4.46h4a2,2,0,0,1,2,2v12a4,4,0,0,1-4,4h0a4,4,0,0,1-4-4v-12a2,2,0,0,1,2-2Z"
          transform="translate(10.61 -5.51) rotate(45)"
        />
        <path
          id="swatch1"
          ref="swatch1"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="cls-1"
          d="M3,1H7A2,2,0,0,1,9,3V15a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V3A2,2,0,0,1,3,1Z"
        />
        <circle fill="currentColor" stroke="none" cx="5" cy="15" r="1" />
      </svg>
    </button>
  </div>
</template>

<script>
/* eslint-disable*/ 
// prettier-ignore
const { gsap } = require("gsap/dist/gsap");


//import { gsap } from 'assets/scripts/gsap'
// prettier-ignore
//import { Flip } from 'assets/scripts/Flip'
// prettier-ignore
//gsap.registerPlugin(Flip)
/* eslint-enable */
export default {
  data() {
    return {
      styleOpen: false,
      open: false,
      dark: true,
      color: 'theme-blue',
      isActive: true,
      error: null,
      isStyleToggled: false,
      toggleStyleTL: gsap.timeline({duration: 0.5, paused: true})
    }
  },
  computed: {
    classColor() {
      return this.color
    },
  },
  mounted () {
      // this.doFlip()
      this.initStyleTL()

  },
  methods: {
    darkClass() {
      this.dark = !this.dark
      this.$emit('dark', this.dark ? ' dark-mode ' : ' ')
      if (this.dark) {
        gsap
          .timeline()
          .to('#sunmoon', {
            rotate: 90,
            transformOrigin: '50% 50%',
          })
          .to('#sun', { strokeOpacity: 1 }, '<')
          .to('#moon', { opacity: 0 }, '<')
      } else {
        gsap
          .timeline()
          .to('#sunmoon', {
            rotate: 0,
            transformOrigin: '50% 50%',
          })
          .to('#sun', { strokeOpacity: 0.2 }, '<')
          .to('#moon', { opacity: 1 }, '<')
      }
    },
    toggleColor() {
      const items = [
        'theme-blue',
        'theme-purple',
        'theme-orange',
        'theme-yellow',
        'theme-teal',
      ]
      const tl = gsap.timeline({ repeat: 1, yoyo: true })
      tl.to('#swatch1', {
        rotate: 80,
        duration: 0.3,
        transformOrigin: '4 14',
      }).to(
        '#swatch2',
        {
          rotate: 85,
          duration: 0.3,
          transformOrigin: '4 14',
        },
        '<'
      )
      const currentIndex = items.indexOf(this.color)
      const nextIndex = (currentIndex + 1) % items.length
      // eslint-disable-next-line
     // console.log(items[nextIndex])
      this.color = items[nextIndex]
      this.$emit('color', this.color)
    },
    toggleSpeed() {
     // console.log(this.speed);
      const items = [1, 0.25, 0.5];
      const currentIndex = items.indexOf(this.speed);
      const nextIndex = (currentIndex + 1) % items.length;
      

      
      this.speed =items[nextIndex];
      console.log(200*(1-this.speed));
      gsap.timeline({})
      .to('#needle', {
        svgOrigin:"300 300",  
        rotate: 270*(1-this.speed), 
        duration:1,
      })
      this.$emit('speed', this.speed)

    },
    toggleStyle () {
      this.isStyleToggled = !this.isStyleToggled
      if(this.isStyleToggled) {
        this.toggleStyleTL.play()
      } else {
        this.toggleStyleTL.reverse()
      }
    },
    initStyleTL() {
      this.toggleStyleTL.addLabel('start')
      .to('#dark-btn', { yPercent: -140, scale: 0.75, opacity: 1 })
      .to('#color-btn', { yPercent: -100, scale: 0.75, xPercent: -100, opacity: 1 })
      .to('#speed-btn', { xPercent: -140, scale: 0.75, opacity: 1 }).addLabel('end')

    },
  },

}
</script>
