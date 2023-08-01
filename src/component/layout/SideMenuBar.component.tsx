import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SafetyOutlined } from '@ant-design/icons'


const SideMenuBar = () => {
  const permissions  = ["all"];
  const [collapsed, setCollapse] = useState<boolean>(true);

  const items = [
    {
        label: 'Food',
        key: 'food',
        icon: <SafetyOutlined />,
        children: [
            {
                label: 'Food List',
                path: '/foods',
                key: 'foods',
                permission: undefined,
            }
        ]
    },
    {
        label: 'Ingredient',
        key: 'ingredient',
        icon: <SafetyOutlined />,
        children: [
          {
              label: 'Ingredient List',
              path: '/ingredients',
              key: 'ingredients',
              permission: undefined,
          }
        ]
    },
    {
        label: 'Market',
        key: 'market',
        icon: <SafetyOutlined />,
        children: [
          {
              label: 'Market Place',
              path: '/markets',
              key: 'markets',
              permission: undefined,
          }
        ]
    },
]
  
  return (
      <Sider trigger={null} collapsible collapsed={collapsed}
        onMouseEnter={() => collapsed && setCollapse(collapsed => !collapsed)}
        onMouseLeave={() => !collapsed && setCollapse(collapsed => !collapsed)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"

          items={
            // level 1 = root level
            items.map((l1_item) => {
                // console.log(l1_item?.permission, permissions, permissions?.includes(l1_item?.permission));
                return {
                    ...l1_item,
                    // level 2
                    children: l1_item?.children?.map((l2_item) => {
                        // if (l2_item) has permission then check permission exist in permissions array, otherwise return
                        let return_status = 0;
                        if (l2_item?.permission) {
                            if (permissions.includes(l2_item?.permission)) {
                                return_status = 1;
                            }
                        }
                        else {
                            return_status = 1;
                        }
                        return return_status && {
                            ...l2_item,
                            label: <NavLink to={l2_item?.path && l2_item?.path || "/"}>{l2_item?.label}</NavLink>,

                        }
                    })
                }
            })
        }
        >
        </Menu>
      </Sider>
  )
}

export default SideMenuBar;
















// items={
//   // level 1 = root level
//   items.map((l1_item, index) => {
//       // console.log(l1_item?.permission, permissions, permissions?.includes(l1_item?.permission));
//       return {
//           ...l1_item,
//           label: <Link to={l1_item?.path}>{l1_item?.label}</Link>,
//           // level 2
//           children: l1_item?.children?.map((l2_item, l2_index) => {
//               // if (l2_item) has permission then check permission exist in permissions array, otherwise return
//               let return_status = 0;
//               if (l2_item?.permission) {
//                   if (permissions?.includes(l2_item?.permission)) {
//                       return_status = 1;
//                   }
//               }
//               else {
//                   return_status = 1;
//               }
//               return return_status && {
//                   ...l2_item,
//                   label: <Link to={l2_item?.path}>{l2_item?.label}</Link>,
//                   // level 3
//                   children: l2_item?.children?.map((l3_item, l3_index) => {
//                       // if (l3_item) has permission then check permission exist in permissions array, otherwise return
//                       let return_status = 0;
//                       if (l3_item?.permission) {
//                           if (permissions?.includes(l3_item?.permission)) {
//                               return_status = 1;
//                           }
//                       }
//                       else {
//                           return_status = 1;
//                       }
//                       return return_status && {
//                           ...l3_item,
//                           label: <Link to={l3_item?.path}>{l3_item?.label}</Link>
//                       }
//                   })
//               }
//           })
//       }
//   })
// }