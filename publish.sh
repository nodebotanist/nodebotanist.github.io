git push origin --delete master && 
git branch -D master && git checkout --orphan master && 
rm -rf * && 
git checkout dev && 
git reset --hard HEAD && 
echo \"nodebotani.st\" > out/CNAME && 
git add out/CNAME && git commit -m \"Add CNAME\" && 
git subtree push --prefix out origin master && 
rm out/CNAME && 
git fetch origin master && 
git checkout master && 
git checkout dev && 
git reset --hard origin/dev && npm i