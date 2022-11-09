import React, { useEffect } from 'react';
import {generateRandomUser} from './dataGeneration.js';
import {apiKey} from './apiKey.js';

function initRaygun({ apiKey }) {

  window.rg4js('apiKey', apiKey);
  window.rg4js('enableCrashReporting', true);
  window.rg4js('options', {
    ignore3rdPartyErrors: true
  });
}

function onBeforeSend() {
  window.rg4js('onBeforeSend', logPayloadBeforeSend);
}

function logPayloadBeforeSend(payload) {
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

export default function Raygun(props) {
  useEffect(() => {
    const script = document.createElement("script");
    //script.src = "//cdn.raygun.io/raygun4js/raygun.min.js";
    script.async = true;
    script.type = 'text/javascript';
    script.text = `!(function (a, b, c, d, e, f, g, h) {
            ;(a.RaygunObject = e),
              (a[e] =
                a[e] ||
                function () {
                  ;(a[e].o = a[e].o || []).push(arguments)
                }),
              (f = b.createElement(c)),
              (g = b.getElementsByTagName(c)[0]),
              (f.async = 1),
              (f.src = d),
              g.parentNode.insertBefore(f, g),
              (h = a.onerror),
              (a.onerror = function (b, c, d, f, g) {
                h && h(b, c, d, f, g),
                  g || (g = new Error(b)),
                  (a[e].q = a[e].q || []),
                  a[e].q.push({
                    e: g,
                  })
              })
          })(window, document, 'script', '//cdn.raygun.io/raygun4js/raygun.min.js', 'rg4js')`

    document.body.appendChild(script);

    initRaygun({
      apiKey: apiKey
    });

    // Log payload before send
    onBeforeSend();

    function initUser(){
      var user = generateRandomUser();

      setUser(user.email, user.firstName, user.fullName);
    }

    initUser();

  }, []);
  return <></>
}
