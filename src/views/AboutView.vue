<template>
  <div class="about">

    <h1> Club Del Cielo</h1>

    <center>
    <TABLE>
      <TR>
          <TD>
            <ul>
              <li>Free Wi Fi</li> 
              <li>Swimming pool</li> 
              <li>Parking</li>
              <li>24/7 Security</li> 
              <li>Fully furnished & equipped</li> 
              <li>Location: 250 meters south of the Municipality <BR/>building Playa Jaco, Costa Rica</li>
            </ul>         
          </TD>
      </TR>
    </TABLE> 
    </center>


    
    <iframe name="output_frame" src="https://www.clubdelcielo.com/index.html" id="output_frame" width="90%" height="800" style="visibility: !hidden" ></iframe>


  <ul>
  <li><B>This is site built with vue.js</B></li> 
  <li> Execution notes:</li> 
  <li>open command prompt</li> 
  <li>cd C:\Users\thambrick\club</li> 
  <li>npm run build and then npm run serve </li>
  <li><U> upload to GitHub: sh run.sh to execute the commands below</U></li>
    <li>git init</li>
    <li>git add .</li>
    <li>git commit -m "first commit123"</li>
    <li>git branch -M main</li>
    <li>git remote rm origin</li>
    <li>git remote add origin git@github.com:treyhambrick/club.git</li>
    <li>git push -u origin main</li>
    <li>git add dist && git commit -m "Initial dist subtree commit"</li>
    <li>git subtree push --prefix dist origin gh-pages</li>
    <li><U>Note:</U>wait 7 minutes the goto: https://treyhambrick.github.io/club/  (refresh page to see changes). </li>
    <li><U>Note:</U>  Remove the dist directory from the project’s .gitignore file</li>
    <li>On a PC: git remote add origin https://github.com/treyhambrick/club.git</li>

    <!---li>maybe before run try:  git remote set-url origin https://treyhambrick.github.io/club/</li--->
   </ul>

  </div>
</template>



