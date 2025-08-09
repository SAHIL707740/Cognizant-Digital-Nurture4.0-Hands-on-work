ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ cd "C:\Users\ASUS\OneDrive\Documents\COGNIZANT\Cognizant-Digital-Nurture4.0-Hands-on-work\Week 8\3. Git-HOL\Code"

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git checkout -b GitNewBranch
Switched to a new branch 'GitNewBranch'

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (GitNewBranch)
$ git branch -a
* GitNewBranch
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (GitNewBranch)
$ echo "This is a file in GitNewBranch" > branchfile.txt

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (GitNewBranch)
$ git add branchfile.txt
git commit -m "Added branchfile.txt in GitNewBranch"
warning: in the working copy of 'Week 8/3. Git-HOL/Code/branchfile.txt', LF will be replaced by CRLF the next time Git touches it
[GitNewBranch 4996824] Added branchfile.txt in GitNewBranch
 1 file changed, 1 insertion(+)
 create mode 100644 Week 8/3. Git-HOL/Code/branchfile.txt

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (GitNewBranch)
$ git push origin GitNewBranch
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 502 bytes | 125.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'GitNewBranch' on GitHub by visiting:
remote:      https://github.com/SAHIL707740/Cognizant-Digital-Nurture4.0-Hands-on-work/pull/new/GitNewBranch
remote:
To https://github.com/SAHIL707740/Cognizant-Digital-Nurture4.0-Hands-on-work.git
 * [new branch]      GitNewBranch -> GitNewBranch

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (GitNewBranch)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git diff main..GitNewBranch
diff --git a/Week 8/3. Git-HOL/Code/branchfile.txt b/Week 8/3. Git-HOL/Code/branchfile.txt
new file mode 100644
index 0000000..70ab14d
--- /dev/null
+++ b/Week 8/3. Git-HOL/Code/branchfile.txt
@@ -0,0 +1 @@
+This is a file in GitNewBranch

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git merge GitNewBranch
Updating 429b320..4996824
Fast-forward
 Week 8/3. Git-HOL/Code/branchfile.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Week 8/3. Git-HOL/Code/branchfile.txt

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git log --oneline --graph --decorate --all
* 4996824 (HEAD -> main, origin/GitNewBranch, GitNewBranch) Added branchfile.txt in GitNewBranch
* 429b320 (origin/main, origin/HEAD) added commands.md file
* 29d27fa output added
* 0fc62c0 Week 8: Added changes
* 7ad8121 Week 8: Added .gitignore to ignore .log files and log folder
* 9398807 Added git commands.md file
* cc1565c  updated week 7
* 627cde3 git handson 1 Welcome text
* 797a8b1 Week 7 React Hands-on
* 0f7731d ReactJS Handson Work Week 6
* 8be1fc6 WEEK 5
* 0de17ae WEEK 4 Handson submitted
* 23cd653 Added Week 3 assignments and Spring Data JPA project
* 94a2541 Added final assessments: TDD with JUnit5 & Mockito, SLF4J Logging, and PL/SQL scripts in Week 2
* dd012bb Added Week 2 assessments with all modules of PL/SQL & SLF4J
* 7a37969 Added Singleton Method & Factory Method Pattern code in Week 1 SOLID Principles along with output
* 7b651f4 Add Week 1 DSA E-Commerce Search & Financial forecasting  code along with README file
* 7e72d89 Added# Financial Forecasting Using Recursion
* 6034c58 Add Week 1 DSA E-Commerce Search code along with README file & output image
* 6c720ad Create README.md

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git branch -d GitNewBranch
Deleted branch GitNewBranch (was 4996824).

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/3. Git-HOL/Code (main)
$ git push origin main
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/SAHIL707740/Cognizant-Digital-Nurture4.0-Hands-on-work.git
   429b320..4996824  main -> main



