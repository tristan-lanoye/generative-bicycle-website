const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Design Génératif',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/favicon/site.webmanifest' },
			{ rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
			{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css'},
		],
		script: []
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/styles/main.styl'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
	],

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	}
}
