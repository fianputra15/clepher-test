/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom';
// eslint-disable-next-line import/extensions

// butuh untuk test react-slick dan responsive
window.matchMedia =
  window.matchMedia ||
  function match() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

