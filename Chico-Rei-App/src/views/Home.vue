<template>
    <div>
        <main id="main-container">
            <Card v-for="(produto, index) in renderProducts" :key="index" :dados-produto="produto" />
        </main>

        <div id="pagination">
            <button id="previous-page" @click="anterior">Anterior</button>
            <div id="page-numbers">
                <button v-for="pagina in numberOfPages" :key="pagina" :class="{ active: pagina === currentPage }"
                    @click="goToPage(pagina)">
                    {{ pagina }}
                </button>
            </div>
            <button id="next-page" @click="proxima">Próxima</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Card from '../components/Card.vue';

export default {
    name: 'Home',
    components: {
        Card,
    },
    data() {
        return {
            produtos: [],
            currentPage: 1,
            itemsPerPage: 15,
        };
    },
    async mounted() {
        const result = [];

        for (let i = 36; i <= 85; i++) {
            const url = `https://dummyjson.com/products/${i}`;
            const res = await axios.get(url);
            result.push(res.data);
        }

        this.produtos = result;
    },
    computed: {
        renderProducts() {
            const initialIndex = (this.currentPage - 1) * this.itemsPerPage;
            const finalIndex = initialIndex + this.itemsPerPage;
            return this.produtos.slice(initialIndex, finalIndex);
        },
        numberOfPages() {
            return Math.ceil(this.produtos.length / this.itemsPerPage);
        },
    },
    methods: {
        anterior() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        },
        proxima() {
            if (this.currentPage < this.numberOfPages) {
                this.currentPage += 1;
            }
        },
        goToPage(pageNumber) {
            this.currentPage = pageNumber;
        },
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

#pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
}

#previous-page,
#next-page {
    background-color: #db7416;
    color: white;
    border: none;
    border-radius: 100rem;
    width: 5vw;
    height: 5vh;
    cursor: pointer;
}

#page-numbers button {
    background-color: #db7416;
    border: 1px solid white;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.2rem;
    cursor: pointer;
    border-radius: 100rem;
}

#page-numbers button:hover {
    opacity: 0.9;
}

#page-numbers button.active {
    background-color: #f2efe9;
    color: #fff;
}
</style>