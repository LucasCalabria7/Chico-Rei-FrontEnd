<script setup>
import './styles/GlobalStyles.css';
import Header from './components/Header.vue';
import Card from './components/Card.vue';

</script>

<template>
  <div id="global-container" >
    <Header />
    <div id="global-filter">
      <img id="filter-icon" src="./assets/filter.png" />

      <div id="input-area">
        <input id="search" placeholder="O que você procura ?" type="text" v-model="searchValue" />
        <select class="input-select" v-model="selectedMensCategory" >
          <option value="default"  >Masculinos</option>
          <option value="mens-shirts">Camisetas</option>
          <option value="mens-shoes">Tênis</option>
          <option value="mens-watches">Relógios</option>
          <option value="sunglasses">Óculos</option>
        </select>
        <select class="input-select" v-model="selectedWomensCategory">
          <option value=""  >Femininos</option>
          <option value="womens-dresses">Vestidos</option>
          <option value="womens-shoes">Sapatos</option>
          <option value="womens-watches">Relógios</option>
          <option value="womens-bags">Bolsas</option>
          <option value="womens-jewellery">Jóias</option>
        </select>
        <select class="input-select" v-model="selectedPriceCategory">
          <option value=""  >Preço</option>
          <option value="expensives">Maiores Preços</option>
          <option value="cheaps">Menores Preços</option>
        </select>
        <select class="input-select" v-model="selectedRatedCategory">
          <option value=""  >Popularidade</option>
          <option value="top-rated">Mais Populares</option>
          <option value="less-rated">Menos Populares</option>
        </select>
      </div>
    </div>
    <main id="main-container">
      <Card  />
    </main>
  </div>
</template>

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

#global-filter {
  height: 15vh;
  max-width: @fullwidth;
  border-bottom: 4px solid @orangechico;
  display: flex;
  align-items: center;
  justify-content: center;
}

#filter-icon {
  height: 1.5rem;
  padding: 0 2rem;
}

#input-area {
  display: flex;
  gap: @gap;
}

#search, .input-select {
  height: 4vh;
  font-weight: 600;
  text-align: center;
  border-radius: @gap;
  width: 12vw;
}
</style>
