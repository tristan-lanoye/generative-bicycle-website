<template>
	<div class="cards-container">
		<div class="section">
			<div class="title">
				Le dos de la carte
			</div>
			<card name="card-back"/>
		</div>
		<div class="section">
			<div class="title">
				Le devant de la carte
			</div>
			<card name="card-front"/>
		</div>
		<div class="section">
			<div class="title">
				Le paquet
			</div>
			<card name="pack-front"/>
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

			@media screen and (max-width: 850px) {
				text-align center
			}

			.title {
				font-family 'Circular Medium'
				font-size 32px
				margin-bottom 30px
				opacity 0

				@media screen and (max-width: 500px) {
					font-size 24px
				}
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	import card from '@/components/result/card'

	export default {
		name: 'cards',
		components: {
			card
		}
	}
</script>
