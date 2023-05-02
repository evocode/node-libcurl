const optionImpersonateList = [
  {
    constantOriginal: 'CURLOPT_HTTPBASEHEADER',
    constantName: 'HTTPBASEHEADER',
    constantNameCamelCase: 'httpBaseHeader',
    description:
      '(curl-impersonate) A list of headers used by the impersonated browser, merged with CURLOPT_HTTPHEADER.',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L94',
  },
  {
    constantOriginal: 'CURLOPT_SSL_SIG_HASH_ALGS',
    constantName: 'SSL_SIG_HASH_ALGS',
    constantNameCamelCase: 'sslSigHashAlgs',
    description: '(curl-impersonate) A list of TLS signature hash algorithms.',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L98',
  },
  {
    constantOriginal: 'CURLOPT_SSL_ENABLE_ALPS',
    constantName: 'SSL_ENABLE_ALPS',
    constantNameCamelCase: 'sslEnableAlps',
    description: '(curl-impersonate) TLS Client hello match Extension',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L104',
  },
  {
    constantOriginal: 'CURLOPT_SSL_CERT_COMPRESSION',
    constantName: 'SSL_CERT_COMPRESSION',
    constantNameCamelCase: 'sslCompression',
    description: '(curl-impersonate) SSL Compression type. Eg. brotli',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L110',
  },
  {
    constantOriginal: 'CURLOPT_SSL_ENABLE_TICKET',
    constantName: 'SSL_ENABLE_TICKET',
    constantNameCamelCase: 'sslEnableTicket',
    description:
      '(curl-impersonate) Enable/disable TLS session ticket extension',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L113',
  },
  {
    constantOriginal: 'CURLOPT_HTTP2_PSEUDO_HEADERS_ORDER',
    constantName: 'HTTP2_PSEUDO_HEADERS_ORDER',
    constantNameCamelCase: 'http2PseudoHeadersOrder',
    description:
      '(curl-impersonate) Set the order of the HTTP/2 pseudo headers. The value must contain the letters \'m\', \'a\', \'s\', \'p\' representing the pseudo-headers ":method", ":authority", ":scheme", ":path" in the desired order of appearance in the HTTP/2 HEADERS frame.',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L122',
  },
  {
    constantOriginal: 'CURLOPT_HTTP2_NO_SERVER_PUSH',
    constantName: 'HTTP2_NO_SERVER_PUSH',
    constantNameCamelCase: 'http2NoServerPush',
    description:
      '(curl-impersonate) Disable HTTP2 server push in the HTTP2 SETTINGS.',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L128',
  },
  {
    constantOriginal: 'CURLOPT_SSL_PERMUTE_EXTENSIONS',
    constantName: 'SSL_PERMUTE_EXTENSIONS',
    constantNameCamelCase: 'sslPermuteExtensions',
    description:
      '(curl-impersonate)  Whether to enable Boringssl permute extensions.',
    url: 'https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L134',
  },
]

module.exports = {
  optionImpersonateList,
}
