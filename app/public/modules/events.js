/**
 * Created by Frio on 15. 8. 2015.
 */
/**
 * uses Array.prototype.slice in events.publish
 * uses window (As the defaultContext for the callbacks in events.subscribe
 */
define([ ], function () {
    var eventRegistry = { },
        defaultContext = window;

    return {
        subscribe: function (eventName, callback, opt_context) {
            var callbackList;

            if(typeof callback !== 'function') {
                return;
            }

            eventName = eventName.toString();
            callbackList = eventRegistry[eventName];

            if(!callbackList) {
                callbackList = eventRegistry[eventName] = [ ];
            }

            callbackList.push({
                callback: callback,
                context: opt_context || defaultContext
            });
        },
        unsubscribe: function (eventName, callback) {
            var callbackList,
                storedObject,
                x, lex;

            eventName = eventName.toString();
            callbackList = eventRegistry[eventName];

            if(!callbackList) {
                return;
            }

            if(typeof callback !== 'function') {
                delete eventRegistry[eventName];
            } else {
                for(x = 0, lex = callbackList.length; x < lex; x += 1) {
                    storedObject = callbackList[x];

                    if(storedObject.callback === callback) {
                        callbackList.splice(x, 1);
                        return;
                    }
                }
            }
        },
        publish: function (eventName, opt_args) {
            var callbackList,
                storedObject,
                callbackArguments,
                x, lex;

            eventName = eventName.toString();
            callbackList = eventRegistry[eventName];

            if(callbackList) {
                // get the arguments for the callback
                callbackArguments = Array.prototype.slice.call(arguments);
                // remove the first element (eventName)
                callbackArguments.shift();
                for(x = 0, lex = callbackList.length; x < lex; x += 1) {
                    storedObject = callbackList[x];
                    // call the callback with the arguments send
                    storedObject.callback.apply(storedObject.context, callbackArguments);
                }
            }
        }
    }
});