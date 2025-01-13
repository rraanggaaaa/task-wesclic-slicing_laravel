import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='grid grid-2 gap-8 md:grid-cols-2 lg:grid-cols-2 bg-slate-100 rounded-md p-12'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-6'>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                        </div>
                        <div className='flex flex-col px-6'>
                            <p className='text-4xl font-bold '>Visual Designer</p>
                        </div>
                        <div className='flex flex-col p-6'>
                            <p className='text-md font-normal text-justify'>Ini adalah slicing dari figma menggunakan Laravel sebagai tugas Slicing dari Wesclic</p>
                        </div>
                        <div className='flex mx-6 my-4'>
                            <div className="flex justify-center items-center px-4 bg-slate-900 rounded-md">
                                <NavLink
                                    href={route('testimonial')}
                                >
                                    Testimonial
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-12 justify-end items-end'>
                        <img className='h-52 w-52' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
                    </div>
                </div>
            </div>
            
            <div className='min-h-screen px-0 my-6'>
                <div className='grid grid-5 gap-8 md:grid-cols-5 lg:grid-cols-5 bg-slate-100'>
                    <div className='flex flex-col p-6'>
                        <img className='h-5 w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'></img>
                    </div>
                    <div className='flex flex-col p-6'>
                        <img className='h-5 w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'></img>
                    </div>
                    <div className='flex flex-col p-6'>
                        <img className='h-5 w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'></img>
                    </div>
                    <div className='flex flex-col p-6'>
                        <img className='h-5 w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'></img>
                    </div>
                    <div className='flex flex-col p-6'>
                        <img className='h-5 w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'></img>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
