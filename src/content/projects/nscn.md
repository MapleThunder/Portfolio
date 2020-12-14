---
title: "Search for a Nurse"
type_id: project
project_id: search-for-nurse
main_image: "../../images/me.jpg"
teaser: "A custom Drupal 8 module to display data from multiple APIs"
tags:
  - Drupal 8
  - PHP
  - Twig
---

## Description

Prior to 2019 Nova Scotia had 2 separate colleges for nurses, the College of Licensed Practical Nurses of Nova Scotia and the College of Registered Nurses of Nova Scotia. In 2019 they joined together to form the Nova Scotia College of Nursing. I worked for the company that won the contract to create their new website in Drupal 8.

The registry of nursing licences needs to be publicly available to search through to see if a nurse's licence is active or if they have any disciplinary actions against them. Each college had kept a database of this information with their own APIs to access it. The [Search for a Nurse](https://www.nscn.ca/search-nurse) page on the website will take the filter input and query both licence APIs, combining and normalizing the data returned, then rendering the data in a table.

## How I Did It

### Retrieving the Data

Since the APIs had been from two separate colleges the input parameters and fields on returned data didn't match. In order to make the search feel like it was querying a single source I had to distil the filters down to the simplest set of fields that would work for both.

I abstracted the `CallApi` function performing the separate API calls into its own Drupal service class, ApiCaller. The function took in an array of filter parameters and formatted them into URLs with query parameters, called each API, then parsed both results into a single array of JSON objects.

### Normalizing the Data

With the result of the API call from the ApiCaller service I could loop through the array and transform the data however necessary. Most of the transformations were updating field names so all records match or adding a new field with extra label information.

Once the data had been normalized I filtered the array down based on the pagination values found in the query parameters. All of this data was then loaded into a few custom associative arrays to make it more legible and understandable in the template.

### Rendering the Data

The final set of normalized and filtered records was passed through to the Twig template with pagination and filter values. Passing in already organized data arrays allowed the Twig template to stay as simple as possible.

The default values were loaded into the filter inputs and the pagination was set up from the provided information. I defined a table and used Twig to loop over the passed in records and create table rows.

### Individual Licence Information

Each individual table row has a link to view more information about that record. This link was generated using the registration number attached to the licence record. Since I was dealing with licences from two, originally separate, colleges the registration numbers weren't unique. This required me to pass extra information to the licence details page through query parameters.

I passed the first and last name, licence type, and year the licence became active as query parameters. I used these to ensure that the correct record was loaded by comparing against any records with a matching licence registration number.
