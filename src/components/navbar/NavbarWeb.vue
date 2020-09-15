<template>
    <nav class="navbar">
        <Logo />
        <Navbar-links />
    </nav>
</template>

<script>
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

export default {
    components: {
        Logo,
        "Navbar-links": NavbarLinks
    },
}
</script>