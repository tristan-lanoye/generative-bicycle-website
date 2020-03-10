export const state = () => ({
	global: {
		step: {
			current: 0
		}
	},
	questions: [
		{
			title: 'C\'est quoi ? 1 '
		},
		{
			title: 'C\'est quoi ? 2 '
		},
		{
			title: 'C\'est quoi ? 3 '
		},
		{
			title: 'C\'est quoi ? 4 '
		},
	]
})

export const mutations = {
	INCREMENT_STEP(state) {
		state.global.step.current++
	},
	DECREMENT_STEP(state) {
		state.global.step.current--
	}
}

export const getters = {
	GET_STATE(state) {
		return state.global
	},
	GET_QUESTIONS(state) {
		return state.questions
	},
}
