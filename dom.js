// runtime/dom.js
import { validateTagName, validateAttributes } from "./validator.js"

export function mountBody(bdy) {
  const errors = []
  
  bdy.querySelectorAll("*").forEach(el => {
    errors.push(...validateTagName(el))
    errors.push(...validateAttributes(el))
  })
  
  // <dv> → <div>
  bdy.querySelectorAll("dv").forEach(el => {
    const div = document.createElement("div")
    div.innerHTML = el.innerHTML
    copyAttrs(el, div)
    el.replaceWith(div)
  })
  
  // <nv> → <nav>
  bdy.querySelectorAll("nv").forEach(el => {
    const nav = document.createElement("nav")
    nav.innerHTML = el.innerHTML
    copyAttrs(el, nav)
    el.replaceWith(nav)
  })
  
  // <bttn> → <button>
  bdy.querySelectorAll("bttn").forEach(el => {
    const btn = document.createElement("button")
    btn.innerHTML = el.innerHTML
    copyAttrs(el, btn)
    el.replaceWith(btn)
  })
  
  if (errors.length) {
    console.warn("[HTML6] DOM validation errors:", errors)
  }
  
  return {
    html: bdy.innerHTML.trim()
  }
}

function copyAttrs(from, to) {
  for (const attr of from.attributes) {
    to.setAttribute(attr.name, attr.value)
  }
}