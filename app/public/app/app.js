/**
 * Created by Frio on 25. 5. 2015.
 */
define(['/modules/events.js'], function (events) {
    function testCallback() {
        console.log(JSON.stringify(arguments) + ':' + JSON.stringify(this));
    }

    function testCallback2(name1, name2, age) {
        console.log(name1, ':', name2, ':', age);
    }

    return {
        name: 12,
        start: function () {
            events.subscribe('hello', testCallback, this);
            events.subscribe('hello', testCallback2);
            events.publish('hello', 'john', 'peter', 69);
            events.unsubscribe('hello', testCallback);
            events.publish('hello', 'john');
        }
    };
});