<template>
	<div class="quiz-content-container">
		<div class="top">
			<div class="number">Question {{ state.step.current + 1 }}/{{ questions.length }}</div>
			<div class="title">{{ currentQuestion.title }}</div>
		</div>
		<div class="middle">middle</div>
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
		display flex
		flex-direction column
		justify-content space-between
		align-items center
		height 100%
		font-family 'Circular Book'
		padding-top 70px

		.top {
			.number {
				font-size 16px
				opacity 0.6
				margin-bottom 40px
			}

			.title {
				font-size 64px
				font-family 'Circular Bold'
			}
		}

		.middle {
			display flex
			justify-content center
			align-items center
			flex 1
		}

		.bottom {
			.button-container {
				.button {
					display flex
					align-items center
					font-size 22px
					background #2E0D15
					padding 25px 70px
					border-radius 40px
					cursor pointer

					img {
						position relative
						top 2px
						color #fff
						margin-left 8px
					}
				}
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		name: 'quiz-content',
		props: ['data'],
		computed: {
			...mapGetters({
				state: 'GET_STATE',
				questions: 'GET_QUESTIONS'
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
				decrementStep: 'DECREMENT_STEP',
			}),
			nextStep() {
				if(this.currentStep < this.questions.length - 1) {
					this.incrementStep()
				}
			}
		}
	}
</script>
