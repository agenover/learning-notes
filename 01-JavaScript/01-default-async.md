## Default behaviour

Browser stops rendering when JavaScript is encountered. JavaScript is executed before rendering continues, this is often referred as **content blocking**.

It can cause issues because the browser will read line by line from top to bottom and if it encounters external files like JS files it will stop and render it, causing the browser to stop what is doing for example.

## Async

Browser downloads JS in parallel while HTML renders. When JS is fully loaded, rendering stops while JS is excuted.

It is good when we don't care about render blocking

`<script src="JS/script.js" async></script>`

## Deder

Browser downloads JS in parallel while HTML renders, then defers execution of JS until HTML rendering is complete.

`<script src="JS/script.js" defer></script>`