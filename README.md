# node-iframe-event-bubble

## 说明

网址: https://github.com/mailhonor/web-iframe-event-bubble

iframe 内鼠标事件和键盘事件冒泡。

支持 ctrl， shift， alt， meta 冒泡

## 用法

```ts
// npm i iframe-event-bubble

import iframeEventBubble from "iframe-event-bubble";

// iframeElement 是 iframe 的 Element，不是 iframe 内的 document，第二个参数默认是 true
// true: 启用冒泡, false: 关闭冒泡
// 具体的事件见方法名,顾名思义即可

iframeEventBubble.bubbleClick(iframeElement, true/false);
iframeEventBubble.bubbleDblclick(iframeElement, true/false);
iframeEventBubble.bubbleMousedown(iframeElement, true/false);
iframeEventBubble.bubbleMouseup(iframeElement, true/false);
iframeEventBubble.bubbleMouseover(iframeElement, true/false);
iframeEventBubble.bubbleMouseout(iframeElement, true/false);
iframeEventBubble.bubbleMouseenter(iframeElement, true/false);
iframeEventBubble.bubbleMouseleave(iframeElement, true/false);
iframeEventBubble.bubbleKeydown(iframeElement, true/false);
iframeEventBubble.bubbleKeyup(iframeElement, true/false);
iframeEventBubble.bubbleKeypress(iframeElement, true/false);
```