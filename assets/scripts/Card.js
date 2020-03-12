// import palettes from 'nice-color-palettes'
import paperColors from 'paper-colors'
import { pick } from './utils.js'

// 'Base' Card Class
export default class Card {
    constructor(p, opts = {}) {
		this.p = p

		this.global = {}
		this.global.palette = typeof opts.color.palette !== 'undefined' ? opts.color.palette : paperColors

		/*
		 * CARD SETTINGS
		*/
		this.card = {}
		this.card.size = {
			width: typeof opts.card.size !== 'undefined' ?  opts.card.size.width : 240,
			height: typeof opts.card.size !== 'undefined' ?  opts.card.size.height : 336
		}
		this.card.position = {
			x: typeof opts.card.position !== 'undefined' ? opts.card.position.x : this.p.width / 2 - this.card.size.width / 2,
			y: typeof opts.card.position !== 'undefined' ? opts.card.position.y : this.p.height / 2 - this.card.size.height / 2
		}

		this.card.limit = {
			x1: this.card.position.x,
			x2: this.card.position.x + this.card.size.width,
			y1: this.card.position.y,
			y2: this.card.position.y + this.card.size.height
		}
		this.card.margin = typeof opts.card.margin !== 'undefined' ? opts.card.margin : 14
		this.card.borderRadius = typeof opts.card.borderRadius !== 'undefined' ? opts.card.borderRadius : 5

		/*
		 * CANVAS SETTINGS
		*/
		this.canvas = {}
		this.canvas.size = {
			width: this.p.width || opts.canvas.size.width,
			height: this.p.height || opts.canvas.size.height
		}
		this.canvas.color = typeof opts.color.background !== 'undefined' ? opts.color.background : '#67162c'
		this.canvas.wall = {
			width: (this.canvas.size.width - this.card.size.width) / 2,
			height: (this.canvas.size.height - this.card.size.height) / 2
		}

		/*
		 * INNER SETTINGS
		*/
		this.inner = {}
		this.inner.position = {
			x: this.card.position.x + this.card.margin / 2,
			y: this.card.position.y + this.card.margin / 2
		}
		this.inner.size = {
			width: this.card.size.width - this.card.margin,
			height: this.card.size.height - this.card.margin
		}
		this.inner.center = {
			x: this.inner.position.x + this.inner.size.width / 2,
			y: this.inner.position.y + this.inner.size.height / 2
		}
		this.inner.margin = 0
		this.inner.limit = {
			x1: this.inner.position.x + this.inner.margin / 2,
			x2: this.inner.position.x + this.inner.size.width - this.inner.margin,
			y1: this.inner.position.y + this.inner.margin / 2,
			y2: this.inner.position.y + this.inner.size.height - this.inner.margin
		}
		this.inner.color = typeof opts.color.card !== 'undefined' ? opts.color.card : pick(this.global.palette).hex

		//user data
		this.data = [
			{
				content: {
					value: '#0D2226'
				}
			},
			{
				content: {
					color: '#37A492',
					complexity: 0,
					darkness: 0
				}
			}
		]
		this.inner.color = this.data[0].content.value

		this.init()
	}

	init() {
		window.addEventListener('keydown', (e) => {
			if(e.key === 'Enter') {
				this.p.saveCanvas(`render`, 'jpg')
			}
		})
	}

    displayBase() {
        this.p.noStroke()
        this.p.fill(255)
		this.p.rect(this.card.position.x, this.card.position.y, this.card.size.width, this.card.size.height, this.card.borderRadius)
	}

	displayWalls() {
		this.p.noStroke()
		this.p.fill(0)

		this.p.rect(0, 0, this.canvas.size.width, this.canvas.wall.height)
		this.p.rect(0, this.canvas.size.height - this.canvas.wall.height, this.canvas.size.width, this.canvas.size.height)
		this.p.rect(0, 0, this.canvas.wall.width, this.canvas.size.height)
		this.p.rect(this.canvas.size.width - this.canvas.wall.width, 0, this.canvas.size.width, this.canvas.size.height)
	}

    displayBorder() {
		this.p.strokeWeight(3)
        this.p.stroke(255)
        this.p.noFill()
        this.p.rect(this.inner.position.x, this.inner.position.y, this.inner.size.width, this.inner.size.height, this.card.borderRadius)

		this.p.strokeWeight(5)
        this.p.stroke(255)
        this.p.noFill()
		this.p.rect(this.inner.position.x - 2, this.inner.position.y - 2, this.inner.size.width + 4, this.inner.size.height + 4, this.card.borderRadius)

		this.p.strokeWeight(5)
        this.p.stroke(255)
        this.p.noFill()
		this.p.rect(this.inner.position.x - 6, this.inner.position.y - 6, this.inner.size.width + 12, this.inner.size.height + 12, this.card.borderRadius)

		this.p.strokeWeight(15)
        this.p.stroke(this.canvas.color)
        this.p.noFill()
		this.p.rect(this.card.position.x - 7, this.card.position.y - 7, this.card.size.width + 14, this.card.size.height + 14, this.card.borderRadius * 2.685)
	}

	displayBack() {
        this.p.noStroke()
        this.p.fill(this.inner.color)
        this.p.rect(this.inner.position.x, this.inner.position.y, this.inner.size.width, this.inner.size.height)
	}
}
