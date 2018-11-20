<div class="c-box-image">
    <img src="/images/posts/4/chapterpic-implementation-2.jpg" alt="chapterpic-implementation" />
</div>

# Implementation and supervision

Now that we’ve discussed the planning stage and project logistics, we will consider the activities that go on during a mapping project. We will discuss the methodology for data collection (known as the data capture strategy), project scheduling and daily workflow, quality control, and reporting.

## 4.1 Collection the data
A principal consideration in a mapping project is the data capture strategy. How will your mappers go out each day, collect information, come back to the office, and enter it into the OpenStreetMap database? And how will they do this efficiently and accurately?

Unfortunately, there is no single recipe for a perfect data capture strategy. There are too many variables: the area being mapped, the data model, the available resources, and so on. Still, we can suggest some methods that have been successful in the past.

We will assume here that the surveyors are using Field Papers and any additional survey forms required for mapping. We assume this because, as noted in the chapter on project design, Field Papers can be created even when imagery is not available. For now, we will ignore the non-paper-based methodologies, such as the use of GPS and mobile devices. Of course, you are free to include them in your process as you design it.

### 4.1.1 Creating Reference Maps

Each day, mapping teams will venture into the field carrying clipboards, pens, and papers. Before fieldwork begins, some preparation must be done. Mappers need to know where they are going, how to orient themselves once they get there, and how to use existing features on the map to correctly position new ones.

For orientation purposes, you could supply mapping teams with aerial imagery printed in color. This can be a little costly to produce, but especially in dense areas, the imagery can be a great help in locating places on the ground. Alternatively, printed maps will also help teams to orient themselves, particularly if the existing data include street names and significant landmarks.

Once the mappers are oriented in the field—understanding where they are and able to match their locations to positions on their printed imagery and base map—they are ready to start collecting new features. Typically this is done with a combination of Field Papers and survey forms. (As section 2.4 discussed earlier, Field Papers are printed OSM maps that the surveyors can sketch on to draw new features on the map.)

#### 4.1.1.1 Tracing Imagery

Tracing lines and polygons on top of imagery is a great way to produce base data before going into the field. Because it is usually easy to identify roads on top of imagery, the tracing will make the roads available on your printed base map.

Imagine you are collecting attributes about buildings. By having your mappers draw the buildings before they go into the field, they can print out Field Papers that already have all of the building polygons on it. They can then easily collect attributes by enumerating each building on the Field Paper and filling out a survey form marked with the same number.

#### 4.1.1.2 Producing Reference Maps and Field Papers

In any project, someone should be responsible for producing reference maps and Field Papers. Managers might either perform this task or delegate it to each mapping team individually. If possible, it is advisable for managers to do it, because they will be keeping track of the areas that each team maps and can ensure that teams are always equipped with the appropriate papers. Creating and printing Field Papers can take some time each day, so that time should be considered while scheduling activities.

### 4.1.2 Defining Daily Mapping Areas

Each day, you will send mapping teams to different parts of the target area. Thus, one of the first tasks will be to determine what those smaller units of the area look like. For example, let’s assume that each pair of mappers will go out for field surveys for four hours each day. This means that you will want to provide them with the resources (Field Papers, survey forms, and reference maps) to cover an area that you estimate will take about four hours to survey. You also might want to give them papers for an adjacent area of similar size, which they can start working on if the first area takes less than four hours.

As figure 4.1 shows, you can subdivide your target area in two ways: by creating a grid or by defining areas with natural boundaries. In terms of preparation time, is easier to use a grid system because you can simply print out a large grid of Field Papers, and assign one paper to each mapping team each day. On the other hand, from a surveying perspective, it makes much more sense to follow existing boundaries such as roads and map everything within a given block. Organizing areas this way may require more preparation but will be more efficient in the long run.

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
</div>

### 4.1.3 Collecting Field Data

Let’s take a closer look at the first half of the mapping job: field data collection, or field surveys. We will assume that the workday is split in two, the first half for field surveys and the second half for editing. This schedule, of course, may differ based on the needs of the project.

Each mapping team will need to have the necessary mapping materials each day as well as direction about where to map. Exactly which materials each mapping team has will vary based on the resources available and methodology of the project. At a minimum, each mapping team will need the following supplies:
<div class="c-list">
    <ul>
        <li>Field Paper of the day’s area</li>
        <li>Survey forms (if necessary) for collecting attributes</li>
        <li>Clipboard to keep papers and write on</li>
        <li>Pen</li>
        <li>(Optional) Printed map showing satellite imagery in color for orientation</li>
    </ul>
</div>

With this survey methodology, the idea is to draw features on the Field Paper and mark them with identifying numbers. Then, on a separate sheet of paper, the mappers can write down the attributes of each feature. In the case of detailed surveys, such as a building survey, you may include a form that the mappers can fill out for each building to ensure that they collect all attributes in an orderly fashion.

### 4.1.4 Developing Survey Forms

Mapping teams should receive sufficient survey forms each day. A good survey form should be organized, simple, and clear. As shown in figure 4.3, the form should be filled in with the surveyor’s name, the date, an identification (ID) number for the part of the target area they are mapping, an ID number for the Field Paper corresponding to the form, and an ID number for the specific feature being mapped.

The remainder of the form should reflect all of the attributes being collected as part of your data model (discussed earlier in section 2.2.3). In other words, for every attribute in the data model, the survey form should have a field to fill in. For attributes that can only have values within a certain range (for example, from “poor” to “good”), it is a good idea to have checkboxes or multiple-choice
options on the form.Survey forms should be covered extensively in the second part of your project training, which covers the identification of features. Mappers will need practice to identify all the different attributes covered in the data model and to understand how to properly fill out the survey forms.

### 4.1.5 Entering the Data (Editing)

The second component of mapping work is data entry. In a typical scenario, teams will go out mapping in the morning, return to an office space, and edit in the afternoon. This is usually a smooth process, though if you don’t have the space or equipment for every mapping team to sit and edit their work at once, you may need to come up with creative solutions, such as having half of the teams map in the afternoon and edit in the morning.

It is best to do data entry on the same day as the data collection, or the following day at the latest. Although mappers will be sketching out the features they collect and filling in data forms during data collection, they often remember a lot of information simply from having observed an area, and that information is best preserved if they edit the map soon after surveying. (See box 4.2 regarding custom presets, which can assist the mappers in adding features to their maps.) For the same reason, it is best for mappers to be involved in the editing process rather than splitting up the jobs of editor and mapper, though this division has been done with some success in the past.

Conducting data entry directly after collection and ensuring that the mappers take part in the process will help maintain an efficient and accurate flow of information from the fieldwork into the OSM database. Be sure to keep the mapping forms and Field Papers well organized and filed, however, in case you need to return to them later when you review the data.

<div class="c-box">
    <span class="box-title"><b>Box 4.2 Custom Presets</b></span>
    <p>During editing, your mappers will most likely be using either the offline JOSM software or the online iD editor. Because you will probably use a custom data model, you will want to add a customized menu to the editing software for adding the specific features that your mappers are collecting. This is done by creating a custom presets file, which implements a menu that makes it easy to attach the correct OSM tags to features.</p>

    <p>You can read more about creating custom presets here at
    <b><a href="http://learnosm.org/en/editing/creating-presets/" target="_blank">http://learnosm.org/en/editing/creating-presets/</a></b>.
    HOT has created an easy-to-use visual editor for creating presets files, available at
    <b><a href="http://visualtags.hotosm.org/" target="_blank">http://visualtags.hotosm.org/</a></b>
</div>

Figure 4.3 Sample Building Survey Form
<div class="c-box-image">
    <img src="/images/posts/4/4-3-2.jpg" alt="4-3" />
</div>

### 4.1.6 Scheduling Project Tasks

The implementation phase will benefit from a clear project schedule. During project design, you should create a sample project timeline (as previously shown in section 2.2.5). As the components of the project become more well-defined, schedules should include more detail.

Of all of the tasks that go into a mapping project, several of the seemingly simple ones can be the most troublesome. For example, if you plan to import data, this becomes a critically important task because survey work cannot commence until this is completed. If you schedule two weeks for data importing and it then takes four, it will delay other tasks and thus the whole project. Similarly critical tasks include finalizing the data model and setting up alternative imagery sources, if applicable. Address these tasks right from the start and allow ample time to complete them.

Managers must also make clear schedules for themselves and other mappers during the implementation phase. This is when the project will greatly benefit from the care taken in the project design phase to clearly define the target area and the data model. Managers should divide the project area into daily mapping blocks, enumerate them, and assign them each day to mapping teams. The size of the blocks may change: during the first weeks of a pilot project, it will become clearer how much area a single team can reasonably cover in a single day. Once this is understood, it will be easy to calculate how many teams and how many days will be required to complete the mapping activities.

Scheduling mapping activities is important for completing the daily work, but care should also be taken to schedule appropriate time for preparing papers and logistics for mappers. For example, if a manager is overseeing four mapping teams, a typical day might look like this:
<div class="c-list">
    <ul>
        <li><b>8–9 a.m.</b> Assign each mapping team to an unclaimed block in the target area. Create and print Field Papers for each team. Get survey forms and put all paperwork into the mapping teams’ binders or clipboards.</li>
        <li><b>9 a.m.</b> Meet the mapping teams. Explain to each team where their area is and how to get there. Hand out paperwork and send teams to the field.</li>
        <li><b>9 a.m.–noon</b> Accompany one of the mapping teams to the field to assist them and assess their work.</li>
        <li><b>Noon–1 p.m.</b> Lunch</li>
        <li><b>1–4 p.m.</b> Meet mapping teams back at the office and set them up at computers for editing. Help the teams with any questions they have about the editing process. Especially early in a project, review each team’s edits before they upload them to OpenStreetMap. Make a list of common mistakes and explain them to everybody using a projector.</li>
        <li><b>4–5 p.m.</b> Organize the paperwork from the day and begin preparing for the next day. File the completed survey forms and Field Papers for later reference. Mark the completed areas on the project map. Meet with other managers to discuss any outstanding issues.</li>
    </ul>
</div>

## 4.2 Common challenges

There are a few common threats that many mapping projects endure. It’s best to identify these potential threats early and develop backup plans in case something goes wrong.

### 4.2.1 Bottlenecks

Among the great threats to a mapping project are unexpected bottlenecks that result in the loss of much time and work. For example, if you are importing data from a government agency, but you can’t begin mapping until the data have been imported, make sure that you allot enough time in advance to acquire the data, obtain permission to use it, and import it.

If there is a weeklong religious holiday a month into your project and nobody will be working, you should identify that from the beginning. If the Internet connection tends to go off every second day, you may need to find another way of connecting your staff. Other common bottlenecks are the availability of hardware (such as having enough computers for your mapping teams) or the ability to print enough Field Papers and survey forms to keep up with the mappers’ needs.

### 4.2.2 Time Management

A great deal of time is lost in places where you would not expect. This adds up and can significantly slow down a project. One common loss of time is during morning meetings. Out of 10 people, 1 or 2 are always late. Don’t let their tardiness stop the rest of the group from working, and try to enforce a policy of punctuality. Time is also lost in the logistics—for example, printing Field Papers, preparing computers, and using the Internet. Keep these processes running smoothly to save time and energy.

In addition, transportation can drain staff time unexpectedly. Be sure to build transportation time into the staff schedules. You can’t expect a team to map for a full four hours if they need an hour to get to and from their mapping area. Consider faster ways for them to get there. For example, mapping teams may be allowed to take survey equipment home with them and then head directly to the survey sites in the morning. This option, of course, requires trust that they will begin working on time.

### 4.2.3 Survey Fatigue

Mappers who survey every day may tire of it over time. It is physically demanding work and can sometimes feel monotonous. Generally mappers do better work if they maintain their enthusiasm. Finding ways to keep them motivated can aid a great deal—for example, by varying the work on occasion, providing frequent trainings to learn new things, and offering incentives for good work.

## 4.3 Quality Control

One of the manager’s primary jobs is to ensure quality control of the data being collected and entered into OpenStreetMap. Quality control involves three principal tasks:
<div class="c-list">
    <ul>
        <li>Daily data checks</li>
        <li>Resurveying</li>
        <li>Data analysis</li>
    </ul>
</div>

### 4.3.1 Daily Data Checks

The most immediate way to ensure quality is by staying in close contact with the mapping teams, keeping track of their edits, and discussing questions and concerns with mappers when they arise.

New edits and additions should be reviewed and validated daily or at most weekly. This is an important supervisory task because catching mistakes and bad editing practices early means that they can be corrected and the editors can learn to do things properly. Managers should be highly proficient in the JOSM software, using the validation and search tools to examine project data. (Box 4.3 discusses some of these tools.) Key aspects to review are
<div class="c-list">
    <ul>
        <li><b>Topology</b> errors (such as overlapping buildings or incorrect relations);</li>
        <li><b>Tagging</b> errors (misspelled tags or misused key-value combinations); and</li>
        <li><b>Completeness of data</b> (whether all attributes in the data model have been collected).</li>
    </ul>
</div>

Managers should always be available during editing hours to answer questions and to check for mistakes. Each day they should review their mappers’ work and discuss any errors with them. They should also review common mistakes using the projector so that everybody may learn and benefit.

<div class="c-box">
    <span class="box-title"><b>Box 4.3 OSM Quality Assurance Tools</b></span>
    <p>Many tools can help OSM users check for errors in the data. The JOSM validation tool allows you to run an analysis and check for errors before uploading changes. An online tool called KeepRight (<b><a href="http://keepright.at/" target="_blank">keepright.at</a></b>) provides similar analysis and can help you find and correct mistakes. For a complete, up-to-date list of OSM quality assurance tools, visit
    <b><a href="wiki.openstreetmap.org/wiki/Quality_assurance" target="_blank">wiki.openstreetmap.org/wiki/Quality_assurance</a></b>
</div>

### 4.3.2 Resurveying

Another method of quality control is to conduct secondary surveys at regular intervals. One day every week or two, 5–10 percent of the completed work should be resurveyed. Survey teams can resurvey each other’s work, or, if possible, their more-experienced managers can undertake the reviews.

The areas selected for resurveying should be randomly selected from different areas, although at least one sample area should be taken from every mapping team throughout the course of the project. The resurveying process involves collecting the same data twice, comparing those sets of data, and looking for mistakes. For example, if you are mapping buildings and 1,000 buildings have been mapped, a resurvey would cover 50 to 100 of those buildings again. Based on the percentage of error you find, you can extrapolate the likely percentage of error in the entire survey.

Quantum GIS. Such software allows for advanced querying and analysis of the data in order to answer question
such as these:
<div class="c-list">
    <ul>
        <li>What features are missing attribute tags?</li>
        <li>Where do the values look out of the ordinary?</li>
        <li>Where are names misspelled?</li>
    </ul>
</div>

More detailed information on quality control and data analysis can be found in HOT’s “Reviewing OSM Data3” document. For more about quality reviews conducted after project completion, refer to the “Scientific communities” entry in table 2.1 on partnership sources.

Resurveying has three main functions:
<div class="c-list">
    <ul>
        <li>It gives your mapping teams the opportunity to check and correct mistakes in their work.</li>
        <li>It allows managers to find recurring errors that mapping teams make and discuss them with the teams to improve their work in the future.</li>
        <li>It provides an important metric for project reporting: the percentage of error. A margin of error of 5 percent or less will probably be acceptable, although, of course, you should strive for the greatest accuracy possible.</li>
    </ul>
</div>

### 4.3.3 Data Analysis

Just as resurveying helps to improve the data collection process, analyzing the data in JOSM improves the editing process. Another way to analyze the data is through GIS analysis, which may benefit both data collection and editing.

It’s a good idea to regularly (once or twice a month) review the project data in GIS software such as

## 4.4 Reporting

Most mapping projects have a financial backer and partners who will be interested in project reports. Depending on the length of the project, the reports may be issued at various intervals, and they will most certainly include a final project report.

How often should reports be submitted? Of course, this will depend on the donors’ requirements, but for projects of six months or less, a good rule of thumb is to deliver a midterm report and a final report, as well as brief snapshots of mapping progress every two to four weeks.

For longer projects, you may want to deliver midterm reports quarterly.

The midterm and final reports should include extensive evaluation of the project to date. They should summarize the project activities and outcomes, including partnerships, mapping activities, and the data collection progress. Lessons learned and changes to the original project design should also be detailed. In addition, these reports are the appropriate place to document the results of your quality control processes, particularly the estimated level of data accuracy and your error-checking methodology.

The more–frequent interim “snapshots” need not be as detailed. The purpose of these regular updates is to report on mapping progress and maintain metrics on the pace of data collection. For example, if the project primarily involves building data collection, you will want to report the number of buildings mapped each week, the anticipated time to completion, the rate of mapping per day, and so forth. This will help to assess how your data collection process evolves over time.

GIS queries can help you to provide good metrics. These queries can answer questions such as these:
<div class="c-list">
    <ul>
        <li>What percentage of the target area has been mapped?</li>
        <li>How many buildings have been mapped?</li>
        <li>What is the average number of buildings a mapping team completes each day?</li>
        <li>What is the estimated time to completion?</li>
    </ul>
</div>

For a sample project report, see Appendix 6.1.

<div class="c-box">
    <span class="box-title"><b>Box 4.4 Project Implementation Checklist</b></span>
    <p>During the project implementation phase, the following tasks should be completed:</p>
    <p><b>Collecting the Data</p></b>
    <div class="c-list">
        <ul>
            <li>Create and print reference maps</li>
            <li>Divide target area into daily mapping blocks; enumerate and make a statistics spreadsheet, providing each block its own row</li>
            <li>Create and print survey forms</li>
            <li>Create and print survey training manual</li>
            <li>Make daily work schedule</li>
            <li>Create detailed project implementation schedule</li>
        </ul>
    </div>
</div>

<p><b>Quality Control</b></p>

<div class="c-list">
    <ul>
        <li>Determine methods to monitor data quality, and include these in both your project schedule and daily schedule</li>
    </ul>
</div>
<p><b>Reporting</p></b>
<div class="c-list">
    <ul>
        <li>Determine the metrics to include in project reports</li>
        <li>Add tasks to the schedule to ensure that metrics are collected and documented regularly</li>
        <li>Maintain statistics each day in a spreadsheet</li>
    </ul>
</div>
