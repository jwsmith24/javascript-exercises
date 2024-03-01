

const findTheOldest = function (people) {

    // try using the accumlator as a person object that only updates if the new person is older

    return people.reduce((oldestPerson, currentPerson) => {

        if (!oldestPerson.name) {

            return currentPerson;
        }

        const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;

        return (currentAge > oldestAge) ? currentPerson : oldestPerson;

    }, {});
};




// Do not edit below this line
module.exports = findTheOldest;
