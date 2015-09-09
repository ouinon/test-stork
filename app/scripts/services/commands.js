angular.module('storkApp')
	.factory('commandsFact',['itemsFact',function(items){
	
	// look at room: player gets description of the room
	// look at me: player gets description of self
	// say [message]: player says [message] (to themselves)


	var returnResult = function(message,className,revert){

		var obj = {
			// Using join(' ') to make the script a little more legible, rather than using a many '+' etc.
			msg: message.join(' '),
			cssClass: className,
			revert: revert || false,
		};	

		return obj;

	};

	return {
	  	_invalid: function(cmdArr){

	  		var commands = '('+cmdArr.join(',')+')';

	  		var message = ['Alas you can\'t do that in this version of Stork, butter to try -',commands];

	  		return returnResult(message,'Invalid',true);

	  	},
	  	say: function(cmdArr){

	  		var quote = '"'+cmdArr.join(' ')+'"';

	  		var message = [quote,'says you.'];

	  		return returnResult(message,'Say',false);

	  	},
	  	look: function(cmdArr){

	  		// Lets assume that object is the last thing to be described.
	  		var obj = cmdArr.pop();

	  		var className = 'Default';

	  		if(!items[obj]){

	  			var itemsList = Object.keys(items).join(' or ');

	  			var message = ['I can\'t see a', obj ,'in sight, try looking at -',itemsList];

	  		}else{

	  			// It would prove extremely difficult to work out whether to use 'an' or 'a'. Think an hour or a hat
	  			var message = [items[obj]['desc']] || ['Yup, that\'s definitely a', obj ,'or should that be an', obj];

		  		className = 'Look';

	  		}

  			return returnResult(message,className,false);

	  	}
	};
	
}]);