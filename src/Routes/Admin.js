export default[
    {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Admin/Nav-Menu.vue"),
    // Others All Admin Routes
    children: [
        {
        path: "/admin/contact",
        name: "Admin-Contact",
        component: () => import("../components/Admin/Contact.vue"),
        },
        // Route 
        // Route 
        // Route 
        // Route 
        // Route 

    ]
    },

]
