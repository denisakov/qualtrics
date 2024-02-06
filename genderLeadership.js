//https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js
define(['pipAPI','https://denisakov.github.io/qualtrics/iat.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
  return iatExtension({
  	isTouch:true, //Set whether the task is on a touch device.
    attribute1 : {
			name : 'Erkek', //Will appear in the data.
			title : {
				media : {word : 'Erkek'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Ali'},
				{word: 'Ahmet'},
				{word: 'Mustafa'},
				{word: 'Kerem'},
				{word: 'Fatih'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :	{
			name : 'Kadin', //Will appear in the data.
			title : {
				media : {word : 'Kadin'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Elif'},
				{word: 'Zeynep'},
				{word: 'Burcu'},
				{word: 'Hatice'},
				{word: 'Muge'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : {
			name : 'Lider',
			title : {
				media : {word : 'Lider'},
				css : {color:'#31940F','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Lider'},
				{word: 'Hirsli'},
				{word: 'Kararli'},
				{word: 'Dinamik'},
				{word: 'Kendine Guvenen'}
			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		category2 : {
			name : 'Destekci',
			title : {
				media : {word : 'Destekci'},
				css : {color:'#31940F','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Destekci'},
				{word: 'Yardimci'},
				{word: 'Anlayisli'},
				{word: 'Sempatik'},
				{word: 'Sefkatli'}
			],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'http://denisakov.github.io/qualtrics/images/'
		},
		showDebriefing:true, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
		//Texts for the trials that show the debriefing.

		preDebriefingText : 'Press space to see your result', //Text in the trial that comes before showing the debriefing.
		preDebriefingTouchText : 'Touch the bottom green area to see your result', //Touch version for the text in the trial that comes before showing the debriefing.
		debriefingTextTop : 'Your result:', //Will be shown above the feedback text.
		//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
		//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
		//We strongly recommend that you provide all these details in the debriefing of the experiment.
		debriefingTextBottom : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.', //Will be shown below the feedback text.


		// preDebriefingText : 'Asagidaki yesil alana dokunarak sonucunuza ulasabilirsiniz.', //Text in the trial that comes before showing the debriefing.
		// preDebriefingTouchText : 'Asagidaki yesil alana dokunarak sonucunuza ulasabilirsiniz.', //Touch version for the text in the trial that comes before showing the debriefing.
		// debriefingTextTop : 'Sonuc: ', //Will be shown above the feedback text.
		// //ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
		// //In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
		// //We strongly recommend that you provide all these details in the debriefing of the experiment.
		// debriefingTextBottom : 'Lutfen sonucunuzu aklinizda tutunuz ve bir sonraki asamada coktan secmeli menuden seciniz.' //Will be shown below the feedback text.
	});
})