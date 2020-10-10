module.exports = function myWebpackLoader (content) {
    /**
     *app.js content ----
    import * as math from './math.js'
    console.log(math.sum(1,2));

    math.js content-----
    export function sum(a, b) {
        return a + b;
    }
     */
    console.log(content);
    return content.replace('console.log(', 'alert(')
}

// loader 는 함수형태
/**
 * loader 가 파일을 읽고
 * 그 파일의 내용이 content라는 변수로 들어감
 * 
 */