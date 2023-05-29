<script>
export default {
    name: "Card",
    props: {
        dadosProduto: {
            type: Object,
            required: true,
        },
    },
};
</script>

<template>
    <div class="card">
        <div class="left-side">
            <div class="image-area">
                <img class="card-image" :src="dadosProduto.images[0]" alt="card-image" />
            </div>
            <div class="title-area">
                <p class="card-title">{{ dadosProduto.title }}</p>
            </div>
        </div>
        <div class="right-side">
            <p class="brand">{{ dadosProduto.brand }}</p>
            <div class="info">
                <h4 class="price">R${{ dadosProduto.price }}</h4>
                <div class="rating-area">
                    <img class="rating-icon" src="../assets/rating.png" />
                    <p class="rate">{{ dadosProduto.rating }}</p>
                </div>
                <button class="add-button">Adicionar</button>
            </div>
        </div>
    </div>
</template>
  
<style lang="less" scoped>
@orangechico: #db7416;

.card {
    width: 100%;
    max-width: 24rem;
    height: 100%;
    box-shadow: 0px 0.25rem 0.6rem 0 @orangechico;
    border-radius: 0.75rem;
    display: flex;
    overflow: hidden;
}

.left-side {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25rem;
    background-color: #f2f2f2;
}

.image-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
}

.card-image {
    height: 22vh;
    width: 100%;
    border-radius: 0.75rem;
}

.title-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.25rem;
}

.card-title {
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
}

.add-button {
    height: 4vh;
    width: 100%;
    color: white;
    background-color: rgb(255, 170, 59);
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.75rem;
    transition: all 0.2s ease-in-out;
}

.add-button:hover {
    background-color: #f29000;
}

.right-side {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.25rem;
}

.brand {
    font-weight: bold;
    font-size: 1.2rem;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.price {
    color: @orangechico;
    font-size: 2rem;
}

.rating-area {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.rating-icon {
    height: 1.5rem;
}

.rate {
    font-style: italic;
}

/* Estilos Responsivos */

@media screen and (max-width: 600px) {
    .card {
        flex-direction: column;
    }

    .left-side,
    .right-side {
        width: 100%;
    }

    .image-area {
        padding: 0;
    }

    .card-image {
        border-radius: 0.75rem 0.75rem 0 0;
    }

    .title-area {
        padding: 0.5rem;
    }
}
</style>
  