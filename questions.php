<?php
function answers($yes = "yes", $no = "no"){
	echo '<br /><span class="answers"><span class="yes">'.$yes.'</span><span class="no">'.$no.'</span></span>';
}
?>

<div id="e1" class="element active" data-yes='#e2' data-no='#e2' data-direction-yes='down' data-direction-no='right'>
<span class="text">What is the question?</span>
<?php answers(); ?>
</div>
<div id="e2" class="element" data-yes='#e3' data-no='#e3' data-direction-yes='up' data-direction-no='left'>
<span class="text">What is the next question?</span>
<?php answers(); ?>
</div>
<div id="e3" class="element" data-yes='#e4' data-no='#e4' data-direction-yes='down' data-direction-no='right'>
<span class="text">What is the third question?</span>
<?php answers(); ?>
</div>
<div id="e4" class="element" data-yes='#e1' data-no='#e1' data-direction-yes='up' data-direction-no='left'>
<span class="text">What is the forth question?</span>
<?php answers(); ?>
</div>




<div id="e5" class="element" data-finish='do_stuff'>
Finish
</div>
