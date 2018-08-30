<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: {
			name: {
				type: String, //sera de type string
				//required: true, //Permet d'etre sur que le component fonctionnera
				//default: 'Jerem'
			},
			resetFn: Function,
			userAge: Number
		},	
		methods: {
			switchName() {
				return this.name.split("").reverse().join("");
			},
			resetName() {
				this.name = 'Jerem';
				this.$emit('nameReseted', this.name); //create an event (event name, what to listen)
			}
		},
		created() {
			eventBus.$on('ageEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
