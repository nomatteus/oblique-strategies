require "rubygems"
require 'rack/contrib'
require 'rack-rewrite'

use Rack::Static, 
  :urls => ["/css", "/img", "/js"],
  :root => "public"
use Rack::ETag
use Rack::Rewrite do
  rewrite '/', '/index.html'
end
run Rack::Directory.new('public')
