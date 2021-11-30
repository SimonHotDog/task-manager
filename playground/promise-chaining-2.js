require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('610c57556172f60950e4cc2f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('610c8892c43b3c407ce5a855').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})