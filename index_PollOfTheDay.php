<?php
    $vote = $_REQUEST['vote'];

    //get content of textfile
    $filename = "index_PollOfTheDay_result.txt";
    $content = file($filename);

    //put content in array
    $array = explode("||", $content[0]);
    $yes = $array[0];
    $no = $array[1];

    if ($vote == 0) {
        $yes = $yes + 1;
    }
    if ($vote == 1) {
        $no = $no + 1;
    }

    //insert votes to txt file
    $insertvote = $yes."||".$no;
    $fp = fopen($filename,"w");
    fputs($fp,$insertvote);
    fclose($fp);
?>

<h3>Results (Is this poll cool enough?):</h3>
<span>Yeah!</span>
<div class="primary progress">
    <div class="progress-meter" style="width: 
        <?php echo(100 * round($yes / ($no + $yes), 2)); ?>%
        ">
        <p class="progress-meter-text">
            <?php echo(100 * round($yes / ($no + $yes),2)); ?>%
        </p>
    </div>
</div>
<span>Nah</span>
<div class="primary progress">
    <div class="progress-meter" style="width: 
        <?php echo(100 * round($no / ($no + $yes), 2)); ?>%
        ">
        <p class="progress-meter-text">
            <?php echo(100 * round($no / ($no + $yes), 2)); ?>%
        </p>
    </div>
</div>
