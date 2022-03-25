/*
THINGS TO DO

add colspan and rowspan

add color to the table

*/










//---------------------------------------------------------------------------------
//DATABASE SECTION
//---------------------------------------------------------------------------------


var schedules={
	
	sYYYY_nSeason:{//template
		season:"",
		sleep:[23,8],//in h
		schedule:{
			subject1:{
				name:"subject1",
				
				time:{
					mon:[],
					tue:[],
					wed:[],
					thu:[],
					fri:[],
					sat:[],
					sun:[]
				},
				
				color:"#F00",
				
				notes:"write notes here"
			}
			
		}
	},


	s2022Fall:{//FALL 2022
		season:"Fall 2022",
		sleep:[23,8],
		schedule:{
			mchi206:{
				name:"MCHI 206",
				
				time:{
					mon:[],
					tue:[{start:1000,end:1300},{start:1500,end:1600}],
					wed:[],
					thu:[{start:1000,end:1300}],
					fri:[],
					sat:[],
					sun:[]
				},
				
				color:"#F00",
				
				notes:"1015-1300"
			}
			// {
				// block:"COMP 218",
				
				// time:[
					// ["tue",-],
					// ["thu",-]
				// ],
				
				// color:"-",
				
				// notes:"-"
			// }
		}
	},
	
	
	s2022_2Winter:{
		season:"Winter 2022",
		sleep:[23,8],//in h
		schedule:{
			
			MCHI206:{
				name:"MCHI206",
				
				time:{
					mon:[{start:1000,end:1300}],
					wed:[{start:1000,end:1300}]
					
				},
				
			},
			
			Running:{
				name:"RUN",
				
				time:{
					mon:[900],
					wed:[900]
					
				},
				
			},
			
			MorningRoutine:{
				name:"MorningRoutine",
				
				time:{
					mon:[800],
					tue:[800],
					wed:[800],
					thu:[800],
					fri:[800],
					sat:[800],
					sun:[800]
					
				}
			},
			
			CatchUpOrHobbies:{
				name:"Catch Up Or Hobbies",
				
				time:{
					
				}
			},
			
			Lunch:{
				name:"Lunch",
				
				time:{
					mon:[1300],
					tue:[1300],
					wed:[1300],
					thu:[1300],
					fri:[1300],
					sat:[1300],
					sun:[1300]
				}
			},

			studyChinese:{
				name:"Chinese",
				
				time:{
					
				}
			},
			
			dailyRoutine:{
				name:"Daily Routine",
				
				time:{
					mon:[1600],
					tue:[1600],
					wed:[1600],
					thu:[1600],
					fri:[1600],
					sat:[1600],
					sun:[1600]
				}
			},
			
			FreeTime:{
				name:"FREE TIME",
				
				time:{
					
				}
			},
			
			Dinner:{
				name:"Dinner",
				
				time:{
					mon:[1800],
					tue:[1800],
					wed:[1800],
					thu:[1800],
					fri:[1800],
					sat:[1800],
					sun:[1800]
				}
			},
			
			EveningRoutine:{
				name:"Evening Routine",
				
				time:{
					mon:[1900],
					tue:[1900],
					wed:[1900],
					thu:[1900],
					fri:[1900],
					sat:[1900],
					sun:[1900]
					
				}
			},
			
			LanguagePreservationMeeting:{
				name:"Report Meeting (Web)",
				
				time:{
					mon:[],
					tue:[2000],
					wed:[],
					thu:[],
					fri:[],
					sat:[],
					sun:[]
				}
			}
		}
	},
	
	
	s2022_1Winter:{
		season:"Winter 2022",
		sleep:[20,5],//in h
		schedule:{
			
			MCHI206:{
				name:"MCHI206",
				
				time:{
					mon:[{start:1000,end:1300}],
					tue:[],
					wed:[{start:1000,end:1300}],
					thu:[],
					fri:[],
					sat:[],
					sun:[]
				},
				
				color:"#F00",
				
				notes:"in person class"
			},
			
			TotalBodyAndCleanUp:{
				name:"Total Body and Clean Up",
				
				time:{
					mon:[{start:600,end:900}],
					wed:[{start:600,end:900}],
					fri:[{start:600,end:900}]
					
				},
				
			},
			
			CoreAndVacuum:{
				name:"study chinese",
				
				time:{
					tue:[{start:600,end:900}],
					thu:[{start:600,end:900}]
				},
				
			},
			
			Cardio:{
				name:"Cardio",
				
				time:{
					sat:[{start:600,end:900}],
					sun:[{start:600,end:900}]
				},
				
			},
			
			MorningRoutine:{
				name:"MORNING ROUTINE",
				
				time:{
					mon:[500],
					tue:[500],
					wed:[500],
					thu:[500],
					fri:[500],
					sat:[500],
					sun:[500]
				}
			},
			
			CatchUpOrHobbies:{
				name:"Catch Up Or Hobbies",
				
				time:{
					mon:[900],
					tue:[900],
					wed:[900],
					thu:[900],
					fri:[900],
					sat:[900],
					sun:[900]
				}
			},
			
			Lunch:{
				name:"Lunch",
				
				time:{
					mon:[1300],
					tue:[1300],
					wed:[1300],
					thu:[1300],
					fri:[1300],
					sat:[1300],
					sun:[1300]
				}
			},

			studyChinese:{
				name:"Chinese",
				
				time:{
					mon:[1400,1500],
					tue:[1400,1500],
					wed:[1400,1500],
					thu:[1400,1500],
					fri:[1400,1500],
					sat:[1400,1500],
					sun:[1400,1500]
				}
			},
			
			dailyRoutine:{
				name:"Daily Routine",
				
				time:{
					mon:[1600],
					tue:[1600],
					wed:[1600],
					thu:[1600],
					fri:[1600],
					sat:[1600],
					sun:[1600]
				}
			},
			
			FreeTime:{
				name:"FREE TIME",
				
				time:{
					mon:[1700],
					tue:[1700],
					wed:[1700],
					thu:[1700],
					fri:[1700],
					sat:[1700],
					sun:[1700]
				}
			},
			
			Dinner:{
				name:"Dinner",
				
				time:{
					mon:[1800],
					tue:[1800],
					wed:[1800],
					thu:[1800],
					fri:[1800],
					sat:[1800],
					sun:[1800]
				}
			},
			
			EveningRoutine:{
				name:"Evening Routine",
				
				time:{
					mon:[1900],
					tue:[1900],
					wed:[1900],
					thu:[1900],
					fri:[1900],
					sat:[1900],
					sun:[1900]
				}
			},
			
			LanguagePreservationMeeting:{
				name:"Report Meeting (Web)",
				
				time:{
					mon:[],
					tue:[2000],
					wed:[],
					thu:[],
					fri:[],
					sat:[],
					sun:[]
				}
			}
		}
	}
	
}
	



currentSchedule=schedules.s2022_2Winter;











//---------------------------------------------------------------------------------
//BACKEND SECTION
//---------------------------------------------------------------------------------


//Schdedule duration according what's in the database
if (currentSchedule.sleep[0]>24){
	scheduleDuration=((currentSchedule.sleep[0]-24)-currentSchedule.sleep[1])+2;
	
} else {
	scheduleDuration=(currentSchedule.sleep[0]-currentSchedule.sleep[1])+2;
	
}


//function to count how many digits in a number
const digits = (num, count = 0) => {
	if(num){
		return digits(Math.floor(num / 10), ++count);
	};
 return count;
};

//Creation of matrix
var hourlyScheduleMatrix=[];


for (hourIndex=0; hourIndex<scheduleDuration; hourIndex++){
	
	hourlyWeek={
		time:"",
		mon:"Monday",
		tue:"Tuesday",
		wed:"Wednesday",
		thu:"Thursday",
		fri:"Friday",
		sat:"Saturday",
		sun:"Sunday"
	}; //makes a schema for each hour everyday of the week
	
	
	for (const day in hourlyWeek){ //changes the values in the schema
	
		//time is defined
		hour=hourIndex+currentSchedule.sleep[1]-1;
		
		//time is being converted into 4 digit string
		hour=(hour*100).toString();
		for (digitIndex=4-digits(hour) ; digitIndex>0; digitIndex--){
			hour="0"+hour;
		}
		
		//the value in the schema is updated
		if (hourlyWeek[day]==""){
			hourlyWeek[day]=hour;
			
		} else{
		hourlyWeek[day]="-";
		}
		//Placeholders to replace if loop above
		//hourlyWeek[day]=hourlyWeek[day].substring(0,3).concat(hour);
		
	};
	
	hourlyScheduleMatrix.push(hourlyWeek); //new hour is added to the visible matrix
	
}

//Updating Matrix

for (const day in hourlyScheduleMatrix[0]){
	if (isNaN(hourlyScheduleMatrix[0][day])){
		hourlyScheduleMatrix[0][day]="WAKE UP";
	} else{	}
}
for (const day in hourlyScheduleMatrix[scheduleDuration-1]){
	if (isNaN(hourlyScheduleMatrix[scheduleDuration-1][day])){
		hourlyScheduleMatrix[scheduleDuration-1][day]="SLEEP";
	} else{	}
}

//
//starts by reading the list of things
for (const subject in currentSchedule.schedule){
	for (const day in currentSchedule.schedule[subject].time){
		if(currentSchedule.schedule[subject].time[day].length == 0){
		}else{
			for (const period in currentSchedule.schedule[subject].time[day]){
				
				
				//if loops allows me to write the hours in 2 formats
				if (typeof currentSchedule.schedule[subject].time[day][period]=="object"){
					
					for(block=currentSchedule.schedule[subject].time[day][period].start;
							block<currentSchedule.schedule[subject].time[day][period].end;
							block+=100){
						
						hourlyScheduleMatrix[block/100-currentSchedule.sleep[1]+1][day]=currentSchedule.schedule[subject].name;
						
					}
				}else if(typeof currentSchedule.schedule[subject].time[day][period]=="number"){
					
					if(typeof hourlyScheduleMatrix[currentSchedule.schedule[subject].time[day][period]/100-currentSchedule.sleep[1]+1][day]==undefined){
						
						console.log ("attempted to pull a block hour not available in displaying matrix, please adjust the sleeping hours")
						
					} else{
						
						hourlyScheduleMatrix[currentSchedule.schedule[subject].time[day][period]/100-currentSchedule.sleep[1]+1][day]=currentSchedule.schedule[subject].name;
					
					}
				
				}else{
					console.log("data error??")
				}
			}
		}
	}
}





































//OUTPUT

//test
//document.getElementById("test").innerHTML = result;

//schedule title
document.getElementById("title").innerHTML = currentSchedule.season;
//schedule output
const scheduleHours = document.getElementById("schedule");
scheduleHours.innerHTML = hourlyScheduleMatrix.map((hourBlock) =>
    `
		<tr>
			<td>${hourBlock.time}</td>
     	<td>${hourBlock.mon}</td>
      <td>${hourBlock.tue}</td>
     	<td>${hourBlock.wed}</td>
      <td>${hourBlock.thu}</td>
     	<td>${hourBlock.fri}</td>
      <td>${hourBlock.sat}</td>
      <td>${hourBlock.sun}</td>
    </tr>
		
		`
  ).join("");



//-------------------------------------------------------------------------------
/*potential tools
---------------------------------------

find the length of an object
https://www.geeksforgeeks.org/find-the-length-of-a-javascript-object/#:~:text=Find%20the%20length%20of%20a%20JavaScript%20object.%20Method,object.%20It%20gives%20the%20length%20of%20the%20object.




*/

//-----------------------------------------------------------------------------------
/* Archived
-----------------------------------------------------------------------------------------








--------------------------------------------------------------------------------------------------------















----------------------------------------------------------------------------------------------------------------------------

//OLD HOURLY SCHEDULE MATRIX
var hourlyScheduleMatrix=[ //hourlyScheduleMatrix[h].day;
	{mon:"mon0000",tue:"tue0000",wed:"wed0000",thu:"thu0000",fri:"fri0000",sat:"sat0000",sun:"sun0000"},
	{mon:"mon0100",tue:"tue0100",wed:"wed0100",thu:"thu0100",fri:"fri0100",sat:"sat0100",sun:"sun0100"},
	{mon:"mon0200",tue:"tue0200",wed:"wed0200",thu:"thu0200",fri:"fri0200",sat:"sat0200",sun:"sun0200"},
	{mon:"mon0300",tue:"tue0300",wed:"wed0300",thu:"thu0300",fri:"fri0300",sat:"sat0300",sun:"sun0300"},
	{mon:"mon0400",tue:"tue0400",wed:"wed0400",thu:"thu0400",fri:"fri0400",sat:"sat0400",sun:"sun0400"},
	{mon:"mon0500",tue:"tue0500",wed:"wed0500",thu:"thu0500",fri:"fri0500",sat:"sat0500",sun:"sun0500"},
	{mon:"mon0600",tue:"tue0600",wed:"wed0600",thu:"thu0600",fri:"fri0600",sat:"sat0600",sun:"sun0600"},
	{mon:"mon0700",tue:"tue0700",wed:"wed0700",thu:"thu0700",fri:"fri0700",sat:"sat0700",sun:"sun0700"},
	{mon:"mon0800",tue:"tue0800",wed:"wed0800",thu:"thu0800",fri:"fri0800",sat:"sat0800",sun:"sun0800"},
	{mon:"mon0900",tue:"tue0900",wed:"wed0900",thu:"thu0900",fri:"fri0900",sat:"sat0900",sun:"sun0900"},
	{mon:"mon1000",tue:"tue1000",wed:"wed1000",thu:"thu1000",fri:"fri1000",sat:"sat1000",sun:"sun1000"},
	{mon:"mon1100",tue:"tue1100",wed:"wed1100",thu:"thu1100",fri:"fri1100",sat:"sat1100",sun:"sun1100"},
	{mon:"mon1200",tue:"tue1200",wed:"wed1200",thu:"thu1200",fri:"fri1200",sat:"sat1200",sun:"sun1200"},
	{mon:"mon1300",tue:"tue1300",wed:"wed1300",thu:"thu1300",fri:"fri1300",sat:"sat1300",sun:"sun1300"},
	{mon:"mon1400",tue:"tue1400",wed:"wed1400",thu:"thu1400",fri:"fri1400",sat:"sat1400",sun:"sun1400"},
	{mon:"mon1500",tue:"tue1500",wed:"wed1500",thu:"thu1500",fri:"fri1500",sat:"sat1500",sun:"sun1500"},
	{mon:"mon1600",tue:"tue1600",wed:"wed1600",thu:"thu1600",fri:"fri1600",sat:"sat1600",sun:"sun1600"},
	{mon:"mon1700",tue:"tue1700",wed:"wed1700",thu:"thu1700",fri:"fri1700",sat:"sat1700",sun:"sun1700"},
	{mon:"mon1800",tue:"tue1800",wed:"wed1800",thu:"thu1800",fri:"fri1800",sat:"sat1800",sun:"sun1800"},
	{mon:"mon1900",tue:"tue1900",wed:"wed1900",thu:"thu1900",fri:"fri1900",sat:"sat1900",sun:"sun1900"},
	{mon:"mon2000",tue:"tue2000",wed:"wed2000",thu:"thu2000",fri:"fri2000",sat:"sat2000",sun:"sun2000"},
	{mon:"mon2100",tue:"tue2100",wed:"wed2100",thu:"thu2100",fri:"fri2100",sat:"sat2100",sun:"sun2100"},
	{mon:"mon2200",tue:"tue2200",wed:"wed2200",thu:"thu2200",fri:"fri2200",sat:"sat2200",sun:"sun2200"},
	{mon:"mon2300",tue:"tue2300",wed:"wed2300",thu:"thu2300",fri:"fri2300",sat:"sat2300",sun:"sun2300"}

];
*/