 #! /usr/bash

 git push origin --delete test && 
 git branch -D test && 
 git checkout --orphan test && 
 rm -rf * && 
 git checkout dev && 
 git reset --hard HEAD && 
 echo \"nodebotani.st\" > dist/CNAME && 
 git add out/CNAME && 
 git commit -m \"Add CNAME\" && 
 git subtree push --prefix dist origin test && 
 rm dist/CNAME && 
 git fetch origin test && 
 git checkout test && 
 git checkout dev && 
 git reset --hard origin/dev && 
 npm i