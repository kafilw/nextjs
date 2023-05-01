import { useState } from 'react';
import Link from 'next/link';
import Header from './components/header';
import AdminHeader from './components/adminHeader';

export default function VideoList() {
  const [videos, setVideos] = useState([
    {
      title: 'Thor',
      url: 'https://www.youtube.com/watch?v=JOddp-nlNvQ',
      status: 'active',
    },
    {
      title: 'Extraction 2',
      url: 'https://www.youtube.com/watch?v=mO0OuR26IZM',
      status: 'active',
    },
    {
      title: 'Oppenheimer',
      url: 'https://www.youtube.com/watch?v=bK6ldnjE3Y0',
      status: 'active',
    },
    {
      title: 'FAST X',
      url: 'https://www.youtube.com/watch?v=32RAq6JzY-w',
      status: 'active',
    },
  ]);

  const toggleStatus = (index) => {
    const updatedVideos = [...videos];
    const video = updatedVideos[index];
    video.status = video.status === 'active' ? 'blocked' : 'active';
    setVideos(updatedVideos);
  };

  return (
    <>
      <AdminHeader title="Video List" />
      <div>
        <a href="/adminDashboard" className="text-blue-500 underline">
          Back to Admin Dashboard
        </a>
        <h1 className="text-xl font-bold mt-4 text-center">All Videos</h1>
        <br></br>
        <br></br>
        <table className="w-full mt-4 shadow-xl">
          <thead>
            <tr className="border-b shadow-sm">
              <th className="py-2">Title</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={index} className="border-b shadow-sm">
                <td className="py-2 text-center">
                  <Link href={`/video/${encodeURIComponent(video.url)}`}>
                    <p className="text-blue-500 hover:underline ">{video.title}</p>
                  </Link>
                </td>
                <td className="py-2 text-center">{video.status}</td>
                <td className="py-2 text-center">
                  <button
                    className={`py-1 px-4 border-2 ${
                      video.status === 'active'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-red-500 border-red-500 text-white'
                    }`}
                    onClick={() => toggleStatus(index)}
                  >
                    {video.status === 'active' ? 'Block' : 'Unblock'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}