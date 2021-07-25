import React from 'react'

function Left({ menus, handleMenuChange }) {
    return (
        <div>
            <ul>
                {menus.map((menu, i) => <div>
                    <li onClick={() => handleMenuChange(menu.menu_slug, menu.component)}><Link to={`/admin/${menu.menu_slug}`}>{menu.menu_name}</Link></li>
                    <ul>
                        {menu.children && menu.children.map((child, i) => <div>
                            <li onClick={() => handleMenuChange(child.menu_slug, child.component)}><Link to={`/admin/${child.menu_slug}`}>{child.menu_name}</Link></li>

                        </div>)}
                    </ul>
                </div>)}
            </ul>
        </div>
    )
}

export default Left;
