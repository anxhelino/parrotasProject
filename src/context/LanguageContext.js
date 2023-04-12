import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();
const languagesFunction = (
  selectedLanguage,
  toolName,
  outputLimit,
  eavTime,
  elvTime,
  points,
  percentage
) => {
  const language = {
    english: {
      title: "HAVS Calculator",
      bodyIntro:
        "Are you wondering how to calculate vibration exposure, for one tool or multiple tools, and stay within the legal limits? Enter your tools and times below to find out. The HAVS calculator will tell you if you are under or over the exposure action value, and how close you are to the limit.",
      tool: "Tool",
      output: "Output (m/s²)",
      minutes: "Minutes",
      result: "RESULT",
      info: `A ${toolName} with a vibration output of ${outputLimit}m/s² reaches the EAV (Exposure Action Value) in ${eavTime} hours and the ELV (Exposure Limit Value) in ${elvTime} hours.`,
      pointsInfo: `You have used ${points} points on this tool, which is ${percentage}% of the maximum daily allowance.`,
      submit: "Calculate",
    },
    italian: {
      title: "HAVS Calcolatrice",
      bodyIntro:
        "Ti stai chiedendo come calcolare l'esposizione alle vibrazioni, per uno o più utensili, e rimanere entro i limiti di legge? Inserisci i tuoi strumenti e tempi qui sotto per scoprirlo. Il calcolatore HAVS ti dirà se sei al di sotto o al di sopra del valore dell'azione di esposizione e quanto sei vicino al limite.",
      tool: "Attrezzo",
      output: "Produzione(m/s²)",
      minutes: "Minuti",
      result: "RISULTATO",
      info: `Un ${toolName} con un'emissione di vibrazione di ${outputLimit}m/s² raggiunge l'EAV (Exposure Action Value) in ${eavTime} ore e l'ELV (Exposure Limit Value) in ${elvTime} ore.`,
      pointsInfo: `Hai utilizzato ${points} punti su questo strumento, che è ${percentage}% dell'indennità giornaliera massima.`,
      submit: "Calcolare",
    },
    albanian: {
      title: "Llogaritesi HAVS",
      bodyIntro:
        "A po pyesni veten se si të llogarisni ekspozimin ndaj dridhjeve, për një mjet ose mjete të shumta, dhe të qëndroni brenda kufijve ligjorë? Futni mjetet dhe kohën tuaj më poshtë për të zbuluar. Llogaritësi HAVS do t'ju tregojë nëse jeni nën ose mbi vlerën e veprimit të ekspozimit dhe sa afër jeni kufirit.",
      tool: "Mjet",
      output: "Prodhimi(m/s²)",
      minutes: "Minuta",
      result: "REZULTATI",
      info: `NJe ${toolName} prodhon nje vibrim prej ${outputLimit}m/s² arrin limitin EAV (Exposure Action Value) ne ${eavTime} ore dhe limitin ELV (Exposure Limit Value) ne ${elvTime} ore.`,
      pointsInfo: `Ke perdorur ${points} pike me kete vegel, qe eshte ${percentage}% e gjithe pikeve qe lejohen ne nje dite.`,
      submit: "Kalkulo",
    },
  };

  return language[selectedLanguage];
};

export const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  return (
    <LanguageContext.Provider
      value={{
        language: languagesFunction,
        selectedLanguage: selectedLanguage,
        setSelectedLanguage: setSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
