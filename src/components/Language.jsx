import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Language = () => {
  const { setSelectedLanguage } = useContext(LanguageContext);

  return (
    <div className="languageContainer">
      <label htmlFor="language">Language</label>

      <select
        id="language"
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="english">English</option>
        <option value="italian">Italian</option>
        <option value="albanian">Albanian</option>
      </select>
    </div>
  );
};

export default Language;
