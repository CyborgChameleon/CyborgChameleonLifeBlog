var headerNavigationObject = {headerNavigationArray:[
    {
        title : "CYBORG CHAMELEON",
        location:"index.html"
    },
    {
        title : "Schedule",
        location:"schedule/schedule.html"
    },
    {
        title : "More Coming Soon",
        location:"",
        dropdown:[
            {
                title : "More Coming Soon 2",
                location:""
            }
        ]
    }
    /*max 5 main things */
]};


var sideNavigationObject = {sideNavigationArray:[
    {
        title : "Schedule",
        location:"schedule/schedule.html"
    },
    {
        title : "More Coming Soon",
        location:""
    },
    {
        title : "More Coming Soon 2",
        location:"",
        parent: "More Coming Soon"
    }
]};

var myOtherWebsitesObject = {myOtherWebsitesArray:[
    {
        title : "test",
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



more navigation features
https://www.w3schools.com/csS/css_navbar_horizontal.asp
https://www.w3schools.com/howto/howto_js_dropdown.asp
*/



let oneFolderUp="../"
let subLvlFromRoot;
if (parent.window.location.href.indexOf("github")==-1){
    subLvlFromRoot=parent.window.location.href.split("/").length-4;
}else{
    subLvlFromRoot=parent.window.location.href.split("/").length-5;
}

// header navigation
document.getElementById("headerNavigationDirectory").innerHTML=headerNavigationObject.headerNavigationArray
.map(
    (page) =>
    
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");
// side navigation
const rootSideNavigation=sideNavigationObject.sideNavigationArray.filter((file)=>{
    return file.parent==null;
});
console.log(rootSideNavigation);
document.getElementById("sideNavigationDirectory").innerHTML=rootSideNavigation
.map(
    (page) =>
    //console.log(page)
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");
// https://www.youtube.com/watch?v=R8rmfD9Y5-c&ab_channel=WebDevSimplified
//footer
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