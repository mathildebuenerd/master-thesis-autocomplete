function RawBlock(elem)

  --[[ Go to the next page when it sees the \newpage command ]]--
  if elem.text == "\\newpage" then
    return pandoc.RawBlock("icml", "<ParagraphStyleRange AppliedParagraphStyle='ParagraphStyle/Paragraph'><CharacterStyleRange AppliedCharacterStyle='CharacterStyle/Default' ParagraphBreakType='NextPage'><Br /></CharacterStyleRange></ParagraphStyleRange>")
  end

  --[[ Go to the next right page (odd page) when it sees the \cleardoublepage command ]]--
  if elem.text == "\\cleardoublepage" then
    return pandoc.RawBlock("icml", "<ParagraphStyleRange AppliedParagraphStyle='ParagraphStyle/Paragraph'><CharacterStyleRange AppliedCharacterStyle='CharacterStyle/Default' ParagraphBreakType='NextOddPage'><Br /></CharacterStyleRange></ParagraphStyleRange>")
   end

end