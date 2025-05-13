
import React, { useState } from "react";
import { FormData } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import CheckboxGroup from "./form/CheckboxGroup";
import SelectField from "./form/SelectField";
import {
  histologicTypeOptions,
  histologicGradeWHOOptions,
  figoGradeOptions,
  silverbergGradeOptions,
  growthPatternGradeOptions,
  twoTierGradeOptions,
  threeTierGradeOptions,
  invasionOptions,
  p53IHCOptions,
  implantsOptions,
  largestExtrapelvicFocusOptions,
  peritonealAsciticOptions,
  treatmentEffectOptions,
  otherTissueInvolvementOptions,
  marginOptions,
  distantMetastasisOptions,
  additionalFindingsOptions,
  figoStageInfo
} from "@/constants/form-options";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PathologyFormProps {
  formData: FormData;
  onUpdateFormData: (data: Partial<FormData>) => void;
}

const PathologyForm: React.FC<PathologyFormProps> = ({ formData, onUpdateFormData }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleCopyReport = () => {
    // Create report text from formData
    let reportText = "OVER, FALLOP TÜPÜ VE PERİTON KANSERLERİ PATOLOJİ RAPORU\n\n";
    
    if (formData.microscopicDescriptions) {
      reportText += "MİKROSKOPİK İNCELEMELER:\n";
      reportText += formData.microscopicDescriptions + "\n\n";
    }
    
    if (formData.histologicType.length > 0) {
      reportText += "HİSTOLOJİK TİP:\n";
      formData.histologicType.forEach(type => {
        reportText += "- " + type + "\n";
      });
      reportText += "\n";
    }

    // Add other form sections to the report text...
    
    // Copy to clipboard
    navigator.clipboard.writeText(reportText)
      .then(() => {
        toast.success("Rapor panoya kopyalandı!");
      })
      .catch(() => {
        toast.error("Kopyalama sırasında bir hata oluştu!");
      });
  };

  return (
    <div className="space-y-6 pb-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Mikroskopik İncelemeler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tümör histolojisi ve immünohistokimyasal çalışmalar:</label>
              <Textarea 
                value={formData.microscopicDescriptions}
                onChange={(e) => onUpdateFormData({ microscopicDescriptions: e.target.value })}
                className="min-h-[100px]"
                placeholder="Tümör histolojisi ve immünohistokimyasal çalışmaları buraya yazınız..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Histolojik tip:</label>
              <CheckboxGroup
                options={histologicTypeOptions}
                selectedValues={formData.histologicType}
                onChange={(values) => onUpdateFormData({ histologicType: values })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Histolojik Derecelendirme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">WHO Histolojik Derece:</label>
              <SelectField
                options={histologicGradeWHOOptions}
                value={formData.histologicGradeWHO}
                onChange={(value) => onUpdateFormData({ histologicGradeWHO: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">FIGO Derece:</label>
              <SelectField
                options={figoGradeOptions}
                value={formData.figoGrade}
                onChange={(value) => onUpdateFormData({ figoGrade: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Silverberg Derece:</label>
              <SelectField
                options={silverbergGradeOptions}
                value={formData.silverbergGrade}
                onChange={(value) => onUpdateFormData({ silverbergGrade: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Büyüme Paterni Derecesi:</label>
              <SelectField
                options={growthPatternGradeOptions}
                value={formData.growthPatternGrade}
                onChange={(value) => onUpdateFormData({ growthPatternGrade: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">2-Kademeli Derece:</label>
              <SelectField
                options={twoTierGradeOptions}
                value={formData.twoTierGrade}
                onChange={(value) => onUpdateFormData({ twoTierGrade: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">3-Kademeli Derece:</label>
              <SelectField
                options={threeTierGradeOptions}
                value={formData.threeTierGrade}
                onChange={(value) => onUpdateFormData({ threeTierGrade: value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">İnvazyon ve Moleküler Belirteçler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Lenfatik/Vasküler İnvazyon:</label>
              <SelectField
                options={invasionOptions}
                value={formData.lymphaticVascularInvasion}
                onChange={(value) => onUpdateFormData({ lymphaticVascularInvasion: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Perinöral İnvazyon:</label>
              <SelectField
                options={invasionOptions}
                value={formData.perineuralInvasion}
                onChange={(value) => onUpdateFormData({ perineuralInvasion: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">p53 IHC:</label>
              <SelectField
                options={p53IHCOptions}
                value={formData.p53IHC}
                onChange={(value) => onUpdateFormData({ p53IHC: value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Peritoneal Durum ve Tedavi Etkisi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">İmplantlar:</label>
              <SelectField
                options={implantsOptions}
                value={formData.implants}
                onChange={(value) => onUpdateFormData({ implants: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">En Büyük Ekstrapelvik Odak:</label>
              <SelectField
                options={largestExtrapelvicFocusOptions}
                value={formData.largestExtrapelvicFocus}
                onChange={(value) => onUpdateFormData({ largestExtrapelvicFocus: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Peritoneal/Asitik Sıvı:</label>
              <SelectField
                options={peritonealAsciticOptions}
                value={formData.peritonealAscitic}
                onChange={(value) => onUpdateFormData({ peritonealAscitic: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tedavi Etkisi (Yüksek dereceli seröz CA için):</label>
              <SelectField
                options={treatmentEffectOptions}
                value={formData.treatmentEffect}
                onChange={(value) => onUpdateFormData({ treatmentEffect: value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Diğer Doku/Organ Tutulumu</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <CheckboxGroup
              options={otherTissueInvolvementOptions}
              selectedValues={formData.otherTissueInvolvement}
              onChange={(values) => onUpdateFormData({ otherTissueInvolvement: values })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Cerrahi Sınırlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ektoservikal/Vajinal Cuff Sınırı:</label>
              <SelectField
                options={marginOptions}
                value={formData.ectocervicalVaginalMargin}
                onChange={(value) => onUpdateFormData({ ectocervicalVaginalMargin: value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Parametrial/Paraservikal Sınır:</label>
              <SelectField
                options={marginOptions}
                value={formData.parametrialMargin}
                onChange={(value) => onUpdateFormData({ parametrialMargin: value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Bölgesel Lenf Nodları</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">İncelenen Lenf Nodu Sayısı:</label>
              <Input
                type="number"
                value={formData.lymphNodesExamined}
                onChange={(e) => onUpdateFormData({ lymphNodesExamined: e.target.value })}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Metastaz > 10 mm olan Lenf Nodu Sayısı:</label>
              <Input
                type="number"
                value={formData.lymphNodesMetastasisLarge}
                onChange={(e) => onUpdateFormData({ lymphNodesMetastasisLarge: e.target.value })}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Metastaz ≤ 10 mm olan Lenf Nodu Sayısı (ITC hariç):</label>
              <Input
                type="number"
                value={formData.lymphNodesMetastasisSmall}
                onChange={(e) => onUpdateFormData({ lymphNodesMetastasisSmall: e.target.value })}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">İzole Tümör Hücresi (≤ 0.2 mm) içeren Lenf Nodu Sayısı:</label>
              <Input
                type="number"
                value={formData.lymphNodesITC}
                onChange={(e) => onUpdateFormData({ lymphNodesITC: e.target.value })}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">En Büyük Metastatik Depozit Boyutu (mm):</label>
              <Input
                type="text"
                value={formData.largestMetastaticDeposit}
                onChange={(e) => onUpdateFormData({ largestMetastaticDeposit: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">En Büyük Tutulan Lenf Nodu Boyutu (mm):</label>
              <Input
                type="text"
                value={formData.largestLymphNode}
                onChange={(e) => onUpdateFormData({ largestLymphNode: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ekstranodal Yayılım:</label>
              <SelectField
                options={invasionOptions}
                value={formData.extranodal}
                onChange={(value) => onUpdateFormData({ extranodal: value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Uzak Metastaz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <CheckboxGroup
              options={distantMetastasisOptions}
              selectedValues={formData.distantMetastasis}
              onChange={(values) => onUpdateFormData({ distantMetastasis: values })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">FIGO Evresi (2021 Kanser Raporu)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md text-sm">
            <pre className="whitespace-pre-wrap font-mono text-xs">
              {figoStageInfo}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Ek Patolojik Bulgular</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <CheckboxGroup
              options={additionalFindingsOptions}
              selectedValues={formData.additionalFindings}
              onChange={(values) => onUpdateFormData({ additionalFindings: values })}
            />
            
            <div>
              <label className="block text-sm font-medium mb-1">Diğer (belirtiniz):</label>
              <Input
                type="text"
                value={formData.additionalFindingsOther}
                onChange={(e) => onUpdateFormData({ additionalFindingsOther: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Ek Notlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Textarea 
              value={formData.additionalNotes}
              onChange={(e) => onUpdateFormData({ additionalNotes: e.target.value })}
              className="min-h-[100px]"
              placeholder="Ek notları buraya ekleyebilirsiniz..."
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button 
          onClick={handleCopyReport} 
          className="bg-primary text-white px-8 py-2"
        >
          Raporu Panoya Kopyala
        </Button>
      </div>
    </div>
  );
};

export default PathologyForm;
