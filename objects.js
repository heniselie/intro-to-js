// this is string practice...........START............
const bouncer = (age) => {
        if (age >=21) {
            console.log('DRINK (at the bar)')

        } else {
        console.log('SHAME')
    }
}

bouncer(12);
bouncer(93);

const me ='martin'
console.log(me.length);

const myobject = {
    name: 'John',
    age: '41'
}

console.log(myobject['name'])
console.log(myobject.name)

//this is the end of string............................END...........


// this is challenge for object ......START.........


const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'c') {
        employee.status = 'vip'
    }else {
        employee.status = 'pleasant'

    }
    // console.log('micheal is always vip')
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

const person = {
    name:'Micheal',
    status: ''
}

//console.log(`${employee.name} is a total $ {status}`)
findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
findAndLogEmployeeStatus({

    name: 'carl clarck',
    status: ''
})

findAndLogEmployeeStatus({
    name: prompt('Enter employee name'),
    status: ''
})
//findEmployeeStatus('martin')
