
export interface FormData {
  microscopicDescriptions: string;
  histologicType: string[];
  histologicGradeWHO: string;
  figoGrade: string;
  silverbergGrade: string;
  growthPatternGrade: string;
  twoTierGrade: string;
  threeTierGrade: string;
  lymphaticVascularInvasion: string;
  perineuralInvasion: string;
  p53IHC: string;
  implants: string;
  largestExtrapelvicFocus: string;
  peritonealAscitic: string;
  treatmentEffect: string;
  otherTissueInvolvement: string[];
  ectocervicalVaginalMargin: string;
  parametrialMargin: string;
  lymphNodesExamined: string;
  lymphNodesMetastasisLarge: string;
  lymphNodesMetastasisSmall: string;
  lymphNodesITC: string;
  largestMetastaticDeposit: string;
  largestLymphNode: string;
  extranodal: string;
  distantMetastasis: string[];
  additionalFindings: string[];
  additionalFindingsOther: string;
  additionalNotes: string;
}

export interface CheckboxOption {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
