var schedules={
	
	sYYYY_nSeason:{//template
		season:"",
		sleep:[23,8],//in h
		schedule:{
			subject1:{
				name:"subject1",
				
				time:{
					mon:[]
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
					tue:[{start:1000,end:1300},{start:1500,end:1600}],
					thu:[{start:1000,end:1300}]
				},
				
				color:"#F00",
				
				notes:"1015-1300"
			},
			comp218:{
				name:"COMP 218",
				
				time:[
					
				],
				
				color:"-",
				
				notes:"-"
			}
		}
	},
	
	
	s2022_2Winter:{
		season:"Winter 2022",
		sleep:[23,8],//in h
		schedule:{
			
			Sleep:{
				name: "SLEEP",
				
				time:{
					tue:[{start:700,end:1000}],
					thu:[{start:700,end:1000}],
					fri:[{start:700,end:1000}]
				}
			},
			
			WakeUP:{
				name: "WAKE UP",
				
				time:{
					tue:[1000],
					thu:[1000],
					fri:[1000]
				}
			},
			
			
			
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
					tue:[1100],
					wed:[800],
					thu:[1100],
					fri:[1100],
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
					tue:[2000]
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
					wed:[{start:1000,end:1300}]
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
					tue:[2000]
				}
			}
		}
	}
}


export {schedules};
