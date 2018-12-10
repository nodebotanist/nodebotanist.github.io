git checkout master &&
git rebase dev &&
echo \"nodebotani.st\" > CNAME && 
git add CNAME && 
git commit -m \"Add CNAME\" && 
git push origin master && 
rm CNAME