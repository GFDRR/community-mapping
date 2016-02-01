---
title: API Reference

toc_footers:
  - <p>This guide is hosted on github under a public domain license and is welcoming new content and case studies through pull request or issues. The original work is a product of <span>GFDRR OpenDRI</span> in partnership with <span>HOT</span>.</p>
  - <button class="btn -white">Download PDF</button>

includes:
  - errors

search: true
---

# Introduction

## 1.1 History of open cities and the open data for Resilience Initiative

The World Bank, through its Global Facility for Disaster Reduction and Recovery (GFDRR), launched the Open Cities Project in November 2012 to create open data ecosystems that will facilitate innovative, data-driven urban planning and disaster risk management in South Asian cities. Open Cities is one component of a broader World Bank and GFDRR program, the Open Data for Resilience Initiative (OpenDRI), further described in box 1.1.

<div class="box">
    The World Bank, through its Global Facility for Disaster Reduction and Recovery (GFDRR), launched the Open Cities Project in November 2012 to create open data ecosystems that will facilitate innovative, data-driven urban planning and disaster risk management in South Asian cities. Open Cities is one component of a broader World Bank and GFDRR program, the Open Data for Resilience Initiative (OpenDRI), further described in box 1.1. 
</div>

The World Bank, through its Global Facility for Disaster Reduction and Recovery (GFDRR), launched the Open Cities Project in November 2012 to create open data ecosystems that will facilitate innovative, data-driven urban planning and disaster risk management in South Asian cities. Open Cities is one component of a broader World Bank and GFDRR program, the Open Data for Resilience Initiative (OpenDRI), further described in box 1.1. 




## 1.2 Rationale for the Open Cities Project

## 1.3 How to Use this Guide

Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

This example API documentation page was created with [Slate](https://github.com/tripit/slate). Feel free to edit it and use it as a base for your own API's documentation.

# Authentication

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens


This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

