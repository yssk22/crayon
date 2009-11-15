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

See API namespace requirements to determine what to be written in !code sentences.

## Global Functions

All the functions are separated by the Crayon namespace, and imported as Global.
If you do not want to import Crayon into the global environment, define the `do_not_import_global` variable as true.

    this.do_not_import_global = true;

    // !code vendor/crayon/lib/core
    // !code vendor/crayon/lib/escape
    // !code vendor/crayon/lib/tag

    // This does not work:
    //   var str = cotent_tag("p", "crayon enables content_tag function in server side.")
    //
    // Altenative is:
    var str = Crayon.Tag.cotent_tag("p", "crayon enables content_tag function in server side.")


# More Features

See [API documents](http://yssk22.github.com/crayon/api/build/index.html)
or examples(spec/spec.*.js).

# Contribute to more features

Welcome to forks and pull requests!

# Sharing with the client scripts.

Just copy the lib directory to your _attachments directory.

# License

Crayon is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)
