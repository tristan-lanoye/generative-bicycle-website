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
		display flex
		flex-direction column
		justify-content center
		align-items center
		height 100%
		font-family 'Circular Book'
		color #fff
		padding-bottom 100px

		.title {
			font-size 86px
			font-family 'Circular Bold'
			margin-bottom 25px
			line-height 110%
		}

		.description {
			font-size 22px
			opacity 0.65
			margin 0 auto
			line-height 160%
			margin-bottom 95px
		}

		.button-container {
			.button {
				font-size 22px
				background #2E0D15
				padding 25px 70px
				border-radius 40px
			}
		}
	}
</style>

<script>
	export default {
		name: 'index-content'
	}
</script>
