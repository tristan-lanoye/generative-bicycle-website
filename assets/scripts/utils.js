export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min
}

export const pick = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export const hexToRgb = (hex) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null
}

export const addF = (p, v1, v2) => {
	return p.createVector(v1.x + v2.x, v1.y + v2.y)
}

export const subF = (p, v1, v2) => {
	return p.createVector(v1.x - v2.x, v1.y - v2.y)
}

export const mulF = (p, v1, v2) => {
	return p.createVector(v1.x * v2.x, v1.y * v2.y)
}

export const divF = (p, v1, v2) => {
	return p.createVector(v2.x == 0 ? 0 : v1.x / v2.x, v2.y == 0 ? 0 : v1.y / v2.y)
}
