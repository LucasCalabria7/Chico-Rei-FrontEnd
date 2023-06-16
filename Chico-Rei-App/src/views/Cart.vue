<template>
    <div id="global-cart">
        <div id="inputs-area">
            <div id="info-contato">
                <h3 id="title">Finalize seu Pedido</h3>
                <p class="sub-title">Informações de Contato</p>
                <label for="name">Nome</label>
                <input class="regular-input" type="text" id="name" v-model="name" />
                <label for="email">Email</label>
                <input class="regular-input" type="text" id="email" v-model="email" />
            </div>
            <div id="info-entrega">
                <p class="sub-title">Informações de Entrega</p>
                <label for="cep">CEP</label>
                <div id="align-div">
                    <input class="regular-input" type="number" id="cep" v-model="cep" />
                    <button id="search-button" @click="searchAddress">
                        <img src="../assets/search-icon.png" alt="search" id="search-icon" />
                    </button>
                </div>
                <label for="rua">Rua</label>
                <input class="regular-input" type="text" id="rua" v-model="rua" />
                <label for="cidade">Cidade</label>
                <input class="regular-input" type="text" id="cidade" v-model="cidade" />
                <label for="bairro">Bairro</label>
                <input class="regular-input" type="text" id="bairro" v-model="bairro" />
                <label for="estado">Estado</label>
                <input class="regular-input" type="text" id="estado" v-model="estado" />
            </div>
            <div id="info-pagamento">
                <p class="sub-title">Informações de Pagamento</p>
                <label for="card-number">Número do cartão</label>
                <input class="regular-input" type="number" id="card-number" v-model="cardnum" />
                <label for="titular">Titular do cartão</label>
                <input class="regular-input" type="text" id="titular" v-model="titular" />
                <label for="data">Data de vencimento</label>
                <input class="regular-input" type="month" id="data" v-model="date" />
                <label for="cvc">CVC</label>
                <input class="regular-input" type="number" id="cvc" v-model="cvc" />
            </div>
        </div>
        <div id="bag-area">
            <h3 id="title-bag">Sua Sacola (HardCoded)</h3>
            <div id="cards-area">
                <CardBag v-for="(produto, index) in produtos" :key="index" :dados-produto="produto"
                    @remove-card="removeCard" @update-quantity="updateQuantity" />
                <button id="finalizar-compra" @click="finalizarCompra">Finalizar Compra!</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import cep from 'cep-promise';
import CardBag from '../components/CardBag.vue';
import hardcodedProducts from "../HardcodedProducts.json"

export default {
    name: 'Cart',
    components: { CardBag },
    data() {
        return {
            name: '',
            email: '',
            cep: '',
            rua: '',
            cidade: '',
            bairro: '',
            estado: '',
            cardnum: '',
            titular: '',
            date: '',
            cvc: '',
            comprador: {},
            produtos: [],
        };
    },
    methods: {
        searchAddress() {
            cep(this.cep)
                .then((address) => {
                    this.rua = address.street;
                    this.cidade = address.city;
                    this.bairro = address.neighborhood;
                    this.estado = address.state;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        finalizarCompra() {
            if (
                this.name === '' ||
                this.email === '' ||
                this.cep === '' ||
                this.rua === '' ||
                this.cidade === '' ||
                this.bairro === '' ||
                this.estado === '' ||
                this.cardnum === '' ||
                this.titular === '' ||
                this.date === '' ||
                this.cvc === ''
            ) {
                alert('Todos os inputs devem ser preenchidos para finalizar o pedido');
                return;
            }

            if (this.cardnum.toString().length !== 16) {
                alert('Cartões de crédito devem ter 16 dígitos, insira um número válido');
                return;
            }

            const currentDate = new Date().toISOString().slice(0, 10);
            if (this.date < currentDate) {
                alert('Insira uma data válida');
                return;
            }

            if (this.cep.toString().length !== 8) {
                alert('CEP inválido, tente novamente ou use o botão de busca se necessário.');
                return;
            }

            if (!this.email.includes('@') || !this.email.includes('.com')) {
                alert('Email inválido, tente novamente');
                return;
            }

            if (this.cvc.toString().length !== 3) {
                alert('CVC inválido, tente novamente');
                return;
            }

            this.comprador = {
                name: this.name,
                email: this.email,
                cep: this.cep,
                rua: this.rua,
                cidade: this.cidade,
                bairro: this.bairro,
                estado: this.estado,
                cardnum: this.cardnum,
                titular: this.titular,
                date: this.date,
                cvc: this.cvc
            };

            console.log('comprador:', this.comprador);
            console.log("produtos:", this.produtos);
            alert('Compra registrada com sucesso!');
        },
        removeCard(produtoRemovido) {
            this.produtos = this.produtos.filter(
                (produto) => produto.id !== produtoRemovido.id
            );
        },
        updateQuantity() {
        },
    },
    async mounted() {
        const result = [];

        for (let i of hardcodedProducts) {
            result.push(i);
        }

        this.produtos = result;
    },
    computed: {
        renderProducts() {
            let bagList = this.produtos;
            return bagList
        }
    },
};
</script>


<style lang="less">
@full-width: 100vw;
@full-height: 75vh;
@dark: #201f1e;
@orangechico: #db7416;

#global-cart {
    display: flex;
    min-height: @full-height;
    max-width: @full-width;
}

#inputs-area,
#bag-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    padding: 2rem;
}

#info-contato,
#info-entrega,
#info-pagamento {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    width: 100%;
    gap: 0.5rem;
}

#info-contato {
    height: auto;
    max-width: 22rem;
}

#info-entrega {
    height: auto;
    max-width: 22rem;
}

#info-pagamento {
    min-height: 20rem;
}

#title,
#title-bag {
    font-size: 1.35rem;
    font-style: oblique;
    align-self: flex-start;
}

#title-bag {
    padding-left: 1rem;
}

.sub-title {
    padding-top: 0.65rem;
    font-style: oblique;
    font-weight: 600;
    font-size: 0.9rem;
}

.regular-input {
    width: 70%;
    height: 1.4rem;
    border: 2px solid @dark;
    border-radius: 0.3rem;
    box-shadow: 0px 0.15rem 0.15rem 0 @orangechico;
}

#search-icon {
    height: 1.25rem;
}

#search-button {
    height: 1.25rem;
    width: 10%;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

#cep {
    width: 60%;
}

#align-div {
    display: flex;
}

label {
    font-size: 0.80rem;
}

#finalizar-compra {
    height: 6vh;
    width: 80%;
    color: white;
    background-color: rgb(255, 170, 59);
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.75rem;
    transition: all 0.2s ease-in-out;
    margin-top: 1rem;
}

#finalizar-compra:hover {
    background-color: #f29000;
}

#cards-area {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    min-height: 100vh;
    gap: 0.5rem;
}

@media screen and (min-width: 768px) {
    #global-cart {
        flex-direction: row;
    }

    #inputs-area,
    #bag-area {
        width: 50%;
    }
}

@media screen and (min-width: 1024px) {

    #info-contato,
    #info-entrega,
    #info-pagamento {
        width: 22rem;
    }

    #cards-area {
        width: 22rem;
    }
}
</style>