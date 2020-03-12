<template>
	<transition name="animation" mode="out-in">
		<div :key="state.step.current" class="answers-container-wrapper">
			<div class="answers-container">
				<div v-for="(answer, i) in data" :key="answer.value" :class="['card-container', `${card.size}`]">
					<div @click="onClickCard($event, i, answer)" :class="['card', 'option-container', state.data.answers[state.step.current] && state.data.answers[state.step.current].index == i  ? 'active' : '']" :style="{ background: card.slug === 'color' ? answer.value : '' }">
						<p v-if="card.slug != 'color'" class="title">{{ answer.value }}</p>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="stylus" scoped>
	.answers-container-wrapper {
		width 100%
	}

	.animation-enter {
		opacity 0
		transform translateY(15px)
	}
	.animation-enter-to {
		opacity 1
		transform translateY(0px)
	}
	.animation-enter-active {
		transition all .45s cubic-bezier(0.5, 0, 0, 1) -0.05s
	}
	.animation-leave-active {
		transition all .35s cubic-bezier(0.5, 0, 0, 1) -0.05s
	}
	.animation-leave-to {
		transform translateY(-15px)
		opacity: 0
	}

	.answers-container {
		display flex
		justify-content center
		align-items center
		flex-wrap wrap
		width 100%

		.card-container {
			border-radius 5px
			margin 10px

			&.square {
				.card {
					width 80px
					height 80px
					border 2px solid white
					opacity 0.4
					cursor pointer
					transition 0.12s opacity ease
					border-radius 5px

					@media screen and (max-width: 600px) {
						width 60px
						height 60px
					}

					&:hover {
						opacity 0.7
					}

					&.active {
						opacity 1
					}
				}
			}

			&.small {
				.card {
					width 180px
					height 70px
					border-radius 35px
					background rgba(255, 255, 255, 0)
					border 3px solid white
					color #fff
					font-size 18px
					cursor pointer
					transition all 0.2s ease

					@media screen and (max-width: 600px) {
						width 140px
						height 55px
					}

					&:hover {
						background rgba(255, 255, 255, 0.2)
					}

					&.active {
						color #000
						background rgba(255, 255, 255, 1)
					}
				}
			}

			&.large {
				.card {
					width 340px
					height 140px
					border-radius 30px
					background rgba(255, 255, 255, 0)
					border 3px solid white
					color #fff
					font-size 18px
					cursor pointer
					transition all 0.2s ease

					@media screen and (max-width: 460px) {
						width 260px
						height 200px
					}

					&:hover {
						background rgba(255, 255, 255, 0.2)
					}

					&.active {
						color #000
						background rgba(255, 255, 255, 1)
					}
				}
			}
		}

		.card {
			display flex
			flex-direction column
			justify-content center
			align-items center
			padding 15px 25px
			box-shadow 0px 0px 97px rgba(0, 0, 0, 0.06), 0px 0px 4px rgba(0, 0, 0, 0.13)

			.title {
				font-weight normal
				font-size 18px
				line-height 25px
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import Swiper from 'swiper'

	export default {
		name: 'answers',
		props: ['data', 'card'],
		computed: {
			...mapGetters({
				state: 'GET_STATE'
			})
		},
		methods: {
			...mapMutations({
				putData: 'PUT_DATA'
			}),
			onClickCard(e, i, data) {
				const target = e.currentTarget

				if(!target.classList.contains('active')) {
					Array.from(document.querySelectorAll('.card')).forEach((card, i) => {
						card.classList.remove('active')
					})

					target.classList.add('active')

					const d = {
						step: this.state.step.current,
						index: i,
						content: data
					}

					this.putData(d)
				}
			}
		}
	}
</script>
