import FormattedText from "../FormattedText/FormattedText";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div id="about-page">
      <FormattedText>
        {`#О сајту
      Овај сајт је креиран као део школског пројекта за предмете /Српски језик/ и /ПИТ/.
      Представља начин за истраживање асоцијација речи, добијених као резултат анкете спроведене међу *50* испитаника. Наш циљ је био да истражимо како различити људи повезују речи и на који начин њихове асоцијације откривају разнолике начине размишљања и разумевања језика.
      Испитаници су одговарали на задате речи и давали своје *прве* асоцијације, што је омогућило стварање овог асоцијативног речника.`}
      </FormattedText>

      <FormattedText>
        {`##Uчesnici projekta
        Andrej Nenadiћ
        Luka Џodan
        Teodora Џekiћ
        Aleksandar Popoviћ
        Lazar Stojanoviћ
         `}
      </FormattedText>
    </div>
  );
}
