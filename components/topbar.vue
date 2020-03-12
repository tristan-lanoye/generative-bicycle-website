<template>
	<div class="topbar-container">
		<div class="topbar-left" @click="prevStep">
			<img v-if="this.$router.currentRoute.name != 'index'" src="~/assets/icons/chevron-right.svg" alt="">
		 	<span v-if="this.$router.currentRoute.name != 'index'">Retour</span>
		</div>
		<div class="logo-container">
			<img src="~/assets/images/logo.png" alt="">
		</div>
		<div class="topbar-right"></div>
	</div>
</template>

<style lang="stylus" scoped>
	.topbar-container {
		position relative
		z-index 1
		display flex
		justify-content space-between
		align-items center

		.topbar-left {
			display flex
			align-items center
			flex 1
			text-align left
			font-size 20px
			cursor pointer
			opacity 0

			img {
				transform rotate(180deg)
				margin-right 7px
				width 18px
			}

			span {
				@media screen and (max-width: 500px) {
					display none
				}
			}
		}

		.logo-container {
			opacity 0

			img {
				width 65px
			}
		}

		.topbar-right {
			flex 1
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		name: 'topbar',
		computed: {
			...mapGetters({
				state: 'GET_STATE',
				questions: 'GET_QUESTIONS'
			}),
			currentStep() {
				return this.state.step.current
			}
		},
		methods: {
			...mapMutations({
				decrementStep: 'DECREMENT_STEP'
			}),
			prevStep() {
				if(this.currentStep === this.questions.length - 1 && this.$route.name === 'result') {
					this.$router.push('/quiz')
				} else if(this.currentStep > 0) {
					this.decrementStep()
				} else if(this.currentStep === 0) {
					this.$router.push('/')
				}
			}
		}
	}
</script>
