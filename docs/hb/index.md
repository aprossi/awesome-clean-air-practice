---
layout: default
title: Saubere Luft fuer SKB Bildungsoffensive
permalink: /hb/
---

<a id="top"></a>
# Saubere Luft fuer SKB Bildungsoffensive

<div class="lead-note mb-4">
  Living document submitted to local authorities. Propose improvements and signatures through pull requests.
</div>

- Official context: [Offensive fuer mehr Bildungsqualitaet (SKB Bremen)](https://www.bildung.bremen.de/offensive-fur-mehr-bildungsqualitat-483718)
- Markdown source for this page: [`docs/hb/positionspapier.md`](https://github.com/aprossi/awesome-clean-air-practice/blob/main/docs/hb/positionspapier.md)
- Signatures file: [`docs/hb/signatures.md`](https://github.com/aprossi/awesome-clean-air-practice/blob/main/docs/hb/signatures.md)
- Quick link: [Jump to signatures](#signatures)
- License: [CC0-1.0 (Public Domain)](https://github.com/aprossi/awesome-clean-air-practice/blob/main/LICENSE)

---

{% capture hb_body %}
{% include_relative positionspapier.md %}
{% endcapture %}

{{ hb_body | markdownify }}

---

{% capture hb_signatures %}
{% include_relative signatures.md %}
{% endcapture %}
<div id="signatures" class="signatures-block">
{{ hb_signatures | markdownify }}
<p class="small"><a href="#top">Back to top</a></p>
</div>
