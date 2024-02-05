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
		category1 : 
		{
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
		category2 : 
		{
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
		//The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
			fb_strong_Att1WithCatA_Att2WithCatB : 'Your responses suggested a strong automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Your responses suggested a moderate automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Your responses suggested a slight automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_equal_CatAvsCatB : 'Your responses suggested little or no automatic association between attribute2 and attribute1 with categoryA and categoryB.'
    });
});