
import React from "react";
import { FormData } from "@/types";

interface ReportPreviewProps {
  formData: FormData;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ formData }) => {
  // Function to calculate TNM stage based on form data
  const calculateTNM = (): string => {
    // This is a simplified implementation - would need to be expanded based on actual staging rules
    let tStage = "TX";
    let nStage = "NX";
    let mStage = "M0";
    
    // T stage calculation based on involvement
    if (formData.otherTissueInvolvement.includes("Saptanmadı")) {
      tStage = "T1";
    } else if ([
      "Sağ over", "Sol over", "Over (taraf belirtilmemiş)",
      "Sağ fallop tüpü", "Sol fallop tüpü", "Fallop tüpü (taraf belirtilmemiş)"
    ].some(item => formData.otherTissueInvolvement.includes(item))) {
      tStage = "T2";
    } else if (formData.otherTissueInvolvement.some(item => 
      ["Pelvik duvar", "Mesane duvarı", "Rektal duvar", "Omentum"].includes(item))) {
      tStage = "T3";
    }
    
    // N stage calculation
    if (parseInt(formData.lymphNodesMetastasisLarge || "0") > 0 || 
        parseInt(formData.lymphNodesMetastasisSmall || "0") > 0) {
      nStage = "N1";
    } else if (parseInt(formData.lymphNodesExamined || "0") > 0) {
      nStage = "N0";
    }
    
    // M stage calculation
    if (formData.distantMetastasis.length > 0 && 
        !formData.distantMetastasis.includes("Saptanmadı") && 
        !formData.distantMetastasis.includes("Uygulanamaz")) {
      mStage = "M1";
    }
    
    return `${tStage}${nStage}${mStage}`;
  };

  const tnmStage = calculateTNM();

  return (
    <div className="report-content">
      <h2 className="text-xl font-bold mb-4 text-primary">Patoloji Raporu</h2>
      
      {formData.microscopicDescriptions && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Mikroskopik İncelemeler:</h3>
          <p className="text-gray-700">{formData.microscopicDescriptions}</p>
        </div>
      )}

      {formData.histologicType.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Histolojik Tip:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {formData.histologicType.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      )}

      {(formData.histologicGradeWHO || formData.figoGrade || formData.silverbergGrade || 
        formData.growthPatternGrade || formData.twoTierGrade || formData.threeTierGrade) && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Histolojik Derece:</h3>
          {formData.histologicGradeWHO && <p className="text-gray-700"><span className="font-medium">WHO Derecesi:</span> {formData.histologicGradeWHO}</p>}
          {formData.figoGrade && <p className="text-gray-700"><span className="font-medium">FIGO Derecesi:</span> {formData.figoGrade}</p>}
          {formData.silverbergGrade && <p className="text-gray-700"><span className="font-medium">Silverberg Derecesi:</span> {formData.silverbergGrade}</p>}
          {formData.growthPatternGrade && <p className="text-gray-700"><span className="font-medium">Büyüme Paterni Derecesi:</span> {formData.growthPatternGrade}</p>}
          {formData.twoTierGrade && <p className="text-gray-700"><span className="font-medium">İki-Kademeli Derece:</span> {formData.twoTierGrade}</p>}
          {formData.threeTierGrade && <p className="text-gray-700"><span className="font-medium">Üç-Kademeli Derece:</span> {formData.threeTierGrade}</p>}
        </div>
      )}

      {(formData.lymphaticVascularInvasion || formData.perineuralInvasion) && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">İnvazyon Durumu:</h3>
          {formData.lymphaticVascularInvasion && <p className="text-gray-700"><span className="font-medium">Lenfatik/Vasküler İnvazyon:</span> {formData.lymphaticVascularInvasion}</p>}
          {formData.perineuralInvasion && <p className="text-gray-700"><span className="font-medium">Perinöral İnvazyon:</span> {formData.perineuralInvasion}</p>}
        </div>
      )}

      {formData.p53IHC && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">İmmünohistokimya:</h3>
          <p className="text-gray-700"><span className="font-medium">p53 IHC:</span> {formData.p53IHC}</p>
        </div>
      )}

      {(formData.implants || formData.largestExtrapelvicFocus || formData.peritonealAscitic) && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Peritoneal Durum:</h3>
          {formData.implants && <p className="text-gray-700"><span className="font-medium">İmplantlar:</span> {formData.implants}</p>}
          {formData.largestExtrapelvicFocus && <p className="text-gray-700"><span className="font-medium">En Büyük Ekstrapelvik Odak:</span> {formData.largestExtrapelvicFocus}</p>}
          {formData.peritonealAscitic && <p className="text-gray-700"><span className="font-medium">Peritoneal/Asitik Sıvı:</span> {formData.peritonealAscitic}</p>}
        </div>
      )}

      {formData.treatmentEffect && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Tedavi Etkisi:</h3>
          <p className="text-gray-700">{formData.treatmentEffect}</p>
        </div>
      )}

      {formData.otherTissueInvolvement.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Diğer Doku/Organ Tutulumu:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {formData.otherTissueInvolvement.map((tissue, index) => (
              <li key={index}>{tissue}</li>
            ))}
          </ul>
        </div>
      )}

      {(formData.ectocervicalVaginalMargin || formData.parametrialMargin) && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Cerrahi Sınırlar:</h3>
          {formData.ectocervicalVaginalMargin && <p className="text-gray-700"><span className="font-medium">Ektoservikal/Vajinal Cuff Sınırı:</span> {formData.ectocervicalVaginalMargin}</p>}
          {formData.parametrialMargin && <p className="text-gray-700"><span className="font-medium">Parametrial/Paraservikal Sınır:</span> {formData.parametrialMargin}</p>}
        </div>
      )}

      {(formData.lymphNodesExamined || formData.lymphNodesMetastasisLarge || 
        formData.lymphNodesMetastasisSmall || formData.lymphNodesITC || 
        formData.largestMetastaticDeposit || formData.largestLymphNode || 
        formData.extranodal) && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Bölgesel Lenf Nodları:</h3>
          {formData.lymphNodesExamined && <p className="text-gray-700"><span className="font-medium">İncelenen Lenf Nodu Sayısı:</span> {formData.lymphNodesExamined}</p>}
          {formData.lymphNodesMetastasisLarge && <p className="text-gray-700"><span className="font-medium">Metastaz {">"} 10 mm olan Lenf Nodu Sayısı:</span> {formData.lymphNodesMetastasisLarge}</p>}
          {formData.lymphNodesMetastasisSmall && <p className="text-gray-700"><span className="font-medium">Metastaz ≤ 10 mm olan Lenf Nodu Sayısı (ITC hariç):</span> {formData.lymphNodesMetastasisSmall}</p>}
          {formData.lymphNodesITC && <p className="text-gray-700"><span className="font-medium">İzole Tümör Hücresi (≤ 0.2 mm) içeren Lenf Nodu Sayısı:</span> {formData.lymphNodesITC}</p>}
          {formData.largestMetastaticDeposit && <p className="text-gray-700"><span className="font-medium">En Büyük Metastatik Depozit Boyutu (mm):</span> {formData.largestMetastaticDeposit}</p>}
          {formData.largestLymphNode && <p className="text-gray-700"><span className="font-medium">En Büyük Tutulan Lenf Nodu Boyutu (mm):</span> {formData.largestLymphNode}</p>}
          {formData.extranodal && <p className="text-gray-700"><span className="font-medium">Ekstranodal Yayılım:</span> {formData.extranodal}</p>}
        </div>
      )}

      {formData.distantMetastasis.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Uzak Metastaz:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {formData.distantMetastasis.map((metastasis, index) => (
              <li key={index}>{metastasis}</li>
            ))}
          </ul>
        </div>
      )}

      {formData.additionalFindings.length > 0 || formData.additionalFindingsOther && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Ek Patolojik Bulgular:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {formData.additionalFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
            {formData.additionalFindingsOther && <li>{formData.additionalFindingsOther}</li>}
          </ul>
        </div>
      )}

      {formData.additionalNotes && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Ek Notlar:</h3>
          <p className="text-gray-700">{formData.additionalNotes}</p>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="font-semibold mb-2">Patolojik Evre (pTNM, AJCC 8. Edisyon):</h3>
        <p className="text-lg font-bold text-primary">{tnmStage}</p>
      </div>
    </div>
  );
};

export default ReportPreview;
