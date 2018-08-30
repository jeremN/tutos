<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filter &amp; mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>

    import List from './components/List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello world',
            }
        },
        filters: {
            //register filter locally
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List,
        }
    }
</script>

<style>

</style>
