'use strict';

const COUPONJS = 'COUPONJS';
const MIN_NUMBER_OF_COUPONS_TO_GENERATE = 1;
const MAX_NUMBER_OF_COUPONS_TO_GENERATE = 100000;
const DEFAULT_NUMBER_OF_COUPONS_TO_GENERATE = MIN_NUMBER_OF_COUPONS_TO_GENERATE;
const MAX_LENGTH = 128;
const MIN_LENGTH = 1;
const DEFAULT_LENGTH = 6;
const DEFAULT_PREFIX = '';
const DEFAULT_SUFFIX = '';
const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const BINARY = '01';
const OCTAL = '01234567';
const HEX = `${DIGIT}ABCDEF`;
const HEX_LOWER = `${DIGIT}abcdef`;
const CHARSET_ALPHA = 'CHARSET_ALPHA';
const CHARSET_ALPHA_LOWER = 'CHARSET_ALPHA_LOWER';
const CHARSET_DIGIT = 'CHARSET_DIGIT';
const CHARSET_ALNUM = 'CHARSET_ALNUM';
const CHARSET_BINARY = 'CHARSET_BINARY';
const CHARSET_OCTAL = 'CHARSET_OCTAL';
const CHARSET_HEX = 'CHARSET_HEX';
const CHARSET_HEX_LOWER = 'CHARSET_HEX_LOWER';
const DEFAULT_OMIT_CHARACTERS = [];
const UNDEFINED = 'UNDEFINED';
const DEFAULT_COUPON_FORMAT = UNDEFINED;

const ERROR_TYPE_VALIDATION_ERROR = `${COUPONJS}_VALIDATION_ERROR`;
const ERROR_CONSTANTS = {
  [ERROR_TYPE_VALIDATION_ERROR]: {
    type: ERROR_TYPE_VALIDATION_ERROR,
    message: 'Validation error'
  }
};

module.exports = {
  MIN_NUMBER_OF_COUPONS_TO_GENERATE,
  MAX_NUMBER_OF_COUPONS_TO_GENERATE,
  DEFAULT_NUMBER_OF_COUPONS_TO_GENERATE,
  MAX_LENGTH,
  MIN_LENGTH,
  DEFAULT_LENGTH,
  DEFAULT_PREFIX,
  DEFAULT_SUFFIX,
  ALPHABET_UPPERCASE,
  ALPHABET_LOWERCASE,
  DIGIT,
  BINARY,
  OCTAL,
  HEX,
  HEX_LOWER,
  CHARSET_ALPHA,
  CHARSET_ALPHA_LOWER,
  CHARSET_DIGIT,
  CHARSET_ALNUM,
  CHARSET_BINARY,
  CHARSET_OCTAL,
  CHARSET_HEX,
  CHARSET_HEX_LOWER,
  DEFAULT_OMIT_CHARACTERS,
  UNDEFINED,
  DEFAULT_COUPON_FORMAT,
  ERROR_CONSTANTS
};
