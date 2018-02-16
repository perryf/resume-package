#! /usr/bin/env node

const fs = require('fs')
const cfonts = require('cfonts');

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        let perry = JSON.parse(data)
        printPerry(perry)
        return data
    }
})

function printPerry(obj) {

    cfonts.say(`${obj.firstName}|${obj.lastName}`, {
        font: 'block',
        align: 'center',
        colors: ['blue', 'candy']
    })
    cfonts.say(`
        ${obj.email}|
        ${obj.website}|
        github: ${obj.github}|
        resume: ${obj.resume}|
        linkedin: ${obj.linkedin}|
        skills: ${obj.proficientTechnologies},${obj.otherSkills}
        `, {
            font: 'console',
            align: 'center',
            colors: ['magenta'],
            space: false,
            letterSpacing: 0
        }
    )
}