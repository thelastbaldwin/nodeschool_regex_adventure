module.exports = function (str) {
	return /^(0x[0-9a-fA-F]{2}\s+){8}$/.test(str);
}