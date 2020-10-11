<template>
    <nav class="navbar">
        <logo />
        <navbar-links />
    </nav>
</template>

<script>
import logo from "./Logo";
import navbarLinks from "./NavbarLinks";

export default {
    components: {
        logo,
        "navbar-links": navbarLinks
    },
}
</script>