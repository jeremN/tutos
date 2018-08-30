<template>
	<div class="row">
	    <div class="form-group">
	        <label for="fullName-first">Firstname</label>
	        <input id="fullName-first" type="text" class="form-control" 
	        		:value="fullnameFirst" 
	        		@input="update(true, $event)">
	    </div>
	    <div class="form-group">
	        <label for="fullName-last">Lastname</label>
	        <input id="fullName-last" type="text" class="form-control" 
					:value="fullnameLast"
	        		@input="update(false, $event)">
	    </div>
	</div>
</template>

<script>
	export default {
		//data() {
		//	return {
		//		fullnameFirst: this.value.split(' ')[0],
		//		fullnameLast: this.value.split(' ')[1]
		//	}	
		//},
		props: ['value'],
		methods: {
			update(isFirst, event) {
				let name = '';
				if(isFirst) {
					name = event.target.value + ' ' + this.fullnameLast;
				}
				else {
					name = this.fullnameFirst + ' ' + event.target.value;

				}
				this.value = name;
				this.$emit('input', this.value);
			}
		},
		computed: {
			fullnameFirst() {
				return this.value.split(' ')[0];
			},
			fullnameLast() {
				return this.value.split(' ')[1];

			}
		}
	}
</script>

<style>
	
</style>