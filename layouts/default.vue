<template>
	<div class="__layout-wrapper main">
		<nuxt/>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus">
	html {
		font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
		font-size 16px
		word-spacing 1px
		-ms-text-size-adjust 100%
		-webkit-text-size-adjust 100%
		-moz-osx-font-smoothing grayscale
		-webkit-font-smoothing antialiased
		box-sizing border-box
	}

	.__layout-wrapper {
		background #67162C
		color #fff
		font-family 'Circular Book'
	}

	.container-page {
		max-width 1920px
		margin 0 auto
		height 100vh

		.content {
			display flex
			height 100%
			flex-direction column
			padding 80px 120px
			text-align center

			.content-bottom {
				flex 1
			}
		}
	}

	*,
	*:before,
	*:after {
		box-sizing border-box
		margin 0
	}
</style>
