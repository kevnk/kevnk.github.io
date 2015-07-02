---
layout: post
title:  "Quick Steps to Setup Laravel 5.0 on Yosemite"
date:   2015-03-12 12:00:00
category: code
tags: php, laravel
img: laravel-5.jpg
list_img_height: 200px
list_img_top: -40px
comments_disabled: false
---

# First-time Laravel 5.0 Setup

_If you want a video to get you through most of these steps, [watch the Laracast](https://laracasts.com/lessons/say-hello-to-laravel-homestead-two)._

### 1. Setup Composer

I already had [composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) installed, but I need to update it. To update composer, run this command:

```bash
$ composer self-update
```

Also, make sure composer is in your `PATH` by adding this line to your `~/.bash_profile`

```bash
export PATH=~/.composer/vendor/bin:$PATH
```

### 2. Install Vagrant

Download [vagrant](http://www.vagrantup.com/downloads.html). After installing, you should be able to run `vagrant` in Terminal and see the command help.

### 3. Install Virtualbox

Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

### 4. Install Homestead

This command takes maybe 5-10 minutes.

```bash
$ vagrant box add laravel/homestead
$ composer global require "laravel/homestead=~2.0"
$ homestead init
```

### 5. Setup up SSH keys

If you haven't already setup your SSH keys, run:

```bash
$ ssh-keygen -t rsa -C "your_email@example.com"
```

### 6. Configure Homestead

```bash
$ homestead edit
```

1. Set `folders: map:` to the directory where all your projects are
1. Set `folders: to:` to `/home/vagrant/` + the name of the last directory in `map:` above

__NOTE:__ these two folders will automatically always be in sync.

# Setup A New Laravel 5.0 Project

## Server Setup

### 1. Configure Project in Homestead

```bash
$ homestead edit
```

1. Set `sites: map:` to `myproject.app`
1. Set `sites: to:` to `/home/vagrant/path/to/myproject/public`
3. Copy the `ip:` up top on this file for the next step

### 2. Add Project Url To Hosts File

Add this line to your `/etc/hosts` file, replacing `YOUR_IP` with the IP you copied in the previous step.

```
YOUR_IP myproject.app
```

### 3. Run Site Locally

After this command and you should be able to access `http://myproject.app` in your browser.

```bash
$ homestead up
```

## Database Access

### 1. Add Project DB Credentials to Homestead

```bash
$ homestead edit
```

1. Add to `databases:` your project's database: `- myproject`
3. Copy the `ip:` up top on this file for the Sequel Pro step


### 2. Configure Database Credentials

Open `myproject/.env` file and set the following:

```
DB_HOST=127.0.0.1
DB_DATABASE=myproject
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 3. Access Database Via Sequel Pro

Open Sequel Pro and setup a new connection, replacing `YOUR_IP` with the IP you copied from step 1:

```
Name: My Project
Host: YOUR_IP
Username: homestead
Password: secret
Database: myproject
```

### 4. Access Database through Terminal

```bash
$ homestead ssh
$ cd path/to/myproject
$ mysql -uhomestead -p
mysql> show databases;
```

## Laravel 5.0 Project Migration and Seeding

### 1. Add UserTableSeeder

Add `UserTableSeeder.php` to `myproject/databases/seeds/`. 

__NOTE:__ In order to use the `User` model, I had to add `use App\User;` to the top of the file.

```php
<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class UserTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('users')->delete();

        User::create([
            'name' => 'Your Name',
            'email' => 'your@email.com',
            'password' => 'your_password'
        ]);
    }

}
```  

### 2. Edit DatabaseSeeder

Uncomment the following in in `myproject/databases/seeds/DatabaseSeeder.php`.

```php
$this->call('UserTableSeeder');
```

### 3. Run Migration and Seeder

```bash
$ homestead ssh
$ cd path/to/myproject
$ php artisan migrate:refresh --seed
```

If that doesn't work, run `composer dump-autoload` and try again.

### 4. Check in DB for tables and values

Yeah... do that ^

## Have Questions or Feedback?

Feel free to leave a comment below or tweet me [@kevinkirchner](https://twitter.com/kevinkirchner).

## Go Read Some Documentation

This should get you up and running. If there's more you need to figure out, read through the laravel docs ([http://laravel.com/](http://laravel.com/)) and check out laracasts at ([https://laracasts.com](https://laracasts.com))