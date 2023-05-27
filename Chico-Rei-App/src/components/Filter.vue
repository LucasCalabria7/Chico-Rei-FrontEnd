<template>
    <div id="global-filter">
        <img id="filter-icon" src="../assets/filter.png" />
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
            <select class="input-select" v-model="selectedPriceCategory">
                <option value="">Preço</option>
                <option value="expensives">Maiores Preços</option>
                <option value="cheaps">Menores Preços</option>
            </select>
            <select class="input-select" v-model="selectedRatedCategory">
                <option value="">Popularidade</option>
                <option value="top-rated">Mais Populares</option>
                <option value="less-rated">Menos Populares</option>
            </select>
            <Sidebar />
        </div>
    </div>
</template>

<script>

import Sidebar from './Sidebar.vue';


export default {
    components: { Sidebar },
    name: "Filter",
    props: {
    },

    data() {
        return {
            selectedMensCategory: '',
            selectedWomensCategory: '',
            selectedPriceCategory: '',
            selectedRatedCategory: '',
        }
    },
    computed() {

    },
    methods: {
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

#global-filter {
    height: 15vh;
    max-width: @fullwidth;
    border-bottom: 4px solid @orangechico;
    display: flex;
    align-items: center;
    justify-content: center;
}

#filter-icon,
#menu-icon {
    height: 1.5rem;
    padding: 0 2rem;
}

#menu-icon {
    cursor: pointer;
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
    border-radius: @gap;
    width: 12vw;
}
</style>