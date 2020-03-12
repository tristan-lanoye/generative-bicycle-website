<template>
	<div class="canvas-container" :id="name">
	</div>
</template>

<style lang="stylus" scoped>
	.canvas-container {
		opacity 0

		@media screen and (max-width: 500px) {
			width 100%
		}
	}
</style>

<script>
	import paperColors from 'paper-colors'
	import { mapGetters, mapMutations } from 'vuex'

	import { pick } from '~/assets/scripts/utils'
	import { CardBack } from '~/assets/scripts/CardBack'

	export default {
		name: 'card',
		props: ['name'],
		mounted() {
			const settings = {
				card: {
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
						type: CardBack
					})
					card.displayBase()
					card.displayBack()
					card.initFold()
				}

				p.draw = () => {
					card.displayFold()
					card.displayBorder()
					card.displayWalls()
				}
			}

			new p5(script)
		}
	}
</script>
