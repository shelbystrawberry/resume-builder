document.getElementById("enter-button").addEventListener('click',myWindow)

function myWindow() {   
    flyWindow = window.open('about:blank','Resume');


    function checkDate(x) {
        if (!x) {
            x = "Present";
        } else {
            x = new Date(x);
            x = x.toLocaleDateString('en-us', { year:"numeric", month:"short"});
        }
        return x;
    }

    // Personal Information
    the_name = document.getElementById("name").value;
    the_location = document.getElementById("location").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    title = document.getElementById("title").value;
    linkedin = document.getElementById("linkedin").value;
    portfolio = document.getElementById("portfolio").value;

    // Summary
    summary = document.getElementById("summary").value;

    // Education
    school = document.getElementById("school").value;
    school_start = new Date(document.getElementById("start4").value);
    school_end = document.getElementById("end4").value;
    school_end = checkDate(school_end);
    school_award = document.getElementById("award").value;
    school_keypoints = document.getElementById("keypoint4").value;
    school_keypoint = school_keypoints.split(',');

    // Experience
    job1 = document.getElementById("job1").value;
    job1_start = new Date (document.getElementById("start1").value);
    job1_end = document.getElementById("end1").value;
    job1_end = checkDate(job1_end);
    job1_keypoints = document.getElementById("keypoint1").value;
    job1_keypoint = job1_keypoints.split(',');

    job2 = document.getElementById("job2").value;
    job2_start = new Date(document.getElementById("start2").value);
    job2_end = document.getElementById("end2").value;
    job2_end = checkDate(job2_end);
    job2_keypoints = document.getElementById("keypoint2").value;
    job2_keypoint = job2_keypoints.split(',');

    job3 = document.getElementById("job3").value;
    job3_start = new Date(document.getElementById("start3").value);
    job3_end = document.getElementById("end3").value;
    job3_end = checkDate(job3_end);
    job3_keypoints = document.getElementById("keypoint3").value;
    job3_keypoint = job3_keypoints.split(',');

    // Skills
    skills = document.getElementById("skills").value;
    skill = skills.split(',');
    
    flyWindow.document.write("<!DOCTYPE html>");
    flyWindow.document.write("<html>");
    flyWindow.document.write("<head>");
    flyWindow.document.write("<title>Resume</title>");
    flyWindow.document.write("<link rel=\"stylesheet\" href=\"stylesheet.css\"> ");
    flyWindow.document.write("</head>");
    flyWindow.document.write("<body class=\"resume\">");
    flyWindow.document.write("<div class=\"intro\">");
    flyWindow.document.write("<h1>" + the_name + "</h1>");
    flyWindow.document.write("<h2>" + title + "</h2>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"bottom\">");
    flyWindow.document.write("<div class=\"left\">");
    flyWindow.document.write("<div class=\"regular-content\">");
    flyWindow.document.write("<h2>Contact</h2>");
    flyWindow.document.write("<p>" + email + "<br>");
    flyWindow.document.write(phone + "<br>");
    flyWindow.document.write(the_location + "<br>");
    flyWindow.document.write(linkedin + "<br>");
    flyWindow.document.write(portfolio);
    flyWindow.document.write("</p>");
    flyWindow.document.write("<h2>Education</h2>");
    flyWindow.document.write("<p><strong>" + school +"</strong><br>");
    flyWindow.document.write(school_start.toLocaleDateString('en-us', { year:"numeric", month:"short"}) + " - " + school_end + "<br>");
    flyWindow.document.write(school_award + "<br>");
    flyWindow.document.write("Key Points: <br>");
    for (i of school_keypoint) {
        flyWindow.document.write("&bull; " + i + "<br>");
    }
    flyWindow.document.write("</p>");
    flyWindow.document.write("<h2>Skills</h2>");
    flyWindow.document.write("<p>");
    for (i of skill) {
        flyWindow.document.write("&bull; " + i + "<br>");
    }
    flyWindow.document.write("</p>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"right\">");
    flyWindow.document.write("<div class=\"subtitle\">");
    flyWindow.document.write("<h2>Summary</h2>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"regular-content\">");
    flyWindow.document.write("<p>" + summary + "</p>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"subtitle\">");
    flyWindow.document.write("<h2>Experience</h2>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"regular-content\">");
    flyWindow.document.write("<h3>" + job1 + "</h3>");
    flyWindow.document.write("<p>" + job1_start.toLocaleDateString('en-us', { year:"numeric", month:"short"}) + " - " + job1_end + "<br>");
    flyWindow.document.write("Key points:<br>");
    for (i of job1_keypoint) {
        flyWindow.document.write("&bull; " + i + "<br>");
    }
    flyWindow.document.write("</p>");
    flyWindow.document.write("<h3>" + job2 + "</h3>");
    flyWindow.document.write("<p>" + job2_start.toLocaleDateString('en-us', { year:"numeric", month:"short"}) + " - " + job2_end + "<br>");
    flyWindow.document.write("Key points:<br>");
    for (i of job2_keypoint) {
        flyWindow.document.write("&bull; " + i + "<br>");
    }
    flyWindow.document.write("</p>");
    flyWindow.document.write("<h3>" + job3 + "</h3>");
    flyWindow.document.write("<p>" + job3_start.toLocaleDateString('en-us', { year:"numeric", month:"short"}) + " - " + job3_end + "<br>");
    flyWindow.document.write("Key points:<br>");
    for (i of job3_keypoint) {
        flyWindow.document.write("&bull; " + i + "<br>");
    }
    flyWindow.document.write("</p>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<div class=\"subtitle\">");
    flyWindow.document.write("<h2>References</h2>");
    flyWindow.document.write("<p>Available upon request.</p>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("</div>");
    flyWindow.document.write("<!-- <script src=\"projectJS.js\"></script> -->");
    flyWindow.document.write("</body>");
    flyWindow.document.write("</html>");
}