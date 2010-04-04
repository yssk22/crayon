
desc("Run jsrun for documentation.")
task :doc do
  template = File.join(File.dirname(__FILE__), "doc/templates")
  sh("jsrun -t=#{template} -d=doc/build -a -r lib")
  sh("rm -fr /tmp/crayon_doc")
  sh("cp -r doc /tmp/crayon_doc")
  sh("git checkout gh-pages")
  sh("rm -r api")
  sh("cp -r /tmp/crayon_doc api")
end

desc("Run jspec for spec testing.")
task :spec do
  config = File.join(File.dirname(__FILE__), "jspec/rhino.js")
  if ENV["OUTPUT"] == "JUnit"
    config = File.join(File.dirname(__FILE__), "jspec/rhinoxml.js")
  end
  sh("jspec run --rhino '#{config}'")
end
