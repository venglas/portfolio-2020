<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect />
    <g id="presentation 1" clip-path="url(#clip0)">
      <g id="Group">
        <path id="Vector" d="M311 8H296V53H311H326V8H311Z" fill="#665151" />
        <path id="Vector_2" d="M311 8H326V53H311V8Z" fill="#4D3535" />
        <path
          id="Vector_3"
          d="M324.931 317.434H311H297.069L237.069 467.434L264.931 478.566L311 363.393L357.069 478.566L384.931 467.434L324.931 317.434Z"
          fill="#665151"
        />
        <path
          id="Vector_4"
          d="M384.931 467.434L324.931 317.434H311V363.393L357.069 478.566L384.931 467.434Z"
          fill="#4D3535"
        />
        <path id="Vector_5" d="M311 38H116V338H311H507V38H311Z" fill="#F3F5F9" />
        <path
          id="Vector_6"
          d="M116 128C149.137 128 176 101.137 176 68C176 34.8629 149.137 8 116 8C82.8629 8 56 34.8629 56 68C56 101.137 82.8629 128 116 128Z"
          fill="#66CCFF"
        />
        <path
          id="Vector_7"
          d="M176 68C176 100.999 148.999 128 116 128V8C148.999 8 176 34.999 176 68Z"
          fill="#59ABFF"
        />
        <path id="Vector_8" d="M311 38H507V338H311V38Z" fill="#E1E6F0" />
        <path
          id="Vector_9"
          d="M116 128H71C29.578 128 -5 161.578 -5 203V338H26L39.737 308L56 338V488H101L116 460.596L131 488H176V173H311V128H116Z"
          fill="#66CCFF"
        />
        <g id="Group_2">
          <path id="Vector_10" d="M131 488H176V173H311V128H116V460.596L131 488Z" fill="#59ABFF" />
          <path id="Vector_11" d="M26 218H56V338H26V218Z" fill="#59ABFF" />
          <path id="Vector_12" d="M101 308H131V488H101V308Z" fill="#59ABFF" />
        </g>
        <path id="Vector_13" d="M116 308H131V488H116V308Z" fill="#4D87FF" />
      </g>
      <g id="Frame 1">
        <g id="table-text">
          <rect class="table-text1" x="332" y="67" width="138" height="7" fill="#C4C4C4" />
          <rect class="table-text2" x="332" y="118" width="95" height="7" fill="#C4C4C4" />
          <rect class="table-text3" x="332" y="153" width="120" height="7" fill="#C4C4C4" />
          <rect class="table-text4" x="332" y="135" width="109" height="7" fill="#C4C4C4" />
          <rect class="table-text5" x="332" y="101" width="130" height="7" fill="#C4C4C4" />
          <rect class="table-text6" x="332" y="84" width="120" height="7" fill="#C4C4C4" />
          <rect class="table-text7" x="332" y="169" width="153" height="7" fill="#C4C4C4" />
          <rect class="table-text8" x="332" y="185" width="120" height="7" fill="#C4C4C4" />
          <rect class="table-text9" x="332" y="201" width="90" height="7" fill="#C4C4C4" />
          <rect class="table-text10" x="332" y="217" width="109" height="7" fill="#C4C4C4" />
          <rect class="table-text11" x="332" y="233" width="64" height="7" fill="#C4C4C4" />
          <rect class="table-text12" x="332" y="249" width="120" height="7" fill="#C4C4C4" />
          <rect class="table-text13" x="332" y="265" width="95" height="7" fill="#C4C4C4" />
        </g>
        <g class="Chart">
          <path
            id="Ellipse 2"
            d="M380.5 299C380.5 311.397 369.785 321.5 356.5 321.5C343.215 321.5 332.5 311.397 332.5 299C332.5 286.603 343.215 276.5 356.5 276.5C369.785 276.5 380.5 286.603 380.5 299Z"
            fill="#C4C4C4"
            stroke="black"
          />
          <path
            id="chart2"
            d="M379 303.75C377.436 316.295 363.681 320.477 357 321V298L379 303.75Z"
            fill="#E0C222"
            stroke="black"
            stroke-width="0.7"
          />
          <path
            id="chart1"
            d="M379.413 304C383.397 284.364 366.131 277.818 357 277V298.6L379.413 304Z"
            fill="#3B7221"
            stroke="black"
            stroke-width="0.7"
          />
        </g>
        <line class="chart-text1" x1="392" y1="285.5" x2="445" y2="285.5" stroke="black" />
        <line class="chart-text2" x1="392" y1="290.5" x2="430" y2="290.5" stroke="black" />
        <line class="chart-text3" x1="392" y1="297.5" x2="439" y2="297.5" stroke="black" />
        <line class="chart-text4" x1="392" y1="302.5" x2="421" y2="302.5" stroke="black" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="scss">
@function calcAnimationDelay($elementsCount, $animationCountDelay) {
  @return #{$elementsCount * $animationCountDelay}ms;
}
$animationCountDelay: 110;

@for $i from 1 through 13 {
  .table-text#{$i} {
    animation-name: table-text#{$i};
    animation-delay: calcAnimationDelay($i, $animationCountDelay);
    animation-duration: $TIME_slow-min;
  }
  @keyframes table-text#{$i} {
    from { width: 0; }
  }
}
.Chart {
  opacity: 0;
  animation-name: chart;
  animation-duration: 1s;
  animation-delay: calcAnimationDelay(15, $animationCountDelay);
  animation-fill-mode: forwards;
}
@keyframes chart {
  to { opacity: 1; }
}
@for $i from 1 through 4 {
  .chart-text#{$i} {
    opacity: 0;
    animation-name: chart-text#{$i};
    animation-delay: calcAnimationDelay($i + 17, $animationCountDelay);
    animation-duration: $TIME_slow-min;
    animation-fill-mode: forwards;
  }
  @keyframes chart-text#{$i} {
    to { opacity: 1; }
  }
}
</style>
