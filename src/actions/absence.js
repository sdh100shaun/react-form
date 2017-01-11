//add absence
export function addAbsence(username,cohort,startDate,endDate,reason,noHours)
{
	return {
		type:"ADD_ABSENCE",
		username,
		cohort,
		startDate,
		endDate,
		reason,
		noHours
	}
}