<template>
	<div>
		
    	<h3>Some User Details</h3>
    	<p>User loaded has ID: {{ $route.params.id }}</p>
    	<router-link 
    		tag="button"
    		:to="link"
    		class="btn btn-primary">Edit the user
    	</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				link: {
					name: 'userEdit', 
					params: {
						id: this.$route.params.id
					}, 
					query: { 
						locale: 'fr',
						q: 100 
					},
					hash: '#data'
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			//Utile si on controler ce qu'un utilisateur peut voir/accéder
			if(true) {
				next();
			}else {
				next(false);
			}
		}
	}
</script>