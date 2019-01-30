<div class="c-box-image">
    <img src="/images/posts/4/chapterpic-implementation-2.jpg" alt="chapterpic-implementation" />
</div>

# Project implementation

Now that we’ve discussed the planning stage and practical logistics, we will consider the activities involved in setting up and managing a map campaign. This chapter begins with an overview of the field data collection workflow, and its considerations, then explores some typical workflow sequences, and the subsequent activities you will encounter as part of that workflow.

## 4.1 Field data collection workflow

We will discuss the methodology for field data collection (known as the data capture strategy), project scheduling and daily workflow, quality control, and reporting.
A principal consideration in a mapping project is the data capture strategy; how will your team prepare for the field work ahead? How will your mappers go out each day, collect information, come back to the office, and enter it into the OpenStreetMap database? And how will they do this efficiently and accurately? This process requires careful consideration of field mapping procedure, as well as training on the various data collection and mapping techniques planned.

The practical side of mapping campaign has the following common elements, that typically follow this workflow:
<div class="c-list">
  <ul style="list-style-type: none;">
    <li>4.1.1	Define the data model</li>
    <li>4.1.2	Remote mapping</li>
    <li>4.1.3	Set up data collection software/forms and quality analysis</li>
    <li>4.1.4	Field Data Collection</li>
    <li>4.1.5	Data Review</li>
    <li>4.1.6	Coverage tracking and QA</li>
    <li>4.1.7	Export, use and analyse data</li>
    <li>4.1.8. General Logistical Considerations</li>
  </ul>
</div>


### 4.1.1 Define the Data Model (in more specific terms)

Remember that your data model should include the map features you plan to collect to support the problem statement you developed at the outset of your project (Section 2.2.2 Why are you collecting the Data?). At this stage you should include the detailed attributes/tags about those features that you plan to capture during your fieldwork.

Remember: The <strong>data model</strong> outlines the geographical features to be collected for the study site, as well as the attributes (or tags) to be collected for those features. At a very basic level, this acknowledges whether the team will collect (for example): buildings, road infrastructure, and waterways, and what attributes, or tags will be collected about those features.

### 4.1.2 Remote mapping

The project manager will coordinate mapping activities to trace infrastructure in the study area from high resolution satellite imagery in the OpenStreetMap platform. The data created during this task will be used to create orientation maps for field data collection activities. All traced data should be subject to secondary remote validation before the field data collection process. Desktop validation refers to the accuracy of the traced geometry with regard to the available imagery, and any basic tagging that can be inferred from that imagery. Quite often multiple training activities are planned in conjunction with the remote mapping part of the campaign. These can focus on both skills required for the remote mapping aspect, but also, in preparation for the field mapping component.

<strong>Remote Mapping Training Activities</strong>:
<div class="c-list">
    <ul>
        <li>Staff/Team training on iD-editor, and JOSM platforms.</li>
        <li>Training/Mapathon for volunteers (students, or locals), or city counterparts.  These events typically focus on entry level OSM tools, such as iD-editor.
        <ul>
          <li>Mapathons: Mapathons are gatherings that bring people together around the need to create map data. Even if the desktop tracing of infrastructure within the study area is manageable by the project team, it is a good idea to organize a mapathon event to showcase the project, and educate partners on the OSM workflow. A secondary task can be created to demonstrate the tracing procedure).</li></ul>
        </li>
      </ul>
</div>

It is important to consider the logistics for any training event, whether this is for an internal team, or a wider audience. Things to consider are:
<div class="c-list">
    <ul>
        <li><strong>Wi-Fi Capability</strong>: Although your training venue may have a wifi connection, you need to test its capacity to accommodate the expected number of attendees. You need to consider using boosters, or hotspots to supplement the wi-fi, or as a backup.</li>
        <li><strong>Computers</strong>: Will your facility have machines that you can use, or will you expect your attendees to bring their own? If so, then they will need to bring a mouse, and make sure that they have enough disk space for any installations required.</li>
        <li><strong>Space</strong>: What kind of room will be available, and what is the layout? Are there enough tables, and chairs to provide for your expected attendance?</li>
        <li><strong>Power</strong>: You will need enough power outlets for charging laptops and other devices. Additional power strips and extension cables are also an excellent idea. In some cases, an additional generator and/or alternate electricity access may need to be secured for duration of workshop.</li>
      </ul>
</div>

### 4.1.3 Set up data collection software/forms and quality analysis

Once data models are completed, they need to be converted into forms to be used in data collection software such as OpenDataKit (ODK), OpenMapKit (OMK), or Kobo Collect that can be used on mobile devices such as phones or tablets.
Training on mobile devices and map reading will be required for the survey team. This includes training on the details of the data model (for feature recognition and classification). Creating forms from data models and using mobile data collection tools will be covered later in this chapter.

### 4.1.4 Field data collection logistics

There are many logistical considerations for the Field Data Collection component of the mapping campaign, these are as follows:
<div class="c-list">
    <ul>
        <li><strong>Stakeholder Involvement</strong>: Projects are encouraged to take a collaborative approach to the data collection process, this includes consulting stakeholders on what data is collected, how it is collected, and involving them in the data collection process. For instance, in some projects, students are paired with local residents to collect data. A stakeholder is a group that may affect or be affected by the outcomes of a project. Including locally based stakeholders, such as community members or local students, in the field data collection planning, or, on the actual data collection teams, not only helps the field team with wider community introductions, but also creates opportunity and builds capacity within the participating community. Joining forces makes it easier to keep data relevant and up-to-date and avoids a duplication of efforts. Data becomes more useful and more used when more groups are aware of its existence and involved in its collaborative collection.</li>
        <li><strong>Authorization from district and/or other officials</strong>: In many cases, mapping teams will need to carry an authorization letter or other form of permission from local officials to show credibility and to reduce potential conflict that could arise during the field data collection. We recommend that teams request this letter from the appropriate authorities as soon as possible to reduce the risk of delaying mapping activities.</li>
        <li><strong>Pilot Testing</strong>: Divide the study area into survey areas that can be covered by a team of 2 in a half day. Test the size of these areas. Train survey team on the survey instrument (device/app/map), conduct small pilot data collection over the course of 1-2 days. Use team feedback to refine the instrument, and potentially the field procedure (including the size of the assigned area). Note: Depending on the climate in your city, it is probably advisable to restrict field mapping to a half day activity, during a cooler period of the day (but during daylight hours). The remainder of the day can be used for data consolidation purposes.</li>
        <li><strong>Field Data Collection Schedule</strong>: Following the completion of a pilot test, you should have a stronger understanding of how many buildings or how much area can be mapped in a day. This will allow you to calculate how many days you expect to take for mapping and will allow your team to monitor field data collection process. When creating this schedule - be sure to consider any holidays, density of buildings/features (more dense areas may take longer than less dense areas), weather conditions (rainy season, or extreme hot weather can slow down teams), and other circumstances that could affect this schedule.</li>
        <li><strong>Management of teams in the field</strong>: You will need to think about how you will manage mappers in the field. How will you supervise quality of data collected and ensure mappers are fully covering their assigned areas? How will mappers communicate with each other and team leaders when they have questions or concerns? Working in small groups of 3-5 mappers, each with a supervisor often works best for field management. These supervisors will need to regularly check on mappers and communicate with team leaders.</li>
        <li><strong>Safety and Security</strong>: For any field operations, the key to effective safety and security management is the creation of a culture of security. Each staff member and volunteer has a responsibility for their own safety and security, and that of other team members. Teams should discuss what risks are posed with field activities, what should be done to avoid risks, and how to mitigate them should they occur.</li>
      </ul>
</div>

<!--
Figure 4.1 Options for Subdividing a Daily Mapping Area
a. Gridding an area
<div class="c-box-image">
    <img src="/images/posts/4/4-1-a-2.jpg" alt="4-1a" />
</div>
b. Subdividing an area by natural boundaries, such as blocks bounded by roads
<div class="c-box-image">
    <img src="/images/posts/4/4-1-b-2.jpg" alt="4-21b" />
</div>
<em>Source: Imagery in panel “a” from [Field Papers](http://www.fieldpapers.org)</em>

It is a good idea to divide the target area early in the project. If possible, do this before fieldwork begins, though you will need to have existing road data. Otherwise, you might set aside some time in the first few days for survey teams to simply map all of the roads, which will then make it easier to divide the total area into daily mapping areas.

Once you do this, you will know how many of these “blocks” are in your target area, and you can estimate exactly the time and staff you will need to survey it all. Let’s say, for example, that you have a target area that you then subdivide into 20 blocks, a partial example of which is shown in figure 4.2. You then estimate that each block will take about four hours to survey and a couple of hours to edit, which means it will take one pair of mappers to map one block every day. If you have one mapping team, it will take 20 workdays to map the entire target area; if you have two mapping teams, it will take 10 workdays, and so on.

Figure 4.2 Example of a "Blocked" Target Area in Dhaka, Bangladesh
<div class="c-box-image">
    <img src="/images/posts/4/4-2-2.jpg" alt="4-2" />
</div>
<em>Source: OpenStreetMap</em>

How would you manage this workflow? Each morning, you would give each team a block to map. You print out Field Papers that cover the areas they are supposed to map and draw a boundary around the specific area or explain it to them directly. Give them additional forms (survey forms, if you are using them) and the same materials for an adjacent square where they can map if they have extra time. (For this reason, as box 4.1 explains, teams should receive block assignments that are not adjacent to each other on any given day.)

In the afternoon, the teams will return to the office and begin editing. The manager will be there to answer questions about surveying and editing and to ensure that everything gets uploaded to OSM without problems. The next day, the process will repeat, thus ensuring that the target area is mapped in the expected time.

<div class="c-box">
    <span class="box-title"><b>Box 4.1 Mapping Nonadjacent Blocks</b></span>
    <p>It is recommended that adjacent blocks are not given to different teams to map on the same day. To do so would increase the likelihood of editing conflicts, which occur when two teams try to edit the same features at the same time. The assignment of nonadjacent blocks to each team also allows your mappers to continue mapping if their block takes less time than they expect. For these reasons, it is better to organize daily mapping activities following a checkerboard pattern, as shown in figure B4.1.1. </p>
    Figure B4.1.1 Sample Mapping of Nonadjacent Squares in Guagua, Pampanga, Philippines
    <div class="c-box-image">
        <em>Source: Data from OpenStreetMap</em>
    </div>
</div> -->

### 4.1.5 Digitize/review data (JOSM)

During or after field data collection, teams will review and clean collected data in JOSM. Reviewing the data before upload ensures high quality before it is shared. Following the field data cleaning process, all collected data is cleaned and uploaded to OSM.

### 4.1.6 Coverage Tracking and QA

Quality assurance and quality control is the process by which mappers check data to ensure that all information uploaded to OSM meets high standards for usage. Quality assurance and control can be and should be performed at all stages of a mapping campaign. Several tools exist to assist with quality assurance during the data cleaning and upload process as well as monitoring data after uploading. These tools will be discussed in Section 4.3.

### 4.1.7 Export, use and analyse data

Following upload to OpenStreetMap, all data collected during the field mapping is available for individuals and organizations to download, analyze and use for their purposes. Many tools, such as the HOT Export Tool, assist with downloading data from OpenStreetMap. And open source programs, such as QGIS, allow users to analyze and create maps from this data for free. These tools and processes will be covered in later phases.

### 4.1.8 General logistical considerations

There are many components to managing logistics for field operations. Consider how your team will address the following components.

<div class="c-list">
  <ul>
    <li><strong>Workspace / Meeting space</strong>: The need and specifications for a workspace or meeting space varies from project to project. Some field mapping projects require a central base with full-day access and wi-fi whereas other field mapping projects have been operated from campsites.</li>
    <li><strong>Equipment</strong>: Different scopes of work will require different types of equipment. For example, ODK and Kobo software can run on most Android devices, but OMK software requires high specifications.</li>
      <ul>
        <li>What type of mobile devices will you use to collect data? (Mobile phones, tablets, GPS devices, etc.)</li>
        <li>Does everyone on the team have access to data collection devices?</li>
        <li>Does everyone on the team have access to computers/laptops? Or will the team plan to work in shifts?</li>
      </ul>
    <li><strong>Transportation</strong>:
      <ul>
        <li>How will mappers move around in the field?</li>
        <li>Is the scope of work/area of interest large enough that mappers will need transportation beyond walking?</li>
        <li>If teams/mappers need motorized transportation:
          <ul>
            <li>What types of transportation are available?
            <li>What types of transportation are safe for the context and circumstances?
            <li>Will this type of transportation have associated costs? (i.e. driver fees, rental, fuel)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Time Management</strong>: Effective time management involves setting clear and realistic goals (i.e. how much area each team member should map each day with consideration of fatigue, weather, and other complications), creating checklists and to-do lists (i.e. what should teams do before and after the field each day), making schedules and adjusting behavior when those schedules aren't met, taking regular breaks, and strong communication between team members.</li>
  </ul>
</div>

## 4.2 Designing a survey instrument

In this section we will explore the basics of designing a survey instrument to complement your data collection activities. We will also look at some of the available software and hardware options to deploy your survey in the field.

### 4.2.1 What is a survey?

From a geographic perspective, a “survey” is a field activity to capture the details of one’s physical surroundings. Usually this involves going out to map at a level of detail that cannot be seen from aerial imagery. This is necessary for creating a detailed and accurate map. The term survey can also apply to the research method for gathering information about the characteristics, behaviors and/or attitudes of a population by administering a standard set of questions to a sample set of individuals. The term survey describes the process itself, while the set of questions - or questionnaire - is considered an “instrument” or "tool".

#### What is a Survey instrument?
Survey instruments are essentially the tools that allow mappers to collect geospatial survey data in the field. There are a variety of tools to use for field mapping, ranging from paper based (paper maps and questionnaires), to simple GPS, to GPS-enabled smartphones and tablets. Mobile data collection applications such OpenDataKit, OpenMapKit, and KoBoCollect for data collection improve upon traditional GPS and paper-based methods. In many cases, these tools allow us to collect both geographic and attribute data simultaneously.

Most of the application (“app”) based tools featured in this chapter capture the geospatial aspect of the data through either: locally recording the GPS coordinates of the feature in question, and allowing the user to add attribution at the time of recording; or by allowing the user to add detailed attribution to existing features (e.g. buildings, roads, waterways, features of interest) on a digital map, by interacting with that map on a hand-held device while in the field.

### 4.2.2 Developing survey questions

Whether you plan to use paper based, or digital attribute capture, a questionnaire must be developed that aligns with the data model you have already designed.

#### 4.2.2.1 Good rules of thumb for questionnaires

There are a few simple rules when it comes to developing survey questions. These rules apply even in cases where the expected responses, or data ranges may seem simple, or obvious:

<div class="c-list">
    <ul>
        <li><strong>Keep it simple</strong>: A question shouldn’t raise more questions. Questions should be clearly worded. Keep it short and simple, and specific.</li>
        <li><strong>No double barreled questions</strong>: Do not ask double-barreled questions. In other words, don’t ask questions that touch on more than one issue but only give one opportunity for one response. If follow-up questions are required for the same map feature, it’s possible to use skip logic. Skip logic creates a custom path through a set of survey questions, that varies based on a respondent's previous answers.</li>
        <li><strong>Do not use institutional or academic jargon</strong>: Do not assume the participants (or data collectors) are familiar with your industry jargon. While a term may be frequently used by your organization, or featured in academic literature, it may hold little or no meaning for the general populace. Remember that our survey teams may be drawn from the local population.</li>
        <li><strong>All terms should be clearly defined</strong>: If it is important to use specific terms as part of the survey, make sure your training involves a proper definition and description of the term and its usage. This should also be reiterated in either field notes, or as a note that appears with the question.</li>
        <li><strong>No leading questions</strong>: Leading questions are questions that subtly prompt the respondent to answer in a particular way. Or, questions that are overly assumptive in their wording, as in: “what level of education do you have?” or, “what job do you have?” You don't know if the respondent has a job, or, if they were exposed to formal education.  This is more of an issue when speaking directly to respondents, rather than a situation where a surveyor is making a direct observation about a piece of infrastructure.</li>
        <li><strong>Avoid the use of negative words</strong>: Using negative words in questions confuses people. For example: “Did you not?” and “Do you not?” This is leading and already assumptive of the answer. Ask something in a clear fashion that allows for an unbiased yes/no answer.</li>
        <li><strong>Do not use biased, or emotionally charged terms in your questions</strong>: It is good to check your terms and wording choice with a community representative before going into the field.</li>
      </ul>
</div>

A clear set of instructions, and adequate training is always required if the surveyors are filling out the questionnaire alone, or, it will be administered by someone other than your immediate research team. It is important to pilot test the product, and cross check your survey with a member of the local community. You have to remember that there are potentially two levels of interpretation here: your surveyor, and the person being surveyed (if that is relevant for the data being collected). That creates at least one, if not two chances for misinterpretation.

#### 4.2.2.2 Question response style

<strong>Closed questions</strong> provide a list of acceptable responses. Checklists, multiple choice questions, true/false questions, and sliding scales are all types of closed responses. Respondents or surveyors may find it easier to answer the question when response alternatives are provided, and it is easier and less time-consuming to interpret and analyze these types of responses. The answers generated using this style of question can be useful to generate statistics and are easier to interpret and analyze, but they lack detail, richness and personal viewpoints. Closed response questions are critical for adhering to Data Models for GIS database construction. Using multiple choice options keeps tagging consistent, and one can always include an “other” option, to allow for flexibility.

<strong>Open-ended questions</strong> allow respondents to answer in their own words. There are several advantages to this; respondents may give increased amounts of reflection to their answers, and critical unanticipated perspectives may emerge. Sometimes, answers to open questions may be difficult to interpret and answers may be spread over many categories, making them hard to analyze. For the purposes of feature identification, open-ended questions make proper categorization almost impossible, and the inclusion of an “other” option at the end of a closed range of choice is a good middle ground.

#### 4.2.2.3 Data collection workflow

The data collection process starts by translating data models into forms that can be read by data collection software such as OpenDataKit or KoboCollect. For each software type, this process can look different - either building xlsforms in spreadsheet software or using online builders. Once completed, these forms are uploaded onto mobile data collection devices. In the field, mappers open the applications when reaching a feature they want to map. The geospatial and attribute data is collected and saved to the device. After data collection, teams review data in JOSM before uploading to OSM. Kobo provides an additional environment where teams can aggregate and analyze the raw data on the Kobo Toolbox.

Your choice of workflow, and the tools associated with it must meet your resources. If a heavily digital workflow exceeds your hardware budget or the training potential of your volunteers, then you need to plan accordingly. Mapping workflows can be exclusively paper-based (e.g. Field Papers, and paper questionnaires); a combination of paper and digital (e.g. Field Papers and a data collection app, or GPS); or, an exclusively digital workflow (e.g. OpenDataKit/OpenMapKit). There are pro’s and con’s to each combination, ranging from: cost, to ease of setup and training, to error reduction and quality control.

<strong>Type 1: Paper based workflow</strong>

For the collection of OSM data, a paper collection workflow typically involves the use of a Field Papers Atlas (to verify the existence and positioning of mapped features in the field), and a paper questionnaire to collect the attribution for the mapped features.
Pros:
  <div class="c-list">
    <ul>
        <li>Ease of training</li>
        <li>Limited technology required</li>
        <li>Relatively easy to set up and begin mapping</li>
    </ul>
  </div>

Cons:
<div class="c-list">
  <ul>
      <li>High amount of data entry required after data collection</li>
      <li>Higher margin of error/lower accuracy of data</li>
      <li>Possible limitations on quantity of data that can be collected</li>
  </ul>
</div>

<strong>Type 2: Paper-based & Digital Workflow</strong>

A Paper + Digital workflow typically involves the use of a Field Papers Atlas and GPS device, recording waypoints with a GPS device and recording field data on paper for later reconciliation on computers for quality control and upload to OSM.

Pros:
<div class="c-list">
  <ul>
      <li>Ease of training</li>
      <li>Lower need for technology access</li>
      <li>Relatively easy to set up and begin mapping</li>
      <li>Fewer limitations on quantity of data that can be collected</li>
  </ul>
</div>

Cons:
<div class="c-list">
  <ul>
      <li>High/moderate amount of data entry required after data collection</li>
      <li>Moderate margin of error/moderate accuracy of data</li>
  </ul>
</div>

<strong>Type 3: Exclusively Digital Workflow</strong>

An exclusively digital workflow relies exclusively on mobile devices (i.e. phones, tablets) for field data collection, which can be directly transferred to computers for quality control and upload to OSM. This workflow can take a number of forms:
<div class="c-list">
  <ul>
      <li>ODK or Kobo Collect only</li>
      <li>OpenDataKit + OpenMapKit</li>
      <li>QField</li>
  </ul>
</div>

An exclusively digital workflow can have the following pros and cons depending on applications used:

Pros:
<div class="c-list">
  <ul>
      <li>Lower margin of error/higher accuracy of data collection</li>
      <li>Higher quantity of data that can be collected</li>
      <li>Reduced data entry/quality control necessary after data collection</li>
  </ul>
</div>

Cons:
<div class="c-list">
  <ul>
      <li>More intensive/difficult training</li>
      <li>Access to technology required for processes</li>
      <li>Set-up can be labor/skill intensive</li>
  </ul>
</div>

#### 4.2.2.4. Popular Digital Tools
<div class="c-list">
  <ul>
      <li><strong>Open Data Kit (ODK)</strong> is a free and open-source set of tools which help organizations author, field, and manage mobile data collection solutions. ODK Collect is part of ODK and is an Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without network connectivity. Forms can be created using spreadsheet software (such as Excel or LibreCalc) or using the ODK Form Builder.
        <ul>
          <li><a href="https://docs.opendatakit.org/collect-intro/" target="_blank">Introduction to ODK</a></li>
          <li><a href="https://docs.opendatakit.org/getting-started/" target="_blank">Getting Started With ODK</a></li>
          <li><a href="http://xlsform.org/en/#what-is-an-xlsform?" target="_blank">Introduction to XLSForm</a></li>
        </ul>
      </li>
      <br>
      <li><strong>OpenMapKit (OMK)</strong> is an extension of ODK Collect that launches directly from within ODK Collect when the OSM question type is enabled in a standard survey. It is what allows you to browse OSM features, and to create and edit OSM tags.  The main difference between ODK and OMK is that OpenMapKit allows users to tag polygons, such as buildings, that already exist in OSM instead of only being able to add data to GPS points. Forms for OMK are slightly altered from ODK forms to incorporate the OSM tagging scheme and need to be built using spreadsheet software (such as Excel or LibreCalc).
        <ul>
          <li><a href="http://openmapkit.org/docs_odkformsforomk.html" target="_blank">Creating Surveys in OMK</a></li>
        </ul>
      </li>
      <br>
      <li><strong>KoBoCollect and Kobo Toolbox</strong> is in almost all ways similar to ODK Collect, and is built on top of the ODK platform. Forms can be created through an online form builder. KoboCollect includes a dashboard for analyzing and managing data to create maps and reports.
        <ul>
          <li><a href="https://www.humanitarianresponse.info/en/applications/kobotoolbox" target="_blank">Overview of Kobo Collect and Features</a></li>
        </ul>
      </li>
      <br>
      <li><strong>QField</strong> is the mobile accompaniment to QGIS, which allows you to take your QGIS projects from the desktop environment to the field. It is GPS centric, and QGIS desktop compatible; project preparation can begin on the desktop version. It is fully operational offline, but with synchronization capabilities. Users can add new points to an existing database, or edit the attribution of existing features (points, lines or polygons). QField is an Open Source project and the source code is available on GitHub.
      <ul>
        <li><a href="https://www.qfield.org" target="_blank">QField: Efficient field work built for QGIS</a></li>
      </ul>
    </li>
    <br>
    <li><strong>Maps.Me</strong> is a mobile application that allows users to use and navigate OpenStreetMap offline. In addition to navigation, users can use Maps.Me to collect data and upload to OSM when connection allows. Maps.Me limits OSM additions to point data and has a limited selection of tags that can be entered.
      <ul>
        <li><a href="https://maps.me" target="_blank">Maps.me: Mobile offline maps</a></li>
      </ul>
    </li>
  </ul>
</div>

## 4.3 Quality Assurance and Quality Control

Quality Assurance and Quality Control (also known as data cleaning) is the process by which mappers, and OpenStreetMap contributors in general, check data to ensure that all information uploaded to OSM meets high standards for usage and to prevent vandalism. As OpenStreetMap is a free and open platform that anyone can use and edit, it is critical to the sustainability of open data and OSM that everyone participates in the quality assurance and quality control process – from field data collection, to data cleaning, to long-term maintenance of existing OSM data.

While Quality Assurance and Control can be and should be performed at all stages of a mapping campaign, we will explore several tools that assist with quality assurance and the data cleaning/data upload process following field data collection. These tools are also useful for monitoring data after upload, by helping validators find and fix common issues such as:
<div class="c-list">
    <ul>
        <li>Misspelled or improperly formatted place names</li>
        <li>Incorrect tag usage</li>
        <li>Overlapping or doubled buildings</li>
        <li>Roads and footpaths not connecting to a road network</li>
        <li>Objects with a name that should be in another key (i.e. trees, buildings, etc)</li>
    </ul>
</div>

### 4.3.1 Quality control process (post-field data collection)

The quality assurance and quality control process is a team effort, with many roles and responsibilities. Individual mappers should check their data, for example, by adding field data files to JOSM, syncing with existing OSM data, and then going through field data to check for errors before uploading to OSM. While all mappers are checking their data, it is important to assign a team member experienced in JOSM to focus on checking the contributions of others for any missed errors and to provide feedback on their data quality checks. This feedback is especially important for mappers new to using JOSM so that mistakes are caught early and mappers can improve their quality assurance skills.

The process of reconciling field data with OSM data depends on the workflow type selected for field data collection. There will be some extra steps, and precautions necessary, depending on the combination of tools used.

#### 4.3.1.1 Paper workflow

With a paper-based workflow, the information collected in the field will have to be manually entered into OpenStreetMap. This might include uploading Field Papers so that any field notes and modifications to the map can be transferred to OSM. If additional paper surveys or maps were used to capture attribute/tag information about the mapped infrastructure, then teams will need a reliable workflow to incorporate this data. A paper workflow is quite manual, and subject to human error, therefore teams working in this way need a data reconciliation workflow that includes rigorous checks and oversight, by advanced team members.

#### 4.3.1.2 Paper + Digital Workflow

For mixed workflows, mappers will face some of the same considerations outlined for the paper workflow, but in addition, they may need to upload collected GPS points into JOSM and download data from OSM to merge the data sources. If point data was collected for polygon features in OSM (i.e. building information was recorded with corresponding GPS points), these tags will need to be copied and pasted to the existing polygon before deleting the nodes.

#### 4.3.1.3 Digital workflow

The digital workflow requires mappers to open field data files in JOSM and download data from OSM to merge the data. If point data was collected for polygon features in OSM (i.e. building information collected as points in ODK), these tags will need to be copied and pasted to the existing polygon before deleting the nodes. If mappers use digital survey apps, such as OpenDataKit or Kobo Collect, that don’t sync directly with the OSM data model (in the same way that OpenMapKit does), then they will need to establish a data reconciliation workflow to transfer any OSM relevant data to the platform. Although these are all digital tools, reconciliation of data collected in this way isn’t simply automatic.

### 4.3.2 Quality control tools in JOSM

There are tools built into JOSM, as well as additional plugins that can assist with data quality control during the upload process. (Some of these can also play a role in the validation process following remote mapping activities).

<div class="c-list">
    <ul>
        <li><strong>Filters</strong> is a built-in tool that allows you to disable, hide, select, and highlight specific groups of objects based on flexible custom parameters. This tool will help you to spot and avoid common mistakes, and review data.</li>
        <li>The <strong>Validation Tool</strong> is another built-in tool that will review and search for common errors as well as provide warnings about potentially problematic data.</li>
        <li>The <strong>Todo List</strong> plug-in allows users to systematically review data that is to be uploaded, and monitor progress of data cleaning work. The “Todo List” plug-in needs to be downloaded before it can be used.  Visit this page to learn how to install plug-ins in JOSM, then download the “Todo List” plug-in.</li>
        <li><strong>MapCSS Paint Style</strong> is an advanced JOSM quality assurance tool that can be used to visually identify errors such as missing tags and road network issues. Existing MapCSS Styles can be imported or with some training, quality control teams can create their own MapCSS styles that match their data model.</li>
    </ul>
</div>

### 4.3.3 Monitoring Upload Quality: OSMCha

OSMCha, or the OpenStreetMap Changeset Analyzer, is a tool designed to review uploads and changes to OSM data, largely to prevent bad edits and vandalism to map data. This tool allows users to filter by username, location, dates of upload, and other metadata features. OSMCha is useful for monitoring the progress of data cleaning and upload teams.

## 4.4 Field Equitette

When working in the field, be polite and engaging with residents and other people you may encounter. It's important to consider how you would feel if a stranger approached your home to collect information. Make sure to introduce yourself when someone is present and briefly explain your purpose for being in the area before beginning to collect data. It can even help by showing those that are interested how you are collecting data and the tools that you are using.

Carrying a permission letter from an appropriate authority can relieve tensions that may arise. In addition to carrying a permission letter, field mappers should dress professionally (although appropriate for field work), and if possible, wear designation such as matching vests, hats, or at minimum, have identification badges. If there is concern from local residents as to your presence, be calm and patient. If a discussion escalates, safely remove yourself - it's better to not collect data than to create a safety issue or lose the trust of local residents.

Prior to entering the field, it can be helpful for field mappers to practice introducing the project and their purpose with each other, as well as practicing handling scenarios with reluctant or difficult community members.
