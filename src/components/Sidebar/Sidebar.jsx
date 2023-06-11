import { Sidebar } from 'flowbite-react';
import { useState } from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { QUERY_USERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
export default function DefaultSideBar() {
    const { data, loading } = useQuery(QUERY_USERS)
    const users = data?.users || []

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div class="flex h-screen">
            <div class="w-25">
                <div class="flex items-center justify-center  text-white text-2xl font-bold">Logo</div>
                <ul>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Dashboard</li>
                    <li class="px-4 py-2 text-gray-600 hover:bg-gray-700">Posts</li>
                    <li className="relative rounded">
                        <button
                            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            Users
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M6 6L10 10L14 6H6Z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {isOpen && (
                            <ul className="absolute w-40 py-2 mt-2 bg-white rounded-md shadow-lg">

                                {users?.map((user) => <li className="px-4 py-2 hover:bg-gray-100">{user.name}</li>)}
                            </ul>
                        )}
                    </li>


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



