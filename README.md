# Crayon: Server Side JavaScript helpers for CouchApps

Crayon is a set of helper libraries designed to make server-side scripts on your CouchApp more relaxed.

# Install

couchapp vendor install git://github.com/yssk22/crayon.git

# Usage

just include the core and helper libraries you want to use.

    // !code vendor/crayon/lib/core
    // !code vendor/crayon/lib/escape
    // !code vendor/crayon/lib/tag

    var str = cotent_tag("p", "crayon enables content_tag function in server side.")

## Examples Features

### Templates

    // !code vendor/crayon/vendor/ejs/ejs_production.js
    // !code vendor/crayon/lib/template
    //
    // !json templates/my_template
    //
    // the same style as CouchApp template but more powerful!
    return template(templates.my_template, {});

### Working with HTTP Errors

    // !code vendor/crayon/vendor/ejs/ejs_production.js
    // !code vendor/crayon/lib/template
    // !code vendor/crayon/lib/errors
    // !json vendor/crayon/template/errors

    provides("html", function(){
       return BadRequest({format: "html", reason: "argument error"});
    }
    provides("json", function(){
       return BadRequest({format: "json", reason: "argument error"});
    }

### more features

See spec directory for examples.

# Sharing between the client script.

TBD.

# License

Crayon is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)
