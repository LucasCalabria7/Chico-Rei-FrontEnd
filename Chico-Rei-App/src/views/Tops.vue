<template>
    <div>
        <main id="main-container">
            <Card v-for="(produto, index) in renderProducts" :key="index" :dados-produto="produto" />
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import '../styles/GlobalStyles.css';
import Card from '../components/Card.vue';

export default {
    name: 'Camiseta',
    components: {
        Card,
    },
    data() {
        return {
            produtos: [],
        };
    },
    async mounted() {
        const result = [];

        for (let i = 36; i <= 40; i++) {
            const url = `https://dummyjson.com/products/${i}`;
            const res = await axios.get(url);
            result.push(res.data);
        }

        this.produtos = result;
    },
    computed: {
        renderProducts() {
            let filteredList = this.produtos;
            return filteredList
        }
    },
};
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

@orangechico: #db7416;
@gap: 1rem;
@fullwidth: 100vw;

#global-container {
    display: flex;
    flex-direction: column;
    max-width: @fullwidth;
    min-height: 100vh;
}

#main-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 1.5rem;
    gap: @gap;
}
</style>