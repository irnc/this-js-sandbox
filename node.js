'use strict';

if (typeof global !== 'undefined' && this === global) {
    console.log('script ran inside `node` repl')
    console.log('this === global', typeof global !== 'undefined' && this === global)
}

if (typeof exports !== 'undefined' && this === exports) {
    console.log('script ran as `node this.js`')
    console.log('this === exports', typeof exports !== 'undefined' && this === exports)
}
