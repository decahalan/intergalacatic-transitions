<template>
  <div id="logo" ref="logo" class="z-50 relative w-32 h-32">
    <div
      id="ufowrappernav"
      ref="ufowrappernav"
      class="h-full w-full ufowrapper"
      data-flip-id="ufo"
    >
      <svg
        id="ufosvg"
        ref="ufosvg"
        preserveAspectRatio=""
        class="overflow-visible w-full h-full absolute ufosvg"
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
            <circle class="ufolight fill-current" cx="110.7" cy="47.4" r="5" />
            <circle class="ufolight fill-current" cx="92.8" cy="102.3" r="5" />
            <circle class="ufolight fill-current" cx="35.2" cy="102.3" r="5" />
            <circle class="ufolight fill-current" cx="17.3" cy="47.4" r="5" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
