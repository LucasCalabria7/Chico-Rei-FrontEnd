<template>
    <div>
        <div class="global-header">
            <img id="first-logo" src="../assets/first-logo.png" alt="firstlogo" />
            <h2 id="main-logo">Chico Rei</h2>
            <div id="user-bag-area">
                <img id="user-logo" src="../assets/user.png" alt="firstlogo" v-on:click="endpointUser" />
                <img id="shop-bag" src="../assets/shopping-bag.png" alt="firstlogo" />
                <p id="vertical-bar">|</p>

                <div id="contact-area">
                    <h2><a id="contato" href="https://chicorei.com/" target="_blank">Contato</a></h2>
                    <a href="https://www.instagram.com/chicorei/" target="_blank"><img id="insta-icon"
                            src="../assets/instagram-icon.svg" /></a>
                    <a href="https://www.facebook.com/chicorei" target="_blank"><img id="face-icon"
                            src="../assets/facebook-icon.svg" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        endpointUser: function () {
            alert("Endpoint Login")
        }
    },
};
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alkatra&display=swap');

@dark : #201f1e;
@light: #f2efe9;
@titlefont: 'Alkatra', cursive;

.global-header {
    height: 10vh;
    max-width: 100vw;
    background-color: @light;
    box-shadow: 0px 4px @dark;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#first-logo {
    height: 4rem;
    width: 4rem;
}

#main-logo {
    color: @dark;
    font-family: @titlefont;
}

#contact-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

#contato {
    color: @dark;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.25rem;
}

#insta-icon,
#face-icon {
    margin-top: 10px;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
}

#user-bag-area {
    display: flex;
    align-items: center;
    height: 1rem;
    gap: 0.5rem;
}

#user-logo,
#shop-bag {
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
}

#vertical-bar {
    font-size: 1.25rem
}
</style>