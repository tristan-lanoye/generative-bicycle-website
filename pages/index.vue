<template>
	<div class="container-page container-index">
		<div class="content">
			<div class="content-top">
				<topbar/>
			</div>
			<div class="content-bottom">
				<indexContent/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {

	}
</style>

<script>
	import topbar from '~/components/topbar'
	import indexContent from '~/components/index/content'

	export default {
		components: {
			topbar,
			indexContent
		}
	}
</script>
