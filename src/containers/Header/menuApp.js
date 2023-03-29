export const adminMenu = [
    { //quan ly nguoi dung
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage',
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            // {
            //     name: 'menu.admin.manage-admin', link: '/system/user-admin',
            // }
            { //quan ly ke hoach kham benh cua bac sy
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule',
            }
        ]
    },
    // { //quan ly phong kham
    //     name: 'menu.admin.clinic',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-clinic', link: '/system/manage-clinic',
    //         }
    //     ]
    // },
    { //quan ly chuyen khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty',
            }
        ]
    },
    // { //quan ly cam nang
    //     name: 'menu.admin.handbook',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-handbook', link: '/system/manage-handbook',
    //         }
    //     ]
    // },
];

export const doctorMenu = [
    { //quan ly ke hoach kham benh cua bac sy
        name: 'menu.admin.manage-user',
        menus: [
            { //quan ly ke hoach kham benh cua bac sy
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule',
            }
        ]
    },
];