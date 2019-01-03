'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    // メモに値がある？
    if (memo.has(n)) {
        // あるならメモの値を使う
        return memo.get(n);
    }
    else {
        // そうでないなら計算する
        const value = fib(n - 1) + fib(n - 2);
        
        // メモ更新
        memo.set(n, value);
        return value;
    }
}

const length = 40;
for (let i=0; i < length; i++) {
    console.log('i=' + i + ': ' + fib(i));
}