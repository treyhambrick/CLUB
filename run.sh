#!/bin/bash
env -i npm run build
env -i git init;
env -i git init;
env -i git add .;
env -i git commit -m "first commit1234";
env -i git branch -M main;
env -i git remote rm origin;
env -i git remote add origin git@github.com:treyhambrick/club.git;
env -i git push -u origin main;
env -i git add dist && git commit -m "Initial dist subtree commit";
env -i git subtree push --prefix dist origin gh-pages;
env -i echo "wait 7 minutes the goto: https://treyhambrick.github.io/club/  (refresh page to see changes)";
# sh run.sh