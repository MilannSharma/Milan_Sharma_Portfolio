'use client';

import { IoCloudDownloadOutline } from "react-icons/io5";
import IconBox from "../icon-box";

function DownloadCV() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-resume');
      const blob = await response.blob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Milan_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      window.open('/doc/Milan-Sharma.pdf', '_blank');
    }
  };

  return (
    <section className="timeline">
      <div className="title-wrapper">
        <IconBox icon={IoCloudDownloadOutline} />
        <button
          id="download-v56-cv"
          onClick={handleDownload}
          className="text-orange-yellow-crayola underline font-bold flex items-center gap-4 hover:text-opacity-70 bg-transparent border-none cursor-pointer">
          Download Milan Sharma full Resume
        </button>
      </div>
    </section>
  );
}

export default DownloadCV;
