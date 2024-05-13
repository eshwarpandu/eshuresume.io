$(document).ready(function(){
	var certName=GetURLParam("certName");
	console.log(certName);
	if(certName!="false"){
		if(certName.toLowerCase()=="aws"){
			LoadCertDetails("assets/img/portfolio/portfolio-1.jpg","AWS","Completed","Nov 23","Amazon","www.aws.com");
		}
		else if(certName.toLowerCase()=="redhat"){
			LoadCertDetails("assets/img/portfolio/portfolio-6.jpg","Red Hat Certified Enterprise Application Developer","Completed","05 March 2024","Red Hat","https://www.google.com");
		}
		else if(certName.toLowerCase()=="aws-ai_ml"){
			LoadCertDetails("assets/img/portfolio/portfolio-3.jpg","AI-ML Virtual Internship","Completed","June 2023","Amazon Web Services","https://www.google.com");
		}
		else if(certName.toLowerCase()=="oracle architect"){
			LoadCertDetails("assets/img/portfolio/portfolio-4.jpg","Oracle Cloud Architect","Completed","23 August 2023","Oracle University","https://www.google.com");
		}
		else if(certName.toLowerCase()=="oracle foundations"){
			LoadCertDetails("assets/img/portfolio/portfolio-7.jpg","Oracle Cloud Foundations","Completed","23 August 2023","Oracle University","https://www.google.com");
		}
		else if(certName.toLowerCase()=="aicte ai-ml"){
			LoadCertDetails("assets/img/portfolio/portfolio-2.jpg","AI-ML Virtual Internship","Completed","July 2023","AICTE","https://www.google.com");
		}
		else if(certName.toLowerCase()=="data analytics"){
			LoadCertDetails("assets/img/portfolio/portfolio-5.jpg","Data Analytics Virtual Internship","Completed","February 2023","AICTE","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera1"){
			LoadCertDetails("assets/img/portfolio/portfolio-11.jpg","Graphic Design","Completed","April 28 2023","CAL-ARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera2"){
			LoadCertDetails("assets/img/portfolio/portfolio-12.jpg","SAS Statistical Business Analyst","Completed","April 03 2023","SAS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera3"){
			LoadCertDetails("assets/img/portfolio/portfolio-13.jpg","Text Mining And Analytics","Completed","October 11 2023","ILLINOIS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera4"){
			LoadCertDetails("assets/img/portfolio/portfolio-14.jpg","Fundamentals of Graphic Design","Completed","April 28 2023","CALARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera5"){
			LoadCertDetails("assets/img/portfolio/portfolio-15.jpg","Introduction to Imagemaking","Completed","April 28 2023","CALARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera6"){
			LoadCertDetails("assets/img/portfolio/portfolio-16.jpg","Brand New Brand","Completed","April 28 2023","CALARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera7"){
			LoadCertDetails("assets/img/portfolio/portfolio-17.jpg","Ideas from the History of Graphic Design","Completed","April 28 2023","CALARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera8"){
			LoadCertDetails("assets/img/portfolio/portfolio-18.jpg","Spring - Ecosystem and Core","Completed","October 14 2023","Learn Quest","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera9"){
			LoadCertDetails("assets/img/portfolio/portfolio-19.jpg","Exam prep: AWS Certified Solutions Architect-Associate","Completed","October 31 2023","AWS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera10"){
			LoadCertDetails("assets/img/portfolio/portfolio-20.jpg","Master the Art of Data Visualization With Tableau Public","Completed","August 09 2023","Coursera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera11"){
			LoadCertDetails("assets/img/portfolio/portfolio-21.jpg","Introduction to Typography","Completed","April 28 2023","CALARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera12"){
			LoadCertDetails("assets/img/portfolio/portfolio-22.jpg","Responsive Website Tutorial and Examples","Completed","April 23 2023","University Of London","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera13"){
			LoadCertDetails("assets/img/portfolio/portfolio-23.jpg","Programming for EveryBody ( Getting Started with Python )","Completed","October 20 2022","University Of Michigan","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera14"){
			LoadCertDetails("assets/img/portfolio/portfolio-24.jpg","Python Data Structures","Completed","October 21 2022","University Of Michigan","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera15"){
			LoadCertDetails("assets/img/portfolio/portfolio-25.jpg","Networking and Security Architecture with VMware NSX","Completed","October 19 2022","vmware®","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera16"){
			LoadCertDetails("assets/img/portfolio/portfolio-26.jpg","Intro to Operating System 1: Virtualization","Completed","October 19 2022","C","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera17"){
			LoadCertDetails("assets/img/portfolio/portfolio-27.jpg","Intro to Operating System 2: Memory Management","Completed","October 19 2022","C","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera18"){
			LoadCertDetails("assets/img/portfolio/portfolio-28.jpg","C Programming: Using Linux Tools and Libraries-7","Completed","October 19 2022","DARTMOUTH","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera19"){
			LoadCertDetails("assets/img/portfolio/portfolio-29.jpg","Intro to Operating System 2: Concurrency","Completed","October 19 2022","C","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera20"){
			LoadCertDetails("assets/img/portfolio/portfolio-30.jpg","Intro to Operating System 2: Persistence","Completed","October 19 2022","C","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera21"){
			LoadCertDetails("assets/img/portfolio/portfolio-31.jpg","Create User Directory and Files with Linux Commands","Completed","October 19 2022","Coursera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera22"){
			LoadCertDetails("assets/img/portfolio/portfolio-32.jpg","Design Patterns","Completed","December 13 2022","University of Alberta","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera23"){
			LoadCertDetails("assets/img/portfolio/portfolio-33.jpg","Java Servlet Pages (JSPs) ","Completed","December 13 2022","Learn Quest","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera24"){
			LoadCertDetails("assets/img/portfolio/portfolio-34.jpg","Python for Data Science, AI & Development","Completed","April 02 2023","IBM","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera25"){
			LoadCertDetails("assets/img/portfolio/portfolio-35.jpg","The Unix Workbench","Completed","February 19 2023","JOHN HOPKINS UNIVERSITY","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera26"){
			LoadCertDetails("assets/img/portfolio/portfolio-36.jpg","Building AI Powered Chatbots Without Programming","Completed","April 02 2023","IBM","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera27"){
			LoadCertDetails("assets/img/portfolio/portfolio-37.jpg","Version Control with Git","Completed","April 02 2023","ATLASSIAN University","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera28"){
			LoadCertDetails("assets/img/portfolio/portfolio-38.jpg","Intoduction to Test and Behavior Driven Development","Completed","December 13 2022","IBM","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera29"){
			LoadCertDetails("assets/img/portfolio/portfolio-39.jpg","Getting Started with AI using IBM Watson","Completed","April 02 2023","IBM","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera30"){
			LoadCertDetails("assets/img/portfolio/portfolio-40.jpg","Introduction to Artificial Intelligence","Completed","April 02 2023","IBM","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera31"){
			LoadCertDetails("assets/img/portfolio/portfolio-41.jpg","Introduction to Object-Oriented Programming with Java","Completed","December 13 2022","Learn Quest","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera32"){
			LoadCertDetails("assets/img/portfolio/portfolio-42.jpg","Regression Modeling Fundamentals","Completed","April 03 2023","SAS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera33"){
			LoadCertDetails("assets/img/portfolio/portfolio-43.jpg","Introduction to Statistical Analysis: Hypothesis Testing","Completed","April 03 2023","SAS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera34"){
			LoadCertDetails("assets/img/portfolio/portfolio-44.jpg","Git for Developers Using Github","Completed","April 03 2023","Coursera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera35"){
			LoadCertDetails("assets/img/portfolio/portfolio-45.jpg","Software Engineering: Modeling Software Systems using UML","Completed","April 02 2023","CAL-ARTS","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera36"){
			LoadCertDetails("assets/img/portfolio/portfolio-46.jpg","Responsive Web Design","Completed","April 16 2023","UNIVERSITY OF LONDON","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera37"){
			LoadCertDetails("assets/img/portfolio/portfolio-47.jpg","Agile Projects: Develop Product Wireframe Prototypes in Miro","Completed","April 03 2023","Coursera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera38"){
			LoadCertDetails("assets/img/portfolio/portfolio-48.jpg","Agile Projects: Developing Tasks with Taiga","Completed","April 03 2023","Cousera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera39"){
			LoadCertDetails("assets/img/portfolio/portfolio-49.jpg","Agile Projects: Creating User Stories with Value in Taiga","Completed","April 03 2023","Coursera Project Network","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera40"){
			LoadCertDetails("assets/img/portfolio/portfolio-50.jpg","Responsive Website Basics: Code with HTML, CSS, and Javascript","Completed","April 15 2023","UNIVERSITY OF LONDON","https://www.google.com");
		}
		else if(certName.toLowerCase()=="coursera41"){
			LoadCertDetails("assets/img/portfolio/portfolio-51.jpg","Predictive Modeling with Logistic Regression using SAS","Completed","April 03 2023","SAS","https://www.google.com");
		}
		
		
   
	}
});

function GetURLParam(param){
	
	var spageUrl=window.location.search.substring(1);
	var sURLVariables = spageUrl.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0].toLowerCase() === param.toLowerCase()) {
			return sParameterName [1] === undefined? true : decodeURIComponent(sParameterName[1]) ;
		}
	}

  return false;
}


function LoadCertDetails(certImage,name,status,date,from,url){
	$("#certImg").attr("src",certImage);
			$("#certificateName").html(name);
			$("#certificateStatus").html(status);
			$("#certificateDate").html(date);
			$("#certificateFrom").html(from);
			$("#certificateUrl").html("<a href='"+url+"'>Click Here</a>");
}