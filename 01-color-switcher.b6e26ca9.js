!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disable=!0,t=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){e.disable=!1,clearInterval(t),t=null}))}();
//# sourceMappingURL=01-color-switcher.b6e26ca9.js.map