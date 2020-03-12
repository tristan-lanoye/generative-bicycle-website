<template>
	<div class="cards-container">
		<div class="section">
			<div class="title">
				Le paquet
			</div>
			<div class="canvas-container"></div>
		</div>
		<div class="section">
			<div class="title">
				Le dos de la carte
			</div>
			<div class="canvas-container"></div>
		</div>
		<div class="section">
			<div class="title">
				Le devant de la carte
			</div>
			<div class="canvas-container"></div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.cards-container {
		flex 1
		width 100%

		.section {
			text-align left
			margin-bottom 60px

			.title {
				font-family 'Circular Medium'
				font-size 32px
				margin-bottom 30px
				opacity 0

				@media screen and (max-width: 500px) {
					font-size 24px
				}
			}

			.canvas-container {
				width 300px
				height 400px
				background blue
				opacity 0

				@media screen and (max-width: 500px) {
					width 100%
				}
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		name: 'cards',
	}
</script>
