require 'open-uri'
require 'pry'

open("https://www.bible.com/bible/59/gen.9.json") { |f|
  File.open('gen.json', 'w') do |line|
    line << f.base_uri.read
  end
}
