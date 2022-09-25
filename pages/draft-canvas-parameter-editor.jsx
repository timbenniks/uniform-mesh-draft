import React from "react";
import { useUniformMeshLocation } from "@uniformdev/mesh-sdk-react";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";

import {
  DraftailEditor,
  BLOCK_TYPE,
  INLINE_STYLE,
  ENTITY_TYPE,
} from "draftail";

export default function DraftParameterEditor() {
  const { value, setValue } = useUniformMeshLocation();

  const initial = value;

  const onSave = (content) => {
    setValue(draftToHtml(convertToRaw(content)));
  };

  return (
    <div>
      <DraftailEditor
        rawContentState={initial || null}
        onSave={onSave}
        blockTypes={[
          { type: BLOCK_TYPE.PARAGRAPH },
          { type: BLOCK_TYPE.HEADER_ONE },
          { type: BLOCK_TYPE.HEADER_TWO },
          { type: BLOCK_TYPE.HEADER_THREE },
          { type: BLOCK_TYPE.CODE },
          { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        ]}
        inlineStyles={[
          { type: INLINE_STYLE.BOLD },
          { type: INLINE_STYLE.ITALIC },
          { type: INLINE_STYLE.CODE },
        ]}
        entityTypes={[
          {
            type: ENTITY_TYPE.LINK,
          },
        ]}
      />
    </div>
  );
}
