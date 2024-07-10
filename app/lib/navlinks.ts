interface Link {
    name: string
    url: string
}


const navLinks:Link[] = [
    {name:'Home', 
        url:'/',
    },    
    {name:'Dashboard', 
        url:'/dashboard',
    },  
    {name:'Directory', 
        url:'/directory',
    },  
    {name:'Profile', 
        url:'/profile',
    },  

    {name:'Attendance/Leave', 
        url:'/attendance-leave',
    },    
    {name:'Performance', 
        url:'/performance',
    },    
    {name:'Training/Development', 
        url:'/training',
    },    
    {name:'Compensation/Benefits', 
        url:'/compensation',
    }, 

    {name:'Reports/Analytics', 
        url:'/reports',
    },
    {name:'Admin/Settings', 
        url:'/admin-settings',
    },
    {name:'Help/Support',  
        url:'/help-support',
    },
    
    

]

export default navLinks;