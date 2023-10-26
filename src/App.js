import { Header } from "./components/Header/index";
import { Card } from "./components/Card/index";
import { Footer } from "./components/Footer/index";

const infoLarry =
  "Ларри Скотт был первым человеком, выигравшим Мистер Олимпия в 1965 году, и стал первым человеком, который защитил титул в 1966 году. «Легенда» решил уйти в отставку после своей победы в 1966 году и остается единственным непобежденным чемпионом Мистер Олимпия.";
const infoOliva =
  "Серджио «Миф» Олива совершил незабываемый пробег на «Мистер Олимпия», выиграв три титула подряд в период 1967, 1968 и 1969 годов. Так, в 1969 он победил Арнольда Шварценеггера во время его первого участия в Mr. Olympia.";
const infoArnold =
  "Арнольд Шварценеггер выиграл шесть титулов «Мистер Олимпия» с 1970 по 1975 год, а после перерыва в спорте «Дуб» вернулся в 1980 году, чтобы выиграть свой седьмой Сандоу (главный трофей турнира Mr. Olympia)";

const infoColumbu =
  "Франко Коломбо дважды выигрывал Трофей Сандоу, сначала в 1976 году, а затем в 1981 году.  Известный своей глубокой прорисовкой грудных мышц, этот чемпион Мистер Олимпия был одним из ближайших друзей и напарников Арнольда по тренировкам, а также одним из величайших стартов во времена бума бодибилдинга 1970-х годов.";
const infoZane =
  "Три победы Фрэнка Зейна на Mr. Olympia (1977, 1978 и 1979) сделали его одним из легенд этого вида спорта. У него также было одно из самых завидных телосложений всех времен. Как писали о нем обозреватели: «Его чистые линии, эффективный размер и почти идеальная симметрия были вершиной физической красоты — по крайней мере, ее мужской формы».";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="d-flex gap-5 flex-wrap">
        <Card
          image="https://www.mentoday.ru/upload/img_cache/843/8434847786373822fdd5aeab37ad8f30_cropped_666x375.webp"
          ad={"Larry Scott"}
          boy={"170"}
          ceki={"94"}
          biceps_hecmi={"50"}
          text={infoLarry}
        />

        <Card
          image="https://www.mentoday.ru/upload/img_cache/5a9/5a942776c4098ec95bf8b43b3c10b0d3_cropped_666x375.webp"
          ad={"Sergio Oliva"}
          boy={"178"}
          ceki={"102"}
          biceps_hecmi={"54"}
          text={infoOliva}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/723/723c59983134f7b8af0f62b12a5749b3_cropped_666x375.webp"
          ad={"Arnold Schwarzenegger"}
          boy={"188"}
          ceki={"10"}
          biceps_hecmi={"56"}
          text={infoArnold}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/621/62150a5234895e670665002f0d24b65f_cropped_666x375.webp"
          ad={"Franco Columbu"}
          boy={"166"}
          ceki={"84"}
          biceps_hecmi={"47"}
          text={infoColumbu}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/95c/95c94b266e13b5671dc2f30492040cab_cropped_666x375.webp"
          ad={"Frank Zane"}
          boy={"176"}
          ceki={"84"}
          biceps_hecmi={"46"}
          text={infoZane}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/5cc/5cce2bf8d5475e0a6c722524fd74837c_cropped_666x444.webp"
          ad={"Chris Dickerson"}
          boy={"168"}
          ceki={"86"}
          biceps_hecmi={"47"}
          text
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/dec/dec7acca915ac6b8cb955017ffccb584_cropped_666x375.webp"
          ad={"Samir Bannout"}
          boy={"173"}
          ceki={"90"}
          biceps_hecmi={"52"}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/95d/95d6bc0a37bcb14ac1592c6d0ffea1ed_cropped_666x375.webp"
          ad={"Lee Haney"}
          boy={"180"}
          ceki={"112"}
          biceps_hecmi={"54"}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/96f/96f62a878135e9cc01dc92f24a203d53_cropped_666x368.webp"
          ad={"Dorian Yates"}
          boy={"178"}
          ceki={"120"}
          biceps_hecmi={"54"}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/c05/c059bdfec87ec7b99aa2925153b5ad3c_cropped_666x375.webp"
          ad={"Ronnie Coleman"}
          boy={"180"}
          ceki={"138"}
          biceps_hecmi={"61"}
        />
        <Card
          image
          ad={"Jay Cutler"}
          boy={"170"}
          ceki={"104"}
          biceps_hecmi={"50"}
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEMaM4ZtToNLaJLsrQ5ZcHVnToFt898W9vQ&usqp=CAU"
          ad={"Dexter Jackson"}
          boy={"170"}
          ceki={"94"}
          biceps_hecmi={"50"}
        />
        <Card
          image="https://www.mentoday.ru/upload/img_cache/9c0/9c010728991c9cb113f18e76ecc4d7a4_cropped_666x375.webp"
          ad={"Phil Heath"}
          boy={"175"}
          ceki={"114"}
          biceps_hecmi={"60"}
        />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
