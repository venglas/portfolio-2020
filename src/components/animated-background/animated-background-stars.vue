<template>
    <div class="background-stars">
        <div class="stars"></div>
        <div class="starts2"></div>
        <div class="stars3"></div>
        <div class="wrapper__slot">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@function multiple-box-shadow ($n) {
  $value: '#{random(2000)}px #{random(2000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #fff'
  }

  @return unquote($value)
}

$shadows-small:  multiple-box-shadow(100);
$shadows-medium: multiple-box-shadow(100);
$shadows-big:    multiple-box-shadow(100);

.router-view--mobile {
    .background-stars {
        height: calc(100vh - #{$SIZE_navbar_mobile});
    }
}

.background-stars {
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    width: 100vw;
    height: calc(100vh - #{$SIZE_navbar});
    overflow: hidden;
    .wrapper__slot {
        width: 95%;
        z-index: 0;
        @include center;
        text-align: center;
        font-size: 2rem;
        overflow: hidden;
        @media(max-width: 820px) and (orientation: landscape) {
            position: relative;
        }
        .text { //parent element class
            background: linear-gradient(white 40%, #38495a,);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .stars {
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: $shadows-small;
        animation: animStar 50s linear infinite;

        &:after {
            content: " ";
            position: absolute;
            top: 2000px;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: $shadows-small;
        }
    }

    .stars2 {
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: $shadows-medium;
        animation: animStar 100s linear infinite;

        &:after {
            content: " ";
            position: absolute;
            top: 2000px;
            width: 2px;
            height: 2px;
            background: transparent;
            box-shadow: $shadows-medium;
        }
    }

    .stars3 {
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: $shadows-big;
        animation: animStar 150s linear infinite;

        &:after {
            content: " ";
            position: absolute;
            top: 2000px;
            width: 3px;
            height: 3px;
            background: transparent;
            box-shadow: $shadows-big;
        }
    }

    @keyframes animStar {
        from { transform: translateY(0px) }
        to { transform: translateY(-2000px) }
    }
}
</style>
