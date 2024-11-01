source "https://rubygems.org"

# Core dependencies
gem "jekyll", "~> 3.9.3"
gem "github-pages", "~> 228", group: :jekyll_plugins
gem "liquid", "~> 4.0.4"
gem "kramdown-parser-gfm"
gem "webrick"

# Lock jekyll-seo-tag to the version GitHub Pages wants
gem "jekyll-seo-tag", "2.8.0"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb gem for JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]