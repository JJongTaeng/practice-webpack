/**
 * css파일을 원래는 import 할 수 없지만
 * 웹팩의 로더가 .css파일을 모듈로 바꿔는
 * 역할을 해준다.
 */
import './app.css'
import nyancat from './nyancat.jpg'

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
        <img src="${nyancat}" />
    `
})