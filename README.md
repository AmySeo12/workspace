# Music Database Exercise - Web API

## Overview

Your company runs an extensive music database and is in the process of improving the user experience.

The system currently supports adding and deleting music records (songs) via a front-end UI controlled by JavaScript (jQuery). The system is built using a web framework (Rails) + SQLite3 DB + Ruby enabling a db-driven webserver.

## Running application

To run this project you must be sure you have [ruby](https://www.ruby-lang.org) installed on your OS. In order to test whether you have it installed or no, you can run ```ruby -v``` from your terminal and you should see your ruby version, if you get an error it means you haven't installed or haven't installed correctly.

To install all dependencies this project uses, you should run ```bundle install``` command from your terminal on the root of your project.

This project has a model (Music) to interact with the database and perform operations (such as create and delete songs) with the API. In order to start rails webserver without getting errors, you should run ```rake db:migrate``` command, this will create a SQLite database on your development environment.

Finally, you should run ```rails server``` or ```rails s``` command.

## The Task

Currently, there is no data validation when a movie is added through the website. The data is managed asynchronously through the use of a JSON-based REST API. Bootstrap is used as a UI framework.

You have 4 tasks to complete:

- First, you should change the UI using Bootstrap as much as you can in orter to look like this:

  - Add Form and no music records message.

    ![Add Song Form](https://s21.postimg.org/elj90qko7/Screen_Shot_2016_11_17_at_5_56_23_PM.png)
    
  - Status bar.
  
    ![Status Bar](https://s11.postimg.org/5is8v2hnn/Screen_Shot_2016_11_17_at_6_04_07_PM.png)
    
  - Error messages.
  
    ![Error Message Container](https://s16.postimg.org/ga70vo4et/Screen_Shot_2016_11_17_at_6_07_01_PM.png)
    
  - Music records.
  
    ![Music Records](https://s21.postimg.org/7z4g0dfev/Screen_Shot_2016_11_17_at_6_15_30_PM.png)

- You should check if there is no music records in database in order to show message appropriately (```p.no_music```). 

- Then, the task is to add basic JavaScript-based validation for the song title, artist, year, and genre inputs. Submitted values must meet the following criteria:

  - All validation must be done with JavaScript/jQuery.
  - None of the fields may be blank.
  - Leading and trailing whitespace must be removed from the input.
  - The song title must have a maximum of 40 characters.
  - The song artist must have a maximum of 60 characters.
  - The year should be a positive whole integer, and must be between 1900 and *current year*, inclusive. 
  - The genre must have a maximum length of 30 characters.
  - Invalid data must not be submitted, meaning that it cannot make it through into the database or be displayed in the list of songs on the website.
  - All errors must be shown inside of ```div.errors``` container, make sure you don't change class name. 
    - Error's syntax should be: **Invalid [field]**.

- Finally, you should implement the DELETE method using the API provided through an asynchronous request (AJAX) when clicking on each remove button of every song.

## Time

- Expected time: 2 hours.
- Total time: 3 hours.

## Optional

If you get the tasks on time, you can improve the UI as you would like in a new branch. This will be gladly received and checked to be counted as extra points. 
