<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <hr>
        <div class="row">
        	<app-list></app-list>
            <app-info></app-info>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
	import Header from './components/shared/Header.vue';
	import Footer from './components/shared/Footer.vue';
	import Servers from './components/servers/Servers.vue';
	import ServerDetails from './components/servers/ServerDetails.vue';

	export default {
		components: {
			appHeader: Header,
			'app-footer': Footer,
			'app-list': Servers,
			'app-info': ServerDetails,
		}
	}
</script>

<style>
</style>
