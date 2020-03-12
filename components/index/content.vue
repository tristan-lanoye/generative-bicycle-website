<template>
	<div class="index-content-container">
		<div class="title">Bienvenue sur <br/> l'expérience Bicycle</div>
		<div class="description">Créez votre jeu de carte personnalisé à partir de votre signe du zodiaque</div>
		<div class="button-container">
			<nuxt-link to="/quiz" class="button">
				Commencer l'expérience
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.index-content-container {
		position relative
		z-index 1
		display flex
		flex-direction column
		justify-content center
		align-items center
		height 100%
		font-family 'Circular Book'
		color #fff
		padding-bottom 100px

		@media screen and (max-height: 800px) {
			padding-bottom 0
		}

		.title {
			font-size 86px
			font-family 'Circular Bold'
			margin-bottom 25px
			line-height 110%
			opacity 0

			@media screen and (max-width: 1040px) {
				font-size 56px
			}

			@media screen and (max-width: 670px) {
				font-size 38px
			}

			@media screen and (max-width: 500px) {
				font-size 28px
			}
		}

		.description {
			font-size 22px
			opacity 0.65
			margin 0 auto
			line-height 160%
			margin-bottom 95px
			opacity 0

			@media screen and (max-width: 1040px) {
				font-size 18px
			}

			@media screen and (max-width: 670px) {
				font-size 16px
			}
		}

		.button-container {
			.button {
				font-size 22px
				background #2E0D15
				padding 25px 70px
				border-radius 40px
				border 3px solid #2E0D15
				transition 0.3s all ease
				opacity 0

				@media screen and (max-width: 1040px) {
					font-size 18px
				}

				@media screen and (max-width: 670px) {
					font-size 16px
					padding 15px 40px
				}

				@media screen and (max-width: 400px) {
					padding 10px 20px
				}
			}

			&:hover {
				.button {
					border 3px solid #fff
				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'index-content'
	}
</script>
