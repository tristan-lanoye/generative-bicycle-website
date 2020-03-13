const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Bicycle | Make Your Own Deck',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/bicycle-make-your-deck/favicon/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/bicycle-make-your-deck/favicon/favicon-32x32.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/bicycle-make-your-deck/favicon/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/bicycle-make-your-deck/favicon/site.webmanifest' },
			{ rel: 'mask-icon', href: '/bicycle-make-your-deck/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css' }
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js' },
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js' }
		]
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

	router: {
		base: '/bicycle-make-your-deck/'
	},

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
