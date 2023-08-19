<script setup>
    import TerritoryComponent from './TerritoryComponent.vue';
    const props = defineProps(['territories'])
    
</script>

<template>
    <div :key="1" class="contents">
            <h1>Territories</h1>
            <p>Here are the list of territories.</p>
            <ul id="myUI" v-for="territory in territories">
                <TerritoryComponent :key="territory.id" :territory="territory"/>
            </ul>
        </div>
</template>

<style>
    .contents {
        position:absolute;
        left: 40%;
    }
</style>
