<template>
    <img id="menu-icon" src="../assets/menu-icon.png" />
</template>

<script setup>

</script>

<style lang="less" scoped>

@orangechico: #db7416;
@gray: #64748b;
@dark: #1e293b;
@light: #f1f5f9;
@sidebar-width: 300px;

aside {
    background-color: @light;
    color: @dark;

    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    transition: 0.3s ease-out;

    @media(max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}

</style> 