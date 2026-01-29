import AboutHeader from '@/components/about/about-header';
import { Certification } from '@/types/config';
import { LuAward, LuCalendar, LuBuilding2, LuBarcode } from 'react-icons/lu';

interface CertificationsProps {
  certifications: Certification[];
}

function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  // Group certifications by category
  const certByCategory = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  return (
    <section id="certifications">
      <AboutHeader text="$ ls -al Certifications" />
      <div className="mt-[30px] space-y-[20px]">
        {Object.entries(certByCategory).map(([category, certs]) => (
          <div key={category}>
            <h3 className="text-orange-yellow-crayola font-bold text-lg mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-[15px]">
              {certs.map((cert) => (
                <div
                  key={cert.certificateId}
                  className="relative rounded-xl shadow-shadow-2 bg-gradient-onyx p-4 border border-white-2/10 hover:border-orange-yellow-crayola/30 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="text-white-2 font-bold text-base leading-tight">
                          {cert.title}
                        </h4>
                      </div>
                      <LuAward className="text-orange-yellow-crayola flex-shrink-0 mt-1" size={20} />
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 text-light-gray">
                        <LuBuilding2 size={16} className="text-orange-yellow-crayola" />
                        <span>{cert.issuer}</span>
                      </div>

                      <div className="flex items-center gap-2 text-light-gray">
                        <LuCalendar size={16} className="text-orange-yellow-crayola" />
                        <span>{cert.completionDate}</span>
                      </div>

                      <div className="flex items-center gap-2 text-light-gray">
                        <LuBarcode size={16} className="text-orange-yellow-crayola" />
                        <code className="bg-black/30 px-2 py-1 rounded text-xs font-mono">
                          {cert.certificateId}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
