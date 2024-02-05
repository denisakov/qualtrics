define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat8.js'], function(APIConstructor, iatExtension){
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
			}
});