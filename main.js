;(function () {
  'use strict'

  /**
   * スムーススクロールの初期化
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        var targetId = this.getAttribute('href')
        if (!targetId || targetId === '#') return

        var targetElement = document.querySelector(targetId)
        if (!targetElement) return

        event.preventDefault()
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })
  }

  /**
   * LINE登録ボタンのハンドラー
   */
  function initLineButton() {
    var lineButton = document.getElementById('line')
    if (lineButton) {
      lineButton.addEventListener('click', function (event) {
        event.preventDefault()
        alert('LINE登録は学校公式の導線へ。ここはサンプルです。')
      })
    }
  }

  /**
   * フォーム送信のハンドラー
   */
  function initContactForm() {
    var form = document.getElementById('contact-form-element')
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        alert('送信はダミーです。公式フォームからお申し込みください。')
      })
    }
  }

  // DOMContentLoaded時に初期化
  document.addEventListener('DOMContentLoaded', function () {
    initSmoothScroll()
    initLineButton()
    initContactForm()
  })
})()
