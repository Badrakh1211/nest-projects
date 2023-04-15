const bcrypt = require("bcrypt")
// const salt = bcrypt.genSaltSync(1)
const hash = bcrypt.hashSync("myPassword123", 2)
bcrypt.compareSync("myPassword123", hash)
bcrypt.compareSync("blavlaasf", hash)
console.log(hash);