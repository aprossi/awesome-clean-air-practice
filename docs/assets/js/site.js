// Build TOC from already-rendered headings so anchors always match.
(function () {
  function buildToc() {
    var toc = document.getElementById("doc-toc");
    if (!toc) return;

    var article = document.querySelector("article.paper");
    if (!article) {
      toc.innerHTML = "<p class=\"small\">TOC unavailable.</p>";
      return;
    }

    var headings = article.querySelectorAll("h2, h3");
    var list = document.createElement("ul");
    var count = 0;

    headings.forEach(function (h) {
      if (h.closest(".signatures-block")) return;
      if (h.closest("#doc-toc")) return;
      var title = (h.textContent || "").trim();
      if (!title || title.toLowerCase() === "table of contents") return;
      if (!h.id) return;

      var li = document.createElement("li");
      if (h.tagName.toLowerCase() === "h3") li.className = "toc-h3";

      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = title;
      li.appendChild(a);
      list.appendChild(li);
      count += 1;
    });

    if (!count) {
      toc.innerHTML = "<p class=\"small\">No sections found.</p>";
      return;
    }

    toc.innerHTML = "";
    toc.appendChild(list);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildToc);
  } else {
    buildToc();
  }
})();
