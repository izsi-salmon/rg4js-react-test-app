
export function initRaygun({ apiKey }) {
  window.rg4js('apiKey', apiKey);
  window.rg4js('enableCrashReporting', true);
  window.rg4js('options', {
    ignore3rdPartyErrors: true
  });
}

export function onBeforeSend() {
  window.rg4js('onBeforeSend', logPayloadBeforeSend);
}

export function logPayloadBeforeSend(payload) {
  console.log('payload', payload);
  return payload;
}

export function setUser(email, firstName, fullName) {
  window.rg4js('setUser', {
    identifier: email,
    isAnonymous: false,
    email: email,
    firstName: firstName,
    fullName: fullName
  });
}
