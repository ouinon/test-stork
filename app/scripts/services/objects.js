angular.module('storkApp')
	.factory('itemsFact',[function(){
	
	// look at room: player gets description of the room
	// look at me: player gets description of self
	// say [message]: player says [message] (to themselves)


	return {
		"me":{
			"desc":"It's you, that's who!"
		},
		"room":{
			"desc":"It's a large intimidating room, you feel as if you're being watched"
		}
	};
	
}])