<template>
    <div class="background-gradient">
        <div class="wrapper__slot">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-gradient {
	background: linear-gradient(-45deg, #9393b9, #373755, #007bff, #9c9494e6, red);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .wrapper__slot {
        z-index: 999;
        position: absolute;
        text-align: center;
        font-size: 2rem;
    }
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
