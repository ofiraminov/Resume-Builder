/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*global $ */

/*jshint -W117 */


//-------------------------------Functions--------------------------------
function appendToResume(what, how, where) {
    $(where).append(how.replace("%data%", what));
}

function appendToResume(what, how, where, where2) {
    $(where).append(how.replace("%data%", what));
    $(where2).append(how.replace("%data%", what));
}


//---------------------------------My Bio:--------------------------------------------
var bio = {
        "name": "Ofir Aminov",
        "role": "WebDeveloper",
        "contacts": {
            "email": "aminovo3@gmail.com",
            "mPhone": "+972523587581",
            "github": "@ofiraminov",
            "location": "Tel-Aviv"
        },
        "pictureUrl":   "https://s-media-cache-ak0.pinimg.com/avatars/ofir_aminov_1440765724_140.jpg",
        "welcomeMessage": "Hi and welcome to my resume page!",
        "skills": ["Awesomeness", "Beach VolleyBall", "Product Management", "JavaScript", "Ajax", "Python"]
    };

var education = {
	"schools": [
      {
		"name": "Tel Aviv University",
		"graduationYear": "2012-2015",
		"location": "tel Aviv"
      }, 
      {
		"name": "Ben Gurion University",
		"graduationYear": "2004-2006",
		"location": "beer sheva"
      }
    ],
	"onlineCourses": [
      {
		"title": "Javascript Crash Course",
		"Year": "2016",
		"school": "Udacity",
        "url": "http://www.udacity.com/course/ud804"
	  }, 
      {
        "title": "Product Manager Crash Course",
		"Year": "2015",
		"school": "Udemy",
        "url": "https://www.udemy.com/how-to-get-a-job-in-product-management/learn/v4/overview"
      }
    ]
};

var work = {
    "jobs": [
      { 
          "title": "Product Manager",
          "employer": "Microsoft",
          "dates": "2012-2014",
          "location": "Hertzelia",
          "description": "As PM in microsoft I was in charge of creating samples for the Self Service Predictive Analytics platform. Moreover I develped the clustering data mining feature along with population plot"
      },
      {
          "title": "C# Team Lead",
          "employer": "IDF 8200",
          "dates": "2009-2011",
          "location": "Ramat Hasharon",
          "description":"As PM in microsoft I was in charge of creating samples for the Self Service Predictive Analytics platform. Moreover I develped the clustering data mining feature along with population plotAs PM in microsoft I was in charge of creating samples for the Self Service Predictive Analytics platform. Moreover I develped the clustering data mining feature along with population plot"
      },
      {
          "title": "C# FullStack Developer",
          "employer": "IDF 8200",
          "dates": "2006-2008",
          "location": "Ramat Hasharon",
          "description": "As PM in microsoft I was in charge of creating samples for the Self Service Predictive Analytics platform. Moreover I develped the clustering data mining feature along with population plotAs PM in microsoft I was in charge of creating samples for the Self Service Predictive Analytics platform. Moreover I develped the clustering data mining feature along with population plot"
      }
    ]
};

var projects = {
    "projects": [
        {
            "title": "TodoPanda",
            "dates": 2015,
            "description": "Todo list that works both in the web and mobile",
            "images": ["images/todo.jpg", "images/panda.jpg"]
        }, {
            "title": "ResumeBuilder",
            "dates": 2016,
            "description": "Resume Builder that gets a JSON input for resume details and creates a web page with the corected CV in an elegant manner",
            "images": ["http://www.makesimpledesigns.com/wp-content/uploads/2014/07/sam_markiewicz_interactive_resume_design.jpg", "http://designreviver.com/wp-content/uploads/2014/10/Screen-Shot-2014-10-08-at-4.46.06-PM.png"]
        }
    ]
};


//--------------Append to HTML Page--------------------------------------------

//#Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

appendToResume(bio.welcomeMessage, HTMLwelcomeMsg, "#header");
appendToResume(bio.pictureUrl, HTMLbioPic, "#header");

//#TopContacts
appendToResume(bio.contacts.email, HTMLemail, "#topContacts", "#footerContacts");
appendToResume(bio.contacts.mPhone, HTMLmobile, "#topContacts", "#footerContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts", "#footerContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts", "#footerContacts");

//#Skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill){
        appendToResume(skill, HTMLskills, "#skills");
    });
}

//Work

work.display = function displayWork(){
    for(var job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var jobTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title);
    
        $(".work-entry:last").append(jobTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
       // $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        
    }
};

work.display();





//Education
$("#education").append(HTMLschoolStart);

//universities
education.schools.forEach(function (item) {
    appendToResume(item.name, HTMLschoolName, ".education-entry:last");
    //appendToResume(item.location, HTMLschoolLocation, ".education-entry:last");
    appendToResume(item.graduationYear, HTMLschoolDates, ".education-entry:last");
});

$(".education-entry:last").append("<br><h6>Online Classes</h6>");

//online Courses
education.onlineCourses.forEach(function (item) {
    appendToResume(item.title, HTMLonlineTitle, ".education-entry");
    appendToResume(item.school, HTMLonlineSchool, ".education-entry");
    //appendToResume(item.Year, HTMLonlineDates, ".education-entry");
    appendToResume(item.url, HTMLonlineURL, ".education-entry");
});


//Projects

projects.display = function() {
    for (var p in projects.projects){
        $("#projects").append(HTMLprojectStart);
        appendToResume(projects.projects[p].title, HTMLprojectTitle, ".project-entry:last");  
        appendToResume(projects.projects[p].dates, HTMLprojectDates, ".project-entry:last"); 
        appendToResume(projects.projects[p].description, HTMLprojectDescription, ".project-entry:last"); 
        for (var image in projects.projects[p].images){
                appendToResume(projects.projects[p].images[image], HTMLprojectImage, ".project-entry:last");
            }
    }
};

projects.display();


/*
//Internationalize Name
$("#main").append("<br><br><br>");
$("#main").append(internationalizeButton);
$("#main").append("<br><br><br>");

function inName(name){
    if (name.indexOf(" ") > 0){
        var fullName = name.split(" ");
        return (fullName[0].slice(0,1).toUpperCase() + fullName[0].slice(1).toLowerCase() + " " + fullName[1].toUpperCase());
    }
}
*/
$("#mapDiv").append(googleMap);

