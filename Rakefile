
desc("Run jsrun for documentation.")
task :doc do
  template = File.join(File.dirname(__FILE__), "doc/templates")
  sh("jsrun -t=#{template} -d=doc/build -a -r lib")
end

desc("Run jspec for spec testing.")
task :spec do
  sh("jspec run --rhino")
end
