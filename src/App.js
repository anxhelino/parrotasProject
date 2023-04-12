import { Language, Calculate, Intro, Result } from "./components";
import { useContext } from "react";
import CalculateContext from "./context/calculateContext";
import LanguageContext from "./context/LanguageContext";

function App() {
  const { elv, data, eav, points, percentage } = useContext(CalculateContext);
  const { language, selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="container">
      <header>
        <Language />
        <Intro
          title={language(selectedLanguage).title}
          info={language(selectedLanguage).bodyIntro}
        />
      </header>
      <Calculate
        tool={language(selectedLanguage).tool}
        output={language(selectedLanguage).output}
        minutes={language(selectedLanguage).minutes}
        submit={language(selectedLanguage).submit}
      />
      <Result
        title={language(selectedLanguage).result}
        info={
          language(selectedLanguage, data.tool, data.output, eav, elv, "_", "_")
            .info
        }
        pointsInfo={
          language(
            selectedLanguage,
            data.tool,
            data.output,
            eav,
            elv,
            points,
            percentage
          ).pointsInfo
        }
        percentage={percentage}
      />
    </div>
  );
}

export default App;
