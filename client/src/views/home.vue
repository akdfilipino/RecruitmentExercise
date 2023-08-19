<script setup>
    import { ref, onMounted, inject } from 'vue'
    import TerritoryListComponent from '../components/TerritoryListComponent.vue'
    import router from '../routes/index.js'

    const url = `${import.meta.env.VITE_BE_ENDPOINT}/Territories/All`
    const territoriesList = ref()

    const { isLoggedIn } = inject('isLoggedIn')

    if(!isLoggedIn.value)
    {
        router.push( { name : 'login'} )
    }

    onMounted( async () => {
        const res = await fetch(url).then(response => response.json())
        territoriesList.value = arrangeTerritories(res.data)
    })

    const arrangeTerritories = (territoriesList) => {
        const territoryArranger = {};
        const arrangedTerritories = [];

        territoriesList.map((territory) => {
            return (territoryArranger[territory.id] = { ...territory, children: [] });
        })

        territoriesList.map(territory => {
            return ((territory.parent) ? territoryArranger[territory.parent].children.push(territoryArranger[territory.id])
                : arrangedTerritories.push(territoryArranger[territory.id]));
        });

        return arrangedTerritories;
    }

</script>

<template>
    <TerritoryListComponent v-bind:territories="territoriesList"/>
</template>