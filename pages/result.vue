<template>
	<div class="container-page container-result">
		<div class="content">
			<background/>
			<div class="content-top">
				<topbar/>
			</div>
			<div class="content-middle">
				<download/>
				<cards/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-result {
		height auto

		.content-middle {
			margin-top 140px
			width 100%
			display flex

			@media screen and (max-width: 850px) {
				flex-direction column
				align-items center
			}
		}
	}
</style>

<script>
	import { TimelineLite } from 'gsap'
	import { mapGetters, mapMutations } from 'vuex'

	import topbar from '~/components/topbar'
	import cards from '~/components/result/cards'
	import download from '~/components/result/download'
	import background from '~/components/background'

	export default {
		transition: {
			mode: 'out-in',
			css: false,
			appear: true,
			enter (el, done) {
				let tl = new TimelineLite({ onComplete: done })

				tl.add('start')
				tl.fromTo('.logo-container', 0.6, { opacity: 0 }, { opacity: 1 }, 0)
				tl.fromTo('.topbar-left', 0.6, { opacity: 0 }, { opacity: 1 }, 0)
				tl.fromTo('.background-container .base', 1.5, { opacity: 0, y: 60 }, { opacity: 0.065, y: 0, ease: Power3.easeInOut }, 0)
				tl.fromTo('.background-container .side.side-left', 1.5, { opacity: 0, x: -40, y: 40, rotation: '-5deg' }, { opacity: 0.085, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0)
				tl.fromTo('.background-container .side.side-right', 1.5, { opacity: 0, x: 40, y: 40, rotation: '5deg' }, { opacity: 0.085, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0)
				tl.fromTo('.container-result .download-container .title', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.3)
				tl.fromTo('.container-result .download-container .description', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.4)
				tl.fromTo('.container-result .download-button', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.5)
				tl.fromTo('.container-result .refresh-button', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.55)
				tl.staggerFromTo('.container-result .cards-container .title', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.3, 0.6)
				tl.staggerFromTo('.container-result .cards-container .canvas-container', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.3, 0.6)
			},
			leave (el, done) {
				let tl = new TimelineLite({ onComplete: done })

				tl.add('start')
				tl.to('.container-result', 0.1, { opacity: 0 })
			}
		},
		components: {
			topbar,
			cards,
			download,
			background
		},
		computed: {
			...mapGetters({
				state: 'GET_STATE'
			})
		},
		methods: {
			...mapMutations({
				putStats: 'PUT_STATS'
			}),
			isEmpty(obj) {
				return Object.keys(obj).length === 0
			}
		},
		mounted() {
			const stats = {
				rigid: 0,
				refined: 0,
				mystical: 0
			}

			this.state.data.answers.forEach((answer, i) => {
				if(!this.isEmpty(answer.stats)) {
					stats.rigid += answer.stats.rigid
					stats.refined += answer.stats.refined
					stats.mystical += answer.stats.mystical
				}
			})

			this.putStats(stats)

			console.log(stats)
		}
	}
</script>
