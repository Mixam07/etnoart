import React from "react";
import Souvenir from "../../components/Souvenirs/Souvenir";
import "./index.css";

function importAll(r) {
  return r.keys().map(r);
}

function SouvenirPage() {
  const photos = importAll(
    require.context("../../assets/photos-souvenir", false, /\.(png|jpe?g|svg)$/)
  );

  const infos = [
    {
      title: "Kostumi i Devollit",
      description: "Kostumi i Devollit i sjelle me elementet e tij ne miniature, per suvenire te ndryshme",
      category: "Kategoria veshje popullore korçare",
    },
    {
      title: "Title B",
      description: "Desc B",
      category: "Category B",
    },
    {
      title: "Title C",
      description: "Desc C",
      category: "Category C",
    },
    {
      title: "Title D",
      description: "Desc D",
      category: "Category D",
    },
  ];

  const getSouvenirs = (photos, infos) => {
    const souvenirs = [];
    let i = 0;
    while (i <= 3) {
      let souvenirsPhotos = photos.slice(i, i + 4);
      let info = {};
      if (i % 4 === 0) {
        let index = i / 4;
        info = { ...infos[index] };
      }
      souvenirs.push({
        id: Math.random() * Math.random(),
        photos: [...souvenirsPhotos],
        title: info.title,
        description: info.description,
        category: info.category,
      });
      i += 4;
    }
    return souvenirs;
  };

  const souvenirs = getSouvenirs(photos, infos);
  return (
    <div className="souvenirs">
      {souvenirs.map((souvenir) => (
        <Souvenir souvenirs={souvenir} key={souvenir.id} id={souvenir.id} />
      ))}
    </div>
  );
}

export default SouvenirPage;
