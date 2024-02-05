//https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js
define(['pipAPI','https://denisakov.github.io/qualtrics/iat.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
  return iatExtension({
    attribute1 : {
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Josh'},
				{word: 'Brandon'},
				{word: 'Peter'},
				{word: 'Ian'},
				{word: 'Andrew'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :	{
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Emily'},
				{word: 'Donna'},
				{word: 'Debbie'},
				{word: 'Katherine'},
				{word: 'Jane'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : {
			name : 'Leader',
			title : {
				media : {word : 'Leader'},
				css : {color:'#31940F','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Leader'},
				{word: 'Ambitious'},
				{word: 'Determined'},
				{word: 'Dynamic'},
				{word: 'Assertive'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		category2 : {
			name : 'Supporter',
			title : {
				media : {word : 'Supporter'},
				css : {color:'#31940F','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Supporter'},
				{word: 'Helpful'},
				{word: 'Understanding'},
				{word: 'Sympathetic'},
				{word: 'Compassionate'}
			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		showDebriefing:true, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
		//Texts for the trials that show the debriefing.
		preDebriefingText : 'Press space to see your result', //Text in the trial that comes before showing the debriefing.
		preDebriefingTouchText : 'Touch the bottom green area to see your result', //Touch version for the text in the trial that comes before showing the debriefing.
		debriefingTextTop : 'Your result:', //Will be shown above the feedback text.
		//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
		//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
		//We strongly recommend that you provide all these details in the debriefing of the experiment.
		debriefingTextBottom : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.' //Will be shown below the feedback text. 
	});
})