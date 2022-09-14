import {firstNames, lastNames, emailProviders} from './userData.js';
import {setUser} from './errorMonitoring';

export function generateRandomUser() {
  var randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var randomlastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  var email = randomFirstName + randomlastName + "@" + emailProviders[Math.floor(Math.random() * emailProviders.length)] + ".com";
  var fullName = randomFirstName + " " + randomlastName;

  return {
    "email": email,
    "firstName": randomFirstName,
    "fullName": fullName
  };
}

export function generateRandomUserDataSet() {
  var user = generateRandomUser();

  setUser(user.email, user.firstName, user.fullName);
}
