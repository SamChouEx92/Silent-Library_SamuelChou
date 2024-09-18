//========================================================================================================================

    //[Silent Library Javascript]                                                       //[This is the column for Comments]

        //[Date:        2024-09-16]
        //[Build:       v0.1.1-alpha]

//========================================================================================================================
//[TEMPLATES]                                                                           //[This is the column for Comments]

    const elemByID = (tpl) => document.getElementById('Page_Header');
    const tpl = elemByID('Page_Header');

//========================================================================================================================
//[SIDEBAR]                                                                             //[This is the column for Comments]

    function showSideBar(){
        const SideBar = document.querySelector('.SideBar')
        SideBar.style.display = 'flex'
    }

    function hideSideBar(){
        const SideBar = document.querySelector('.SideBar')
        SideBar.style.display = 'none'
    }

//========================================================================================================================
//[SORT TABLE]                                                                          //[This is the column for Comments]

    function sortTable(){
        //Not Yet, fill later.
    }