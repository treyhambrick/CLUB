<template>
  <div class="about">
    <h1>This is site built with vue for Club Del Cielo</h1>

  <ul>
  <li><B>Execution Steps:</B></li> 
  <li>open command prompt</li> 
  <li>cd C:\Users\thambrick\club</li> 
  <li>npm run build and then npm run serve </li>
  <li><U> upload to GitHub: run.bat to execute the commands below</U></li>
    <li>git init</li>
    <li>git add .</li>
    <li>git commit -m "first commit123"</li>
    <li>git branch -M main</li>
    <li>git remote rm origin</li>
    <li>git remote add origin https://github.com/treyhambrick/club.git</li>
    
    <li>git push -u origin main</li>
    <li><U>Note:</U>  Remove the dist directory from the project’s .gitignore file</li>
    <li>git add dist && git commit -m "Initial dist subtree commit"</li>
    <li>git subtree push --prefix dist origin gh-pages</li>
    <li>wait 7 minutes the goto: https://treyhambrick.github.io/club/  (refresh page to see changes)  </li>

    <!---li>maybe before run try:  git remote set-url origin https://treyhambrick.github.io/club/</li--->
   </ul>

  </div>
</template>



