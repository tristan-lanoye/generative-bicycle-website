<template>
	<div class="container-page container-quiz">
		<div class="content">
			<div class="content-top">
				<topbar/>
			</div>
			<div class="content-bottom">
				<quizContent :data="state"/>
			</div>
			<background/>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-quiz {

	}
</style>

<script>
	import { TimelineLite } from 'gsap'
	import { mapGetters } from 'vuex'

	import topbar from '~/components/topbar'
	import quizContent from '~/components/quiz/content'
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
				tl.fromTo('.background-container .base', 1.5, { opacity: 0, y: 60 }, { opacity: 0.085, y: 0, ease: Power3.easeInOut }, 0)
				tl.fromTo('.background-container .side.side-left', 1.5, { opacity: 0, x: -40, y: 40, rotation: '-5deg' }, { opacity: 0.15, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0)
				tl.fromTo('.background-container .side.side-right', 1.5, { opacity: 0, x: 40, y: 40, rotation: '5deg' }, { opacity: 0.15, x: 0, y: 0, rotation: '0deg', ease: Power3.easeInOut }, 0)
				tl.fromTo('.quiz-content-container .number', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.2)
				tl.fromTo('.quiz-content-container .title', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.3)
				tl.fromTo('.quiz-content-container .middle', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.4)
				tl.fromTo('.quiz-content-container .button', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: Power3.easeOut }, 0.5)
			},
			leave (el, done) {
				let tl = new TimelineLite({ onComplete: done })

				tl.add('start')
				tl.to('.container-quiz', 0.1, { opacity: 0 })
			}
		},
		components: {
			topbar,
			quizContent,
			background
		},
		computed: {
			...mapGetters({
				state: 'GET_STATE'
			})
		}
	}
</script>
