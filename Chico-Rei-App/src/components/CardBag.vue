<template>
    <div id="card">
        <div id="image-area">
            <img :src="dadosProduto.image" alt="shirt" id="shirt" />
        </div>
        <div id="info-card-area">
            <p id="shirt-name">{{ dadosProduto.name }}</p>
            <p>{{ dadosProduto.size }}</p>
            <p id="shirt-price">R${{ dadosProduto.price }}</p>
            <div id="select-area">
                <select id="quantity" v-model="dadosProduto.quantity" @change="updateQuantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <img src="../assets/trash-icon.png" alt="trash" id="trash" @click="removeCard" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CardBag",
    props: {
        dadosProduto: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removeCard() {
            if (
                window.confirm(
                    "Este é um produto mockado, tem certeza que deseja removê-lo?"
                )
            ) {
                this.$emit("remove-card", this.dadosProduto);
            }
        },
    },
    updateQuantity() {
        this.$emit("update-quantity");
    },
};
</script>

<style lang="less" scoped>
@orangechico: #db7416;

#card {
    width: 100%;
    height: 33.33%;
    box-shadow: 0px 0.25rem 0.60rem 0 @orangechico;
    border-radius: 0.75rem;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    padding: 0.75rem;
}

#image-area {
    width: 60%;
    height: 100%;
}

#shirt {
    height: 100%;
    width: 100%;
}

#info-card-area {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

#shirt-name,
#shirt-price {
    font-weight: bold;
}

#trash {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

#select-area {
    display: flex;
    width: 10%;
    gap: 0.5rem;
}
</style>