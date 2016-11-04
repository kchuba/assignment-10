var falltext = "Fall starts on September 21 and ends on December 21 and is known for changing leaves and falling temperatures. Big holidays include Halloween and Thanksgiving. Fall is typically the time of the new school year and in the U.S., is also when college and professional football are played. Source: <a href='https://en.wikipedia.org/wiki/Autumn'>Wikipedia</a>"

var wintertext = "Winter starts on December 21 and ends March 21 and is known as the coldest time of year, with snow in many states. Big holidays include Christmas and New Years. Winter is typically a festive time of year and a time for getting together with family and friends. Source: <a href='https://en.wikipedia.org/wiki/Winter'>Wikipedia</a>"

var springtext = "Spring starts on March 21 and ends on June 21 and is known for warming temperatures and blooming nature. Big holidays include Easter and Memorial Day. Spring is typically the time of the Earth's rebirth, when everything is coming back to life and people are spending time outside after their winter hibernation. Source: <a href='https://en.wikipedia.org/wiki/Spring_(season)'>Wikipedia</a>"

var summertext = "Summer starts on June 21 and ends on September 21 and is known as the warmest time of the year, with sunny skies across the country. Big Holidays include the Fourth of July and Labor Day. Summer is typically the time when people travel, take vacations and spend lots of time at the beach or by the pool. Source: <a href='https://en.wikipedia.org/wiki/Summer'>Wikipedia</a>"


Fall.onclick = function pictureChange(){
  document.getElementById('season').src = 'images/fall.png';
  document.getElementById('title').innerHTML = 'Fall';
  document.getElementById('info').innerHTML = falltext;
}

Winter.onclick = function pictureChange(){
  document.getElementById('season').src = 'images/winter.png';
  document.getElementById('title').innerHTML = 'Winter';
  document.getElementById('info').innerHTML = wintertext;
}

Spring.onclick = function pictureChange(){
  document.getElementById('season').src = 'images/spring.png';
  document.getElementById('title').innerHTML = 'Spring';
  document.getElementById('info').innerHTML = springtext;
}

Summer.onclick = function pictureChange(){
  document.getElementById('season').src = 'images/summer.png';
  document.getElementById('title').innerHTML = 'Summer';
  document.getElementById('info').innerHTML = summertext;
}
