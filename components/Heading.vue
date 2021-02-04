<template>
  <div
    id="section-heading"
    class="flex flex-col h-screen justify-between bg-white w-screen text-center pt-48 mx-auto"
  >
    <div id="headingtarget" class="w-1/2 h-1/2 z-30 mx-auto relative">
      <div
        id="ufowrapper"
        ref="ufowrapper"
        class="h-full w-full ufowrapper hidden"
        data-flip-id="ufo"
      >
        <svg
          id="ufosvg"
          ref="ufosvg"
          preserveAspectRatio=""
          class="overflow-visible w-full h-full absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <title>ufo</title>
          <g
            id="ufolightsgroup"
            ref="ufolightsgroup"
            class="absolute"
            style="transform-origin: 50% 50%"
          >
            <g>
              <circle
                class="opacity-1 text-gray-200 fill-current"
                cx="64"
                cy="64"
                r="62"
                vector-effect="non-scaling-stroke"
              />
              <circle
                class="text-primary-500 fill-current"
                cx="64"
                cy="64"
                r="22.9"
              />
            </g>
            <g
              id="ufolightspin"
              ref="ufolightspin"
              class="text-primary-500 w-full h-full"
            >
              <rect width="128" height="128" fill="none"></rect>

              <circle class="ufolight fill-current" cx="64" cy="13.5" r="5" />
              <circle
                class="ufolight fill-current"
                cx="110.7"
                cy="47.4"
                r="5"
              />
              <circle
                class="ufolight fill-current"
                cx="92.8"
                cy="102.3"
                r="5"
              />
              <circle
                class="ufolight fill-current"
                cx="35.2"
                cy="102.3"
                r="5"
              />
              <circle class="ufolight fill-current" cx="17.3" cy="47.4" r="5" />
            </g>
          </g>
        </svg>
        <svg
          id="ufo-vertical-light"
          ref="ufo-vertical-light"
          preserveAspectRatio=""
          class="overflow-visible w-full h-full absolute text-primary-500"
          style="opacity: 0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <g style="transform-origin: 50% 50%">
            <ellipse
              class="ufolight fill-current w-0 opacity-1"
              cx="64"
              cy="128"
              ry="30"
              rx="64"
            />
            <polygon
              class="ufolight fill-current h-0 opacity-90"
              points="128,128 0,128 41.1,64 86.9,64 "
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="mt-12">
      <p
        id="pick-text"
        class="text-black w-full text-center my-6"
        style="transform-origin: 50% 0%"
      >
        Pick your Color, Dark/Light Mode, and Animation Speed
      </p>
      <div
        id="headernav"
        ref="headernav"
        class="flex w-full justify-around"
        style="transform-origin: 50% 50%"
      >
        <div
          id="dark-target"
          ref="dark-target"
          class="style-target w-32 h-32"
        ></div>
        <div
          id="color-target"
          ref="color-target"
          class="style-target w-32 h-32"
        ></div>
        <div
          id="speed-target"
          ref="speed-target"
          class="style-target w-32 h-32"
        ></div>
      </div>
    </div>
    <div id="heading-content" class="w-auto h-auto relative mx-auto opacity-0">
      <div
        id="heading-cover"
        class="h-full w-full bg-white absolute right-0"
      ></div>
      <div class="h-auto w-auto mb-12 pb-12">
        <h1
          class="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black xl:leading-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300"
        >
          Intergalactic
          <br class="block lg:hidden" />
          Interactive
        </h1>
        <p class="mt-6 text-base text-gray-700 xl:text-xl">
          Out of this world websites, apps, seo, and business automation
        </p>
        <div class="items-center justify-center m-10 flex">
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white-locked bg-gradient-to-r from-primary-700 to-primary-500 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10"
          >
            Come with us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
