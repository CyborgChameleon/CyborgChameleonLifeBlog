var headerNavigationObject = {headerNavigationArray:[
    {
        title : "CYBORG CHAMELEON",
        location:"index.html",
        dropdown:[
            {
                title : "More Coming Soon",
                location:""
            }
        ]
    },
    {
        title : "Schedule",
        location:"schedule/schedule.html"
    },/*
    {
        title : "More Coming Soon",
        location:""
    },
    {
        title : "More Coming Soon",
        location:""
    },
    {
        title : "More Coming Soon",
        location:""
    },*/
    {
        title : "More Coming Soon",
        location:"",
        dropdown:[
            {
                title : "More Coming Soon",
                location:""
            }
        ]
    }
]};


var sideNavigationObject = {sideNavigationArray:[
    {
        title : "Schedule",
        location:"schedule/schedule.html"
    },
    {
        title : "More Coming Soon",
        location:""
    }
]};

var myOtherWebsitesObject = {myOtherWebsitesArray:[
    {
        title : "Coming Soon",
        location:""
    },
    {
        title : "Coming Soon",
        location:""
    }
]};

/* 
Figure out how to seperate the array to a seperated json file and import it 

https://youtu.be/mw5i_QGDomw
https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable
https://dmitripavlutin.com/fetch-with-json/
https://jsononline.net/json-validator 
*/



let oneFolderUp="../"
let subLvlFromRoot;
			if (parent.window.location.href.indexOf("github")==-1){
				subLvlFromRoot=parent.window.location.href.split("/").length-4;
			}else{
				subLvlFromRoot=parent.window.location.href.split("/").length-5;
			}
console.log(parent.window.location.href);
console.log(subLvlFromRoot);
console.log("version")

document.getElementById("headerNavigationDirectory").innerHTML=headerNavigationObject.headerNavigationArray
.map(
    (page) =>
    
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");
document.getElementById("sideNavigationDirectory").innerHTML=sideNavigationObject.sideNavigationArray
.map(
    (page) =>
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");


document.getElementById("footer").innerHTML=
`<div>`+
    `<h4>My Other Websites</h4>`+
    
    myOtherWebsitesObject.myOtherWebsitesArray
    .map(
        (page) =>
        `<a href="${page.location}">${page.title}<br></a>`
    )
    .join("")
+
`</div>`
;


/*update the css file address*/
document.getElementById("cssFileUpdate").setAttribute("href",oneFolderUp.repeat(subLvlFromRoot)+"css/style.css");
/*try to switch getElementById with getElementsByTagName */