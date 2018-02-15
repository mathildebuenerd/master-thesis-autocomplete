function RawBlock(elem)
  if elem.text == "\\newpage" then
    return pandoc.RawBlock("icml", "<ParagraphStyleRange AppliedParagraphStyle='ParagraphStyle/Paragraph'><CharacterStyleRange AppliedCharacterStyle='CharacterStyle/Default' ParagraphBreakType='NextPage'><Br /></CharacterStyleRange></ParagraphStyleRange>")
  end
end