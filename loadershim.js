global.___loader = {
  /** global: jest */
  enqueue: jest.fn(),
}

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    }
  }
