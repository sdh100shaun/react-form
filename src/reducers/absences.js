function absences(state=[],action){
	
	switch(action.type)
	{
		case "ADD_ABSENCE":
			state = [
				action.absence
			]
			
		
			
			return state;
		default:
			return state;
	}
	
}
export default absences;
