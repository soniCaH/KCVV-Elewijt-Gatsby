/* eslint-disable @typescript-eslint/no-empty-function */
/** global: jest */

global.___loader = {
  enqueue: jest.fn(),
};

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
