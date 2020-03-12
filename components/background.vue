<template>
	<div class="background-container">
		<img class="base" src="~/assets/images/decor-cards-base.png" alt="">
		<div class="side-container">
			<img class="side side-left" src="~/assets/images/decor-card-left.png" alt="">
			<img class="side side-right" src="~/assets/images/decor-card-right.png" alt="">
		</div>
		<div class="gradient"></div>
	</div>
</template>

<style lang="stylus" scoped>
	.background-container {
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		overflow hidden

		.gradient {
			position absolute
			left 0
			bottom 0
			width 100%
			height 300px
			background linear-gradient(to top, rgba(112, 8, 44, 1) 0%, rgba(112, 8, 44, 0.15) 69%, rgba(148, 26, 49, 0) 100%)
		}

		.base {
			position absolute
			bottom -150px
			left 0
			width 100%
			opacity 0.4
			opacity 0

			@media screen and (max-width: 1024px) {
				bottom 0
			}
		}

		.side-container {
			@media screen and (max-width: 500px) {
				opacity 0.1
			}
		}

		.side {
			position absolute
			opacity 0

			&.side-left {
				left 0
				bottom 0
			}

			&.side-right {
				right 0
				bottom 200px
			}

			@media screen and (max-width: 1200px) {
				opacity 0.2
			}
		}
	}
</style>

<script>
	export default {
		name: 'background'
	}
</script>
