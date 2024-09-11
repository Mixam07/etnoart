import React from "react";
import FolkDress from "../../components/FolkDresses/FolkDress";
import "./index.css";

function importAll(r) {
  return r.keys().map(r);
}

function FolkDressPage() {
  const photos = importAll(
    require.context("../../assets/photos", false, /\.(png|jpe?g|svg)$/)
  );

  const infos = [
    {
      title: "Kostumi i Dardhës",
      description: "Simboli i Korces, shumevjecar, per grate",
      category: "Kategoria veshje popullore korçare",
    },
    {
      title: "Kostumi i Devollit",
      description: "Simboli i Korces, per burra, me te gjitha elementet e tij",
      category: "Kategoria veshje popullore korçare",
    },
    {
      title: "Kostumi i Devollit",
      description: "Simboli i Korces, per burra, jeleku me krahe ne variantin me ngjyren e kuqe",
      category: "Kategoria veshje popullore korçare",
    },
    {
      title: "Kostumi qytetar korçar",
      description: "Kostumi qytetar Korcar qe e vishnin zonjat, vajzat dhe nuset ne rast sebepesh te ndryshme, i sjelle ne vertetesi me elementet qe ka pasur",
      category: "Kategoria veshje popullore korçare",
    },
  ];

  const getDresses = (photos, infos) => {
    const folkDresses = [];
    let i = 0;
    while (i <= 15) {
      let dressPhotos = photos.slice(i, i + 4);
      let info = {};
      if (i % 4 === 0) {
        let index = i / 4;
        info = { ...infos[index] };
      }
      folkDresses.push({
        id: Math.random() * Math.random(),
        photos: [...dressPhotos],
        title: info.title,
        description: info.description,
        category: info.category,
      });
      i += 4;
    }
    return folkDresses;
  };

  const folkDresses = getDresses(photos, infos);
 
  return (
    <div className="folk-dresses">
      {folkDresses.map((folkDress) => (
        <FolkDress dresses={folkDress} key={folkDress.id} id={folkDress.id} />
      ))}
    </div>
  );
}

export default FolkDressPage;
