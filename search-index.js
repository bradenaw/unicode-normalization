var searchIndex = {};
searchIndex["unicode_normalization"] = {"doc":"Unicode character composition and decomposition utilities as described in Unicode Standard Annex #15.","items":[[3,"Decompositions","unicode_normalization","External iterator for a string decomposition's characters.",null,null],[3,"Recompositions","","External iterator for a string recomposition's characters.",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"decompositions"}}],[11,"next","","",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"recompositions"}}],[11,"next","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"char","","Methods for composing and decomposing characters.",null,null],[5,"decompose_canonical","unicode_normalization::char","Compute canonical Unicode decomposition for character. See Unicode Standard Annex #15 for more information.",null,{"inputs":[{"name":"char"},{"name":"f"}],"output":null}],[5,"decompose_compatible","","Compute canonical or compatible Unicode decomposition for character. See Unicode Standard Annex #15 for more information.",null,{"inputs":[{"name":"char"},{"name":"f"}],"output":null}],[5,"compose","","Compose two characters into a single character, if possible. See Unicode Standard Annex #15 for more information.",null,{"inputs":[{"name":"char"},{"name":"char"}],"output":{"name":"option"}}],[5,"canonical_combining_class","","",null,{"inputs":[{"name":"char"}],"output":{"name":"u8"}}],[5,"is_combining_mark","","Return whether the given character is a combining mark (`General_Category=Mark`)",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[17,"UNICODE_VERSION","unicode_normalization","The version of Unicode that this version of unicode-normalization is based on.",null,null],[8,"UnicodeNormalization","","Methods for iterating over strings while applying Unicode normalizations as described in Unicode Standard Annex #15.",null,null],[10,"nfd","","Returns an iterator over the string in Unicode Normalization Form D (canonical decomposition).",2,{"inputs":[{"name":"self"}],"output":{"name":"decompositions"}}],[10,"nfkd","","Returns an iterator over the string in Unicode Normalization Form KD (compatibility decomposition).",2,{"inputs":[{"name":"self"}],"output":{"name":"decompositions"}}],[10,"nfc","","An Iterator over the string in Unicode Normalization Form C (canonical decomposition followed by canonical composition).",2,{"inputs":[{"name":"self"}],"output":{"name":"recompositions"}}],[10,"nfkc","","An Iterator over the string in Unicode Normalization Form KC (compatibility decomposition followed by canonical composition).",2,{"inputs":[{"name":"self"}],"output":{"name":"recompositions"}}]],"paths":[[3,"Decompositions"],[3,"Recompositions"],[8,"UnicodeNormalization"]]};
initSearch(searchIndex);
