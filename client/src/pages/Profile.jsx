import axios from 'axios';
import React, { useEffect } from 'react'
import { BACKENDURL } from '../App';

export default function Profile() {

    const [profileData, setProfileData] = React.useState(null);

    useEffect(() => {
        const fetchprofile = async () => {
            try {
                const user = await axios.get(`${BACKENDURL}/auth/userinfo`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(user);
                setProfileData(user.data.user);
            } catch (error) {
                console.log("Error fetching profile data:", error);
            }
        }
        fetchprofile();
    }, [])

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
                <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 p-8 animate-fadeIn">

                    {profileData ? (
                        <>
                            {/* Avatar */}
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-1">
                                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white">
                                            {profileData.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Title */}
                            <h1 className="text-4xl font-bold text-center text-white mb-2">
                                {profileData.name}
                            </h1>
                            <p className="text-center text-gray-400 mb-6">User Profile</p>

                            {/* Profile Details */}
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                                    <p className="text-gray-400 text-sm">Name</p>
                                    <p className="text-white font-medium">{profileData.name}</p>
                                </div>

                                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white font-medium">{profileData.email}</p>
                                </div>

                                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                                    <p className="text-gray-400 text-sm">Organization</p>
                                    <p className="text-white font-medium">{profileData.organization}</p>
                                </div>

                                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                                    <p className="text-gray-400 text-sm">Role</p>
                                    <p className="text-white font-medium">{profileData.role}</p>
                                </div>
                            </div>

                            {/* Edit Button */}
                            <div className="mt-6 flex justify-center">
                                <button className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold shadow-lg">
                                    Edit Profile
                                </button>
                            </div>

                        </>
                    ) : (
                        <p className="text-gray-300 text-center animate-pulse">Loading profile...</p>
                    )}
                </div>
            </div>

        </>
    )
}
