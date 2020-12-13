---
title: "Portfolio"
type_id: project
project_id: 6d39e1b3-a8f0-4dbb-9424-4769619794f8
main_image: "../../images/me.jpg"
teaser: "The site you're currently on !"
tags:
  - Gatsby
  - React
  - Markdown
  - Netlify
  - Figma
---

## Description

This is the site you're on now !

It was built because I wanted a place online that I could show examples of my work and skills. I also thought it would be a good opportunity to get more experience building and launching a Gatsby site. I used Netlify to host the site because they make it really simple. All I had to do was point Netlify to the main branch of my Github repository and they handle the rest.

## How I Did It

### Design

I started my design process by looking into other portfolio sites for inspiration. Because I was using Gatsby I was able to look in their Showcase to see examples of other portfolios built using Gatsby. I spent time looking through different portfolio sites and keeping a list of things I liked about them.

I decided on the colour palette by running the photo i wanted to use on the front page through the Coolors app, and it gave me 5 colours from the image. From those 5 colours I picked primary and accent colours for both dark and light mode.

Once I had a list of portfolio concepts I liked and a colour palette to work with, I started trying concepts out together. I used [Figma](https://www.figma.com) to create all of my website mock ups because I am most familiar with it.

### Content

The site uses a mix of markdown and JSON to populate the pages with information. Gatsby has a vast amount of available plugins to help get things done, two of which allowed me to load the markdown and JSON files with Graphql. With the page content loaded I can use the frontmatter to add details where they are needed and add the rest as HTML to the main section of the page. Gatsby handles routing to separate pages for me, all I need to do is place the markdown in directories and they will be translated into URLs on build.

### Themes

While writing the CSS for my site I abstracted common values like colours or font sizes into variables attached to the body. Then I could synchronise and update styles across the site more easily. This system allows me to switch up the entire look of the site with a simple class assigned to the body field that only has to overwrite some variables. Right now dark mode is supported by simply adding the class "dark" to the body element, which a Gatsby plugin handles for me.

The colours I originally used for my light mode actually didn't have the contrast necessary with lighter text to be accessible. Once realizing this I went through and did an accessibility overhaul of the colours I was using. I changed where some colours were being used, and darkened or lightened colours to raise their contrast with light or dark text.
