export const COUNTRIES = {
    DE: "Germany",
    US: "United States",
    KZ: "Kazakhstan",
    UZ: "Uzbekistan",
    FR: "France",
    IT: "Italy",
    ES: "Spain",
    CN: "China",
    IN: "India",
    JP: "Japan",
    GB: "United Kingdom",
    CA: "Canada",
    AU: "Australia",
    BR: "Brazil",
    RU: "Russia",
    MX: "Mexico",
    ZA: "South Africa",
    NG: "Nigeria",
    EG: "Egypt",
    AR: "Argentina",
    UA: "Ukraine",
} as const;




export default function getCountryNameByCode(code: string) {
   let res = COUNTRIES[code as keyof typeof COUNTRIES]
return  res ? res: code;
}