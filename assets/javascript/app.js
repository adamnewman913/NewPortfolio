$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Adam</span>. <br>I'm currently <span class='red-text'>in the process of becoming a full-stack web developer!</span>. <br>Welcome to my portfolio!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>I am currently enrolled in a Coding Bootcamp at the University of Kansas, and I am enjoying it very very much; it's a unique challenge and I love how it pushes me to think differently. MY hobbies include golf, home improvement, all thing Chiefs/Royals/Jayhawks, and most important, spending time with my smart, gorgeous woman Paniz Borzoofard. Thanks for stopping by, I hope you like what you see!</p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:anewman1@ku.edu'>anewman1@ku.edu</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/adamnewman913' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/adam-newman-67a9a1178/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/weather.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Weather or Not</span></div><div class='card-content'><p class='card-textcontent'>A weather/activity app that takes a look at the days weather and reccomends activities based on it.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/adamnewman913/Project1'</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/adamnewman913/Project1' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/RPS.JPG'><span style='font-size:1.40em;' class='card-title white-text red'>Rock Paper Scissors</span></div><div class='card-content'><p class='card-textcontent'>A fun, interactice multiplayer Rock Paper Scissors Game. Give it a shot!</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/adamnewman913/RPS-Multiplayer'</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/adamnewman913/RPS-Multiplayer' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/travel.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Fresh Air</span></div><div class='card-content'><p class='card-textcontent'>A travel application that allows you to take a survey and receive a tailored vaction based on your answers.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/kwuellner/project2' target='_blank'></a></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/gif.jpg'><span style='font-size:1.40em;' class='card-title white-text red'></span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/adamnewman913/The-Real-GIFtastic' target='_blank'></a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/adamnewman913/The-Real-GIFtastic' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/trivia.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Avengers Trivia Game</span></div><div class='card-content'><p class='card-textcontent'>A timed true and false trivia question game created using JavaScript timeout functions and CSS for design</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/adamnewman913/TriviaGame' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/adamnewman913/TriviaGame' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})