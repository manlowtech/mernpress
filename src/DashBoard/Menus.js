
export const Menus = [
        {
            menu_name:"Posts",
            menu_slug:"add_new_post",
            component: "AddPost",
            children:[
                {
                menu_name:"Add New",
                menu_slug:"add_new_post",
                component: "AddPost",
                parent:"posts"
                },
                {
                menu_name:"All Posts",
                menu_slug:"all_posts",
                component: "AllPosts",
                parent:"add_new_post",
                }
            ]
        },
        {
            menu_name:"Pages",
            menu_slug:"add_new_page",
            component: "AddPage",
            children:[
                {
                menu_name:"Add New",
                menu_slug:"add_new_page",
                component: "AddPage",
                parent:"add_new_page"
                },
                {
                menu_name:"All Pages",
                menu_slug:"all_pages",
                component: "AllPages",
                parent: "add_new_page",
                }
            ]
        },
        {
            menu_name:"Themes",
            menu_slug:"add_new_theme",
            component: "AddTheme",
            children:[
                {
                menu_name:"Add New",
                menu_slug:"add_new_theme",
                component: "AddTheme",
                parent:"add_new_theme"
                },
                {
                menu_name:"All Themes",
                menu_slug:"all_themes",
                component: "AllThemes",
                parent: "add_new_theme",
                }
            ]
        },
        {
            menu_name:"Addons",
            menu_slug:"add_new_addon",
            component: "Addons",
            children:[
                {
                menu_name:"Add New",
                menu_slug:"add_new_addon",
                component: "Addons",
                parent:"add_new_addon",
                },
                {
                menu_name:"All Addons",
                menu_slug:"all_addons",
                component: "AllAddons",
                }
            ]
        },

]
