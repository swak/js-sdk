'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kinvey = require('./kinvey');

var _kinvey2 = _interopRequireDefault(_kinvey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MissingRequestHeaderError = function (_KinveyError) {
  _inherits(MissingRequestHeaderError, _KinveyError);

  function MissingRequestHeaderError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The request is missing a required header.';
    var debug = arguments[1];
    var code = arguments[2];

    _classCallCheck(this, MissingRequestHeaderError);

    return _possibleConstructorReturn(this, (MissingRequestHeaderError.__proto__ || Object.getPrototypeOf(MissingRequestHeaderError)).call(this, 'MissingRequestHeaderError', message, debug, code));
  }

  return MissingRequestHeaderError;
}(_kinvey2.default);

exports.default = MissingRequestHeaderError;