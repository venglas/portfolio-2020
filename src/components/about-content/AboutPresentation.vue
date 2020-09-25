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



            <!-- <Single-technology :percentage="50"/>
            <Single-technology :percentage="60"/>
            <Single-technology :percentage="45"/>
            <Single-technology :percentage="55"/>
            <Single-technology :percentage="65"/>
            <Single-technology :percentage="76"/>
            <Single-technology :percentage="81"/>
            <Single-technology :percentage="25"/>
            <Single-technology :percentage="30"/> -->

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