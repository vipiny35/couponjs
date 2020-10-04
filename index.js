'use strict';

const Engine = require('./app/engine.js');
const { defaultCouponGenerationOption, defaultCouponEngineOption } = require('./app/option.js');
const randomInteger = require('./app/random-integer.js');
const Performance = require('./app/performance.js');

/**
 * The Coupon constructor.
 * @param {object} config This is to configure the coupon engine.
 * @constructor
 */
const Coupon = function (config) {
  const performance = new Performance();
  const { verbose, logPerformance } = Object.assign({}, defaultCouponEngineOption, config);

  /**
   * This will generate coupons.
   *
   * @param {object} option This is the configuration option.
   * @returns {string}
   */
  this.generate = function (option) {
    performance.startTimer();
    const {
      numberOfCoupons,
      length,
      characterSet,
      prefix,
      suffix,
      omitCharacters,
      format
    } = Object.assign({}, defaultCouponGenerationOption, option);
    try {
      const engine = new Engine(
        characterSet,
        randomInteger,
        length,
        prefix,
        suffix,
        numberOfCoupons,
        omitCharacters,
        format
      );
      const generatedCoupons = engine.run();
      performance.stopTimer();
      const performanceStats = logPerformance ? { performance: performance.stats() } : {};
      const verboseResult = {
        ...performanceStats,
        numberOfCoupons,
        status: 'success',
        coupons: numberOfCoupons === 1 ? [generatedCoupons] : generatedCoupons
      };
      return verbose ? verboseResult : generatedCoupons;
    } catch (e) {
      performance.stopTimer();
      const performanceStats = logPerformance ? { performance: performance.stats() } : {};
      if (verbose) {
        return {
          status: 'error',
          error: {
            message: e.message,
            type: e.type,
            errors: e.errors
          },
          ...performanceStats
        };
      } else {
        throw e;
      }
    }
  };
};

module.exports = Coupon;
