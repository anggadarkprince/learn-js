/**
 * ------------------------------------------------------------------------------------------|
 * Event flow                                                                                |
 * ------------------------------------------------------------------------------------------|
 * certain types of events pass down through and 'bubble' back up through                    |
 * the element hierarchy until they are either handled or they pass up through               |
 * the top of the document.                                                                  |
 *                                  /\                                                       |
 *              |       <body>      |                                                        |
 *              |       <div>       |                                                        |
 *  capturing   |       <ul>        |  bubbling                                              |
 *              |       <li>        |                                                        |
 *              |   <a> at target   |                                                        |
 *              \/                                                                           |
 * ------------------------------------------------------------------------------------------|
 * Event property                                                                            |
 * ------------------------------------------------------------------------------------------|
 *  target           : node on which the event originated (object that was clicked in node   |
 *                    hierarchy that attached the event)                                     |
 *  type             : 'click', 'load', 'keypress'                                           |
 *  bubbles          : indicated whether ot not event can be canceled                        |
 *  currentTarget    : node that the event handler is currently attached to                  |
 *  eventPhase       : CAPTURING_PHASE (1), AT_TARGET (2), BUBBLING_PHASE (3)                |
 *  timeStamp        : the time the event occurred                                           |
 * ------------------------------------------------------------------------------------------|
 * Event Method                                                                              |
 * ------------------------------------------------------------------------------------------|
 *  preventDefault();                                                                        |
 *      prevent the browser from performing any default action for the event such as         |
 *      loading the url on <a> (anchor) tag.                                                 |
 *                                                                                           |
 *  stopPropagation();                                                                       |
 *      Stops the event flow, this can be used on either the capture or bubble phase.        |
 *                                                                                           |
 * ------------------------------------------------------------------------------------------|
 */

/**
 * ------------------------------------------------------------------------------------------
 * Simple event attach compatible with IE
 * ------------------------------------------------------------------------------------------
 */
function addEventHandler(oNode, evt, oFunc, bCaptures) {
    if (typeof(window.event) != "undefined")
        oNode.attachEvent("on" + evt, oFunc);
    else
        oNode.addEventListener(evt, oFunc, bCaptures);
}

function removeEventHandler(oNode, evt, oFunc, bCaptures) {
    if (typeof(window.event) != "undefined")
        oNode.detachEvent("on" + evt, oFunc);
    else
        oNode.removeEventListener(evt, oFunc, bCaptures);
}

function getEventTarget(e) {
    if (window.event) return window.event.srcElement;
    else return e.target;
}

function stopEvent(e) {
    if (window.event) return window.event.cancelBubble = true;
    else return e.stopPropagation();
}

/**
 * ------------------------------------------------------------------------------------------
 * Event callback function
 * ------------------------------------------------------------------------------------------
 */

function onLinkClicked(e) {
    e.preventDefault();
    alert("You clicked the link!");
}

function onEnableClick(e) {
    var link = document.getElementById("clickLink");
    if (link) {
        var target = getEventTarget(e);
        if (target.checked) {
            addEventHandler(document.getElementById("clickLink"), "click", onLinkClicked, false);
        }
        else {
            removeEventHandler(document.getElementById("clickLink"), "click", onLinkClicked, false);
        }
    }
}

function div1Handler(evt) {
    logEvent(evt, 'div1');
}

function div2Handler(evt) {
    logEvent(evt, 'div2');
}

function div3Handler(evt) {
    logEvent(evt, 'div3');
    // but force to stop propagation (delegation), the default would executing div1Handler() and bodyHandler()
    stopEvent();
}

function bodyHandler(evt) {
    logEvent(evt, 'body');
}

function logEvent(evt, name) {
    var e = evt || window.event;
    var target = getEventTarget(e);
    var str = "Event handler for " + name + ", target: " + target.getAttribute('id') + " , type: " + e.type;
    if (e.eventPhase) str += " ; phase: " + e.eventPhase;
    alert(str);
}

function initializeHandlers() {
    // not in IE capture bubble event
    if (!window.event) {
        // skip to capture body and div1 but keep enable bubble
        addEventHandler(document.getElementsByTagName("body")[0], "click", bodyHandler, false);
        addEventHandler(document.getElementById("div1"), "click", div1Handler, false);
        // trigger capture
        addEventHandler(document.getElementById("div2"), "click", div2Handler, true);
        addEventHandler(document.getElementById("div3"), "click", div3Handler, true);
        // after reach the div3 event, should be bubbled up, see div3Handler() to stop bubbling
    }
    else {
        addEventHandler(document.getElementsByTagName("body")[0], "click", bodyHandler, true);
        addEventHandler(document.getElementById("div1"), "click", div1Handler, true);
        addEventHandler(document.getElementById("div2"), "click", div2Handler, true);
        addEventHandler(document.getElementById("div3"), "click", div3Handler, true);
    }
}

function setUpClickEvent() {
    // simple click event
    var simpleClick = document.getElementById('simpleClickLink');
    if (simpleClick) {
        addEventHandler(simpleClick, "click", function (e) {
            e.preventDefault();
            alert("You've click me!");
        }, false);
    }

    // checkbox event to activate click
    var checkbox = document.getElementById("checkbox");
    if (checkbox) {
        addEventHandler(checkbox, "click", onEnableClick, false);
    }

    // bubbling demo it's IMPORTANT TO UNDERSTAND ABOUT CONCEPT OF JS EVENT
    // for more information :
    // native : https://javascript.info/tutorial/bubbling-and-capturing
    // jquery : http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_stoppropagation
    initializeHandlers();
}

addEventHandler(window, "load", setUpClickEvent, false);