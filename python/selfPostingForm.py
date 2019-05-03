#!/usr/local/python-3.5

# Import modules for CGI handling 
import cgi, cgitb 

# SQL / DB Connect
import MySQLdb

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
firstName = form.getvalue('firstName')
lastName  = form.getvalue('lastName')
school = form.getvalue('school')


# Select Statement
database2=MySQLdb.connect(host="localhost",user="rwbrown84_php",password="50rQH1dQzo",db="rwbrown84_php")
cursor2=database.cursor()
cursor2.execute("""SELECT Id, FirstName, LastName, School FROM students""")
array=cursor2.fetchall()
cursor2.close()

print("content-type: text/html\n\n" ) #enables the python to be output by the browser

print("<html>")
print("<head>")
print('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />')
print("<title>WDV341 Intro PHP - Form Example</title>")
print("</head>")

print("<body>")
print("<h1>WDV495 Python</h1>")
print("<h3>Current DB Items:</h3>")
print("<ul>")
x = 0
while x < len(array):
  print("<li>Id: %s. First: %s. Last: %s. School: %s.</li>" % (array[x][0], array[x][1], array[x][2], array[x][3]))
  x+=1

print("</ul>")



if firstName != None: 
  print ("<h2>Hello %s %s, you go to: %s</h2>" % (firstName, lastName, school))
  database=MySQLdb.connect(host="localhost",user="rwbrown84_php",password="50rQH1dQzo",db="rwbrown84_php")
  cursor=db.cursor()
  cursor.execute("""INSERT INTO students (firstName, lastName, school) VALUES (%s, %s, %s)""", (firstName, lastName, school))
  cursor.close()



print("<form name='python' method='post' action='./selfPosting.py'>")
print("<p>First Name: ")
print("<input type='text' name='firstName' id='firstName' required />")
print("</p>")
print("<p>Last Name: ")
print("<input type='text' name='lastName' id='lastName' required />")
print("</p>")
print("<p>School: ")
print("<input type='text' name='school' id='school' required/>")
print("</p>")
print("<p>")
print("<input type='submit' name='button' id='button' value='Submit' />")
print("<input type='reset' name='button2' id='button2' value='Reset' />")
print("</p>")
print("</form>")

print("<p>&nbsp;</p>")
print("</body>")
print("</html>")