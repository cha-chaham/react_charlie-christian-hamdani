import React from "react";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

//default text english jika tidak ada props yang dikirimkan
function ArticleTitle(props) {
  const { language } = props;

  const titleText = article.title[language] || article.title.en;
  return (
    <h2 className="font-bold text-xl mb-1 md:text-2xl md:mb-2 lg:text-3xl lg:mb-1">
      {titleText}
    </h2>
  );
}

//default text english jika tidak ada props yang dikirimkan
function ArticleDescription(props) {
  const { language } = props;

  const descriptionText =
    article.description[language] || article.description.en;
  return <p className="text-sm mb-2 lg:text-xl">{descriptionText}</p>;
}
export { ArticleTitle, ArticleDescription };
