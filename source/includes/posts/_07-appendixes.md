<div class="c-box-image">
    <img src="/images/posts/appendixes/chapterpic-appendices.jpg" alt="chapterpic-appendices">
</div>

# Appendixes

## Appendix 1 Data Model Design

Your data model is a chart of the features and attributes
of those features that you plan to collect in the field. As
described in chapter 3, designing the data model is a
process of determining the priorities of your project in
coordination with your partners.
After a data model has been defined, you must determine
how the features will be mapped using the Open-
StreetMap tagging system. In OSM, features are drawn
as points, lines, or polygons, and tags are applied to these
features to describe their attributes. Common tags can
be seen on the OSM Wiki site, at <b><a href="http://wiki.openstreetmap.org/wiki/Map_Features/" target="_blank">wiki.openstreetmap.
org/wiki/Map_Features</a></b>.

OpenStreetMap uses a free-tagging system. That is, you
can use any tags that you want to describe attributes.
However, it is important that users around the world agree on the same tagging conventions to represent
features in order to maintain data uniformity. For
example, this is why nearly all tags are in the English
language. For most attributes that you want to map, you
can probably find an existing tagging convention on the
OSM Wiki site. Also useful is <b><a href="http://taginfo.openstreetmap.org/" target="_blank">taginfo.openstreetmap.
org</a></b>, which provides statistics about tags that are being
used in the OSM database. In some cases when you are
mapping new features or attributes, it may be necessary
to invent new OSM tags. It is a good idea to discuss this
with your local e-mail list and by sending a message to
<b>tagging@openstreetmap.org</b>.

The data model below (figure A6.1.1), designed for the
Open Cities Dhaka pilot project, shows how attributes
were mapped as OpenStreetMap tags.

<b>Figure A6.1.1 Sample Data Model, Open Cities Dhaka Project</b>
### <b>Open Cities Dhaka</b> OSM TAGGING SYSTEM

####1. Streets
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Streets.jpg" alt="Streets">
</div>
 
####2. Buildings
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Buildings.jpg" alt="Buildings">
</div>
 
####3. Storm Water Drainage
<b>3.1. Drainage lines (ways):</b>

waterway = drain

drain:covered = {yes | no}

<b>3.2. Manhole covers (nodes):</b>

manhole = {drain | sewer}

####4. Public Water Source

<b>4.1. Stand Point</b>

amenity=drinking_water

pump:active = {yes | no}

<b>4.2. Hand Pump</b>

man_made = water_well

pump = manual

pump:active = {yes | no}

<b>4.3. Overhead Tank</b>

man_made = water_tower

<b>4.4. Reserve Tank</b>

man_made = water_tank

####5. Public Toilets

amenity = toilets

toilets:num_chambers = # of toilets

<em>Source: Open Cities Dhaka.
Note: OSM = OpenStreetMap.</em>

## Appendix 2 Survey Sample Form

<b>Figure 6.2.1 Building Survey Form, Open Cities Dhaka Project</b>

### Open Cities Dhaka – Building Survey Form

Surveyor Name: _________________________________________________________  &nbsp; Date: _____________

Field Paper ID: _________  &nbsp; Ward / Block number:  _________  &nbsp; Map Building ID: _________ 

1. General Information:

1.1 Holding #:_________ 

Building name:_________________________________________________________ 

Street name:___________________________________________________________ 

1.2 Building usage:
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Building-Usage.jpg" alt="Building-usage">
 </div>

2.1 Number of Stories: &nbsp;&nbsp; 2.2 Vertical Irregularities? &nbsp;Yes / No

2.3 Is there a Soft Storey? &nbsp; Yes / No ( Long / Short direction )

<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Building-Characteristics.jpg" alt="Building-Characteristics">
</div>

<b>2.7 Visible Physical Condition (Crake, Damp, Spoiling): &nbsp; a) Poor &nbsp; b) Average &nbsp; c) Good</b>

Notes:


## Appendix 3 Sample Data Authorization Form

The following letter (Figure 6.3.1) is adapted from the EUROSHA, a European Union pilot project in Burundi, the
Central African Republic, Chad, and Kenya. For more examples, visit <b><a href="http://wiki.openstreetmap.org/wiki/Import/GettingPermission" target="_blank">http://wiki.openstreetmap.org/wiki/Import/GettingPermission</a></b>.

<b>Figure 6.3.1 Sample Data License Request Letter</b>

We, the undersigned, ………………………………………………………………………… grant to the OpenStreetMap
Foundation, in the conditions as stated below, a worldwide, royalty-free, non-exclusive, perpetual,
irrevocable licence to do any act that is restricted by copyright, database right or any related right over
anything within the Contents, whether in the original medium or any other. These rights explicitly
include commercial use, and do not exclude any field of endeavour. These rights include, without
limitation, the right to sub-license the work through multiple tiers of sub-licensees and to sue for any
copyright violation directly connected with OSMF’s rights under these terms. To the extent allowable
under applicable local laws and copyright conventions, we also waive and/or agree not to assert against
OSMF or its licensees any moral rights that we may have in the Contents.

We grant to OSMF that it may only use or sub-license our Contents as part of a database and only under the terms of one or more of the following licenses: ODbL 1.0 for the database and DbCL 1.0 for the individual contents of the database; CC-BY-SA 2.0; or such other free and open licence (for example, <b><a href="http://www.opendefinition.org/okd/" target="_blank">http://www.opendefinition.org/okd/</a></b>) as may from time to time be chosen by a vote of the OSMF membership and approved by at least a 2/3 majority vote of active contributors.

We consent OSMF to quote us or cite the owner of the copyright, according to our wishes or these of the
copyright holder. The citation will be showed on the following web page <b><a href="http://wiki.openstreetmap.org/
wiki/Attribution" target="_blank">http://wiki.openstreetmap.org/
wiki/Attribution</a></b>.

We offer the OSMF the following data: …………………………………………………………………………………………………
……………………………………………………………………………………………………………………………………………………………
……………………………………………………………………………………………………………………………………………………………
……………………………………………………………………………………………………………………………………………………………
………………………………………………………

Drawn up at ………………………………, the …………………………… in duplicate.


Signature of the donor: Signature of receiver:

(Preceded by the handwritten words «read and approved»)

<em>Source: EUROSHA Project</em>


## Appendix 4 Sample Project Report

It is a good idea to provide snapshot progress reports every two to four weeks during a mapping project.
These can be brief, 1- to 2-page documents that highlight any news or changes in project design,
mapping progress, and metrics on data collection and quality control. The sample below suggests content
to include.

### Open Cities Project Update - July 1, 2014
I. Project Updates
A brief paragraph summarizing new project developments. For example, any unexpected changes in
the project, either positive or negative, may be recorded here. In other words, any project news, such as
meetings with key partners, mapping activities, and adjustments to the project design.
<p><div class="c-list">
    <ul>
        <li>bullet points</li>
        <li>are good</li>
        <li>for document progress</li>
        <li>simply</li>
    </ul>
</div></p>

II. Mapping Progress
A simple map produced in GIS software can give a quick visual explanation of your progress.
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-4.jpg" alt="6-4">
 </div>
 <em>Buildings completed are overlaid on the target area.</em>
 
III. Data Collection and Quality Control Metrics
<div class="c-box-image">
    <img src="/images/posts/appendixes/Ap4_Data-Collection-and-Quality-Control-Metrics.jpg" alt="Data-Collection-and-Quality-Control-Metrics">
</div>

## Appendix 5 Sample Letter of Support for Mappers

<div class="c-box-image">
    <img src="/images/posts/appendixes/6-5_Government-of-Nepal.jpg" alt="Sample-Letter-of-Support-for-Mappers-from-Govt-of-Nepal">
</div>

<em>Source: Open Cities Kathmandu</em>

## Appendix 6 Open Cities Project Planning Checklist

Here is a complete checklist you may wish to follow when planning a mapping project. It will help you to consider the
many factors that go into developing an efficient, effective process.

<div class="c-box">
  <p><b>Partner Outreach</p></b>
<p><div class="c-list">
    <ul>
        <li>Identify relevant partners in government, academia, and civil society</li>
        <li>Meet with potential partners, discussing support and areas of collaboration</li>
        <li>Communicate project goals with OpenStreetMap community and meet with local mappers</li>
    </ul>
</div></p>
  <p><b>Defining the Scope of Work</p></b>
<p><div class="c-list">
    <ul>
        <li>Obtain a map containing the boundary of the target area</li>
        <li>Estimate the number of features you will map in the area, such as roads, buildings, and so on</li>
        <li>Write out your data model</li>
        <li>Map the data model to OpenStreetMap tags</li>
        <li>Establish a rough time frame for survey completion, noting holiday periods that will halt the work</li>
    </ul>
</div></p>
  <p><b>Building the Team</p></b>
<p><div class="c-list">
    <ul>
        <li>Establish management structure</li>
        <li>Determine sources of your staff and how staff will be compensated</li>
        <li>Hire staff</li>
    </ul>
</div></p>
  <p><b>Assessing Resources</p></b>
<p><div class="c-list">
    <ul>
        <li>List the existing digital and paper data</li>
        <li>Determine whether you will import any data; if so, create an action plan and time frame</li>
        <li>Draw a map showing parts of your target area where no imagery is available</li>
        <li>Determine whether you will use GPS devices, smartphones, or both; if so, acquire</li>
        <li>Confirm that the necessary base-map data are available to use in Field Papers</li>
    </ul>
</div></p>
  <p><b>Logistics</p></b>
<p><div class="c-list">
    <ul>
        <li>Identify where your staff will work</li>
        <li>Ensure reliable Internet connectivity</li>
        <li>List the equipment you need and acquire it</li>
    </ul>
</div></p>
</div></p>
  <p><b>Training</p></b>
<p><div class="c-list">
    <ul>
        <li>Identify who will conduct the training and what material will be covered</li>
        <li>Collect necessary training materials, develop training manual</li>
        <li>Identify a location to host the training (maybe the same as the project office)</li>
        <li>Create a training schedule</li>
    </ul>
</div></p>
  <p><b>Collecting the Data</p></b>
<p><div class="c-list">
    <ul>
        <li>Create and print reference maps</li>
        <li>Divide target area into daily mapping blocks; enumerate and make a statistics spreadsheet, providing
each block its own row</li>
        <li>Create and print survey forms</li>
        <li>Create and print survey training manual</li>
        <li>Make daily work schedule</li>
        <li>Create detailed project implementation schedule
Quality Control</li>
        <li>Determine methods to monitor data quality, and include these in your project schedule and daily
schedule</li>
        </ul>
</div></p>
  <p><b>Reporting</p></b>
<p><div class="c-list">
    <ul>
        <li>Determine the metrics to include in your project reports</li>
        <li>Add tasks into your schedule to ensure that metrics are collected and documented regularly</li>
        <li>Maintain statistics each day in a spreadsheet</li>
    </ul>
</div></p>
</div>
