// runtime/registry.js
export const HTML6_REGISTRY = {
  styles: [],
  scripts: [],
  metadata: {},
  servers: {}
}

export function registerStyle(obj) {
  HTML6_REGISTRY.styles.push(obj)
}

export function registerScript(obj) {
  HTML6_REGISTRY.scripts.push(obj)
}

export function registerMetadata(name, value) {
  HTML6_REGISTRY.metadata[name] = value
}

export function registerServer(server) {
  HTML6_REGISTRY.servers[server.id] = server
}
