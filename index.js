const express = require('express')
const app = express()

app.get('/', (req, res) => {
	const re1 = /[^()]+/g; // match everything not a parentheses
	const re2 = /[^,]+/g; // match everything not a comma

	const userInfo = {
		ipAddress: req.ip,
		language: req.headers["accept-language"].match(re2)[0],
		os: req.headers["user-agent"].match(re1)[1]
	}

	res.json(userInfo)
})

app.listen(process.env.PORT || 3000, () => console.log("listening on port 3000"))