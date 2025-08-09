ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ cd "C:\Users\ASUS\OneDrive\Documents\COGNIZANT\Cognizant-Digital-Nurture4.0-Hands-on-work\Week 8\2. Git-HOL\Code"

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ echo "This is a log file" > debug.log
mkdir log
echo "Log folder file" > log/test.txt
 

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ touch .gitignore

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ # Ignore all .log files
*.log

# Ignore the log folder
log/
 
bash: debug.log: command not found
bash: log/: Is a directory

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ git add .gitignore
git commit -m "Week 8: Added .gitignore to ignore .log files and log folder"
[main 7ad8121] Week 8: Added .gitignore to ignore .log files and log folder
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Week 8/2. Git-HOL/Code/.gitignore

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ git add . 
warning: in the working copy of 'Week 8/2. Git-HOL/Code/debug.log', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Week 8/2. Git-HOL/Code/log/test.txt', LF will be replaced by CRLF the next time Git touches it

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ git commit -m "Week 8: Added changes"
[main 0fc62c0] Week 8: Added changes
 2 files changed, 2 insertions(+)
 create mode 100644 Week 8/2. Git-HOL/Code/debug.log
 create mode 100644 Week 8/2. Git-HOL/Code/log/test.txt



ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/2. Git-HOL/Code (main)
$ git status 
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean