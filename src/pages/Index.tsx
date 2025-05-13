
import React, { useState } from "react";
import { FormData } from "@/types";
import PathologyForm from "@/components/PathologyForm";
import ReportPreview from "@/components/ReportPreview";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const initialFormData: FormData = {
  microscopicDescriptions: "",
  histologicType: [],
  histologicGradeWHO: "",
  figoGrade: "",
  silverbergGrade: "",
  growthPatternGrade: "",
  twoTierGrade: "",
  threeTierGrade: "",
  lymphaticVascularInvasion: "",
  perineuralInvasion: "",
  p53IHC: "",
  implants: "",
  largestExtrapelvicFocus: "",
  peritonealAscitic: "",
  treatmentEffect: "",
  otherTissueInvolvement: [],
  ectocervicalVaginalMargin: "",
  parametrialMargin: "",
  lymphNodesExamined: "",
  lymphNodesMetastasisLarge: "",
  lymphNodesMetastasisSmall: "",
  lymphNodesITC: "",
  largestMetastaticDeposit: "",
  largestLymphNode: "",
  extranodal: "",
  distantMetastasis: [],
  additionalFindings: [],
  additionalFindingsOther: "",
  additionalNotes: ""
};

const Index = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showReport, setShowReport] = useState(false);
  const isMobile = useIsMobile();

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Over, Fallop Tüpü ve Periton Kanserleri Patoloji Raporu</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Section */}
          <div className={`${isMobile && showReport ? 'hidden' : ''} w-full ${!isMobile ? 'lg:w-1/2' : ''}`}>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Patoloji Veri Giriş Formu
              </h2>
              <p className="text-gray-600 mb-4">
                Lütfen aşağıdaki alanları doldurunuz. Doldurduğunuz bilgiler otomatik olarak rapor formatına dönüştürülecektir.
              </p>
            </div>
            <PathologyForm 
              formData={formData} 
              onUpdateFormData={handleUpdateFormData} 
            />
          </div>

          {/* Report Preview Section */}
          <div className={`${isMobile && !showReport ? 'hidden' : ''} w-full ${!isMobile ? 'lg:w-1/2 lg:sticky lg:top-4 lg:self-start' : ''}`}>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-primary">
                  Oluşturulan Rapor Önizlemesi
                </h2>
                {isMobile && (
                  <Button 
                    onClick={() => setShowReport(false)} 
                    variant="outline"
                    size="sm"
                  >
                    Forma Dön
                  </Button>
                )}
              </div>
            </div>
            <ReportPreview formData={formData} />
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && !showReport && (
            <div className="fixed bottom-4 right-4">
              <Button 
                onClick={() => setShowReport(true)} 
                className="rounded-full h-14 w-14 shadow-lg"
              >
                Rapor
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">© 2024 Patoloji Rapor Sistemi</p>
          <p>
            <a href="#" className="text-primary hover:underline">Hakkında</a> · 
            <a href="#" className="text-primary hover:underline ml-2">Gizlilik Politikası</a> · 
            <a href="#" className="text-primary hover:underline ml-2">Yardım</a>
          </p>
          <p className="mt-2">
            CAP kanser protokol şablonlarını temel alan Türkçe rapor sistemi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
