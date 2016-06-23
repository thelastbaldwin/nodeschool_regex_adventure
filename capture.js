module.exports = function (str) {
	var m = /x=([0-9]+)/.exec(str)
	return m ? m[1] : null
}