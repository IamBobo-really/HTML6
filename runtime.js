// runtime/runtime.js
import { HTML6_REGISTRY } from "./registry.js"

export const HTML6 = {
  fetch(serverId, path) {
    const server = HTML6_REGISTRY.servers[serverId]
    if (!server) return null
    return server.handlers[path] || null
  },
  
  meta(name) {
    return HTML6_REGISTRY.metadata[name] || null
  }
}