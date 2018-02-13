# Converser à l'ère de l'autocomplétion / Master thesis

## Convert to pdf (xelatex) with Pandoc

`pandoc thesis.md --pdf-engine=xelatex --bibliography citations-thesis.bib -o thesis.pdf`

+ `thesis.md` is the input file.
+ `thesis.pdf` is the output file.
+ `citations-thesis.bib` is the bib file created with [Zotero](https://www.zotero.org/). Zotero needs to be open at the time of converting. The bibliography is parsed at the end of the file.
+ `--pdf-engine` can also be `wkhtml`, but [wkhtml](https://wkhtmltopdf.org/) needs to be installed on the computer first.

## Software & plugins needed

### For writing

+ [atom](https://atom.io/)
+ atom packages : [Markdown Preview Plus](https://atom.io/packages/markdown-preview-plus), [Markdown footnotes](https://atom.io/packages/markdown-footnote), [Zotero Markdown citations](https://atom.io/packages/zotero-citations), [Zotero picker](https://atom.io/packages/zotero-picker).

### For converting

+ [Pandoc](https://pandoc.org/)
+ [XeLaTeX](https://doc.ubuntu-fr.org/xelatex)
