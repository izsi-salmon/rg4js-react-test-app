// export function initRaygun({ apiKey, version }) {
//   window.rg4js('apiKey', apiKey);
//   window.rg4js('enableCrashReporting', true)
//   window.rg4js('setVersion', version);
//   window.rg4js('options', {
//     ignore3rdPartyErrors: true,
//   });
// }

export function initRaygun({ apiKey, rg4js }) {
  rg4js('apiKey', apiKey);
}

// export function initRaygun({ apiKey }) {
//   rg4js('getRaygunInstance').init(apiKey).attach();
// }
//
// export function onBeforeSend() {
//   rg4js('onBeforeSend', filterPayloadBeforeSend);
// }
//
// export function filterPayloadBeforeSend(payload) {
//   console.log('payload', payload);
//   return payload;
// }
