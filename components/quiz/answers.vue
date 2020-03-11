<template>
	<div class="answers-container">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(answer, i) in data" :key="i + Math.random()" :class="['swiper-slide', `${card.size}`]">
					<div @click="onClickSquare" class="card option-container active" :style="{ background: card.slug === 'color' ? answer : '' }">
						<p v-if="card.slug != 'color'" class="title">{{ answer }}</p>
					</div>
				</div>
			</div>
      	</div>
	</div>
</template>

<style lang="stylus" scoped>
	.answers-container {
		width 100%

		.swiper-container {
			width 100%
			height 100%
			overflow visible
		}

		.swiper-slide {
			border-radius 5px

			&.square {
				width 80px
				height 80px

				.card {
					width 80px
					height 80px
					border 2px solid white
					opacity 0.4
					cursor pointer
					transition 0.12s opacity ease
					border-radius 5px

					&:hover {
						opacity 0.7
					}

					&.active {
						opacity 1
					}
				}
			}

			&.small {
				width 180px
				height 80px

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
				max-width 300px
				max-height 150px

				.card {
					max-width 300px
					max-height 150px
				}
			}
		}

		.card {
			display flex
			flex-direction column
			justify-content center
			align-items center
			padding 10px 20px
			background #fff
			color #000
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
	import Swiper from 'swiper'

	export default {
		name: 'answers',
		props: ['data', 'card'],
		methods: {
			onClickSquare(e) {
				const target = e.target

				if(!target.classList.contains('active')) {
					Array.from(document.querySelectorAll('.card')).forEach((card, i) => {
						card.classList.remove('active')
					})

					target.classList.add('active')
				}
			}
		},
		mounted() {
			window.setTimeout(() => {
				this.swiper = new Swiper('.swiper-container', {
					slidesPerView: 'auto',
					spaceBetween: 30,

				})
			}, 0)
		},
		updated() {
			window.setTimeout(() => {
				this.swiper = new Swiper('.swiper-container', {
					slidesPerView: 'auto',
					spaceBetween: 30,

				})
			}, 0)
		}
	}
</script>
