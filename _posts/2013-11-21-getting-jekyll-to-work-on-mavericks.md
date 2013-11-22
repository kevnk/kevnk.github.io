---
layout: post
title: "Getting Jekyll to Work on OSX 10.9 Mavericks"
date: 2013-11-21 21:20:00
comments_disabled: false

---

So I upgraded to OSX Mavericks and I wanted to write on my blog. So I go to install jekyll:

    $ sudo gem install jekyll


And I get this error:

    ERROR:  Error installing jekyll:
    ERROR: Failed to build gem native extension.

    /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb
    mkmf.rb can't find header files for ruby at /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/include/ruby.h

So here's how I fixed it:

### 1. Make sure you have xcode developer

Run the following in terminal to install **Xcode Command Line Tools** on Mac OSX 10.9 Mavericks

    $ xcode-select --install

When a popup shows, click `Install`

### 2. Get Ruby and Ruby Gems

Run the following in terminal to get the most updated versions of Ruby and RubyGems

    $ \curl -L https://get.rvm.io | bash -s stable --ruby

### 3. Install Jekyll

Now you can install jekyll with the following command:

    $ sudo gem install jekyll


### 4. Serve up your site

Then run this in terminal and then visit [http://localhost:4000/](http://localhost:4000/)

    $ jekyll serve --watch


And in case you forgot, here are the [Basics for Jekyll](http://jekyllrb.com/docs/usage/).

Enjoy.
