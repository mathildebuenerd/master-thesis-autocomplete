# Converser à l'ère de l'autocomplétion / Master thesis

## What is this ?

This is a master thesis written with Markdown. The purpose of this was to create a workflow that allows me to easily add meaning to the content thanks to the markdown syntax, while save time for doing the layout. The features are extended thanks to atom packages (links below) : dynamic footnotes and zotero citations.

Thanks to pandoc, the markdown file can be converted to many formats, including pdf, html and icml (for indesign).

When you import the icml file in indesign, the text can be very easily styled, because every markdown component is associated with a paragraph style (headers, lists, blockquotes, footnotes...), and the emphasis are associated with character styles. The footnotes remain dynamic, they are inserted at the bottom of the text block.

## How to write ?

+ You can use all the markdown syntaxes supported by Pandoc. [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
+ You can also add some latex commands such as `\newpage`

## Convert to pdf (xelatex) with Pandoc

`pandoc thesis.md --pdf-engine=xelatex --bibliography citations-thesis.bib -o thesis.pdf`

+ `thesis.md` is the input file.
+ `thesis.pdf` is the output file.
+ `citations-thesis.bib` is the bib file created with [Zotero](https://www.zotero.org/). Zotero needs to be open at the time of converting. The bibliography is parsed at the end of the file.
+ `--pdf-engine` can also be `wkhtml`, but [wkhtml](https://wkhtmltopdf.org/) needs to be installed on the computer first.

## Convert to html

## Convert to icml (for indesign)

## Software & plugins needed

### For writing

+ [atom](https://atom.io/)
+ atom packages : [Markdown Preview Plus](https://atom.io/packages/markdown-preview-plus), [Markdown footnotes](https://atom.io/packages/markdown-footnote), [Zotero Markdown citations](https://atom.io/packages/zotero-citations), [Zotero picker](https://atom.io/packages/zotero-picker).
+ Zotero

### For converting

+ [Pandoc](https://pandoc.org/)
+ [XeLaTeX](https://doc.ubuntu-fr.org/xelatex)
