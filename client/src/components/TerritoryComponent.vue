<script setup>
    import { ref } from 'vue'
    const props = defineProps(['territory'])
    var show = ref(false)

</script>

<template>
    <li v-if="show">
        <span class="caret" v-show="show" :key="territory.id" @click="show = !show">{{ territory.name }}</span>
        <ul class="nested" v-for="child in this.territory.children">
            <TerritoryComponent :key="child.id" :territory="child"/>
        </ul>
    </li>
    <li v-else>
        <span class="caret" v-show="!show" :key="territory.id" @click="show = !show">{{ territory.name }}</span>
    </li>
</template>

