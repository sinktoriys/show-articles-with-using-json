class Article {
  constructor(title, src, description, name) {
    this.title = title;
    this.src = src;
    this.description = description;
    this.name = name;
    this.parent = document.querySelector(".articles");
  }

  render() {
    let article = document.createElement("article");
    article.classList.add("col-6");
    article.innerHTML = `
    <div class="article">
      <h2 class="article-title">${this.title}</h2>
      <img src=${this.src} alt="" />
      <p class="article-description">
      ${this.description}
      </p>
      <div class="article-author">Author: ${this.name}</div>
    </div>  

    `;

    this.parent.append(article);
  }
}

// new Article(
//   "News1",
//   "news.png",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur eveniet illo repellendus a perferendis soluta consectetur odit expedita dignissimos non cumque, voluptatum rerum eaque rem magni, molestias repudiandae eligendi explicabo? ",
//   "Matt Test"
// ).render();
// new Article(
//   "News2",
//   "news.png",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur eveniet illo repellendus a perferendis soluta consectetur odit expedita dignissimos non cumque, voluptatum rerum eaque rem magni, molestias repudiandae eligendi explicabo? ",
//   "Bla Bla"
// ).render();
// new Article(
//   "News3",
//   "news.png",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur eveniet illo repellendus a perferendis soluta consectetur odit expedita dignissimos non cumque, voluptatum rerum eaque rem magni, molestias repudiandae eligendi explicabo? ",
//   "Matt User"
// ).render();

fetch("db.json")
  .then((res) => res.json())
  .then((data) =>
    data.map((item) =>
      new Article(item.title, item.src, item.description, item.name).render()
    )
  );
