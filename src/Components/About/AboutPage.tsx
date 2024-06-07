import FormattedText from "../FormattedText/FormattedText";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div id="about-page">
      <FormattedText>
        {`#O sajtu
      Ovaj sajt je kreiran kao deo školskog projekta za predmete /Srpski jezik/ i /PIT/.
      Predstavlja nacin za istraživanje asocijacija reči, dobijenih kao rezultat ankete sprovedene među *50* ispitanika. Naš cilj je bio da istražimo kako različiti ljudi povezuju reči i na koji način njihove asocijacije otkrivaju raznolike načine razmišljanja i razumevanja jezika.
      Ispitanici su odgovarali na zadate reči i davali svoje *prve* asocijacije, što je omogućilo stvaranje ovog asocijativnog rečnika.`}
      </FormattedText>

      <FormattedText>
        {`##Ucesnici projekta
        Andrej Nenadic
        Luka Dzodan
        Teodora Dzekic
        Aleksandar Popovic
        Lazar Stojanovic
         `}
      </FormattedText>
    </div>
  );
}
