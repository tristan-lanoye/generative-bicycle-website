export const getSinusoidal = {
	func: (p, v, amount) => {
		return p.createVector(amount * Math.sin(v.x), amount * Math.sin(v.y))
	},
	stats: {
		rigid: 3,
		refined: 0,
		mystical: 0
	}
}

export const getHyperbolic = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let theta = p.atan2(v.x, v.y)
		let x = amount * Math.sin(theta) / r
		let y = amount * Math.cos(theta) * r
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getSwirl = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let x = amount * (v.x * Math.sin(r * r) - v.y * Math.cos(r * r))
		let y = amount * (v.x * Math.cos(r * r) - v.y * Math.sin(r * r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getSpherical = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let x = amount * v.x * (1 / (r * r))
		let y = amount * v.y * (1 / (r * r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getHorseshoe = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let x = amount * (1 / r * ((v.x - v.y) * (v.x + v.y)))
		let y = amount * (1 / r * (2 * v.x * v.y))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getPolar = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * (angle / Math.PI)
		let y = amount * (r - 1)
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getHandkerchief = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * r * Math.sin(angle + r)
		let y = amount * r * Math.cos(angle - r)
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getHeart = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * r * (Math.sin(angle * r))
		let y = amount * r * (Math.cos(angle * r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getDisc = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * (angle / Math.PI) * (Math.sin(Math.PI * r))
		let y = amount * (angle / Math.PI) * (Math.cos(Math.PI * r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getSpiral = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * (1 / r) * (Math.cos(angle) + Math.sin(r))
		let y = amount * (1 / r) * (Math.sin(angle) - Math.cos(r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getDiamond = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)
		let x = amount * (Math.sin(angle) * Math.cos(r))
		let y = amount * (Math.cos(angle) * Math.sin(r))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getEx = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)

		let p0 = Math.sin(angle + r)
		let p1 = Math.cos(angle - r)

		let x = amount * r * ((p0 * p0 * p0) + (p1 * p1 * p1))
		let y = amount * r * ((p0 * p0 * p0) - (p1 * p1 * p1))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getJulia = {
	func: (p, v, amount) => {
		let r = amount * Math.sqrt(v.mag())
		let theta = 0.5 * Math.atan2(v.x, v.y) + (2.0 * randomRange(0, 1)) * Math.PI

		let x = r * Math.cos(theta)
		let y = r * Math.sin(theta)

		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getJuliaLeft = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)

		let x = amount * Math.sqrt(r) * (-Math.cos(angle / 2 + 0))
		let y = amount * Math.sqrt(r) * (-Math.sin(angle / 2 + 0))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getJuliaRight = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)

		let x = amount * Math.sqrt(r) * (Math.cos(angle / 2 + 0))
		let y = amount * Math.sqrt(r) * (Math.sin(angle / 2 + 0))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getFisheye = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)

		let x = amount * (2 / (r + 1)) * (v.x)
		let y = amount * (2 / (r + 1)) * (v.y)
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getExponential = {
	func: (p, v, amount) => {
		let x = amount * Math.exp(v.x - 1) * (Math.cos(Math.PI * v.y))
		let y = amount * Math.exp(v.x - 1) * (Math.sin(Math.PI * v.y))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getPower = {
	func: (p, v, amount) => {
		let r = v.mag() + 1.0e-10
		let angle = p.atan2(v.x, v.y)

		let x = amount * Math.pow(r, Math.sin(angle)) * (Math.cos(angle))
		let y = amount * Math.pow(r, Math.sin(angle)) * (Math.sin(angle))
		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getSech = {
	func: (p, v, amount) => {
		let weight = 1
		let d = Math.cos(2.0 * (v.y) + Math.cosh(2.0 * (v.x)))

		if (d != 0) d = weight * 2.0 / d
		return p.createVector(d * Math.cos(v.y) * Math.cosh(v.x), -d * Math.sin(v.y) * Math.sinh(v.x))
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}

export const getPerspective = {
	func: (p, v, amount) => {
		let p1 = 90
		let p2 = 300

		let x = amount * (p2 / (p2 - v.y * Math.sin(p1)) * v.x)
		let y = amount * (p2 / (p2 - v.y * Math.sin(p1)) * v.y * Math.cos(p1))

		return p.createVector(x, y)
	},
	stats: {
		rigid: 0,
		refined: 0,
		mystical: 0
	}
}
