<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span style="color: #ccc"><slot name="subtitle">Subtitle</slot></span>
		</div>
		<hr>
		<div>
			<slot name="content"></slot>
		</div>		
	</div>
</template>

<script>
 export default {
 }
	
</script>

<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: auto;
		text-align: center;
	}
	h2 {
		color: yellow;
	}
	.title {
		font-style: italic;
	}
</style>