<template>
	<div class="container-page container-index">
		<div class="content">
			<background/>
			<div class="content-top">
				<topbar/>
			</div>
			<div class="content-bottom">
				<indexContent/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {
		.content-bottom {
			position relative
		}
	}
</style>

<script>
	import { TimelineLite } from 'gsap'

	import topbar from '~/components/topbar'
	import indexContent from '~/components/index/content'
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
				tl.fromTo('.index-content-container .title', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.2)
				tl.fromTo('.index-content-container .description', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.3)
				tl.fromTo('.index-content-container .button', 0.1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.4)
				tl.fromTo('.background-container .base', 1.5, { opacity: 0, y: 60 }, { opacity: 0.25, y: 0, ease: Power3.easeInOut }, 0)
				tl.fromTo('.background-container .side.side-left', 1.5, { opacity: 0, x: -40, y: 40, rotation: '-5deg' }, { opacity: window.innerWidth > 1200 ? 0.8 : 0.18, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0.05)
				tl.fromTo('.background-container .side.side-right', 1.5, { opacity: 0, x: 40, y: 40, rotation: '5deg' }, { opacity: window.innerWidth > 1200 ? 0.8 : 0.18, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0.1)
			},
			leave (el, done) {
				let tl = new TimelineLite({ onComplete: done })

				tl.add('start')
				tl.to('.container-index', 0.1, { opacity: 0 })
			}
		},
		components: {
			topbar,
			indexContent,
			background
		}
	}
</script>
