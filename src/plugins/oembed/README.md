# Hapi oEmbed Provider

Provides an <a href="http://oembed.com">oembed provider</a> handler to facilitate creation of oembed responses.

## Options

All oembed payload responses are valid option keys for the oEmbed handler.

The 'html' and 'title' keys may be callbacks to facilitate data real-time data-loading.

## Example
```js
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return '<aside>This is the greatest</aside>'
                },
                title: function(options, request) {
                    return 'Example',
                },
                provider_name: 'Example Content Provider',
                provider_url: 'http://example.com'
            }
        },
```
