#!C:\Users\wbrow\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.7

# Import modules for CGI handling 
import cgi


# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
firstname = form.getvalue('firstname')
lastname  = form.getvalue('lastname')
school = form.getvalue('school')


("content-type: text/html\n\n" ) #enables the python to be output by the browser
print("<html>")
print("head")
print('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />')
print("<title>WDV341 Intro PHP - Form Example</title>")
print("</head>")
print("<body>")
print("<h1>WDV341 Intro PHP</h1>")
print("<h2>WDV101 Intro HTML and CSS Chapter 9 - Creating Forms - Code Example</h2>")
print("<p><strong>Basic Form Handler</strong> - This process will display the 'name = value' pairs for all the elements of a form. This summary will on any number of form elements regardless of their name attribute value. </p>")
print("<p>Use <strong>basicFormExample.php</strong> in the action attribute of your form. </p>")
print("<p>Field '<strong>name</strong>' - The value of the name attribute from the HTML form element.</p>")
print("<p>Field <strong>'value</strong>' - The value entered in the field. This will vary depending upon the HTML form element.</p>")
print('<form id="form1" name="form1" method="post" action="exampleForm.py">')
print('<p>First Name: <input type="text" name="firstName" id="firstName" /> </p>')
print('<p>Last Name: <input type="text" name="lastName" id="lastName" /></p>')
print('<p>School: <input type="text" name="school" id="school" /></p>')
print('<p>')
print('<input type="submit" name="button" id="button" value="Submit" />')
print('<input type="reset" name="button2" id="button2" value="Reset" />')
print('</p>')
print('</form>')
print('</p>&nbsp;</p>')
print('</html>')