require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('610c3a0629f8fe0434e91d10', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('610b3c177f932b0f087450ed', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})