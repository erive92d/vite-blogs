import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';


export default function DefaultSideBar() {
    return (
        <div class="flex h-screen">
            <div class="w-25">
                <div class="flex items-center justify-center  text-white text-2xl font-bold">Logo</div>
                <ul>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Dashboard</li>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Posts</li>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Users</li>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Settings</li>
                </ul>
            </div>
        </div>

        // <Sidebar >
        //     <Sidebar.Items>
        //         <Sidebar.ItemGroup>
        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiChartPie}
        //             >
        //                 <p>
        //                     Dashboard
        //                 </p>
        //             </Sidebar.Item>

        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiInbox}
        //                 label="3"
        //             >
        //                 <p>
        //                     Inbox
        //                 </p>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiUser}
        //             >
        //                 <p>
        //                     Users
        //                 </p>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiShoppingBag}
        //             >
        //                 <p>
        //                     Products
        //                 </p>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiArrowSmRight}
        //             >
        //                 <p>
        //                     Sign In
        //                 </p>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //                 href="#"
        //                 icon={HiTable}
        //             >
        //                 <p>
        //                     Sign Up
        //                 </p>
        //             </Sidebar.Item>
        //         </Sidebar.ItemGroup>
        //     </Sidebar.Items>
        // </Sidebar>
    )
}



