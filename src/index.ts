const _mouseEventHandler = (eventType: string) => {
  try {
    let ev = (window as any).event
    if (!ev || !ev.view) {
      return
    }
    let ele = ev.view.document.body.___bubble_event_iframe_element__ || document.body
    let evt = new MouseEvent(eventType, {
      bubbles: true,
      cancelable: false,
      button: ev.button,
      buttons: ev.buttons,
      ctrlKey: ev.ctrlKey,
      shiftKey: ev.shiftKey,
      altKey: ev.altKey,
      metaKey: ev.metaKey
    })
    ele.dispatchEvent(evt)
  } catch {
    console.log("bubble ev error: ", eventType)
  }
}

const _mouseEventHandlerClick = () => {
  _mouseEventHandler("click")
}

const _mouseEventHandlerDbclick = () => {
  _mouseEventHandler("dblclick")
}

const _mouseEventHandlerMousedown = () => {
  _mouseEventHandler("mousedown")
}

const _mouseEventHandlerMouseup = () => {
  _mouseEventHandler("mouseup")
}

const _mouseEventHandlerMouseover = () => {
  _mouseEventHandler("mouseover")
}

const _mouseEventHandlerMouseout = () => {
  _mouseEventHandler("mouseout")
}

const _mouseEventHandlerMouseenter = () => {
  _mouseEventHandler("mouseenter")
}

const _mouseEventHandlerMouseleave = () => {
  _mouseEventHandler("mouseleave")
}

const _opMouseEventHandler = (iframeElement: Element, eventType: string, eventHandler: EventListenerOrEventListenerObject, addOrRemove?: boolean) => {
  let ele: any = iframeElement
  if (!ele.contentWindow) {
    return
  }
  let doc = ele.contentWindow.document
  doc.body.___bubble_event_iframe_element__ = iframeElement
  if (addOrRemove === undefined || addOrRemove === true) {
    doc.addEventListener(eventType, eventHandler)
  } else {
    doc.removeEventListener(eventType, eventHandler)
  }
}

const bubbleClick = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "click", _mouseEventHandlerClick, addOrRemove)
}

const bubbleDblclick = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "dblclick", _mouseEventHandlerDbclick, addOrRemove)
}

const bubbleMousedown = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mousedown", _mouseEventHandlerMousedown, addOrRemove)
}

const bubbleMouseup = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mouseup", _mouseEventHandlerMouseup, addOrRemove)
}

const bubbleMouseover = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mouseover", _mouseEventHandlerMouseover, addOrRemove)
}

const bubbleMouseout = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mouseout", _mouseEventHandlerMouseout, addOrRemove)
}

const bubbleMouseenter = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mouseenter", _mouseEventHandlerMouseenter, addOrRemove)
}

const bubbleMouseleave = (iframeElement: Element, addOrRemove?: boolean) => {
  _opMouseEventHandler(iframeElement, "mouseleave", _mouseEventHandlerMouseleave, addOrRemove)
}

const _keyEventHandler = (eventType: string) => {
  try {
    let ev = (window as any).event
    if (!ev) {
      return
    }
    var evtObj = new KeyboardEvent(eventType, {
      key: ev.key,
      keyCode: ev.keyCode,
      code: ev.code,
      charCode: ev.charCode,
      which: ev.which,
      ctrlKey: ev.ctrlKey,
      shiftKey: ev.shiftKey,
      altKey: ev.altKey,
      metaKey: ev.metaKey,
      repeat: false,
      isComposing: false,
      bubbles: true,
    })
    let ele = ev.view.document.body.___bubble_event_iframe_element__ || document.body
    ele.dispatchEvent(evtObj)
  } catch {
    console.log("bubble ev error: ", eventType)
  }
}

const _keyEventHandlerKeydown = () => {
  _keyEventHandler("keydown")
}

const _keyEventHandlerKeyup = () => {
  _keyEventHandler("keyup")
}

const _keyEventHandlerKeypress = () => {
  _keyEventHandler("keypress")
}

const _opKeyEventHandler = (iframeElement: Element, eventType: string, eventHandler: EventListenerOrEventListenerObject, addOrRemove?: boolean) => {
  let ele: any = iframeElement
  if (!ele.contentWindow) {
    return
  }
  let doc = ele.contentWindow.document
  doc.body.___bubble_event_iframe_element__ = iframeElement
  if (addOrRemove === undefined || addOrRemove === true) {
    doc.addEventListener(eventType, eventHandler)
  } else {
    doc.removeEventListener(eventType, eventHandler)
  }
}

const bubbleKeydown = (iframeElement: Element, addOrRemove?: boolean) => {
  _opKeyEventHandler(iframeElement, "keydown", _keyEventHandlerKeydown, addOrRemove)
}

const bubbleKeyup = (iframeElement: Element, addOrRemove?: boolean) => {
  _opKeyEventHandler(iframeElement, "keyup", _keyEventHandlerKeyup, addOrRemove)
}

const bubbleKeypress = (iframeElement: Element, addOrRemove?: boolean) => {
  _opKeyEventHandler(iframeElement, "keypress", _keyEventHandlerKeypress, addOrRemove)
}

export default {
  bubbleClick,
  bubbleDblclick,
  bubbleMousedown,
  bubbleMouseup,
  bubbleMouseover,
  bubbleMouseout,
  bubbleMouseenter,
  bubbleMouseleave,
  bubbleKeydown,
  bubbleKeyup,
  bubbleKeypress,
}
