// !code vendor/crayon/lib/template.js

// The default reasons are from apache http server error docs.
Crayon.Error = {
   BAD_REQUEST : {
      error: "Bad Request",
      code : 400,
      reason : "Your browser (or proxy) sent a request that this server could not understand."
   },
   UNAUTHORIZED: {
      error: "Unauthorized",
      code: 401,
      reason: "In case you are allowed to request the document, please check your user-id and password and try again."
   },
   FORBIDDEN: {
      error: "Forbidden",
      code: 403,
      reason: "You don't have permission to access the requested object. It is either read-protected or not readable by the server."
   },
   NOT_FOUND: {
      error: "Not Found",
      code: 404,
      reason: "The requested URL was not found on this server."
   },
   INTERNAL_SERVER_ERROR : {
      error: "Internal Server Error",
      code: 500,
      reason: "The server encountered an internal error and was unable to complete your request."
   },
   NOT_IMPLEMENTED: {
      error: "Not Implemented",
      code: 501,
      reason: "The server does not support the action requested by the browser."
   },
   SERVICE_UNAVAILABLE: {
      error: "Service Temporarily Unavailable",
      code: 503,
      reason : "The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later. "
   },

   render_error : function(){
      var ret = Crayon.extractOptions.apply(this, arguments);
      if( arguments.length == 1 ){
         ret.args.push(ret.options);
         ret.options = null;
      }
      var options = ret.options || {};
      var error = {
         error  : ret.args[0].error,
         code   : ret.args[0].code,
         reason : options.reason || ret.args[0].reason
      };
      var format = options.format;
      var template = options.template;
      var bindings = options.bindings || {};
      if( !bindings.error ){
         bindings.error = error;
      }

      if( template ){
         return {
            code : error.code,
            body : render(template, bindings)
         };
      }else{
         switch(format){
         case "html":
            return {
               code: error.code,
               body: render("<html><title><%= error.error %></title><body><p><%= error.reason %><p></body></html>",
                            {
                               error: error
                            })
            };
         default:
            return {
               code: error.code,
               body: toJSON(error)
            };
         }
      }
   }
};

if( !this.do_not_import_global ){
   Crayon.extend(this, Crayon.Error);
}else{
   Crayon.extend(Crayon.Error);
}