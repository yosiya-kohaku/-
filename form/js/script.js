{
  const contents = document.getElementsByClassName("content");
  const content = document.querySelectorAll(".content");
  const text = document.getElementById("change-text").textContent;

  contents[0].addEventListener("click", () => {
    content[0].classList.add("is-click");
    content[1].classList.remove("is-click");
    content[2].classList.remove("is-click");
    content[3].classList.remove("is-click");
    document.getElementById("change-text").textContent =
      "会社情報/取材に関するお問い合わせ";
  });

  contents[1].addEventListener("click", () => {
    content[1].classList.add("is-click");
    content[0].classList.remove("is-click");
    content[2].classList.remove("is-click");
    content[3].classList.remove("is-click");
    document.getElementById("change-text").textContent =
      "採用に関するお問い合わせ";
  });

  contents[2].addEventListener("click", () => {
    content[2].classList.add("is-click");
    content[0].classList.remove("is-click");
    content[1].classList.remove("is-click");
    content[3].classList.remove("is-click");
    document.getElementById("change-text").textContent = "業務提携に関する";
  });

  contents[3].addEventListener("click", () => {
    content[3].classList.add("is-click");
    content[0].classList.remove("is-click");
    content[1].classList.remove("is-click");
    content[2].classList.remove("is-click");
    document.getElementById("change-text").textContent = "営業の方はこちら";
  });

  // contents[4].addEventListener("click", () => {
  //   content[4].classList.add("is-click");
  //   content[0].classList.remove("is-click");
  //   content[1].classList.remove("is-click");
  //   content[2].classList.remove("is-click");
  //   content[3].classList.remove("is-click");
  //   content[5].classList.remove("is-click");
  //   content[6].classList.remove("is-click");
  //   content[7].classList.remove("is-click");
  //   content[8].classList.remove("is-click");
  //   document.getElementById("change-text").textContent =
  //     "イベント/ウェディング";
  // });

  // contents[5].addEventListener("click", () => {
  //   content[5].classList.add("is-click");
  //   content[0].classList.remove("is-click");
  //   content[1].classList.remove("is-click");
  //   content[2].classList.remove("is-click");
  //   content[3].classList.remove("is-click");
  //   content[4].classList.remove("is-click");
  //   content[6].classList.remove("is-click");
  //   content[7].classList.remove("is-click");
  //   content[8].classList.remove("is-click");
  //   document.getElementById("change-text").textContent =
  //     "ポップアップ/プロモーション";
  // });

  // contents[6].addEventListener("click", () => {
  //   content[6].classList.add("is-click");
  //   content[0].classList.remove("is-click");
  //   content[1].classList.remove("is-click");
  //   content[2].classList.remove("is-click");
  //   content[3].classList.remove("is-click");
  //   content[4].classList.remove("is-click");
  //   content[5].classList.remove("is-click");
  //   content[7].classList.remove("is-click");
  //   content[8].classList.remove("is-click");
  //   document.getElementById("change-text").textContent = "講演依頼";
  // });

  // contents[7].addEventListener("click", () => {
  //   content[7].classList.add("is-click");
  //   content[0].classList.remove("is-click");
  //   content[1].classList.remove("is-click");
  //   content[2].classList.remove("is-click");
  //   content[3].classList.remove("is-click");
  //   content[4].classList.remove("is-click");
  //   content[5].classList.remove("is-click");
  //   content[6].classList.remove("is-click");
  //   content[8].classList.remove("is-click");
  //   document.getElementById("change-text").textContent = "DJ";
  // });

  // contents[8].addEventListener("click", () => {
  //   content[8].classList.add("is-click");
  //   content[0].classList.remove("is-click");
  //   content[1].classList.remove("is-click");
  //   content[2].classList.remove("is-click");
  //   content[3].classList.remove("is-click");
  //   content[4].classList.remove("is-click");
  //   content[5].classList.remove("is-click");
  //   content[6].classList.remove("is-click");
  //   content[7].classList.remove("is-click");
  //   document.getElementById("change-text").textContent = "その他";
  // });
}
