/*
Language: Makam
Author: Antonis Stampoulis <antonis.stampoulis@gmail.com>
Contributors:
Description: Makam language definition.
Category: functional
*/
function(hljs) {
  return {
   keywords: {
      keyword:
        'if then else when type fun pfun',
      built_in:
        /* built-in types */
        'prop unit list bool string int loc dyn clause',
      literal:
        'true false unit'
    },
   lexemes: '[a-z_]\\w*!?',
   contains: [
      {
        className: 'literal',
        begin: '\\[(\\|\\|)?\\]|\\(\\)',
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)'
      ),
      { /* metavariables */
        className: 'variable',
        begin: '[A-Z_][\\w]*'
      },
      {
        className: 'tag',
        begin: '%[a-z]+'
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'char', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'number',
        begin:
          '[0-9][0-9]*',
        relevance: 0
      },
      {
        className: 'symbol',
        begin: /[-=]>/ // relevance booster
      }
    ]
  }
}
