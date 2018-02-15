# Converser à l'ère de l'autocomplétion / Master thesis

## What is this ?

This is a master thesis written with Markdown. The purpose of this was to create a workflow that allows me to easily add meaning to the content thanks to the markdown syntax, while save time for doing the layout. The features are extended thanks to atom packages (links below) : dynamic footnotes and zotero citations.

Thanks to pandoc, the markdown file can be converted to many formats, including pdf, html and icml (for indesign).

When you import the icml file in indesign, the text can be very easily styled, because every markdown component is associated with a paragraph style (headers, lists, blockquotes, footnotes...), and the emphasis are associated with character styles. The footnotes remain dynamic, they are inserted at the bottom of the text block.

## Softwares & plugins needed

### For writing

+ [atom](https://atom.io/)
+ atom packages : [Markdown Preview Plus](https://atom.io/packages/markdown-preview-plus), [Markdown footnotes](https://atom.io/packages/markdown-footnote), [Zotero Markdown citations](https://atom.io/packages/zotero-citations), [Zotero picker](https://atom.io/packages/zotero-picker).
+ [Zotero](https://www.zotero.org/)

### For converting

+ [Pandoc](https://pandoc.org/)
+ [XeLaTeX](https://doc.ubuntu-fr.org/xelatex)

## How to write ?

+ You can use all the markdown syntaxes supported by Pandoc. [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
+ You can also add some latex commands such as `\newpage`.

## Convert to pdf (xelatex) with Pandoc

#### Command 
`pandoc thesis.md --pdf-engine=xelatex --variable urlcolor=blue --bibliography citations-thesis.bib -o thesis.pdf`

<!-- + Avec un header LaTeX
`pandoc -N --template=template.tex thesis.md --pdf-engine=xelatex --variable urlcolor=blue --bibliography citations-thesis.bib -o 14.02.12.22.pdf` -->

#### Details
+ `thesis.md` is the input file.
+ `thesis.pdf` is the output file.
+ `citations-thesis.bib` is the bib file created with [Zotero](https://www.zotero.org/). Zotero needs to be open at the time of converting. The bibliography is parsed at the end of the file.
+ `--pdf-engine` can also be `wkhtml`, but [wkhtml](https://wkhtmltopdf.org/) needs to be installed on the computer first.
+ `--variable urlcolor=blue` for coloring the hyperlinks un blue

## Convert to html

#### Command 
`pandoc -s thesis.md --bibliography citations-thesis.bib --toc -o html/thesis.html`

#### Details
+ '-s' is for 'standalone', it's used to produce a valid HTML file with a doctype, head, body etc.
+ '--toc' is for 'table of content'

## Convert to icml (for indesign)

### Convert it

#### Command 
`pandoc --lua-filter=page-break-for-indesign.lua -s -f markdown -t icml --bibliography citations-thesis.bib -o thesis.icml thesis.md`

#### Details
+ `--lua-filter=page-break-for-indesign.lua` is a filter intended to transform 
    + `\newpage` put the following content at the next page. [More infos here](https://groups.google.com/forum/#!topic/pandoc-discuss/ogofOXIDJuI).
    + `\cleardoublepage` put the following content at the next right (odd) page.
+ `--bibliography citations-thesis.bib` is for creating the bibliography automatically. If you don't use a bibtex file, just remove it.

### Import it in indesign

File > Place (Fichier > Importer), then `maj` + click at the top left of the first _page_ (not gabarit). The page have to be empty, the block will be created automatically.

### Ressources

+ [How to simply convert to icml](http://publicationstation.wdka.hro.nl/wiki/index.php/Research/Web-to-print/ICML)
+ Pandoc documentation on [lua filters](https://pandoc.org/lua-filters.html)
+ [InDesign CS5 IDML Language Specification](http://manualzz.com/doc/11572109/adobe-indesign-cs5-idml-language-specification)
