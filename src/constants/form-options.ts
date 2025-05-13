
import { CheckboxOption, SelectOption } from "@/types";

export const histologicTypeOptions: CheckboxOption[] = [
  { value: "Seröz borderline tümör", label: "Seröz borderline tümör" },
  { value: "Seröz borderline tümör, mikropapiller / kribriform varyant", label: "Seröz borderline tümör, mikropapiller / kribriform varyant" },
  { value: "Mikroinvaziv seröz borderline tümör", label: "Mikroinvaziv seröz borderline tümör" },
  { value: "Mikroinvaziv düşük dereceli seröz karsinom", label: "Mikroinvaziv düşük dereceli seröz karsinom" },
  { value: "Düşük dereceli seröz karsinom", label: "Düşük dereceli seröz karsinom" },
  { value: "Yüksek dereceli seröz karsinom", label: "Yüksek dereceli seröz karsinom" },
  { value: "Müsinöz borderline tümör", label: "Müsinöz borderline tümör" },
  { value: "İntraepitelyal karsinomlu müsinöz borderline tümör", label: "İntraepitelyal karsinomlu müsinöz borderline tümör" },
  { value: "Mikroinvaziv müsinöz borderline tümör", label: "Mikroinvaziv müsinöz borderline tümör" },
  { value: "Müsinöz adenokarsinom", label: "Müsinöz adenokarsinom" },
  { value: "Endometrioid borderline tümör", label: "Endometrioid borderline tümör" },
  { value: "Endometrioid karsinom", label: "Endometrioid karsinom" },
  { value: "Endometrioid karsinom, seromüsinöz tip", label: "Endometrioid karsinom, seromüsinöz tip" },
  { value: "Seromüsinöz borderline tümör", label: "Seromüsinöz borderline tümör" },
  { value: "Berrak hücreli borderline tümör", label: "Berrak hücreli borderline tümör" },
  { value: "Berrak hücreli karsinom", label: "Berrak hücreli karsinom" },
  { value: "Borderline Brenner tümörü", label: "Borderline Brenner tümörü" },
  { value: "Malign Brenner tümörü", label: "Malign Brenner tümörü" },
  { value: "Mezonefrik benzeri adenokarsinom", label: "Mezonefrik benzeri adenokarsinom" },
  { value: "Küçük hücreli karsinom, hiperkalsemik tip", label: "Küçük hücreli karsinom, hiperkalsemik tip" },
  { value: "Dediferansiye karsinom", label: "Dediferansiye karsinom" },
  { value: "Diferansiye olmayan karsinom, NOS", label: "Diferansiye olmayan karsinom, NOS" },
  { value: "Karsinosarkom (malign mikst Müllerian tümör)", label: "Karsinosarkom (malign mikst Müllerian tümör)" },
  { value: "Karsinom, alt tipi belirlenemeyen", label: "Karsinom, alt tipi belirlenemeyen" },
  { value: "Mikst epitelyal borderline tümör", label: "Mikst epitelyal borderline tümör" },
  { value: "Mikst karsinom", label: "Mikst karsinom" },
  { value: "Düşük dereceli endometrioid stromal sarkom", label: "Düşük dereceli endometrioid stromal sarkom" },
  { value: "Yüksek dereceli endometrioid stromal sarkom", label: "Yüksek dereceli endometrioid stromal sarkom" },
  { value: "Adenosarkom", label: "Adenosarkom" },
  { value: "Leiomyosarkom", label: "Leiomyosarkom" },
  { value: "Fibrosarkom", label: "Fibrosarkom" },
  { value: "Granüloza hücreli tümör, erişkin tip", label: "Granüloza hücreli tümör, erişkin tip" },
  { value: "Granüloza hücreli tümör, jüvenil tip", label: "Granüloza hücreli tümör, jüvenil tip" },
  { value: "Steroid hücreli tümör, NOS", label: "Steroid hücreli tümör, NOS" },
  { value: "Steroid hücreli tümör, malign", label: "Steroid hücreli tümör, malign" },
  { value: "Sertoli-Leydig hücreli tümör", label: "Sertoli-Leydig hücreli tümör" },
  { value: "Diğer seks kord-stromal tümör", label: "Diğer seks kord-stromal tümör" },
  { value: "İmmatür teratom", label: "İmmatür teratom" },
  { value: "Malign transformasyon gösteren teratom", label: "Malign transformasyon gösteren teratom" },
  { value: "Malign struma ovarii", label: "Malign struma ovarii" },
  { value: "Disgerminoma", label: "Disgerminoma" },
  { value: "Yolk sak tümörü", label: "Yolk sak tümörü" },
  { value: "Embriyonal karsinom", label: "Embriyonal karsinom" },
  { value: "Gonadoblastom", label: "Gonadoblastom" },
  { value: "Koryokarsinom, non-gestasyonel tip", label: "Koryokarsinom, non-gestasyonel tip" },
  { value: "Mikst malign germ hücreli tümör", label: "Mikst malign germ hücreli tümör" },
  { value: "Gastrointestinal stromal tümör", label: "Gastrointestinal stromal tümör" },
  { value: "Soliter fibröz tümör, malign", label: "Soliter fibröz tümör, malign" },
  { value: "Desmoplastik küçük yuvarlak hücreli tümör", label: "Desmoplastik küçük yuvarlak hücreli tümör" },
  { value: "Diğer", label: "Diğer" }
];

export const histologicGradeWHOOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "G1: İyi diferansiye", label: "G1: İyi diferansiye" },
  { value: "G2: Orta diferansiye", label: "G2: Orta diferansiye" },
  { value: "G3: Az diferansiye", label: "G3: Az diferansiye" },
  { value: "GX: Değerlendirilemiyor", label: "GX: Değerlendirilemiyor" }
];

export const figoGradeOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "FIGO Derece 1 (%5 veya daha az skuamöz olmayan solid büyüme)", label: "FIGO Derece 1 (%5 veya daha az skuamöz olmayan solid büyüme)" },
  { value: "FIGO Derece 2 (%6 - %50 skuamöz olmayan solid büyüme)", label: "FIGO Derece 2 (%6 - %50 skuamöz olmayan solid büyüme)" },
  { value: "FIGO Derece 3 (%50'den fazla skuamöz olmayan solid büyüme)", label: "FIGO Derece 3 (%50'den fazla skuamöz olmayan solid büyüme)" }
];

export const silverbergGradeOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Silverberg Derece 1 (puan 3-5)", label: "Silverberg Derece 1 (puan 3-5)" },
  { value: "Silverberg Derece 2 (puan 6-7)", label: "Silverberg Derece 2 (puan 6-7)" },
  { value: "Silverberg Derece 3 (puan 8-9)", label: "Silverberg Derece 3 (puan 8-9)" }
];

export const growthPatternGradeOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Düşük derece, büyüme paterni-bazlı (konfluent / ekspansif büyüme veya %10 veya daha az infiltratif büyüme)", label: "Düşük derece, büyüme paterni-bazlı (konfluent / ekspansif büyüme veya %10 veya daha az infiltratif büyüme)" },
  { value: "Yüksek derece, büyüme paterni-bazlı (tümörün %10'undan fazlasında infiltratif büyüme)", label: "Yüksek derece, büyüme paterni-bazlı (tümörün %10'undan fazlasında infiltratif büyüme)" },
  { value: "Diğer büyüme paterni bazlı derecelendirme", label: "Diğer büyüme paterni bazlı derecelendirme" }
];

export const twoTierGradeOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Düşük derece", label: "Düşük derece" },
  { value: "Yüksek derece", label: "Yüksek derece" }
];

export const threeTierGradeOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Derece 1 (düşük derece)", label: "Derece 1 (düşük derece)" },
  { value: "Derece 2 (yüksek derece)", label: "Derece 2 (yüksek derece)" },
  { value: "Derece 3 (yüksek derece)", label: "Derece 3 (yüksek derece)" }
];

export const invasionOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Saptanmadı", label: "Saptanmadı" },
  { value: "Mevcut", label: "Mevcut" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" }
];

export const p53IHCOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Normal (wild type)", label: "Normal (wild type)" },
  { value: "Anormal (mutant)", label: "Anormal (mutant)" },
  { value: "Anormal, Aşırı ekspresyon (>%90 güçlü, diffüz bazilar nükleer ekspresyon)", label: "Anormal, Aşırı ekspresyon (>%90 güçlü, diffüz bazilar nükleer ekspresyon)" },
  { value: "Anormal, Null (nükleer veya sitoplazmik ekspresyon yokluğu)", label: "Anormal, Null (nükleer veya sitoplazmik ekspresyon yokluğu)" },
  { value: "Anormal, Sadece sitoplazmik (nükleer ekspresyon yokluğu)", label: "Anormal, Sadece sitoplazmik (nükleer ekspresyon yokluğu)" },
  { value: "Subklonal anormal (mutant)", label: "Subklonal anormal (mutant)" }
];

export const implantsOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Uygulanamaz", label: "Uygulanamaz" },
  { value: "Örneklenmedi", label: "Örneklenmedi" },
  { value: "Saptanmadı", label: "Saptanmadı" },
  { value: "Mevcut, lokalizasyon:", label: "Mevcut, lokalizasyon:" },
  { value: "Belirsiz", label: "Belirsiz" }
];

export const largestExtrapelvicFocusOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Mikroskopik", label: "Mikroskopik" },
  { value: "Makroskopik (≤ 2 cm)", label: "Makroskopik (≤ 2 cm)" },
  { value: "Makroskopik (> 2 cm)", label: "Makroskopik (> 2 cm)" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" }
];

export const peritonealAsciticOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Gönderilmedi/bilinmiyor", label: "Gönderilmedi/bilinmiyor" },
  { value: "Malign hücre saptanmadı", label: "Malign hücre saptanmadı" },
  { value: "Atipik", label: "Atipik" },
  { value: "Atipik, borderline tümör hücreleri", label: "Atipik, borderline tümör hücreleri" },
  { value: "Atipik, borderline tümör hücreleri değil", label: "Atipik, borderline tümör hücreleri değil" },
  { value: "Şüpheli", label: "Şüpheli" },
  { value: "Malign hücreler mevcut", label: "Malign hücreler mevcut" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" },
  { value: "Sonuçlar bekleniyor", label: "Sonuçlar bekleniyor" }
];

export const treatmentEffectOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Bilinen preoperatif tedavi yok", label: "Bilinen preoperatif tedavi yok" },
  { value: "CRS1 (belirgin yanıt yok veya minimal yanıt)", label: "CRS1 (belirgin yanıt yok veya minimal yanıt)" },
  { value: "CRS2 (orta derecede yanıt)", label: "CRS2 (orta derecede yanıt)" },
  { value: "CRS3 (belirgin yanıt, rezidü kanser yok veya minimal)", label: "CRS3 (belirgin yanıt, rezidü kanser yok veya minimal)" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" }
];

export const otherTissueInvolvementOptions: CheckboxOption[] = [
  { value: "Uygulanamaz", label: "Uygulanamaz" },
  { value: "Saptanmadı", label: "Saptanmadı" },
  { value: "Sağ over", label: "Sağ over" },
  { value: "Sol over", label: "Sol over" },
  { value: "Over (taraf belirtilmemiş)", label: "Over (taraf belirtilmemiş)" },
  { value: "Sağ fallop tüpü", label: "Sağ fallop tüpü" },
  { value: "Sol fallop tüpü", label: "Sol fallop tüpü" },
  { value: "Fallop tüpü (taraf belirtilmemiş)", label: "Fallop tüpü (taraf belirtilmemiş)" },
  { value: "Vajina", label: "Vajina" },
  { value: "Sağ parametrium", label: "Sağ parametrium" },
  { value: "Sol parametrium", label: "Sol parametrium" },
  { value: "Parametrium (taraf belirtilmemiş)", label: "Parametrium (taraf belirtilmemiş)" },
  { value: "Pelvik duvar", label: "Pelvik duvar" },
  { value: "Mesane duvarı", label: "Mesane duvarı" },
  { value: "Mesane mukozası", label: "Mesane mukozası" },
  { value: "Rektal duvar", label: "Rektal duvar" },
  { value: "Bağırsak mukozası", label: "Bağırsak mukozası" },
  { value: "Omentum", label: "Omentum" },
  { value: "Diğer organlar/dokular", label: "Diğer organlar/dokular" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" }
];

export const marginOptions: SelectOption[] = [
  { value: "", label: "Seçiniz" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" },
  { value: "İnvaziv karsinom içermiyor", label: "İnvaziv karsinom içermiyor" },
  { value: "Karsinom içeriyor", label: "Karsinom içeriyor" }
];

export const distantMetastasisOptions: CheckboxOption[] = [
  { value: "Uygulanamaz", label: "Uygulanamaz" },
  { value: "Saptanmadı", label: "Saptanmadı" },
  { value: "Pozitif sitoloji ile plevral efüzyon", label: "Pozitif sitoloji ile plevral efüzyon" },
  { value: "Karaciğer parankimi", label: "Karaciğer parankimi" },
  { value: "Dalak parankimi", label: "Dalak parankimi" },
  { value: "Ekstra-abdominal organlar", label: "Ekstra-abdominal organlar" },
  { value: "İnguinal veya retroperitoneal lenf nodları ve abdominal kavite dışındaki lenf nodları", label: "İnguinal veya retroperitoneal lenf nodları ve abdominal kavite dışındaki lenf nodları" },
  { value: "Bağırsağın transmural tutulumu", label: "Bağırsağın transmural tutulumu" },
  { value: "Diğer", label: "Diğer" },
  { value: "Değerlendirilemiyor", label: "Değerlendirilemiyor" }
];

export const additionalFindingsOptions: CheckboxOption[] = [
  { value: "Seröz tübal intraepitelyal karsinom (STIC)", label: "Seröz tübal intraepitelyal karsinom (STIC)" },
  { value: "Endometriozis", label: "Endometriozis" },
  { value: "Endosalpingiozis", label: "Endosalpingiozis" }
];

export const figoStageInfo = `
I: Tümör over veya fallop tüpü/tüplerine sınırlı
IA: Tümör bir overe sınırlı (kapsül intakt) veya fallop tüpü; over veya fallop tüpü yüzeyinde tümör yok; asit veya peritoneal yıkamalarda malign hücre yok
IB: Tümör her iki overe sınırlı (kapsüller intakt) veya fallop tüpleri; over veya fallop tüpü yüzeyinde tümör yok; asit veya peritoneal yıkamalarda malign hücre yok
IC: Tümör bir veya her iki overe veya fallop tüplerine sınırlı, aşağıdakilerden herhangi biri ile:
IC1: Cerrahi spill
IC2: Ameliyat öncesi kapsül rüptüre olmuş veya over veya fallop tüpü yüzeyinde tümör
IC3: Asit veya peritoneal yıkamalarda malign hücreler
IC: Tümör bir veya her iki overe veya fallop tüplerine sınırlı, başka şekilde belirtilmemiş

II: Tümör bir veya her iki over veya fallop tüplerini pelvik yayılım ile (pelvik brim altında) içerir veya peritoneal kanser
IIA: Uterus ve/veya fallop tüpleri ve/veya overe yayılım ve/veya implantlar
IIB: Diğer pelvik intraperitoneal dokulara yayılım

III: Tümör bir veya her iki over veya fallop tüplerini içerir, veya peritoneal kanser, sitolojik veya histolojik olarak doğrulanmış pelvis dışındaki peritona yayılım ve/veya retroperitoneal lenf nodlarına metastaz
IIIA1: Sadece pozitif retroperitoneal lenf nodları (sitolojik veya histolojik olarak kanıtlanmış)
IIIA1(i): Metastaz en büyük boyutta 10 mm'ye kadar
IIIA1(ii): Metastaz en büyük boyutta 10 mm'den fazla
IIIA2: Pozitif retroperitoneal lenf nodları olsun veya olmasın mikroskopik ekstrapelvik (pelvik brim üzerinde) peritoneal tutulum
IIIB: Retroperitoneal lenf nodlarına metastaz olsun veya olmasın, pelvis dışında en büyük boyutu 2 cm'ye kadar olan makroskopik peritoneal metastazlar
IIIC: Retroperitoneal lenf nodlarına metastaz olsun veya olmasın, pelvis dışında en büyük boyutu 2 cm'den fazla olan makroskopik peritoneal metastaz (karaciğer ve dalak kapsülüne tümör yayılımını içerir, ancak herhangi bir organın parankimal tutulumu olmadan)

IV: Peritoneal metastazlar dışındaki uzak metastaz
IVA: Pozitif sitoloji ile plevral efüzyon
IVB: Parankimal metastazlar ve ekstra-abdominal organlara metastazlar (inguinal lenf nodları ve abdominal kavite dışındaki lenf nodları dahil)
`;
