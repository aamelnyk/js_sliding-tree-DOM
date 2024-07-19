document.querySelectorAll("li").forEach(function(e){var t=e.firstChild.textContent.trim(),n=document.createElement("span");n.textContent=t,e.firstChild.replaceWith(n),n.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.style.display="none"===t.style.display?"block":"none")})});
//# sourceMappingURL=index.a4a5d8d3.js.map
