<template>
    <Article full-width class="presentation-article">
        <div class="presentation">
            <Octagon-wrapper style="width: 400px; height: 400px; padding: 4rem">
                <Presentation-animation />
            </Octagon-wrapper>

            <About-author />
        </div>

        <div class="technologies">
            <Single-technology name="JavaScript" :percentage="90" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

            <Single-technology name="vue" :percentage="90" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque.  "/>

            <Single-technology name="react" :percentage="45" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

            <Single-technology name="scss" :percentage="85" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

            <Single-technology name="java" :percentage="35" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

            <Single-technology name="spring boot" :percentage="30" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

            <Single-technology name="i18n" :percentage="45" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus adipisci illo fugiat quibusdam cumque. "/>

        </div>

    </Article>
</template>

<script>
import Article from "../article/Article";
import OctagonWrapper from "../about-header/OctagonWrapper";
import PresentationAnimation from "./PresentationAnimation";
import AboutAuthor from "./AboutAuthor";
import SingleTechnology from "./SingleTechnology";

export default {
    components: {
        Article,
        'Octagon-wrapper': OctagonWrapper,
        'Presentation-animation': PresentationAnimation,
        'About-author': AboutAuthor,
        'Single-technology': SingleTechnology
    }    
}
</script>

<style lang="scss">
.presentation-article { 
    display: flex;
    .technologies {
        width: inherit;
        display: flex;
        flex-direction: column;
    }
}
</style>