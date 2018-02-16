#! /usr/bin/env node

const fs = require('fs')
const colors = require('colors')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // let perry = JSON.parse(data)
        // console.log(perry.name)
        console.log(data.rainbow.italic.bgBlack)
        return data
    }
})