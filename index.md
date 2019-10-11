<!DOCTYPE html>

<html>

     <html lang="en-US">
<head>
                
    <title>Marianne</title>
    <meta charset="UTF-8">
    <meta name="description" content="Marianne's info, CV and projects are all listed in this site.">
    <meta name="author" content="Marianne D">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet3.0.css" >
                
</head>

<body>

<!--Background-->

<img src="images/background_edited(3.5).jpg" class="heroimg"/>


    <!--Header-->

    <header class="white">
        <div class="middle" style="padding-top: 20vh"><h1>Marianne Dery</h1>
        <p class="student">-Software Engineering Student-</p></div>
        <p class="CV"><a href="Documents/CV professionel.docx" target="_blank" class="CV">Download CV</a></p>
    </header>
        


    <!--About-->

    <div class = "about">
        <h1 class="about">About</h1><div class="border"></div>
        <p>I am a software engineering student at the University of Ottawa. I'm currently on my first year. I chose to 
           go into software engineering during 2015's summer. Bored, I stumbled unto a website teaching different languages.
           I started with HTML and CSS, and simply went on from them. In 2019, I made a report about different leraning                 algorithms used by AIs for a class. I was so interested, I knew programming was made for me. Since then, I've
           learned and keep on learning many langages, such as Python, Java and JavaScript.
        </p>
    </div>


    <!--Projects-->

    <div class="projects">
        <h1 class="white">Projects</h1><div class="border"><p>.</p></div>
        <div class="showcase">          <!--Contains the projects' images-->
            <div class="container lfloat">          <!--Each projects-->
                <img src="images/neuralNetwork.jpeg" alt="Project" class="projects"/>
                <a href="projects.html#p1" class="projects" target="_blank">        <!--Fade in link to the project's page-->
                    <div class="overlay"><div class="text">Artificial intelligence<br><small>-Report-</small></div></div>
                </a>
            </div>
            <div class="container lfloat">
                <img src="images/strangeHouse.png" alt="Project" class="projects"/>
                <a href="projects.html#p2" class="projects"  target="_blank">
                    <div class="overlay"><div class="text">Puzzle game<br><small>-Python-</small></div></div>
                </a>
            </div>
            <div class="container lfloat">
                <img src="images/CV website.png" alt="Project" class="projects"/>
                <a href="projects.html#p3" class="projects" target="_blank">
                    <div class="overlay"><div class="text">Personal webpage<br><small>-Web Dev-</small></div></div>
                </a>
            </div>
            <div class="container lfloat">
                <img src="images/miRide.png" alt="Project" class="projects"/>
                <a href="main_page.html" class="projects"  target="_blank">
                    <div class="overlay"><div class="text">miRide<br><small>-Web Dev-</small></div></div>
                </a>
            </div>
        </div>
    </div>


    <!--Education-->

    <div>
        <div class="education clear">
            <h1 class="notop education">Education</h1><div class="border"></div>
            <div class="nobottom diplomas">
                <h2 class="diploma">BASc in Software Engineering (CO-OP)</h2>        <!--Diploma-->
                <p class="date">September 2019 - Present</p>     <!--Year where I was following the course-->
                <p class="school">University of Ottawa</p>     <!--School's name-->
                <h2 class="diploma">Diploma of Collegial Studies in Natural Science</h2>
                <p class="date">September 2017 - August 2019</p>
                <p class="school">Cegep of Outaouais (Gatineau, Quebec)</p>
            </div>
        </div>
        <div class="awards">
            <h1 class="notop education">Awards</h1><div class="border"></div>
            <ul class="awards notop nobottom">
                <li class="awards"> Honorary mentions<span class="date">08/2019</span></li>
                <p class="awards nobottom">Awarded to only one girl per engineering
                        programs, per year, for her academic and extracurricular achievement as well as
                        her motivation to study in engineering</p>
                <li class="awards notop">Director General's award of excellence<span class="date">06/2013</span></li>        <!--Award title + date-->
                <p class="awards">For her superior academic average, her
                        good behavior and her constant and applied work</p>      <!--Award's short description-->
                <li class="awards">Award of distinction<span class="date">05/2013</span></li>
                <p class="awards">Waterloo's faculty of mathematics emphasize the success of
                        students who scored within the top 20 percent during Gauss' mathematics
                        contest</p>
                <li class="awards"> Honorary mentions<span class="date">08/2012 - 06-2017</span></li>
                <p class="awards nobottom">Awards received for being within the first percentile rank in
                        Chemistry, Mathematics, Ethics, French, English and Arts</p>
            </ul>
        </div>
    </div>


    <!--Skills-->

    <div class="skillBox clear" style="padding-bottom: 2em"> 
        <h1 class="notop">Skills</h1><div class="border"></div>
        <div id="skillset1">
            <p class="middle"><i class ="arrow up disabled"></i></p>
            <div class="skill">     <!--Each skills-->
                <!--A skill can be expert, specialist, skilled, average or beginner-->
                <div class="skillname"><p class="skillname">Html</p></div>      <!--Skill's name-->
                <div class="skillbar skilled"></div>     <!--Skill bar, indicates the skill's level in a visual way-->
                <p class="skilllevel">Skilled</p>        <!--Skill's level, written-->
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">CSS</p></div>
                <div class="skillbar skilled"></div>
                <p class="skilllevel">Skilled</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">Java Script</p></div>
                <div class="skillbar average"></div>
                <p class="skilllevel">Average</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">Java</p></div>
                <div class="skillbar beginner"></div>
                <p class="skilllevel">Beginner</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">Python</p></div>
                <div class="skillbar skilled"></div>
                <p class="skilllevel">Skilled</p>
            </div>
            <p class="middle clear"><i class ="arrow down" onclick="button1()"></i></p>
        </div>
        <div id="skillset2" style = "display: none">
            <p class="middle"><i class ="arrow up"  onclick="button2()"></i></p>
            <div class="skill">
                <div class="skillname"><p class="skillname">Git</p></div>
                <div class="skillbar average"></div>
                <p class="skilllevel">Average</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname divider">Languages:</p></div>
                <div class="skillbar nothing"></div>
                <p class="skilllevel">.</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">French</p></div>
                <div class="skillbar expert"></div>
                <p class="skilllevel">Fluent</p>
            </div>
            <div class="skill">
                <div class="skillname"><p class="skillname">English</p></div>
                <div class="skillbar specialist"></div>
                <p class="skilllevel">Fluent</p>
            </div>
            <div class="skill">
                <div class="skillname divider"><p class="skillname">.</p></div>
                <div class="skillbar nothing"></div>
                <p class="skilllevel">.</p>
            </div>
            <p class="middle clear"><i class ="arrow down disabled"></i></p>
        </div>
    </div>


    <!--Experience-->

    <div class="exp notop">
        <h1 class="notop exp">Experiences</h1><div class="border"><p></p></div>
        <div class="contain">
        <div class="experience">
            <h2 class="job">Checkout supervisor</h2> <!--Job's title-->
            <p class="date">05/2018 - 09/2019</p>     <!--Dates for start and end of work-->
            <ul class="job">        <!--Small description of the job-->
                <li class="notop">Took on additional responsibilities which came with the supervisor post within 3
                    months</li>
                <li class="notop">Gained communication and problem-solving skills through diverse interactions
                    with the clients</li>
                <li>Proved great leadership by dividing the tasks within the work team</li>
                <li class="nobottom">Managed efficiently my time in order to accomplish many tasks simultaneously
                    such as gestion work, supervising the employees and giving a good service to
                    the clients</li>
            </ul>
        </div>
        <div class="experience">
            <h2 class="job">Coordination and logistic of promotional material</h2>
            <p class="date">02/2017 - 05/2018 </p>
            <ul class="job">
                <li>Developed great efficacity by assembling promotional briefcases</li>
                <li>Learned organization techniques by working with efficacity</li>
            </ul>
        </div>
        <div class="experience">
            <h2 class="job">Babysitter</h2>
            <p class="date">01/2012 - Present</p>
            <ul class="job">
                <li>Supervised the kids to keep them in a safe and reassuring environment</li>
                <li>Demonstrated creativity by creating games to entertain the kids</li>
                <li>Respected the parent’s instructions</li>
            </ul>
        </div>
        </div>
    </div>


    <!--Contact-->

    <div class="contact">
        <h1 class="white notop">Contact</h1><div class="border"><p>.</p></div>
        <div class="halfbox lfloat">
            <address>Marianne Dery<br />mdery022@uottawa.ca<br />873-376-5422</address>     <!--Contact info-->
        </div>
        <div class="halfbox rfloat">
            <address>       <!--Social media-->
                <a href="https://github.com/K3yl3th" target="_blank" class="contact">
                    <img src="images/GitHub-Mark-64px.png" alt="GitHub" class="media"/>GitHub<br />
                </a>
                <a href="https://twitter.com/arya_s_" target="_blank" class="contact">
                    <img src="images/twitter.png" alt="Fb" class="media"/>Twitter<br />
                </a>
                <a href="https://www.linkedin.com/in/marianne-dery-043b06195/" target="_blank" class="contact">
                    <img src="images/linkedin.png" alt="Fb" class="media"/>Linkedin
                </a>
            </address>
        </div>
    </div>

    <script src="javascript_cv3.0.js"></script>

</body>

</html>
