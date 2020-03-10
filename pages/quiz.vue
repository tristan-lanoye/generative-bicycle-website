<template>
	<div class="container-page container-quiz">
		<div class="content">
			<div class="content-top">
				<topbar/>
			</div>
			<div class="content-bottom">
				<quizContent :data="state"/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-quiz {

	}
</style>

<script>
	import { mapGetters } from 'vuex'

	import topbar from '~/components/topbar'
	import quizContent from '~/components/quiz/content'

	export default {
		components: {
			topbar,
			quizContent
		},
		computed: {
			...mapGetters({
				state: 'GET_STATE'
			})
		}
	}
</script>
