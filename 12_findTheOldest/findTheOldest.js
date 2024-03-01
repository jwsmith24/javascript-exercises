const findTheOldest = function (people) {

    // try using the accumlator as a person object that only updates if the new person is older

    return people.reduce(function (oldestPerson, currentPerson) {

        let currentAge;
        let oldestAge;

        // if person is still alive just use current year to determine age

        if (!currentPerson.yearOfDeath) {

            currentPerson.yearOfDeath = new Date().getFullYear();
        }

        // initializes the oldestPerson object if it's empty
        if (!oldestPerson.name) {
            return currentPerson;
        }

        currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

        return (currentAge > oldestAge) ? currentPerson : oldestPerson;
    }, {});
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
