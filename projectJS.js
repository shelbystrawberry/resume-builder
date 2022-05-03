document.getElementById("enter-button").addEventListener('click',myWindow)


function myWindow() {   
    flyWindow = window.open('Resume');
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
    school_end = new Date(document.getElementById("end4").value);
    school_award = document.getElementById("award").value;
    school_keypoints = document.getElementById("keypoint4").value;
    school_keypoint = school_keypoints.split(',');

    // Experience
    job1 = document.getElementById("job1").value;
    job1_start = new Date (document.getElementById("start1").value);
    job1_end = document.getElementById("end1").value;
    job1_keypoints = document.getElementById("keypoint1").value;
    job1_keypoint = job1_keypoints.split(',');

    job2 = document.getElementById("job2").value;
    job2_start = new Date(document.getElementById("start2").value);
    job2_end = new Date(document.getElementById("end2").value);
    job2_keypoints = document.getElementById("keypoint2").value;
    job2_keypoint = job1_keypoints.split(',');

    job3 = document.getElementById("job3").value;
    job3_start = new Date(document.getElementById("start3").value);
    job3_end = new Date(document.getElementById("end3").value);
    job3_keypoints = document.getElementById("keypoint3").value;
    job3_keypoint = job1_keypoints.split(',');

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
    flyWindow.document.write(school_start.toLocaleDateString() + " to " + school_end.toLocaleDateString() + "<br>");
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
    flyWindow.document.write("<h3>Job 1</h3>");
    flyWindow.document.write("<h4>Employment Information (Enter as: Position | Company | City, ST): </h4>");
    flyWindow.document.write("<p>Enter Start Date: ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Enter End Date (If current position, enter today's date): ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Key points (Enter as: Key point, Key point, Key point):</p>");
    flyWindow.document.write("<h3>Job 2</h3>");
    flyWindow.document.write("<h4>Employment Information (Enter as: Position | Company | City, ST): </h4>");
    flyWindow.document.write("<p>Enter Start Date: ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Enter End Date (If current position, enter today's date): ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Key points (Enter as: Key point, Key point, Key point):</p>");
    flyWindow.document.write("<h3>Job 3</h3>");
    flyWindow.document.write("<h4>Employment Information (Enter as: Position | Company | City, ST): </h4>");
    flyWindow.document.write("<p>Enter Start Date: ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Enter End Date (If current position, enter today's date): ");
    flyWindow.document.write("mm/dd/yyyy");
    flyWindow.document.write("Key points (Enter as: Key point, Key point, Key point):</p>");
    flyWindow.document.write("<br>");
    flyWindow.document.write("<br>");
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