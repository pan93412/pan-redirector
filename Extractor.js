class Extractor {
  constructor() {
    this.url = new URL(location.href);
  }

  /**
   * @param {string} id
   */
  get(id) {
    return this.url.searchParams.get(id).toString();
  }

  /**
   * @param {string} id
   */
  has(id) {
    return this.url.searchParams.has(id);
  }
}
