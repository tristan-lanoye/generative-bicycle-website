<template>
	<div class="download-container">
		<div class="title">
			Voici votre paquet <br/> de carte personnalisé
		</div>
		<div class="description">
			Ce paquet de carte a été créé spécialement pour vous selon votre personnalité et votre signe astrologique
		</div>
		<div class="download-button-container">
			<div class="download-button">
				<span>Télécharger votre résultat</span>
				<img src="~/assets/icons/sparkles.png" alt="">
			</div>
			<div class="refresh-button">
				<span class="refresh">Actualiser</span>
				<img src="~/assets/icons/refresh.svg" alt="">
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.download-container {
		position sticky
		top 0px
		flex 1
		text-align left
		margin-right 150px

		@media screen and (max-width: 1024px) {
			margin-right 75px
		}

		@media screen and (max-width: 850px) {
			text-align center
			margin-right 0
			margin-bottom 90px
		}

		.title {
			font-size 52px
			font-family 'Circular Bold'
			margin-bottom 35px
			max-width 650px
			opacity 0

			@media screen and (max-width: 670px) {
				font-size 38px
			}

			@media screen and (max-width: 500px) {
				font-size 28px
			}
		}

		.description {
			margin-bottom 60px
			max-width 500px
			line-height 170%
			opacity 0.85
			opacity 0
		}

		.download-button-container {
			display flex

			@media screen and (max-width: 850px) {
				justify-content center
			}

			@media screen and (max-width: 500px) {
				flex-direction column
			}

			.download-button {
				display flex
				justify-content center
				align-items center
				background rgba(0, 0, 0, 0.6)
				border-radius 60px
				padding 20px 50px
				height 70px
				margin-right 20px
				cursor pointer
				opacity 0
				border 3px solid rgba(0, 0, 0, 0)
				transition 0.3s border ease

				@media screen and (max-width: 500px) {
					border-radius 70px
					width 100%
					margin-bottom 20px
				}

				img {
					margin-left 10px
					width 20px
				}

				&:hover {
					border 3px solid #fff
				}
			}

			.refresh-button {
				display flex
				justify-content center
				align-items center
				background #222222
				min-width: 70px
				width 70px
				height 70px
				border-radius 50%
				cursor pointer
				opacity 0
				border 3px solid #222222
				transition 0.3s border ease

				.refresh {
					display none
				}

				@media screen and (max-width: 500px) {
					width 100%
					border-radius 70px

					.refresh {
						display inline-block
						margin-right 10px
					}
				}

				img {
					width 30px
				}

				&:hover {
					border 3px solid #fff
				}
			}
		}
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		name: 'download',
	}
</script>
