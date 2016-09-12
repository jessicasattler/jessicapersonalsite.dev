php is *so* widely used and beginner friendly 
	more jobs because it's everywhere
		people are familiar with it
		code needs to be maintained
	bad reputation because it's easy to get started hacking away
	security concerns in the language itself, solved with php 5 ~ 2005 
	(most of these security concerns were addressed in php 5)

	We will be taught the correct way of writing php with no security concerns 


	breadth											depth
	<------------------------------------***-------------->
	hello world in 100 languages    				only js

	We should have a depth of knowledge by picking a tool and sticking with it but also know a wide breadth of knowledge, we should be where the three stars are


	php hypertext preprocessor (is recursive)



	For string interpolation, use the heredoc, otherwise you can use the nowdoc

	Constants:

	define('SIDES_OF_DICE', 6);
	>>>SIDES_OF_A_DICE
	=> 6
	>>>echo 'there are ' . SIDES_OF_A_DICE .' sides on a dice.'
	there are 6 sides on a ice.
	=> null
	>>> echo 'two dice have a total of ' . (SIDES_OF_A_DICE * 2) . ' sides'
	two dice have a total of 12 sides
	=>null
	>>>SIDES_OF_A_DICE  20
	PHP Parse error: Syntax error, unexpected '=' on line 1
	>>>define('DB_NAME', 'codeup_db')
	>>>true
	>>>"SIDES _OF_A_DICE"
	>>>"SIDES_OF_A_DICE"
	>>>"{SIDES_OF_A_DICE}"


	//constants are good especially when working on teams so that no changes the value of that, with a constant you can ensure that these values don't change while the program is running 

	No closing tag for php files 


	Arrays:

	>>> array (1,2,3)
	=> [
		1,
		2,
		3,
		]
	>>> array('one','two','three')
	=> [
		"one",
		"two",
		"three"
		]

	>>> 1+1
	=>2
	>>> echo [1,2,3,4]
	Array PHP error 


	to traverse we will do 
	//lat
	var_dump($forecast['location']['lat']);

	//PHP CLI Arguments

	Undefined offset in php  is the equivalent of an undefined variable, means there is nothing living in this index (in a zero index array)if there is nothing in this index) ; in associative arrays it would be undefined index 



	$a = 50;
	$b= &50;

	$a 

	if b changes, so does a 


	put the statement that is more likely to be false first for better performance
	use natural language 
	if ($isLoggedIn && ($isAdmin || $isAuthor)){
		//allow user to edit an article
	}

	// associative array
	//assigning keys to values
	$array = [];
	$array['name'] = 'Ryan';
	$array['favorite_color'] = 'John';

	$key = 'name';
	$array [$key] = 'Ryan';

	only strings and numbers can be keys, not arrays

	//assigning associative array key => value pairs
	$person1 = [
		'name' =>'Ryan',
		'age'  => 34,
		'languages' => ['CSS','JS','HTML','PHP','MySQL'],

	];
	$person 2 = [
		'name' => 'Jose',
		'age'  => '36',
		'languages'=>['CSS','JS','HTML','PHP','MySQL'],
	];

	$newArray = [$person1, $person2];


$age =22;

//(if CONDITION) THEN : ELSE;

$isAdult = ($age >= 18) ? true : false;
 use ternary's when they make things more readable like a simple if 


 //(if CONDITION) THEN : ELSE;

 if($age > 18 && $age >21){
 	echo "You can register for selective service".PHP_EOL;
 }else if($age > 21){
 	echo "You can register for selective service".PHP_EOL;
 }


while loops

$name = 'Bob';
while ($name == 'Jane'){
	//do the thing
}
or 

$condition = false;
while($condition == false){
	//do the thing
	echo "this is false";
}

$x = 1;
while($x < 10){
	echo "keep going".PHP_EOL;
	$x+=1;
}

do {
	echo"I run at least once" .PHP_EOL;
} while (false);

$test = 5;

do{
	echo $test .PHP_EOL;
	$test ++;
} while ($test <= 15);


IO Streams

//fwrite(STDOUT, 'hi there!' . PHP_EOL);
//essentially the same as echo and we write some message and we can display it in the command line

fgets allow us to get input from the user 

$input = trim(fgets(STDIN));

null coalescing 











