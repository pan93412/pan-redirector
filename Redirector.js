/**
 * Redirector to the dynamic URLs.
 */

class Redirector {
  constructor(hostTable, pathTable) {
    // HostTable
    this.ht = hostTable;
    // PathTable
    this.pt = pathTable;
  }

  hasHost(hostId) {
    return hostId in this.ht;
  }

  setHost(hostId) {
    this.url = new URL(this.ht[hostId]);
    return this;
  }

  hasPath(pathId) {
    return pathId in this.pt;
  }

  setPath(pathId) {
    this.url.pathname = this.pt[pathId];
    return this;
  }

  build() {
    return this.url.toString();
  }

  redirect() {
    location.href = this.build();
    return;
  }
}
