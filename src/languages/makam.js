/*
Language: Makam
Author: Antonis Stampoulis <antonis.stampoulis@gmail.com>
Contributors:
Description: Makam language definition.
Category: functional
*/
function(hljs) {
  var COMMENT = hljs.COMMENT(/\(\*/, /\*\)/);
  var TYPE_KEYWORDS = {
      typekeywords: 'type prop unit list bool string int loc dyn clause bindone bindmany map'
  };
  var TYPE_SYMBOLS = {
      className: 'typesymbols', begin: /(\*|->)/
  };
  var TYPE_VARS = {
      className: 'typevar', begin: '\\b[A-Z_][A-Za-z_0-9\']*'
  };
  var TYPE_IN_PARENS = {
      begin: /\(/, end: /\)/, contains: ['self', COMMENT, TYPE_SYMBOLS, TYPE_VARS], keywords: TYPE_KEYWORDS
  };
  var TYPE = {
      className: 'typeexpr',
      excludeBegin: true, excludeEnd: true,
      begin : /:(?!:)/, end: /(\.\s|\))/,
      contains: [COMMENT, TYPE_SYMBOLS, TYPE_VARS, TYPE_IN_PARENS], keywords: TYPE_KEYWORDS
  };

  return {
   keywords: {
      keyword:
        'if then else when fun pfun',
      literal:
        'true false unit'
    },
   lexemes: '[a-z_]\\w*!?',
   contains: [
      {
        className: 'list',
        begin: /(\[|\]|::)/,
        relevance: 0
      },
      COMMENT,
      { /* metavariable */
        className: 'metavar',
        begin: '\\b[A-Z_][A-Za-z_0-9\']*'
      },
      {
        className: 'command',
        begin: /%[a-z]+/
      },
      TYPE,
      {
        className: 'definition',
        begin: /^[a-z][a-zA-Z0-9_']+/
      },
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'number',
        begin:
          '[0-9][0-9]*',
        relevance: 0
      },
      {
        className: 'symbol',
        begin: /([-=]>|<-)/ // relevance booster
      }
    ]
  }
}
