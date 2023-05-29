<template>
    <div id="global-filter">
        <button id="menu-button" @click="toggleMenu">
            <img id="menu-icon" src="../assets/menu-icon.png" alt="Menu Icon" />
        </button>
        <img id="filter-icon" src="../assets/filter-icon.png" alt="filter-icon" />
        <div id="input-area">
            <select class="input-select" v-model="selectedMensCategory" v-on:change="changeRoute($event)">
                <option value="" selected>Masculinos</option>
                <option value="Camiseta">Camisetas</option>
                <option value="Tenis">Tênis</option>
                <option value="Relogio">Relógios</option>
                <option value="Oculos">Óculos</option>
            </select>
            <select class="input-select" v-model="selectedWomensCategory" v-on:change="changeRoute($event)">
                <option value="" selected>Femininos</option>
                <option value="Tops">Tops</option>
                <option value="Vestido">Vestidos</option>
                <option value="Sapato">Sapatos</option>
                <option value="RelogioFem">Relógios</option>
                <option value="Bolsa">Bolsas</option>
                <option value="Joia">Jóias</option>
            </select>
        </div>
        <Sidebar v-if="isMenuOpen" :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue';

export default {
    components: { Sidebar },
    name: "Filter",
    props: {},

    data() {
        return {
            selectedMensCategory: '',
            selectedWomensCategory: '',
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        changeRoute(e) {
            this.$router.push("/" + e.target.value);
        },
    },
};
</script>

<style lang="less" scoped>
@orangechico: #db7416;
@gap: 1rem;
@fullwidth: 100vw;
@dark: #201f1e;

#global-filter {
    height: 15vh;
    max-width: @fullwidth;
    border-bottom: 4px solid @orangechico;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

#filter-icon,
#menu-icon {
    height: 1.5rem;
    padding: 0 2rem;
}

#menu-icon {
    cursor: pointer;
}

#menu-button {
    border: none;
    background-color: transparent;
    height: 1.5rem;
    width: 4rem;
}

#input-area {
    display: flex;
    gap: @gap;
}

#search,
.input-select {
    height: 4vh;
    font-weight: 600;
    text-align: center;
    border-radius: 0.3rem;
    width: 12vw;
    box-shadow: 0px 0.15rem 0.15rem 0 @orangechico;
    border: 1px solid @dark;
}
</style>