// functions availanle on CouchDB view server.
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

sandbox = this;
function require(name, parent){
   // Application Context:
   //    root should be vendor/crayon/
   //    name is a key without an extension.
   //
   // Test Context:
   //    root should be .
   //    name is a filename with ".js" extension
   if( name.lastIndexOf("vendor/crayon/") == 0 ){
      name = name.substr("vendor/crayon/".length);
   }
   name = name + ".js";
   print("loading " + name);
   var exports = {};
   var source = readFile(name);
   var s = "function(exports, require){" + source + "}";
   var func = eval(s);
   func.apply(sandbox, [exports, function(name){
      return require(name, parent, source);
   }]);
   return exports;
}

function log(msg){
   print(msg);
}
