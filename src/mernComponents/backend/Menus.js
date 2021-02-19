
const Menus = [
        {
            menu_name:"Posts",
            slug:"posts",
            component: "Posts",
            children:[
                {
                    menu_name:"Add New",
                slug:"add_new_post",
                component: "AddPost",
                parent:"posts"
                },
                {
                menu_name:"All Posts",
                slug:"all_posts",
                component: "AllPosts",
                }
            ]
        }
]
