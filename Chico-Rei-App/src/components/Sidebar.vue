<template>
    <transition name="sidebar-transition">
        <div>
            <div class="sidebar-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
            <div class="menu-container" :class="{ 'menu-open': isMenuOpen }">
                <button id="close-button" @click="toggleMenu">X</button>
                <img id="sidebar-icon" src="../assets/sidebar-icon.png" alt="sidebar-icon" />
                <a class="redirect" href="https://chicorei.com/minas-para-o-mundo" target="_blank">QUEM SOMOS</a>
                <a class="redirect" href="https://chicorei.com/sustentabilidade" target="_blank">SUSTENTABILIDADE</a>
                <a class="redirect" href="https://chicorei.com/nossas-lojas" target="_blank">NOSSAS LOJAS</a>
                <a class="redirect" href="https://chicorei.com/trabalhe-conosco" target="_blank">TRABALHE AQUI</a>
                <a class="redirect" href="https://blog.chicorei.com/" target="_blank">BLOG</a>
                <a class="redirect" href="https://chicorei.com/chicundum" target="_blank">CHICUNDUM</a>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    props: {
        isMenuOpen: Boolean,
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu(event) {
            if (event.target.classList.contains('sidebar-overlay')) {
                this.$emit('toggle-menu');
            }
        },
    },
};
</script>
  
<style scoped>
.sidebar-transition-enter-active {
    animation: sidebarEnter 0.3s ease-in;
}

.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.menu-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: -40vw;
    min-height: 100vh;
    width: 45vw;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 2rem;
    overflow: hidden;
    background-color: #f5f5f5;
    color: #1e1e1d;
}

.menu-open {
    right: 0;
}

@keyframes sidebarEnter {
    from {
        right: -40vw;
    }

    to {
        right: 0;
    }
}

#close-button {
    background-color: transparent;
    text-align: center;
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
}

#sidebar-icon {
    height: 5rem;
    width: 5rem;
}

.redirect {
    color: #201f1e;
    text-decoration: none;
}
</style>
