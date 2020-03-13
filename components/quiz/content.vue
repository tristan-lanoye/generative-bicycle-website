<template>
	<div class="quiz-content-container">
		<div class="top">
			<div class="number">Question {{ state.step.current + 1 }}/{{ questions.length }}</div>
			<div class="title">
				<transition name="transition" mode="out-in">
					<span :key="currentQuestion.title">{{ currentQuestion.title }}</span>
				</transition>
			</div>
		</div>
		<div class="middle">
			<answers :data="currentQuestion.options" :card="currentQuestion.card"/>
		</div>
		<div class="bottom">
			<div class="button-container" @click="nextStep">
				<div class="button">
					<span>Question suivante</span>
					<img src="~/assets/icons/chevron-right.svg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.quiz-content-container {
		position relative
		z-index 1
		display flex
		flex-direction column
		justify-content space-between
		align-items center
		height 100%
		font-family 'Circular Book'
		padding-top 70px

		.transition-enter {
			opacity 0
			transform translateY(15px)
		}
		.transition-enter-to {
			opacity 1
			transform translateY(0px)
		}
		.transition-enter-active {
			transition all .45s cubic-bezier(0.5, 0, 0, 1) -0.1s
		}
		.transition-leave-active {
			transition all .35s cubic-bezier(0.5, 0, 0, 1) -0.1s
		}
		.transition-leave-to {
			transform translateY(-15px)
			opacity: 0
		}

		.top {
			width 100%

			.number {
				font-size 16px
				opacity 0.6
				margin-bottom 30px
				opacity 0

				@media screen and (max-width: 1024px) {
					margin-bottom 20px
				}
			}

			.title {
				font-size 64px
				font-family 'Circular Bold'
				opacity 0
				margin-bottom 40px

				@media screen and (max-width: 1024px) {
					font-size 38px
					line-height 130%
				}

				@media screen and (max-width: 600px) {
					font-size 28px
				}

				span {
					display inline-block
				}
			}
		}

		.middle {
			display flex
			justify-content center
			align-items center
			flex 1
			width 100%
			opacity 0
			margin-bottom 40px
		}

		.bottom {
			margin-bottom 20px

			.button-container {
				.button {
					display flex
					align-items center
					font-size 22px
					background #2E0D15
					padding 25px 70px
					border-radius 40px
					cursor pointer
					border 3px solid #2E0D15
					transition 0.3s border ease
					opacity 0

					@media screen and (max-width: 1024px) {
						padding 20px 60px
						font-size 20px
					}

					@media screen and (max-width: 500px) {
						padding 15px 40px
						font-size 16px
					}

					img {
						position relative
						top 2px
						color #fff
						margin-left 8px
					}

					&:hover {
						border 3px solid #fff
					}
				}
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	import answers from '~/components/quiz/answers'

	export default {
		name: 'quiz-content',
		props: ['data'],
		components: {
			answers
		},
		computed: {
			...mapGetters({
				state: 'GET_STATE',
				questions: 'GET_QUESTIONS',
			}),
			currentStep() {
				return this.state.step.current
			},
			currentQuestion() {
				return this.questions.filter((q, i) => i === this.currentStep)[0]
			}
		},
		methods: {
			...mapMutations({
				incrementStep: 'INCREMENT_STEP',
				decrementStep: 'DECREMENT_STEP'
			}),
			nextStep() {
				this.keyValue = Math.random()
				if(this.state.data.answers[this.state.step.current] && this.currentStep < this.questions.length - 1) {
					this.incrementStep()
				} else if(this.currentStep === this.questions.length - 1) {
					this.$router.push('/result')
				} else if(this.state.data.answers[this.state.step.current] === undefined) {
					toastr.options.timeOut = 1000
					toastr.error('Select an option')
				}
			}
		}
	}
</script>
