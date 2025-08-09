ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work (main)
$ cd "C:\Users\ASUS\OneDrive\Documents\COGNIZANT\Cognizant-Digital-Nurture4.0-Hands-on-work\Week 8\1. Git-HOL\Code"

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ cat > welcome.txt <<EOF
Welcome to Git Hands-on Lab!
Location: Week 8 / 1.Git-HOL / code
Completed steps:
- Created welcome.txt
- Staged, committed and pushed to remote
EOF

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ ls -la
cat welcome.txt
total 1
drwxr-xr-x 1 ASUS 197121   0 Aug  9 09:43 ./
drwxr-xr-x 1 ASUS 197121   0 Aug  9 09:33 ../
-rw-r--r-- 1 ASUS 197121 145 Aug  9 09:43 welcome.txt
Welcome to Git Hands-on Lab!
Location: Week 8 / 1.Git-HOL / code
Completed steps:
- Created welcome.txt
- Staged, committed and pushed to remote

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ git add .
warning: in the working copy of 'Week 8/1. Git-HOL/Code/welcome.txt', LF will be replaced by CRLF the next time Git touches it

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ git commit -m "git handson 1 Welcome text " 
[main 627cde3] git handson 1 Welcome text
 1 file changed, 5 insertions(+)
 create mode 100644 Week 8/1. Git-HOL/Code/welcome.txt


ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

ASUS@Sahil MINGW64 ~/OneDrive/Documents/COGNIZANT/Cognizant-Digital-Nurture4.0-Hands-on-work/Week 8/1. Git-HOL/Code (main)
$ git push origin main 
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 8 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (15/15), 1.16 KiB | 34.00 KiB/s, done.
Total 15 (delta 7), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (7/7), completed with 6 local objects.
To https://github.com/SAHIL707740/Cognizant-Digital-Nurture4.0-Hands-on-work.git
   797a8b1..cc1565c  main -> main
