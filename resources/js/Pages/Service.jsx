import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Service() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Service
                </h2>
            }
        >
            <Head title="Service" />
            <div className='flex justify-center items-center'>
                <p className='text-xl font-bold text-white mt-6'>Latest Work</p>
            </div>
            <div className='flex p-6 justify-center items-center mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='grid grid-1 gap-12 md:grid-cols-2 lg:grid-cols-3 bg-slate-100 rounded-md p-12'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className='flex flex-col p-2'>
                            <img className='h-52 w-auto' src='https://www.ikapi.org/wp-content/uploads/2023/05/Masa-depan-toko-buku-penerbit-penulis-1080x675.jpg'></img>
                            <p className='text-xl font-bold '>Branding | Image making</p>
                            <p className='text-md font-normal '>Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
