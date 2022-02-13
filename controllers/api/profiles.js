const Profile = require('../../models/profile')

module.exports = {
    getProfile
}

async function getProfile(req, res) {
    if (res.ok) console.log(res)
    else {
        console.log('error')
    }
    console.log('Ctrl fired')
}