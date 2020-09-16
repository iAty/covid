import React, { Fragment } from 'react';
import {
  Navbar
} from '../components';

const divSize = {
  fontSize: '18px'
};

const InfoPage = () => (
  <Fragment>
    <Navbar />
    <div className='container'>
      <div className='row py-5 justify-content-between align-items-center'>
        <div className='col-md-12' style={divSize}>
          <h2>Általános információk</h2>
          <p><strong>Mik azok a koronavírusok?</strong></p>

          <p>A nevüket&nbsp;az elektronmikroszkóppal látható, koronára emlékeztető, felszíni kitüremkedéseik&nbsp;miatt&nbsp;kapták.&nbsp;A koronavírus törzsek alapvetően az állatoknál fordulnak elő, némelyek&nbsp;képesek az emberben is fertőzést okozni. Az 1960-as évektől ismert kórokozóként ismert koronavírusok mind állatról emberre, mind emberről emberre terjedhetnek.</p>

          <p>&nbsp;</p>

          <p><strong>Mit kell tudni az újfajta koronavírusról?</strong></p>

          <p>Az új koronavírust (SARS-CoV-2) Kínában azonosították 2019 végén. Kezdetben 2019-nCoV (új koronavírus) névvel illették, majd az Egészségügyi Világszervezet (WHO) javaslatára SARS-CoV-2-re keresztelték a korábbi&nbsp;SARS-CoV-val (Severe Acute Respiratory Syndrome - súlyos heveny légúti tünetegyüttes vírusa) való rokonsága alapján. Az általa okozott betegséget COVID-19-nek (COVID: coronavirus disease - koronavírus okozta megbetegedés 2019) nevezik.</p>

          <p>&nbsp;</p>

          <p><strong>Mik a tünetei az új koronavírus által okozott megbetegedésnek?</strong></p>

          <p>Az újfajta koronavírus okozta megbetegedés leggyakrabban enyhe tünetekkel jár, láz, köhögés, légszomj, izomfájdalom és fáradékonyság jelentkezhetnek. Ritkábban súlyos kórforma alakulhat ki, ami tüdőgyulladással, heveny légzési elégtelenséggel, vagy akár szepszissel (vérmérgezés), keringési vagy több szervi elégtelenséggel járhat. Azoknál a betegeknél alakul ki gyakrabban súlyos, akár életveszélyes állapot, akik valamilyen krónikus alapbetegségben (magas vérnyomás, szív- és érrendszeri betegség, cukorbetegség, májbetegség, légzőszervi betegség, daganatos betegség) szenvednek.</p>

          <p>&nbsp;</p>

          <p><strong>Hogyan terjed az új koronavírus?</strong></p>

          <p>A vírus leginkább cseppfertőzéssel terjed: köhögéssel, tüsszentéssel, kilégzéssel kerül a környezetbe, majd a közelben tartózkodó másik emberre. Fertőzött felületek és tárgyak megérintésével a vírus a kézre kerülhet, az arc, a száj, az orr&nbsp;érintésével&nbsp;bejuthat a szervezetbe. Egyelőre nem ismert, hogy pontosan mennyi ideig marad fertőzőképes a vírus a felületeken, annyi azonban bizonyos, hogy az egyszerű fertőtlenítőszerek elpusztítják.</p>

          <p>&nbsp;</p>

          <p><strong>Hogy lehet gyógyítani az új koronavírus okozta megbetegedést?</strong></p>

          <p>Jelenleg nincs kezelési módja, gyógyszere. Enyhe esetekben a panaszok csillapítása a cél, súlyos állapotú betegnél az immunrendszert, a légzést, a keringést támogató kezeléseket alkalmaznak (pl. oxigénterápia, folyadékegyensúly helyreállítása, egyéb vírusok ellen korábban kifejlesztett gyógyszerek, szükség esetén légzéstámogatás).</p>

          <p>&nbsp;</p>

          <p><strong>Van-e védőoltás az&nbsp;új koronavírus ellen?</strong></p>

          <p>A koronavírusok, így az új&nbsp;koronavírus ellen nincs védőoltás. Az új koronavírus esetében megkezdődött a vakcinafejlesztés, a védőoltás előállítása akár egy-másfél évig is eltarthat.</p>

          <p>&nbsp;</p>

          <p><strong>Mit tegyek a megelőzés érdekében?</strong></p>

          <p>A legfontosabb a gyakori és alapos szappanos kézmosás, vagy legalább 60% alkoholtartalmú kézfertőtlenítő használata. Különösen javasolt mosdó használatát követően és étkezés előtt!</p>

          <p>A maszk önmagában nem elegendő a fertőzés megállításához, ám viselése mások védelme érdekében javasolt, ha valaki légúti tünetektől szenved. Amennyiben valamilyen alapbetegsége (magas vérnyomás, cukorbetegség, szív- és érrendszeri betegség, légzőszervi betegség, májbetegség, daganatos betegség) van,&nbsp;saját védelme érdekében viseljen maszkot!</p>

          <p>Ha köhög vagy tüsszent, használjon papírzsebkendőt, azt használat után azonnal&nbsp;dobja ki a szemetesbe, majd mosson/fertőtlenítsen kezet!</p>

          <p>&nbsp;</p>

          <p><strong>A gyerekeket is érinti az új koronavírus okozta megbetegedés?</strong></p>

          <p>A vírussal bármilyen életkorú ember megfertőződhet, ugyanakkor az eddig igazolt esetek között alig volt gyermekkorú beteg. Általánosságban elmondható, hogy a megfertőzöttek körülbelül 80%-a tünetmentesen átesik a vírusfertőzésen, a gyermekek és a fiatal felnőttek is ebbe a csoportba tartoznak. Esetükben a vírushordozás lehetőségével kell számolni, ezért a fertőzés gyanúja (érintett területre utazás vagy érintett területen járt személlyel való kontaktus megléte és akár enyhe tünetek jelentkezés) mellett indokolt lehet a gyermekeket 1-2 hétig otthon tartani, az iskolai és más közösségek védelmében. Ilyen esetekben ajánljuk a gyermekháziorvossal való telefonos egyeztetést.</p>

          <p>&nbsp;</p>

          <p><strong>Mi a teendő, ha azt gondolom, hogy az új koronavírussal fertőződtem?</strong></p>

          <p>Ha az új koronavírus okozta megbetegedés tüneteit tapasztalja és találkozott olyasvalakivel, akitől elkaphatta a fertőzést, minél hamarabb kérjen telefonos segítséget! A háziorvos, az ügyeletes orvos vagy a mentőszolgálat szakembere feltett kérdései&nbsp;megerősíthetik vagy kizárhatják a fertőzés gyanúját. Mindenképpen jelezze, ha ön vagy önnel kapcsolatban álló járt olyan országban az elmúlt két hétben, ahol új koronavírus-járvány zajlik.</p>

          <p>&nbsp;</p>

          <p><strong>Mit tegyek, ha fertőzött területen jártam vagy olyasvalakivel érintkeztem, aki ott járt?</strong></p>

          <p>Ha a közelmúltban (14 napon belül) olyan országban járt, ahol új koronavírus-járvány zajlik, vagy kapcsolata volt valakivel, aki az érintett területről érkezett, és ezt követően a betegség tüneteit észleli magán, akkor haladéktalanul hívja fel háziorvosát, vagy a Nemzeti Népegészségügyi Központ ingyenesen hívható zöldszámai (06-80-277-455 vagy 06-80-277-456) valamelyikét!</p>

          <p>Ha nem feltétlenül szükséges, emberek közé, orvosi váróba ne menjen, tömegközlekedést ne használjon, maradjon otthon!</p>

          <p>&nbsp;</p>

          <p><strong>Milyen fertőtlenítő szerek hatásosak az új koronavírussal szemben?</strong></p>

          <p>A koronavírusok hatástalanításához virucid (vírusölő) hatású fertőtlenítőszerek alkalmazhatók. Megfelelő az alapos, legalább 20 másodpercig tartó, szappanos kézmosás, illetve alkoholos kézfertőtlenítők használata is. Felmosáshoz, takarításhoz is használjon fertőtlenítő tisztítószert! Szellőztessen gyakran!</p>

          <p>&nbsp;</p>

          <p><strong>Az influenza elleni oltás véd az új koronavírus ellen?</strong></p>

          <p>Az influenza elleni oltás nem ad védettséget az új koronavírus okozta fertőzéssel szemben.</p>

          <p>&nbsp;</p>

          <p><strong>Mi történik, ha a fertőzés beigazolódik?</strong></p>

          <p>Amennyiben szállítható állapotban van, a beteget a mentőszolgálat a Dél-Pesti Centrumkórház - Országos Hematológiai és Infektológiai Intézetbe szállítja elkülönítés és további ellátás céljából.</p>

          <p>&nbsp;</p>

          <p><strong>Van-e lehetőség&nbsp;az új koronavírusra szűrővizsgálatot végeztetni?</strong></p>

          <p>Nincs. Jelenleg kizárólag akkor végezhető laboratóriumi kivizsgálás, ha a jellemző tünetek mutatkoznak, és a járványtani kockázat is fennáll. Tünetmentes emberek szűrővizsgálata, tesztelése nem indokolt.</p>

          <p>&nbsp;</p>

          <p><strong>Várandós vagyok, mit tegyek a megelőzés érdekében?</strong></p>

          <p>Tartsa be a normál higiéniai rendszabályokat, ami influenza-szezonban egyébként is javasolt! Ide tartozik például a gyakori és alapos szappanos kézmosás, alkoholos kézfertőtlenítés. Tömegközlekedési eszközön történő utazáskor kerülje arca, szája, orra és szemei érintését! Jelenleg semmilyen adat nincs arról, hogy az új koronavírusnak magzatkárosító hatása lenne.</p>

          <p>&nbsp;</p>

          <p><strong>Szükséges-e tartós élelmiszereket nagyobb mennyiségben beszerezni?</strong></p>

          <p>A lakossági ellátás kiegyensúlyozott, a készletek biztosítják a kiskereskedelmi forgalomban esetlegesen, rövid időre jelentkező hiányok pótlását. Gondolja végig saját szükségleteit, és annak megfelelően intézze vásárlásait!</p>
        </div>
      </div>
    </div>
    <footer>
      <div className='container'>
        <p className='text-center mb-0 p-4'>

          <a
            className='font-weight-bold'
            href='https://facebook.com/iAty/'
          >

          </a>
          &nbsp;&nbsp;Forrás:
          <a
            className='font-weight-bold'
            href='https://corona.lmao.ninja/v2'
          >
            API 1
          </a>
          <a
            className='font-weight-bold'
            href='https://covid19.mathdro.id/api'
          >
            API 2
          </a>
          <a
            className='font-weight-bold'
            href='https://www.flaticon.com/authors/ultimatearm'
          >
            IKONPACK
          </a>
        </p>
      </div>
    </footer>
  </Fragment>
);

export default InfoPage;