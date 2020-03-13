<template>
	<div class="canvas-container" :id="name">
	</div>
</template>

<style lang="stylus" scoped>
	.canvas-container {
		opacity 0

		@media screen and (max-width: 850px) {
			display flex
			justify-content center
			width 100%
		}
	}
</style>

<script>
	import PubSub from 'pubsub-js'

	import paperColors from 'paper-colors'
	import { mapGetters, mapMutations } from 'vuex'

	import { pick } from '~/assets/scripts/utils'
	import { CardBack } from '~/assets/scripts/CardBack'
	import { CardFront } from '~/assets/scripts/CardFront'
	import { PackFront } from '~/assets/scripts/PackFront'

	export default {
		name: 'card',
		props: ['name'],
		mounted() {
			const settings = {
				card: {
					type: '',
					size: {
						width: 240,
						height: 336
					}
				},
				canvas: {
					container: null,
					size: {
						width: 240,
						height: 336
					},
					margin: 0
				},
				color: {
					palette: paperColors
				}
			}

			let cardType
			if(this.name === 'card-back') {
				cardType = CardBack
				settings.card.type = 'card-back'
			}
			else if(this.name === 'card-front') {
				cardType = CardFront
				settings.card.type = 'card-front'
			}
			else if(this.name === 'pack-front') {
				cardType = PackFront
				settings.card.type = 'pack-front'
			}

			settings.color.card = pick(settings.color.palette).hex

			const script = (p) => {
				let card

				function createCard(opts = {}) {
					let type = opts.hasOwnProperty('type') ? opts.type : CardBack

					opts.card = settings.card
					opts.color = settings.color

					return new type(p, opts)
				}

				p.setup = () => {
					const canvas = p.createCanvas(settings.canvas.size.width - settings.canvas.margin, settings.canvas.size.height - settings.canvas.margin)
					canvas.parent(`${ this.name }`)

					card = createCard({
						type: cardType
					})
					if(card.active) card.displayBase()
					if(card.active) card.displayBack()
					if(card.active) card.initFold()
				}

				p.draw = () => {
					if(card.active) card.displayFold()
					if(card.active) card.displayText()
					if(card.active) card.displayBorder()
					if(card.active) card.displayWalls()
				}
			}

			this.p5Instance = new p5(script)
		},
		beforeDestroy() {
			PubSub.publish('DESTROY')

			// this.p5Instance.remove()
			// this.p5Instance = null
		}
	}
</script>
