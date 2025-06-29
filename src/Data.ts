export interface Car_Data {
  id: number;
  carname: string;
  thumb_img: string;
  owner: string;
  registration: string;
  color: string;
  fuel_type: string;
  cc: string;
  kilometer_ran: string;
  service_history: string;
  insurance: string;
  key_type: string;
  tyre_health: string;
  number_plate: string;
  asking_price: string;

  card_img: string;
  //   multiple_img: string[];
}

export const carData: Car_Data[] = [
  {
    id: 1,
    carname: "RENAULT SCALA RXL BSIV",
    owner: "1ST OWNER",
    registration: "2/7/2014",
    color: "E BLUE",
    fuel_type: "PETROL",
    cc: "NULL",
    kilometer_ran: "76000",
    service_history: "FULLY DONE",
    insurance: "1/2/2025",
    key_type: "REMOTE (2 SET)",
    tyre_health: "85%",
    number_plate: "MH 43 AR 2402 (RTO-NAVI MUMBAI)",
    asking_price: "240000",
    thumb_img: "/assets/images/renault-thumb.png",
    card_img:
      "https://drive.google.com/file/d/1lpHwGlmprRiDOHITgIoUBGoIQKL5Njc5/view?usp=sharing ",
  },
  {
    id: 2,
    carname: "HONDA CITY 1.5 SV (MT iDTEC)",
    owner: "1ST OWNER",
    registration: "11/2/2014",
    color: "RED P",
    fuel_type: "DIESEL",
    cc: "1497 CC",
    kilometer_ran: "117000",
    service_history: "FULLY DONE",
    insurance: "12/2/2025",
    key_type: "REMOTE (2 SET)",
    tyre_health: "80%",
    number_plate: "⁠MH02 DJ 0936 (⁠RTO - MUMBAI WEST)",
    asking_price: "N/A",
    thumb_img: "/assets/images/Honda_city.png",
    card_img:
      "https://drive.google.com/file/d/16zF1JgL9pcwT3uE6SWYOh1S8Nqc_1YxG/view?usp=sharing ",
  },
  {
    id: 3,
    carname: "MARUTI SUZUKI ⁠SX4 GREEN VXI BS IV",
    owner: "1ST OWNER",
    registration: "23/05/2014",
    color: "SILVER",
    fuel_type: "CNG/ PETROL",
    cc: "NULL",
    kilometer_ran: "98000",
    service_history: "REQUIRED AFTER 7000KM",
    insurance: "25/07/2025",
    key_type: "REMOTE (2 SET)",
    tyre_health: "85%",
    number_plate: "MH 02 DJ 8728 (RTO-MUMBAI WEST)",
    asking_price: "340000",
    thumb_img: "",
    card_img:
      "https://drive.google.com/file/d/1lcZrn2cpcAx_nDdCYUymy_KvNY35cfkl/view?usp=sharing ",
  },
  {
    id: 4,
    carname: "SANTRO 1MT CNG MAGNA EXECUTIVE",
    owner: "1ST OWNER",
    registration: "31/12/2020",
    color: "POLAR WHITE 2",
    fuel_type: "CNG / PETROL",
    cc: "1086 CC",
    kilometer_ran: "73000",
    service_history: "FULLY DONE",
    insurance: "27/12/24",
    key_type: "REMOTE (2 SET)",
    tyre_health: "80%",
    number_plate: "MH 43 BU 7311 (⁠RTO-NAVI MUMBAI)",
    asking_price: "450000",
    thumb_img: "",
    card_img:
      "https://drive.google.com/file/d/1F4VsMbQJJp15p8yxpL_dSOEHEz175JSY/view?usp=sharing ",
  },
  {
    id: 5,
    carname: "TATA NEXON XM 1.2 RTN",
    owner: "1ST OWNER",
    registration: "11/12/2018",
    color: "GLASGOW GREY",
    fuel_type: "PETROL",
    cc: "1198 CC",
    kilometer_ran: "57000",
    service_history: "FULLY DONE",
    insurance: "13/12/2025",
    key_type: "NULL",
    tyre_health: "80%",
    number_plate: "MH 46 BK 2487 (RTO-PANVEL)",
    asking_price: "N/A",
    thumb_img: "",
    card_img:
      "https://drive.google.com/file/d/1nhe9_HGOGqCpuxEi72aP91tcWNBRios6/view?usp=sharing ",
  },
  {
    id: 6,
    carname: "HYUNDAI i20 ASTA VTVT 1.2",
    owner: "NULL",
    registration: "11/8/2015",
    color: "RED",
    fuel_type: "MANUAL",
    cc: "NULL",
    kilometer_ran: "59000",
    service_history: "FULLY DONE",
    insurance: "7/8/2025",
    key_type: "REMOTE",
    tyre_health: "90%",
    number_plate: "⁠MH 02 DZ 3909 (RTO-MUMBAI WEST)",
    asking_price: "450000",
    thumb_img: "/assets/images/hulk.png",
    card_img:
      "https://drive.google.com/file/d/1Q3xnQTSs6KfkLGvlKSvPvsQjWqLqC3Hh/view?usp=sharing ",
  },
  {
    id: 7,
    carname: "MARUTI SUZUKI SWIFT VDi BS4",
    owner: "1ST OWNER",
    registration: "NULL",
    color: "BLACK",
    fuel_type: "DIESEL",
    cc: "NULL",
    kilometer_ran: "80000",
    service_history: "FULLY DONE",
    insurance: "16/02/25",
    key_type: "REMOTE",
    tyre_health: "75%",
    number_plate: "MH 02 CV 6552 (⁠RTO-MUMBAI EAST)",
    asking_price: "365000",
    thumb_img: "/assets/images/Maruti_swift-thumb.png",
    card_img:
      "https://drive.google.com/file/d/1p1A_yUFu_aWLbb07cKrGU1tZ9Bk66RsJ/view?usp=drive_link ",
  },
  {
    id: 8,
    carname: "COROLLA ALTIS 1.8 G (AT)",
    owner: "⁠2ND OWNER",
    registration: "29/09/2008",
    color: "D RED M",
    fuel_type: "⁠CNG / PETROL",
    cc: "NULL",
    kilometer_ran: "92000",
    service_history: "FULLY DONE",
    insurance: "2/11/2025",
    key_type: "REMOTE (2 SET)",
    tyre_health: "NULL",
    number_plate: "⁠MH 04 DR 6137 (RTO-MUMBAI EAST)",
    asking_price: "N/A",
    thumb_img: "/assets/images/renault-thumb.png",
    card_img:
      "https://drive.google.com/file/d/1VtuNIHS4K8zVH6jKHK_4fBnEtQvbT8Gh/view?usp=sharing",
  },
];
