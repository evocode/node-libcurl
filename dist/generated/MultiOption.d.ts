/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @public
 */
export interface MultiOption {
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html)
     */
    readonly CHUNK_LENGTH_PENALTY_SIZE: 'CHUNK_LENGTH_PENALTY_SIZE';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html)
     */
    readonly CONTENT_LENGTH_PENALTY_SIZE: 'CONTENT_LENGTH_PENALTY_SIZE';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_CONCURRENT_STREAMS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_CONCURRENT_STREAMS.html)
     */
    readonly MAX_CONCURRENT_STREAMS: 'MAX_CONCURRENT_STREAMS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html)
     */
    readonly MAX_HOST_CONNECTIONS: 'MAX_HOST_CONNECTIONS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html)
     */
    readonly MAX_PIPELINE_LENGTH: 'MAX_PIPELINE_LENGTH';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html)
     */
    readonly MAX_TOTAL_CONNECTIONS: 'MAX_TOTAL_CONNECTIONS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html)
     */
    readonly MAXCONNECTS: 'MAXCONNECTS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING.html)
     */
    readonly PIPELINING: 'PIPELINING';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SERVER_BL.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SERVER_BL.html)
     */
    readonly PIPELINING_SERVER_BL: 'PIPELINING_SERVER_BL';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SITE_BL.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SITE_BL.html)
     */
    readonly PIPELINING_SITE_BL: 'PIPELINING_SITE_BL';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHDATA.html)
     */
    readonly PUSHDATA: 'PUSHDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHFUNCTION.html)
     */
    readonly PUSHFUNCTION: 'PUSHFUNCTION';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETDATA.html)
     */
    readonly SOCKETDATA: 'SOCKETDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETFUNCTION.html)
     */
    readonly SOCKETFUNCTION: 'SOCKETFUNCTION';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERDATA.html)
     */
    readonly TIMERDATA: 'TIMERDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERFUNCTION.html)
     */
    readonly TIMERFUNCTION: 'TIMERFUNCTION';
    /**
     * (curl-impersonate) A list of headers used by the impersonated browser, merged with CURLOPT_HTTPHEADER.
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L94](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L94)
     */
    readonly HTTPBASEHEADER: 'HTTPBASEHEADER';
    /**
     * (curl-impersonate) A list of TLS signature hash algorithms.
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L98](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L98)
     */
    readonly SSL_SIG_HASH_ALGS: 'SSL_SIG_HASH_ALGS';
    /**
     * (curl-impersonate) TLS Client hello match Extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L104](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L104)
     */
    readonly SSL_ENABLE_ALPS: 'SSL_ENABLE_ALPS';
    /**
     * (curl-impersonate) SSL Compression type. Eg. brotli
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L110](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L110)
     */
    readonly SSL_CERT_COMPRESSION: 'SSL_CERT_COMPRESSION';
    /**
     * (curl-impersonate) Enable/disable TLS session ticket extension
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L113](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L113)
     */
    readonly SSL_ENABLE_TICKET: 'SSL_ENABLE_TICKET';
    /**
     * (curl-impersonate) Set the order of the HTTP/2 pseudo headers. The value must contain the letters 'm', 'a', 's', 'p' representing the pseudo-headers ":method", ":authority", ":scheme", ":path" in the desired order of appearance in the HTTP/2 HEADERS frame.
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L122](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L122)
     */
    readonly HTTP2_PSEUDO_HEADERS_ORDER: 'HTTP2_PSEUDO_HEADERS_ORDER';
    /**
     * (curl-impersonate) Disable HTTP2 server push in the HTTP2 SETTINGS.
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L128](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L128)
     */
    readonly HTTP2_NO_SERVER_PUSH: 'HTTP2_NO_SERVER_PUSH';
    /**
     * (curl-impersonate)  Whether to enable Boringssl permute extensions.
     *
     * Official libcurl documentation: : [https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L134](https://github.com/lwthiker/curl-impersonate/blob/main/chrome/patches/curl-impersonate.patch#L134)
     */
    readonly SSL_PERMUTE_EXTENSIONS: 'SSL_PERMUTE_EXTENSIONS';
}
/**
 * @public
 */
export declare type MultiOptionName = 'CHUNK_LENGTH_PENALTY_SIZE' | 'CONTENT_LENGTH_PENALTY_SIZE' | 'MAX_CONCURRENT_STREAMS' | 'MAX_HOST_CONNECTIONS' | 'MAX_PIPELINE_LENGTH' | 'MAX_TOTAL_CONNECTIONS' | 'MAXCONNECTS' | 'PIPELINING' | 'PIPELINING_SERVER_BL' | 'PIPELINING_SITE_BL' | 'PUSHDATA' | 'PUSHFUNCTION' | 'SOCKETDATA' | 'SOCKETFUNCTION' | 'TIMERDATA' | 'TIMERFUNCTION' | 'HTTPBASEHEADER' | 'SSL_SIG_HASH_ALGS' | 'SSL_ENABLE_ALPS' | 'SSL_CERT_COMPRESSION' | 'SSL_ENABLE_TICKET' | 'HTTP2_PSEUDO_HEADERS_ORDER' | 'HTTP2_NO_SERVER_PUSH' | 'SSL_PERMUTE_EXTENSIONS';
//# sourceMappingURL=MultiOption.d.ts.map