ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ cd "C:\Users\ASUS\OneDrive\Documents\COGNIZANT\Cognizant-Digital-Nurture4.0-Hands-on-work\Week 8\4. Git-HOL\Code"

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git status 
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git checkout -b GitWork
Switched to a new branch 'GitWork'

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (GitWork)
$ echo "<message>Hello from GitWork branch</message>" > hello.xml
git add hello.xml
git commit -m "GitWork: Added hello.xml with branch content"
warning: in the working copy of 'Week 8/4. Git-HOL/Code/hello.xml', LF will be replaced by CRLF the next time Git touches it
[GitWork d1ed42a] GitWork: Added hello.xml with branch content
 1 file changed, 1 insertion(+)
 create mode 100644 Week 8/4. Git-HOL/Code/hello.xml

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (GitWork)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ echo "<message>Hello from MAIN branch</message>" > hello.xml
git add hello.xml
git commit -m "Main: Added hello.xml with main content"
warning: in the working copy of 'Week 8/4. Git-HOL/Code/hello.xml', LF will be replaced by CRLF the next time Git touches it
[main 9788a0d] Main: Added hello.xml with main content
 1 file changed, 1 insertion(+)
 create mode 100644 Week 8/4. Git-HOL/Code/hello.xml

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git log --oneline --graph --decorate --all
* 9788a0d (HEAD -> main) Main: Added hello.xml with main content
| * d1ed42a (GitWork) GitWork: Added hello.xml with branch content
|/
* 25b0bbb (origin/main, origin/HEAD) commands
* 4996824 (origin/GitNewBranch) Added branchfile.txt in GitNewBranch
* 429b320 added commands.md file
* 29d27fa output added
* 0fc62c0 Week 8: Added changes
* 7ad8121 Week 8: Added .gitignore to ignore .log files and log folder
* 9398807 Added git commands.md file
* cc1565c  updated week 7
* 627cde3 git handson 1 Welcome text
* 29d27fa output added
* 0fc62c0 Week 8: Added changes
* 7ad8121 Week 8: Added .gitignore to ignore .log files and log folder
* 9398807 Added git commands.md file
* cc1565c  updated week 7
* 627cde3 git handson 1 Welcome text
* cc1565c  updated week 7
* 627cde3 git handson 1 Welcome text
* 627cde3 git handson 1 Welcome text
* 797a8b1 Week 7 React Hands-on
* 0f7731d ReactJS Handson Work Week 6
* 8be1fc6 WEEK 5
* 0de17ae WEEK 4 Handson submitted
* 23cd653 Added Week 3 assignments and Spring Data JPA project
* 8be1fc6 WEEK 5
* 0de17ae WEEK 4 Handson submitted
* 23cd653 Added Week 3 assignments and Spring Data JPA project
* 23cd653 Added Week 3 assignments and Spring Data JPA project
* 94a2541 Added final assessments: TDD with JUnit5 & Mockito, SLF4J Logging, and PL/SQL scripts in Week 2
* dd012bb Added Week 2 assessments with all modules of PL/SQL & SLF4J
* 7a37969 Added Singleton Method & Factory Method Pattern code in Week 1 SOLID Principles along with output
* 7b651f4 Add Week 1 DSA E-Commerce Search & Financial forecasting  code along with README file
* 7e72d89 Added# Financial Forecasting Using Recursion
* 6034c58 Add Week 1 DSA E-Commerce Search code along with README file & output image
* 6c720ad Create README.md
* 17ce4c3 Add Week 1 DSA E-Commerce Search code
* e24071d Update README.md
* 4de2fb8 Initial commit

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git merge GitWork
Auto-merging Week 8/4. Git-HOL/Code/hello.xml
CONFLICT (add/add): Merge conflict in Week 8/4. Git-HOL/Code/hello.xml
Automatic merge failed; fix conflicts and then commit the result.

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main|MERGING)
$ git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"
[main 39a4135] Resolved merge conflict in hello.xml

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Added merge backup files to .gitignore"
warning: in the working copy of 'Week 8/4. Git-HOL/Code/.gitignore', LF will be replaced by CRLF the next time Git touches it
[main 692d437] Added merge backup files to .gitignore
 1 file changed, 1 insertion(+)
 create mode 100644 Week 8/4. Git-HOL/Code/.gitignore

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git branch -d GitWork
Deleted branch GitWork (was d1ed42a).

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/4. Git-HOL/Code (main)
$ git push origin main
Enumerating objects: 26, done.
Counting objects: 100% (26/26), done.
Delta compression using up to 8 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (24/24), 1.69 KiB | 173.00 KiB/s, done.
Total 24 (delta 9), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (9/9), completed with 2 local objects.
To https://github.com/SAHIL707740/Cognizant-Digital-Nurture4.0-Hands-on-work.git
   25b0bbb..692d437  main -> main