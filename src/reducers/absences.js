function absences(state=[],action){
	
	switch(action.type)
	{
		case "ADD_ABSENCE":
			state = [
				action.absence
			]
			
			console.log(state);
			
			return state;
		default:
			return state;
	}
	
}
export default absences;
