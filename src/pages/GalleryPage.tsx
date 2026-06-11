import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import SlideShow from "../components/SlideShow"; 
import "./galleryPage.css";
import musicaGerais from "../assets/music/musica-de-fundo.mp3";
import musica90anos from "../assets/music/musica90.mp3";
import musica89anos from "../assets/music/musica89.mp3";
import musica80anos from "../assets/music/musica80.mp3";



// import foto026 from "../assets/fotos/80anos/026.webp";
// import foto028 from "../assets/fotos/80anos/028.webp";
// import foto029 from "../assets/fotos/80anos/029.webp";
// import foto030 from "../assets/fotos/80anos/030.webp";
// import foto031 from "../assets/fotos/80anos/031.webp";
// import foto032 from "../assets/fotos/80anos/032.webp";
// import foto034 from "../assets/fotos/80anos/034.webp";
// import foto035 from "../assets/fotos/80anos/035.webp";
// import foto036 from "../assets/fotos/80anos/036.webp";
// import foto037 from "../assets/fotos/80anos/037.webp";
// import foto038 from "../assets/fotos/80anos/038.webp";
// import foto040 from "../assets/fotos/80anos/040.webp";
// import foto041 from "../assets/fotos/80anos/041.webp";
// import foto042 from "../assets/fotos/80anos/042.webp";
// import foto043 from "../assets/fotos/80anos/043.webp";
// import foto044 from "../assets/fotos/80anos/044.webp";
// import foto045 from "../assets/fotos/80anos/045.webp";
// import foto048 from "../assets/fotos/80anos/048.webp";
// import foto049 from "../assets/fotos/80anos/049.webp";
// import foto050 from "../assets/fotos/80anos/050.webp";
// import foto052 from "../assets/fotos/80anos/052.webp";
// import foto053 from "../assets/fotos/80anos/053.webp";
// import foto055 from "../assets/fotos/80anos/055.webp";
// import foto056 from "../assets/fotos/80anos/056.webp";
// import foto057 from "../assets/fotos/80anos/057.webp";
// import foto058 from "../assets/fotos/80anos/058.webp";


//import das fotos de 90
// import foto90_1 from "../assets/fotos/90anos/0 (112).webp";
// import foto90_2 from "../assets/fotos/90anos/0 (118).webp";
// import foto90_3 from "../assets/fotos/90anos/0 (120).webp";
// import foto90_4 from "../assets/fotos/90anos/0 (145).webp";
// import foto90_5 from "../assets/fotos/90anos/0 (165).webp";
// import foto90_6 from "../assets/fotos/90anos/0 (168).webp";
// import foto90_7 from "../assets/fotos/90anos/0 (184).webp";
// import foto90_8 from "../assets/fotos/90anos/0 (192).webp";
// import foto90_9 from "../assets/fotos/90anos/0 (204).webp";
// import foto90_10 from "../assets/fotos/90anos/0 (210).webp";
// import foto90_11 from "../assets/fotos/90anos/0 (220).webp";
// import foto90_12 from "../assets/fotos/90anos/0 (221).webp";
// import foto90_13 from "../assets/fotos/90anos/0 (224).webp";
// import foto90_14 from "../assets/fotos/90anos/0 (234).webp";
// import foto90_15 from "../assets/fotos/90anos/0 (241).webp";
// import foto90_16 from "../assets/fotos/90anos/0 (243).webp";
// import foto90_17 from "../assets/fotos/90anos/0 (252).webp";
// import foto90_18 from "../assets/fotos/90anos/0 (255).webp";
// import foto90_19 from "../assets/fotos/90anos/0 (260).webp";
// import foto90_20 from "../assets/fotos/90anos/0 (263).webp";
// import foto90_21 from "../assets/fotos/90anos/0 (283).webp";
// import foto90_22 from "../assets/fotos/90anos/0 (289).webp";
// import foto90_23 from "../assets/fotos/90anos/0 (292).webp";
// import foto90_24 from "../assets/fotos/90anos/0 (295).webp";
// import foto90_25 from "../assets/fotos/90anos/0 (296).webp";
// import foto90_26 from "../assets/fotos/90anos/0 (304).webp";
// import foto90_27 from "../assets/fotos/90anos/0 (308).webp";
// import foto90_28 from "../assets/fotos/90anos/0 (315).webp";
// import foto90_29 from "../assets/fotos/90anos/0 (321).webp";
// import foto90_30 from "../assets/fotos/90anos/0 (325).webp";
// import foto90_31 from "../assets/fotos/90anos/0 (332).webp";
// import foto90_32 from "../assets/fotos/90anos/0 (338).webp";
// import foto90_33 from "../assets/fotos/90anos/0 (340).webp";
// import foto90_34 from "../assets/fotos/90anos/0 (354).webp";
// import foto90_35 from "../assets/fotos/90anos/0 (360).webp";
// import foto90_36 from "../assets/fotos/90anos/0 (369).webp";
// import foto90_37 from "../assets/fotos/90anos/0 (387).webp";
// import foto90_38 from "../assets/fotos/90anos/0 (400).webp";
// import foto90_39 from "../assets/fotos/90anos/0 (404).webp";
// import foto90_40 from "../assets/fotos/90anos/0 (407).webp";
// import foto90_41 from "../assets/fotos/90anos/0 (412).webp";
// import foto90_42 from "../assets/fotos/90anos/0 (414).webp";
// import foto90_43 from "../assets/fotos/90anos/0 (417).webp";
// import foto90_44 from "../assets/fotos/90anos/0 (419).webp";
// import foto90_45 from "../assets/fotos/90anos/0 (422).webp";
// import foto90_46 from "../assets/fotos/90anos/0 (426).webp";
// import foto90_47 from "../assets/fotos/90anos/0 (433).webp";
// import foto90_48 from "../assets/fotos/90anos/0 (436).webp";
// import foto90_49 from "../assets/fotos/90anos/0 (445).webp";
// import foto90_50 from "../assets/fotos/90anos/0 (447).webp";
// import foto90_51 from "../assets/fotos/90anos/0 (449).webp";
// import foto90_52 from "../assets/fotos/90anos/0 (452).webp";
// import foto90_53 from "../assets/fotos/90anos/0 (458).webp";
// import foto90_54 from "../assets/fotos/90anos/0 (465).webp";
// import foto90_55 from "../assets/fotos/90anos/0 (470).webp";
// import foto90_56 from "../assets/fotos/90anos/0 (488).webp";
// import foto90_57 from "../assets/fotos/90anos/0 (506).webp";
// import foto90_58 from "../assets/fotos/90anos/0 (507).webp";
// import foto90_59 from "../assets/fotos/90anos/0 (515).webp";
// import foto90_60 from "../assets/fotos/90anos/0 (520).webp";
// import foto90_61 from "../assets/fotos/90anos/0 (87).webp";


//fotos 89 anos:

// import foto89_1 from "../assets/fotos/89anos/0 (138).webp";
// import foto89_2 from "../assets/fotos/89anos/0 (153).webp";
// import foto89_3 from "../assets/fotos/89anos/0 (163).webp";
// import foto89_4 from "../assets/fotos/89anos/0 (171).webp";
// import foto89_5 from "../assets/fotos/89anos/0 (187).webp";
// import foto89_6 from "../assets/fotos/89anos/0 (210) (1).webp";
// import foto89_7 from "../assets/fotos/89anos/0 (231).webp";
// import foto89_8 from "../assets/fotos/89anos/0 (252).webp";
// import foto89_9 from "../assets/fotos/89anos/0 (254).webp";
// import foto89_10 from "../assets/fotos/89anos/0 (260) (1).webp";
// import foto89_11 from "../assets/fotos/89anos/0 (261).webp";
// import foto89_12 from "../assets/fotos/89anos/0 (264).webp";
// import foto89_13 from "../assets/fotos/89anos/0 (268).webp";
// import foto89_14 from "../assets/fotos/89anos/0 (280).webp";
// import foto89_15 from "../assets/fotos/89anos/0 (290).webp";
// import foto89_16 from "../assets/fotos/89anos/0 (312).webp";
// import foto89_17 from "../assets/fotos/89anos/0 (314).webp";
// import foto89_18 from "../assets/fotos/89anos/0 (61).webp";
// import foto89_19 from "../assets/fotos/89anos/0 (64).webp";
// import foto89_20 from "../assets/fotos/89anos/0 (68).webp";
// import foto89_21 from "../assets/fotos/89anos/0 (75).webp";


//fotos gerais

// import geral1 from "../assets/fotos/gerais/foto1.webp";
// import geral2 from "../assets/fotos/gerais/foto2.webp";
// import geral3 from "../assets/fotos/gerais/foto3.webp";
// import geral4 from "../assets/fotos/gerais/foto4.webp";
// import geral5 from "../assets/fotos/gerais/foto5.webp";
// import geral6 from "../assets/fotos/gerais/foto6.webp";
// import geral7 from "../assets/fotos/gerais/foto7.webp";
// import geral8 from "../assets/fotos/gerais/foto8.webp";
// import geral9 from "../assets/fotos/gerais/foto9.webp";
// import geral10 from "../assets/fotos/gerais/foto10.webp";
// import geral11 from "../assets/fotos/gerais/foto11.webp";
// import geral12 from "../assets/fotos/gerais/foto12.webp";
// import geral13 from "../assets/fotos/gerais/foto13.webp";
// import geral14 from "../assets/fotos/gerais/foto14.webp";
// import geral15 from "../assets/fotos/gerais/foto15.webp";
// import geral16 from "../assets/fotos/gerais/foto16.webp";
// import geral17 from "../assets/fotos/gerais/foto17.webp";
// import geral18 from "../assets/fotos/gerais/foto18.webp";
// import geral19 from "../assets/fotos/gerais/foto19.webp";
// import geral20 from "../assets/fotos/gerais/foto20.webp";
// import geral21 from "../assets/fotos/gerais/foto21.webp";
// import geral22 from "../assets/fotos/gerais/foto22.webp";
// import geral23 from "../assets/fotos/gerais/foto23.webp";
// import geral24 from "../assets/fotos/gerais/foto24.webp";
// import geral25 from "../assets/fotos/gerais/foto25.webp";
// import geral26 from "../assets/fotos/gerais/foto26.webp";
// import geral27 from "../assets/fotos/gerais/foto27.webp";
// import geral28 from "../assets/fotos/gerais/foto28.webp";
// import geral29 from "../assets/fotos/gerais/foto29.webp";
// import geral30 from "../assets/fotos/gerais/foto30.webp";
// import geral31 from "../assets/fotos/gerais/foto31.webp";
// import geral32 from "../assets/fotos/gerais/foto32.webp";
// import geral33 from "../assets/fotos/gerais/foto33.webp";
// import geral34 from "../assets/fotos/gerais/foto34.webp";
// import geral35 from "../assets/fotos/gerais/foto35.webp";
// import geral36 from "../assets/fotos/gerais/foto36.webp";
// import geral37 from "../assets/fotos/gerais/foto37.webp";
// import geral38 from "../assets/fotos/gerais/foto38.webp";
// import geral39 from "../assets/fotos/gerais/foto39.webp";
// import geral40 from "../assets/fotos/gerais/foto40.webp";
// import geral41 from "../assets/fotos/gerais/foto41.webp";
// import geral42 from "../assets/fotos/gerais/foto42.webp";
// import geral43 from "../assets/fotos/gerais/foto43.webp";
// import geral44 from "../assets/fotos/gerais/foto44.webp";
// import geral45 from "../assets/fotos/gerais/foto45.webp";
// import geral46 from "../assets/fotos/gerais/foto46.webp";
// import geral47 from "../assets/fotos/gerais/foto47.webp";
// import geral48 from "../assets/fotos/gerais/foto48.webp";
// import geral49 from "../assets/fotos/gerais/foto49.webp";
// import geral50 from "../assets/fotos/gerais/foto50.webp";
// import geral51 from "../assets/fotos/gerais/foto51.webp";
// import geral52 from "../assets/fotos/gerais/foto52.webp";
// import geral53 from "../assets/fotos/gerais/foto53.webp";
// import geral54 from "../assets/fotos/gerais/foto54.webp";
// import geral55 from "../assets/fotos/gerais/foto55.webp";
// import geral56 from "../assets/fotos/gerais/foto56.webp";
// import geral57 from "../assets/fotos/gerais/foto57.webp";
// import geral58 from "../assets/fotos/gerais/foto58.webp";
// import geral59 from "../assets/fotos/gerais/foto59.webp";
// import geral60 from "../assets/fotos/gerais/foto60.webp";
// import geral61 from "../assets/fotos/gerais/foto61.webp";
// import geral62 from "../assets/fotos/gerais/foto62.webp";
// import geral63 from "../assets/fotos/gerais/foto63.webp";
// import geral64 from "../assets/fotos/gerais/foto64.webp";
// import geral65 from "../assets/fotos/gerais/foto65.webp";
// import geral66 from "../assets/fotos/gerais/foto66.webp";
// import geral67 from "../assets/fotos/gerais/foto67.webp";
// import geral68 from "../assets/fotos/gerais/foto68.webp";
// import geral69 from "../assets/fotos/gerais/foto69.webp";
// import geral70 from "../assets/fotos/gerais/foto70.webp";
// import geral71 from "../assets/fotos/gerais/foto71.webp";
// import geral72 from "../assets/fotos/gerais/foto72.webp";
// import geral73 from "../assets/fotos/gerais/foto73.webp";
// import geral74 from "../assets/fotos/gerais/foto74.webp";
// import geral75 from "../assets/fotos/gerais/foto75.webp";
// import geral76 from "../assets/fotos/gerais/foto76.webp";
// import geral78 from "../assets/fotos/gerais/foto78.webp";
// import geral79 from "../assets/fotos/gerais/foto79.webp";
// import geral80 from "../assets/fotos/gerais/foto80.webp";
// import geral81 from "../assets/fotos/gerais/foto81.webp";
// import geral82 from "../assets/fotos/gerais/foto82.webp";
// import geral83 from "../assets/fotos/gerais/foto83.webp";
// import geral84 from "../assets/fotos/gerais/foto84.webp";
// import geral85 from "../assets/fotos/gerais/foto85.webp";
// import geral86 from "../assets/fotos/gerais/foto86.webp";
// import geral87 from "../assets/fotos/gerais/foto87.webp";
// import geral88 from "../assets/fotos/gerais/foto88.webp";
// import geral89 from "../assets/fotos/gerais/foto89.webp";
// import geral90 from "../assets/fotos/gerais/foto90.webp";
// import geral91 from "../assets/fotos/gerais/foto91.webp";
// import geral92 from "../assets/fotos/gerais/foto92.webp";
// import geral93 from "../assets/fotos/gerais/foto93.webp";
// import geral94 from "../assets/fotos/gerais/foto94.webp";
// import geral95 from "../assets/fotos/gerais/foto95.webp";
// import geral96 from "../assets/fotos/gerais/foto96.webp";
// import geral97 from "../assets/fotos/gerais/foto97.webp";
// import geral98 from "../assets/fotos/gerais/foto98.webp";
// import geral99 from "../assets/fotos/gerais/foto99.webp";
// import geral100 from "../assets/fotos/gerais/foto100.webp";
// import geral101 from "../assets/fotos/gerais/foto101.webp";
// import geral102 from "../assets/fotos/gerais/foto102.webp";
// import geral103 from "../assets/fotos/gerais/foto103.webp";
// import geral104 from "../assets/fotos/gerais/foto104.webp";
// import geral105 from "../assets/fotos/gerais/foto105.webp";
// import geral106 from "../assets/fotos/gerais/foto106.webp";
// import geral107 from "../assets/fotos/gerais/foto107.webp";
// import geral108 from "../assets/fotos/gerais/foto108.webp";
// import geral109 from "../assets/fotos/gerais/foto109.webp";
// import geral110 from "../assets/fotos/gerais/foto110.webp";
// import geral111 from "../assets/fotos/gerais/foto111.webp";
// import geral112 from "../assets/fotos/gerais/foto112.webp";
// import geral113 from "../assets/fotos/gerais/foto113.webp";
// import geral114 from "../assets/fotos/gerais/foto114.webp";
// import geral115 from "../assets/fotos/gerais/foto115.webp";
// import geral116 from "../assets/fotos/gerais/foto116.webp";
// import geral117 from "../assets/fotos/gerais/foto117.webp";
// import geral118 from "../assets/fotos/gerais/foto118.webp";
// import geral119 from "../assets/fotos/gerais/foto119.webp";
// import geral120 from "../assets/fotos/gerais/foto120.webp";
// import geral121 from "../assets/fotos/gerais/foto121.webp";
// import geral122 from "../assets/fotos/gerais/foto122.webp";
// import geral123 from "../assets/fotos/gerais/foto123.webp";
// import geral124 from "../assets/fotos/gerais/foto124.webp";
// import geral125 from "../assets/fotos/gerais/foto125.webp";
// import geral126 from "../assets/fotos/gerais/foto126.webp";
// import geral127 from "../assets/fotos/gerais/foto127.webp";
// import geral128 from "../assets/fotos/gerais/foto128.webp";
// import geral129 from "../assets/fotos/gerais/foto129.webp";
// import geral130 from "../assets/fotos/gerais/foto127-1.webp";
// import geral131 from "../assets/fotos/gerais/foto127-2.webp";
// import geral132 from "../assets/fotos/gerais/foto132.webp";




interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Video {
  src: string;        
  thumbnail: string;  
  alt: string;
}

interface SectionMeta {
  label: string;
  subtitle: string;
  hasSlideshow: boolean; 
  music?: string;
}

type SectionKey = "gerais" | "90anos" | "89anos" | "80anos" | "videos";

const SECTION_META: Record<SectionKey, SectionMeta> = {
  gerais:   { label: "Fotos Gerais",      subtitle: "Uma vida inteira em imagens",      hasSlideshow: true,  music: musicaGerais },
  "90anos": { label: "Festa dos 90 Anos", subtitle: "Uma celebração inesquecível",      hasSlideshow: true,  music: musica90anos },
  "89anos": { label: "Festa dos 89 Anos", subtitle: "Mais um ano de gratidão",          hasSlideshow: true,  music: musica89anos },
  "80anos": { label: "Festa dos 80 Anos", subtitle: "Oito décadas de história",         hasSlideshow: true,  music: musica80anos },
  videos:   { label: "Vídeos",            subtitle: "Sua voz, seus gestos, seu jeito",  hasSlideshow: false },
};

const PHOTOS_BY_SECTION: Partial<Record<SectionKey, Photo[]>> = {
gerais: [
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207156/foto1_iowjr7.webp", alt: "Fotos gerais 1", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207158/foto2_a1wlv7.webp", alt: "Fotos gerais 2", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207159/foto3_vtolcf.webp", alt: "Fotos gerais 3", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207161/foto4_wecgyq.webp", alt: "Fotos gerais 4", width: 899, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207163/foto5_veevya.webp", alt: "Fotos gerais 5", width: 1600, height: 981 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207164/foto6_eberzx.webp", alt: "Fotos gerais 6", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207191/foto7_e6sado.webp", alt: "Fotos gerais 7", width: 1600, height: 1203 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207193/foto8_nhulhy.webp", alt: "Fotos gerais 8", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207195/foto9_tkuykh.webp", alt: "Fotos gerais 9", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207196/foto10_tj0dor.webp", alt: "Fotos gerais 10", width: 1600, height: 1143 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207198/foto11_nicbb5.webp", alt: "Fotos gerais 11", width: 1600, height: 1143 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207200/foto12_an0mum.webp", alt: "Fotos gerais 12", width: 1067, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207201/foto13_rhltyz.webp", alt: "Fotos gerais 13", width: 1600, height: 1067 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207203/foto14_dekicx.webp", alt: "Fotos gerais 14", width: 1066, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207205/foto15_c8zyoi.webp", alt: "Fotos gerais 15", width: 1305, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207207/foto16_xgcfk6.webp", alt: "Fotos gerais 16", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207208/foto17_fmuomo.webp", alt: "Fotos gerais 17", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207212/foto18_kdoxns.webp", alt: "Fotos gerais 18", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207213/foto19_jutcgk.webp", alt: "Fotos gerais 19", width: 1600, height: 1143 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207215/foto20_jxhv4z.webp", alt: "Fotos gerais 20", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207217/foto21_dqv9cr.webp", alt: "Fotos gerais 21", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207218/foto22_rstnnv.webp", alt: "Fotos gerais 22", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207220/foto23_kgwy4a.webp", alt: "Fotos gerais 23", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207222/foto24_labbt7.webp", alt: "Fotos gerais 24", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207224/foto25_gctpwg.webp", alt: "Fotos gerais 25", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207225/foto26_ai0bhx.webp", alt: "Fotos gerais 26", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207227/foto27_z1szgh.webp", alt: "Fotos gerais 27", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207229/foto28_yfkb9y.webp", alt: "Fotos gerais 28", width: 1600, height: 1068 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207231/foto29_e3r2yx.webp", alt: "Fotos gerais 29", width: 1600, height: 1068 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207232/foto30_m7iuco.webp", alt: "Fotos gerais 30", width: 1600, height: 1068 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207234/foto31_p453gn.webp", alt: "Fotos gerais 31", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207236/foto32_xcdr6j.webp", alt: "Fotos gerais 32", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207237/foto33_karbnn.webp", alt: "Fotos gerais 33", width: 738, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207239/foto34_jtpvjh.webp", alt: "Fotos gerais 34", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207241/foto35_dbbiuh.webp", alt: "Fotos gerais 35", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207242/foto36_dpsnqm.webp", alt: "Fotos gerais 36", width: 1435, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207244/foto37_li6axi.webp", alt: "Fotos gerais 37", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207246/foto38_jyzg5i.webp", alt: "Fotos gerais 38", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207247/foto39_qqzq4p.webp", alt: "Fotos gerais 39", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207249/foto40_ui02m4.webp", alt: "Fotos gerais 40", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207251/foto41_uxkkfi.webp", alt: "Fotos gerais 41", width: 901, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207253/foto42_mvnmv0.webp", alt: "Fotos gerais 42", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207254/foto43_uluzss.webp", alt: "Fotos gerais 43", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207256/foto44_pdhago.webp", alt: "Fotos gerais 44", width: 1600, height: 1203 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207257/foto45_usi2mf.webp", alt: "Fotos gerais 45", width: 1600, height: 1066 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207259/foto46_yvsue4.webp", alt: "Fotos gerais 46", width: 1600, height: 1066 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207261/foto47_h2obsj.webp", alt: "Fotos gerais 47", width: 1600, height: 1203 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207262/foto48_nankzw.webp", alt: "Fotos gerais 48", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207264/foto49_uameic.webp", alt: "Fotos gerais 49", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207266/foto50_vq36mu.webp", alt: "Fotos gerais 50", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207267/foto51_px5qew.webp", alt: "Fotos gerais 51", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207269/foto52_zfpwhs.webp", alt: "Fotos gerais 52", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207270/foto53_vnlc7u.webp", alt: "Fotos gerais 53", width: 901, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207273/foto54_gltzsu.webp", alt: "Fotos gerais 54", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207274/foto55_rnadgp.webp", alt: "Fotos gerais 55", width: 1600, height: 738 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207276/foto56_s1y7di.webp", alt: "Fotos gerais 56", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207277/foto57_kzuznd.webp", alt: "Fotos gerais 57", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207279/foto58_lqsgzi.webp", alt: "Fotos gerais 58", width: 1067, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207280/foto59_ds97ut.webp", alt: "Fotos gerais 59", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207282/foto60_genyyf.webp", alt: "Fotos gerais 60", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207284/foto61_i57l0p.webp", alt: "Fotos gerais 61", width: 1600, height: 1541 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207285/foto62_qnh3qu.webp", alt: "Fotos gerais 62", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207287/foto63_spaq4e.webp", alt: "Fotos gerais 63", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207289/foto64_uuqylj.webp", alt: "Fotos gerais 64", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207291/foto65_zne8ve.webp", alt: "Fotos gerais 65", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207292/foto66_w5lnxi.webp", alt: "Fotos gerais 66", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207294/foto67_axcevt.webp", alt: "Fotos gerais 67", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207295/foto68_i6thjy.webp", alt: "Fotos gerais 68", width: 1059, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207297/foto69_l2wolc.webp", alt: "Fotos gerais 69", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207299/foto70_nkpuxx.webp", alt: "Fotos gerais 70", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207300/foto71_aibleq.webp", alt: "Fotos gerais 71", width: 1600, height: 1313 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207302/foto72_z1aspo.webp", alt: "Fotos gerais 72", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207304/foto73_xouqvh.webp", alt: "Fotos gerais 73", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207305/foto74_xprbvh.webp", alt: "Fotos gerais 74", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207307/foto75_lhrbpo.webp", alt: "Fotos gerais 75", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207309/foto76_yj5sjg.webp", alt: "Fotos gerais 76", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207310/foto78_jhlfhd.webp", alt: "Fotos gerais 78", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207312/foto79_eok6b7.webp", alt: "Fotos gerais 79", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207313/foto80_dnfvxh.webp", alt: "Fotos gerais 80", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207315/foto81_ct31us.webp", alt: "Fotos gerais 81", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207317/foto82_kh0nvk.webp", alt: "Fotos gerais 82", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207318/foto83_ubilsk.webp", alt: "Fotos gerais 83", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207320/foto84_a8foxg.webp", alt: "Fotos gerais 84", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207322/foto85_mvd1xu.webp", alt: "Fotos gerais 85", width: 1284, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207323/foto86_rffhcx.webp", alt: "Fotos gerais 86", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207325/foto87_rkkr3n.webp", alt: "Fotos gerais 87", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207327/foto88_yusyjw.webp", alt: "Fotos gerais 88", width: 778, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207328/foto89_iw2uzq.webp", alt: "Fotos gerais 89", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207330/foto90_ocfwfd.webp", alt: "Fotos gerais 90", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207332/foto91_jhlsgg.webp", alt: "Fotos gerais 91", width: 1335, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207333/foto92_equngl.webp", alt: "Fotos gerais 92", width: 1097, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207335/foto93_hnyfjj.webp", alt: "Fotos gerais 93", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207337/foto94_iknxdg.webp", alt: "Fotos gerais 94", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207338/foto95_l0y53y.webp", alt: "Fotos gerais 95", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207340/foto96_tayvga.webp", alt: "Fotos gerais 96", width: 1600, height: 1203 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207342/foto97_mv3yem.webp", alt: "Fotos gerais 97", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207343/foto98_ppoore.webp", alt: "Fotos gerais 98", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207345/foto99_vwwqcf.webp", alt: "Fotos gerais 99", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207347/foto100_xkq1wm.webp", alt: "Fotos gerais 100", width: 1600, height: 1261 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207348/foto101_kmlmjk.webp", alt: "Fotos gerais 101", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207350/foto102_k31jbu.webp", alt: "Fotos gerais 102", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207351/foto103_dhpm6r.webp", alt: "Fotos gerais 103", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207353/foto104_pkzwh7.webp", alt: "Fotos gerais 104", width: 1600, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207355/foto105_kjrwkv.webp", alt: "Fotos gerais 105", width: 1584, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207357/foto106_owo6zu.webp", alt: "Fotos gerais 106", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207358/foto107_mimrru.webp", alt: "Fotos gerais 107", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207360/foto108_jw9kfj.webp", alt: "Fotos gerais 108", width: 738, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207361/foto109_huutxu.webp", alt: "Fotos gerais 109", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207363/foto110_dis2ay.webp", alt: "Fotos gerais 110", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207365/foto111_i3trxk.webp", alt: "Fotos gerais 111", width: 1600, height: 900 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207366/foto112_wdsnhk.webp", alt: "Fotos gerais 112", width: 900, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207368/foto113_jel7md.webp", alt: "Fotos gerais 113", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207370/foto114_cwd9ey.webp", alt: "Fotos gerais 114", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207371/foto115_uim8ji.webp", alt: "Fotos gerais 115", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207373/foto116_w2mzjy.webp", alt: "Fotos gerais 116", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207374/foto117_icnfda.webp", alt: "Fotos gerais 117", width: 738, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207376/foto118_gpusle.webp", alt: "Fotos gerais 118", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207378/foto119_fuhqkt.webp", alt: "Fotos gerais 119", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207379/foto120_napsnk.webp", alt: "Fotos gerais 120", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207381/foto121_suir4x.webp", alt: "Fotos gerais 121", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207383/foto122_u22qgr.webp", alt: "Fotos gerais 122", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207384/foto123_w4wtsx.webp", alt: "Fotos gerais 123", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207386/foto124_lwedoj.webp", alt: "Fotos gerais 124", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207388/foto125_yrn48t.webp", alt: "Fotos gerais 125", width: 1600, height: 1203 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207389/foto126_y7a1p3.webp", alt: "Fotos gerais 126", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207391/foto127_rq2zel.webp", alt: "Fotos gerais 127", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207392/foto127-1_q5ibjj.webp", alt: "Fotos gerais 128", width: 1200, height: 1600 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207394/foto127-2_umxkpv.webp", alt: "Fotos gerais 129", width: 1600, height: 1200 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207396/foto128_i22yna.webp", alt: "Fotos gerais 130", width: 1600, height: 1068 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207397/foto129_sswea6.webp", alt: "Fotos gerais 131", width: 1600, height: 1068 },
  { src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207399/foto132_wt4ruc.webp", alt: "Fotos gerais 132", width: 1200, height: 1600 },
],

  "90anos": [
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206075/0_87_lvkgmu.webp", alt: "Foto 90 anos 1", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206075/0_112_xwiguq.webp", alt: "Foto 90 anos 2", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206075/0_118_gzbwv2.webp", alt: "Foto 90 anos 3", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206076/0_120_u7lnwg.webp", alt: "Foto 90 anos 4", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206076/0_145_ukgrvf.webp", alt: "Foto 90 anos 5", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206077/0_165_ermkrp.webp", alt: "Foto 90 anos 6", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206078/0_168_jaqv1b.webp", alt: "Foto 90 anos 7", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206078/0_184_kfwpib.webp", alt: "Foto 90 anos 8", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206079/0_192_cxge0z.webp", alt: "Foto 90 anos 9", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206079/0_204_bwxzpw.webp", alt: "Foto 90 anos 10", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206080/0_210_hdfpko.webp", alt: "Foto 90 anos 11", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206080/0_220_xezcni.webp", alt: "Foto 90 anos 12", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206081/0_221_uy8ak7.webp", alt: "Foto 90 anos 13", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206081/0_224_yf6y4m.webp", alt: "Foto 90 anos 14", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206082/0_234_a73ayo.webp", alt: "Foto 90 anos 15", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206082/0_241_whihiz.webp", alt: "Foto 90 anos 16", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206083/0_243_sxnkes.webp", alt: "Foto 90 anos 17", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206084/0_252_ukxgln.webp", alt: "Foto 90 anos 18", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206084/0_255_fmm1v0.webp", alt: "Foto 90 anos 19", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206085/0_260_lvipid.webp", alt: "Foto 90 anos 20", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206086/0_263_qvt7ei.webp", alt: "Foto 90 anos 21", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206086/0_283_ra6y6b.webp", alt: "Foto 90 anos 22", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206087/0_289_terjvx.webp", alt: "Foto 90 anos 23", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206087/0_292_xhjheb.webp", alt: "Foto 90 anos 24", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206088/0_295_mvepw8.webp", alt: "Foto 90 anos 25", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206088/0_296_oa3a1t.webp", alt: "Foto 90 anos 26", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206089/0_304_jxinfg.webp", alt: "Foto 90 anos 27", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206089/0_308_cgzcrw.webp", alt: "Foto 90 anos 28", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206090/0_315_e8iypa.webp", alt: "Foto 90 anos 29", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206091/0_321_krhzgu.webp", alt: "Foto 90 anos 30", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206091/0_325_dmlf1h.webp", alt: "Foto 90 anos 31", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206092/0_332_ehzfnw.webp", alt: "Foto 90 anos 32", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206093/0_338_e6xt5u.webp", alt: "Foto 90 anos 33", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206093/0_340_toffga.webp", alt: "Foto 90 anos 34", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206094/0_354_u0oapc.webp", alt: "Foto 90 anos 35", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206094/0_360_kq46ja.webp", alt: "Foto 90 anos 36", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206095/0_369_ntgg1q.webp", alt: "Foto 90 anos 37", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206095/0_387_wtfzvf.webp", alt: "Foto 90 anos 38", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206095/0_400_kmh922.webp", alt: "Foto 90 anos 39", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206096/0_404_cxmqrp.webp", alt: "Foto 90 anos 40", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206097/0_407_mzgoli.webp", alt: "Foto 90 anos 41", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206097/0_412_mxqd66.webp", alt: "Foto 90 anos 42", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206098/0_414_jkwsiv.webp", alt: "Foto 90 anos 43", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206098/0_417_s6lkwm.webp", alt: "Foto 90 anos 44", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206099/0_419_aqtkjv.webp", alt: "Foto 90 anos 45", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206100/0_422_mrzzbz.webp", alt: "Foto 90 anos 46", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206100/0_426_u4qw6q.webp", alt: "Foto 90 anos 47", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206100/0_433_keeypm.webp", alt: "Foto 90 anos 48", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206101/0_436_vs6lhe.webp", alt: "Foto 90 anos 49", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206102/0_445_yregp8.webp", alt: "Foto 90 anos 50", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206102/0_447_x1xfn4.webp", alt: "Foto 90 anos 51", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206103/0_449_xjv93s.webp", alt: "Foto 90 anos 52", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206103/0_452_espogm.webp", alt: "Foto 90 anos 53", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206104/0_458_ppb1fe.webp", alt: "Foto 90 anos 54", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206104/0_465_wz8ixa.webp", alt: "Foto 90 anos 55", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206105/0_470_nxuqbb.webp", alt: "Foto 90 anos 56", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206106/0_506_lofael.webp", alt: "Foto 90 anos 57", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206107/0_507_oeeq82.webp", alt: "Foto 90 anos 58", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206107/0_488_kltj1p.webp", alt: "Foto 90 anos 59", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206107/0_515_cro8ms.webp", alt: "Foto 90 anos 60", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206107/0_520_sixnf4.webp", alt: "Foto 90 anos 61", width: 1600, height: 1067 },
  ],
"89anos": [
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206131/0_61_rjrbnp.webp", alt: "Foto 89 anos 1", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206132/0_64_gjm2ht.webp", alt: "Foto 89 anos 2", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206133/0_68_hk3j64.webp", alt: "Foto 89 anos 3", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206133/0_75_bnhrue.webp", alt: "Foto 89 anos 4", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206134/0_138_lyivaa.webp", alt: "Foto 89 anos 5", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206135/0_153_uy7ht8.webp", alt: "Foto 89 anos 6", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206135/0_163_ddr9xa.webp", alt: "Foto 89 anos 7", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206136/0_171_cmtsxc.webp", alt: "Foto 89 anos 8", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206137/0_187_r11yxz.webp", alt: "Foto 89 anos 9", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206138/0_210_1_dvtduz.webp", alt: "Foto 89 anos 10", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206138/0_231_og4eoi.webp", alt: "Foto 89 anos 11", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206139/0_252_dzkxc0.webp", alt: "Foto 89 anos 12", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206139/0_254_sjjvhr.webp", alt: "Foto 89 anos 13", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206140/0_260_1_vjskq4.webp", alt: "Foto 89 anos 14", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206141/0_261_hvdscm.webp", alt: "Foto 89 anos 15", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206142/0_264_zfynv9.webp", alt: "Foto 89 anos 16", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206144/0_268_bh6chm.webp", alt: "Foto 89 anos 17", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206143/0_280_tcmjn8.webp", alt: "Foto 89 anos 18", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206144/0_290_qsijea.webp", alt: "Foto 89 anos 19", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206144/0_312_f40dvs.webp", alt: "Foto 89 anos 20", width: 1600, height: 1067 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781206146/0_314_vdxrso.webp", alt: "Foto 89 anos 21", width: 1600, height: 1067 },
],


"80anos": [
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207656/026_dzvnwl.webp", alt: "Foto 80 anos 1", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207659/028_ajwlue.webp", alt: "Foto 80 anos 3", width: 1200, height: 1600 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207661/029_qkzevy.webp", alt: "Foto 80 anos 4", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207663/030_d6l55w.webp", alt: "Foto 80 anos 5", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207711/031_wi3zze.webp", alt: "Foto 80 anos 6", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207713/032_jo8gjd.webp", alt: "Foto 80 anos 7", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207717/034_bsgafh.webp", alt: "Foto 80 anos 9", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207719/035_ztk283.webp", alt: "Foto 80 anos 10", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207722/036_y1b5zu.webp", alt: "Foto 80 anos 11", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207724/037_syogv6.webp", alt: "Foto 80 anos 12", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207726/038_mqo9gj.webp", alt: "Foto 80 anos 13", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207731/040_aec10t.webp", alt: "Foto 80 anos 15", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207733/041_hj8lt2.webp", alt: "Foto 80 anos 16", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207735/042_kx2v3m.webp", alt: "Foto 80 anos 17", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207738/043_fg7iwb.webp", alt: "Foto 80 anos 18", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207740/044_i3k4pe.webp", alt: "Foto 80 anos 19", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207742/045_agdo4k.webp", alt: "Foto 80 anos 20", width: 1200, height: 1600 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207744/048_ig5s48.webp", alt: "Foto 80 anos 23", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207747/049_m72vg1.webp", alt: "Foto 80 anos 24", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207749/050_ubqprs.webp", alt: "Foto 80 anos 25", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207751/052_popdmt.webp", alt: "Foto 80 anos 27", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207753/053_hvmnb5.webp", alt: "Foto 80 anos 28", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207756/055_ssac1t.webp", alt: "Foto 80 anos 30", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207758/056_xh02y4.webp", alt: "Foto 80 anos 31", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207760/057_xib1nk.webp", alt: "Foto 80 anos 32", width: 1600, height: 1200 },
{ src: "https://res.cloudinary.com/diclhm335/image/upload/v1781207763/058_xeqqdy.webp", alt: "Foto 80 anos 33", width: 1600, height: 1200 },
],

};

const VIDEOS: Video[] = [
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206673/video1_ikajme.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206912/thumb1_fdzw26.jpg", alt: "Vídeo 1" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206588/video3_b80bji.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206915/thumb3_oxtq2g.jpg", alt: "Vídeo 2" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206628/video4_awbxkw.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206916/thumb4_kejj9c.jpg", alt: "Vídeo 3" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206584/video5_wdfcz6.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206917/thumb5_myeahx.jpg", alt: "Vídeo 4" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206585/video6_wyjckf.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206919/thumb6_pthx9s.jpg", alt: "Vídeo 5" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206601/video7_lyg2qi.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206917/thumb5_myeahx.jpg", alt: "Vídeo 6" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206589/video8_yx9zwm.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206916/thumb4_kejj9c.jpg", alt: "Vídeo 7" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206643/video9_fveeyy.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206915/thumb3_oxtq2g.jpg", alt: "Vídeo 8" },
  { src: "https://res.cloudinary.com/diclhm335/video/upload/q_auto/f_auto/v1781206593/video10_pcoxgv.mp4", thumbnail: "https://res.cloudinary.com/diclhm335/image/upload/v1781206912/thumb1_fdzw26.jpg", alt: "Vídeo 9" },
];

export default function GalleryPage(): React.ReactElement {
  const { section } = useParams<{ section: string }>();
  const navigate    = useNavigate();
  const sectionKey  = (section ?? "gerais") as SectionKey;
  const meta        = SECTION_META[sectionKey] ?? { label: "Galeria", subtitle: "", hasSlideshow: false };
  const photos      = PHOTOS_BY_SECTION[sectionKey] ?? [];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const [lightbox, setLightbox]       = useState<number | null>(null);
  const [showSlideshow, setShowSlideshow] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  const breakpointCols: Record<string, number> = {
    default: 3,
    900: 2,
    500: 2,
  };

  const handleKey = useCallback(
    (e: KeyboardEvent): void => {
      if (showSlideshow) return; 
      if (lightbox === null) return;
      if (e.key === "Escape")     setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft")  setLightbox((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    },
    [lightbox, photos.length, showSlideshow]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = (lightbox !== null || showSlideshow) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox, showSlideshow]);

  const onTouchStart = (e: React.TouchEvent): void => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent): void => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      setLightbox((i) =>
        dx < 0
          ? ((i ?? 0) + 1) % photos.length
          : ((i ?? 0) - 1 + photos.length) % photos.length
      );
    }
    touchStartX.current = null;
  };

  const downloadPhoto = async (src: string, alt: string): Promise<void> => {
    try {
      const res  = await fetch(src);
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = `${alt.replace(/\s+/g, "_")}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(src, "_blank");
    }
  };

  return (
    <div className="gp-root">

      {showSlideshow && (
        <SlideShow
          photos={photos}
          onClose={() => setShowSlideshow(false)}
          musicSrc={meta.music}
        />
      )}

      {activeVideo && (
        <div
          className="gp-video-player"
          onClick={(e) => e.target === e.currentTarget && setActiveVideo(null)}
        >
          <button className="gp-video-close" onClick={() => setActiveVideo(null)} aria-label="Fechar vídeo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className="gp-video-el"
          />
        </div>
      )}

      <header className="gp-header">
        <div className="gp-header__inner">
          <button className="gp-back" onClick={() => navigate(-1)} aria-label="Voltar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            <span>Voltar</span>
          </button>
          <div className="gp-header__title-wrap">
            <p className="gp-header__eyebrow">Maria Antônia</p>
            <h1 className="gp-header__title">{meta.label}</h1>
          </div>
          <div style={{ width: 80 }} />
        </div>
      </header>

      <div className="gp-hero">
        <p className="gp-hero__sub">{meta.subtitle}</p>


        <p className="gp-hero__count">
          {sectionKey === "videos"
            ? `${VIDEOS.length} ${VIDEOS.length === 1 ? "vídeo" : "vídeos"}`
            : `${photos.length} ${photos.length === 1 ? "foto" : "fotos"}`
          }
        </p>


        {meta.hasSlideshow && photos.length > 0 && (
          <button
            className="gp-slideshow-btn"
            onClick={() => setShowSlideshow(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
            </svg>
            Ver apresentação
          </button>
        )}
      </div>


      <main className="gp-main">

        {sectionKey === "videos" ? (
          VIDEOS.length === 0 ? (
            <div className="gp-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
              <p>Os vídeos ainda serão adicionados.</p>
            </div>
          ) : (
            <div className="gp-video-grid">
              {VIDEOS.map((video, idx) => (
                <div
                  key={idx}
                  className="gp-video-card"
                  onClick={() => setActiveVideo(video.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Assistir: ${video.alt}`}
                  onKeyDown={(e) => e.key === "Enter" && setActiveVideo(video.src)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.alt}
                    className="gp-video-thumb"
                    loading="lazy"
                  />
                  <div className="gp-video-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="gp-video-label">{video.alt}</p>
                </div>
              ))}
            </div>
          )

        ) : photos.length === 0 ? (

          <div className="gp-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p>As fotos desta seção ainda serão adicionadas.</p>
          </div>

        ) : (

          <Masonry
            breakpointCols={breakpointCols}
            className="gp-masonry"
            columnClassName="gp-masonry__col"
          >
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="gp-card"
                onClick={() => setLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Abrir ${photo.alt}`}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(idx)}
              >
                <img src={photo.src} alt={photo.alt} className="gp-card__img" loading="lazy" />
                <div className="gp-card__overlay" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            ))}
          </Masonry>
        )}

      </main>


      {lightbox !== null && photos[lightbox] && (
        <div
          className="gp-lightbox"
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <div className="gp-lb-toolbar">
            <span className="gp-lb-counter">{lightbox + 1} / {photos.length}</span>
            <div className="gp-lb-actions">
              <button
                className="gp-lb-btn"
                onClick={() => downloadPhoto(photos[lightbox!].src, photos[lightbox!].alt)}
                aria-label="Baixar foto"
                title="Baixar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              <button className="gp-lb-btn" onClick={() => setLightbox(null)} aria-label="Fechar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="gp-lb-img-wrap">
            <img src={photos[lightbox].src} alt={photos[lightbox].alt} className="gp-lb-img" draggable={false} />
          </div>

          <button
            className="gp-lb-arrow gp-lb-arrow--left"
            onClick={() => setLightbox((i) => ((i ?? 0) - 1 + photos.length) % photos.length)}
            aria-label="Foto anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="gp-lb-arrow gp-lb-arrow--right"
            onClick={() => setLightbox((i) => ((i ?? 0) + 1) % photos.length)}
            aria-label="Próxima foto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="gp-lb-thumbs">
            {photos.map((p, i) => (
              <button
                key={i}
                className={`gp-lb-thumb${i === lightbox ? " active" : ""}`}
                onClick={() => setLightbox(i)}
                aria-label={`Ir para foto ${i + 1}`}
              >
                <img src={p.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
