jQuestion

A simple class for the creation of simple decision making flows.

HTML Format
-----------

<div data-direction-no="right" data-direction-yes="down" data-no="#e4" data-yes="#e4" class="element active" id="e3" style="top: 0px;">
<span class="text">What is the third question?</span>
<br>
  <span class="answers">
    <span class="yes">yes</span>
    <span class="no">no</span>
  </span>
</div>


CONTROLS
--------
data-direction-no="right" 
data-direction-yes="down"

Decides which direction the next question will slide in from.


data-no="#e2" 
data-yes="#e2"

the ID of the next question, depending on which answer is selected.

The content of the answer spans can be changed to whatever you like, but the classes must remain as they are.

