!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;t.addEventListener("click",function(){e=setInterval(function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},1e3),t.disabled=!0}),n.addEventListener("click",function(){clearInterval(e),t.disabled=!1})}();
//# sourceMappingURL=01-color-switcher.394f0bac.js.map
