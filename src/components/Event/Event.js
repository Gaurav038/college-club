import React from 'react';
import "./Event.css"

function Event() {
  return <div class="container-timeline">   
  <div class="timeline">

    <ul>
      <li>
        <div class="timeline-content">
          <h3 class="date">20th feb, 2022</h3>
          <h1>Introduction about basic technical terms</h1>
          <p>Introdued about technical terms like  GiThub && LInkiDin  and many more .....      ,    A quick demo of how things works && some refernce to the materials .  </p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">12th feb, 2022</h3>
          <h1>Starter one challenge</h1>
          <p>A basic programming contest on foundational topics    </p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">28th feb, 2022</h3>
          <h1>Starter 2 challenge</h1>
          <p>A basic programming contest on foundational topics .</p>
        </div>
      </li>
    
    </ul>
  </div>
</div>
}

export default Event;